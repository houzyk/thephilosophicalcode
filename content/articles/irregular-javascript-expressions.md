---
external: false
title: "(Ir)regular JavaScript Expressions"
description: "The MDN reference on JavaScript regular expressions notes that \"JavaScript regular expressions are in fact not regular [...]\". This highlights a subtle tension between theoretical regular expressions and their implementation in JavaScript. In this article, we examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart."
author: "Muhammad Houzair Koussa"
authorUrl: "https://houzair.me/"
ogImagePath: "/images/irregular-javascript-expressions/cover.webp"
date: 2026-06-07
---

![(Ir)regular JavaScript Expressions](/images/irregular-javascript-expressions/cover.webp)

> [The MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions "The MDN reference") on JavaScript regular expressions notes that "JavaScript regular expressions are in fact not regular [...]". This highlights a subtle tension between theoretical regular expressions and their implementation in JavaScript. In this article, we examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart.

## Abstract

For context, here's the full note from MDN [1]:

> JavaScript regular expressions are in fact not regular, due to the existence of [backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference "backreferences") (regular expressions must have finite states). However, they are still a very useful feature.

By drawing on ideas from this note, this article is organised into three sections.

In section 1, we dive into some code to demonstrate the usefulness of backreferences. We then conceptually analyse the way they work to abduce that they rely on memory. So, we can abduce that JavaScript regular expressions rely on memory.

In section 2, we explore the theory behind regular expressions to understand why they must have finite states. In particular, we show how theoretical regular expressions act as syntactic sugar for a class of languages called regular languages. We then discuss how these languages are recognised by and are intrinsically tied to a class of *finite state* machines without memory [2] called deterministic finite automata (DFA).

In section 3, we take a look at Chomsky's hierarchy. This hints at how different classes of languages are recognised by different classes of machines. This gives us a way to cash out the tension (between theoretical and JavaScript regular expressions) by talking about the different levels in the hierarchy.

Essentially, we cash out the tension as an issue of *language recognition*. To understand why JavaScript regular expressions are not regular *is* to understand how they recognise a larger (hence different) class of languages than theoretical regular expressions. As previously mentioned, DFAs are finite state machines without memory that are intrinsically tied to regular languages. In contrast, JavaScript regular expressions rely on memory. So, owing to their reliance on memory, they recognise a different class of languages than DFAs. Hence, they are not regular.

## 1. Backreferences

Backreferences allow us to refer to submatches of previously defined [capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group "capturing groups") in any JavaScript regular expression. A backreference matches the same string as its group. It refers to the same submatch.

Syntactically, a capturing group looks like `(pattern)` in some parent regular expression `/...(pattern).../`. Suppose that a string M matches `/...(pattern).../`. In such a case, the capturing group `(pattern)` segments (i.e. captures) a substring (of M) that matches its defined pattern. That substring is called the capturing group's submatch. 

A JavaScript regular expression may contain multiple capturing groups. In such a case, these capturing groups are in a one-to-one _ordered_ relation to their submatches. As illustrated below, if some string of the form `...[1]...[2]...[3]...` matches a regular expression of the form `/...(c1)...(c2)...(c3).../`, then the capturing groups `(c1)`, `(c2)` and `(c3)` are in a one-to-one ordered relation to the submatches `[1]`, `[2]` and `[3]` respectively.

![Capturing groups in JS](/images/irregular-javascript-expressions/capturing_groups_in_js.webp)

In JavaScript, we can run the `RegExp.prototype.exec()` function to see this one-to-one ordered relation. For example, given `/(a)(b)/` and a matching string `'ab'`, running `/(a)(b)/.exec('ab')` returns the array `[ 'ab', 'a', 'b', index: 0, input: 'ab', groups: undefined ]`. The element `'a'` (at index `1`) is the submatch of the first capturing group `(a)`. Similarly, the element `'b'` (at index `2`) is the submatch of the second group `(b)`.

With backreferences, we can easily refer to these submatches. Syntactically, a backreference has the format `\N` where `N` is a positive whole number referring to some previously occurring capturing group. Since capturing groups are in a one-to-one ordered relation to their submatches, `N` points to the submatch at position `N` in the order [3].

We can add backreferences to the aforementioned regular expression `/(a)(b)/`. For example, `/(a)(b)\2\1\2/`. To clarify, the backreference `\1` refers to the submatch of the capturing group `(a)`. Similarly, the two backreferences `\2` both refer to the submatch of the capturing group `(b)`. 

For example, the string `'abbab'` matches the regular expression `/(a)(b)\2\1\2/`. The submatch of `(a)` is `'a'` and the submatch of `(b)` is `'b'`. `\1` refers to `'a'` and `\2` refers to `'b'`. Intuitively, in this case, `/(a)(b)\2\1\2/` is equivalent to `/(a)(b)bab/`.

To demonstrate the usefulness of backreferences, consider the following function `parseHtmlTags`. It's a simple HTML tag parser. It returns all matching open/close tags of the form `<xyz>...</xyz>` after parsing some arbitrary string.

```js
function parseHtmlTags(input) {
  // Capturing group (\w+) captures the tag name
  // \1 is a backreference that must match the same text as group 1
  const regex = /<(\w+)>(.*?)<\/\1>/g;
  const matches = [];
  let match;
  while ((match = regex.exec(input)) !== null) {
    matches.push(match[0]);
  }
  return matches;
}

// Examples
parseHtmlTags('<p>Hello world</p>');
// returns [ '<p>Hello world</p>' ]

parseHtmlTags('<div>content</div> and <span>text</span>');
// returns [ '<div>content</div>', '<span>text</span>' ]

parseHtmlTags('<p>mismatched</div>');
// returns []
```

The backreference in `parseHtmlTags` is especially useful in making HTML tag parsing quite dynamic. Intuitively, we don't need to specify a whole list of potential HTML tags alternating with one another (like `(<p>(.*?)<\/p>)` or `(<div>(.*?)<\/div>)` or `(<a>(.*?)<\/a>)`). Once we have an HTML tag name as a submatch of the capturing group in `<(\w+)>`, we can dynamically refer to it using the backreference in `<\/\1>`.

### 1.1 Conceptual Analysis

Conceptually, for a backreference to refer to a capturing group's submatch, we have to store the value of that submatch in memory to later reference it. In the aforementioned HTML tag parser example, if the capturing group's submatch is `'p'` (from the tag `<p>`), we need to store the value `'p'`, so that the backreference `\1` may refer to it. So, backreferences rely on memory. It follows that JavaScript regular expressions rely on memory.

## 2. The Theory Behind Regular Expressions

### 2.1 Regular Expressions As Syntactic Sugar

To see how theoretical regular expressions act as syntactic sugar, let's consider two observations about them.

#### 2.1.1 Observation 1

Regular expressions are governed by strict syntax rules over a finite alphabet (a set of characters). These rules dictate whether a string is a valid regular expression or not. For example, the string `/a{1/u` is an invalid regular expression because it's missing the `}`, whereas `/a{1}/u` is valid. It's standard to recursively define the rules as follows.

Given some finite alphabet (like the set of Unicode characters),

1. The empty set is a regular expression [4].
2. The empty string `''` is a regular expression.
3. Any character from the alphabet is a regular expression.
4. For any two regular expressions `R` and `S`,
    1. The concatenation `RS` is a regular expression.
    2. The alternation `R|S` (the set union of all the strings in `R` and `S`) is a regular expression.
    3. The Kleene star `R*` (the set of all strings generated by concatenating any finite non-negative number of strings from `R`) is a regular expression.
    4. The grouping `(R)` is a regular expression. It denotes the same set of strings as `R`.
5. Nothing else is a regular expression.


For example, we can easily construct a familiar regular expression like `ab|a` using these rules. Starting with `a` and `b` as characters (rule 3), we concatenate them to get `ab` (rule 4.1), then take the alternation with `a` to arrive at `ab|a` (rule 4.2).

As a side note, one may feel that these rules are incomplete because regular expressions from popular programming languages support additional operators beyond those shown in the rules (like `+` or `?`). However, this feeling can be safely dismissed since these additional regular operators can be defined by the operators from the rules. For example, we can define the `R+` operator as `RR*`. To further clarify, here's a table of common operators and their rule-based definitions:

| Operator | Description | Rule-based Definition | Example |
|---|---|---|---|
| `R+` | One or more | `RR*` | `a+` = `aa*` |
| `R?` | Optional | `R\|''` | `a?` = `a\|''` |
| `R{n}` | Exactly n | `RR...R` (n concatenations) | `a{3}` = `aaa` |
| `R{n,m}` | Between n and m | `R{n}` concat `R?` repeated (m−n) times | `a{2,4}` = `aa(a\|'')(a\|'')` |
| `[abc]` | Character class | `a\|b\|c` | `[aeiou]` = `a\|e\|i\|o\|u` |
| `[^abc]` | Negated class | Alternation of all alphabet characters *not* listed | `[^ab]` = `c\|d\|...` |
| `.` | Any character | Alternation of all alphabet characters | `a.b` = `a(x\|y\|z\|...)b` |

#### 2.1.2 Observation 2

Some regular expressions can match more than one string (some even have infinitely many matches). Intuitively, we can form a set of all possible matches to a regular expression. In this sense, when we say that a string "matches" a regular expression, we're saying that this string is an element of that set. In other words, a regular expression is just a shorthand way of talking about that set.

So far, we've observed that theoretical regular expressions obey strict syntax rules over an alphabet, and that they serve as a shorthand way of talking about a set of strings. Formally, a set of strings over an alphabet is called a language. In effect, theoretical regular expressions act as syntactic sugar for a particular class of languages. Those are regular languages [5].


### 2.2 Regular Languages and DFAs

A classic example of a regular language is the set of all strings of even length over an alphabet like `{'a'}`. It contains strings like `'aa'`, `'aaaa'` or `''` (the empty string). Its corresponding regular expression is `(aa)*`.

There are many interesting formal properties that govern these languages (for example, the union of two regular languages is also a regular language). However, for our current purposes, one such interesting property is their intrinsic tie to the DFA class of finite state machines:

All regular languages are recognised by DFAs and DFAs only recognise regular languages [6].

A DFA is a theoretical machine that recognises a set of strings. This set is the language of that machine. In particular, for any string over an alphabet, the machine will either accept or reject it. The set of all strings that the machine accepts _is_ the language of that machine. 

Visually, a DFA is made up of a finite set of states with transitions among them. Some of these states are "accepting" and others are "rejecting". One of these states must be the start state. Any string over an alphabet is fed into the machine via that start state. As it's fed through, the machine transitions through its states by individually parsing the string's characters. Once all characters are parsed, the machine stops. It lands in either an accepting or rejecting state. If it's an accepting state, then the machine accepts the string. Otherwise, it rejects it [7]. So, the language of the DFA is the set of all strings that, after being parsed character-by-character, land in an accepting state. To further clarify, let's construct a DFA that recognises the aforementioned regular language expressed by the regular expression `(aa)*` [8].

![DFA for language over a of even length](/images/irregular-javascript-expressions/dfa_for_language_over_a_of_even_length.webp)

Let's walk through how the machine recognises our language by looking at two example strings: `'a'` and `'aa'`. Ideally, the machine should accept `'aa'` and reject `'a'`.

`'aa'` begins in the start state "even length". The machine parses the first `'a'` and transitions to the "odd length" state. It then parses the last `'a'` and lands back in the "even length" state. Since there are no more characters to parse, the machine stops. So, the machine lands in an accepting state and accepts the string `'aa'`. 

Given `'a'`, it begins in the start state and transitions into the "odd length" state once it parses the only character `'a'`. Since there are no characters left, the machine lands in a rejecting state and rejects `'a'`.

On a side note, different configurations of states and transitions yield different regular languages. It's possible that DFAs with seemingly different configurations accept the same set of strings. Intuitively, this is how seemingly different regular expressions act as syntactic sugar for the same regular language (like `(aa)*` and `(a{2})*`). 

Importantly, notice how a DFA does not have memory during computation. It simply transitions between states on each computational step. For example, once it parses a character, the machine "forgets" it. Similarly, it does not have any memory of any previously parsed characters or states traversed. At any computational step, it only "knows" the current character, the current state and its transitions. Hence, DFAs are finite state machines without memory.

So far, we've discussed how regular languages are recognised by and are intrinsically tied to DFAs. Since theoretical regular expressions act as syntactic sugar for regular languages, we've also illustrated an intrinsic tie between DFAs and theoretical regular expressions. A key insight from this tie is that if some concept/object is incompatible with a DFA, then it must be incompatible with regular languages and theoretical regular expressions. Since DFAs are machines without memory, theoretical regular expressions must also be devoid of memory.

## 3. Chomsky's Hierarchy

![Chomsky's Hierarchy](/images/irregular-javascript-expressions/chomsky_hierarchy.webp)

Chomsky's Hierarchy is a containment hierarchy of formal languages (or grammars). The higher up the hierarchy, the more complex the languages get. Traditionally, regular languages live at the very bottom with context-free languages just above. An interesting feature of the hierarchy is that each language needs a different type of machine to recognise it. For our current purposes, we will only be focusing on regular languages, context-free languages and their machines. As previously covered, regular languages are only recognised by DFAs. In contrast, context-free languages are only recognised by machines called pushdown automata (PDAs).

### 3.1 Context-free Languages and PDAs

A classic example of a context-free language is the set of all strings of the form `aⁿbⁿ` over an alphabet like `{'a', 'b'}`. This is the set of strings starting with some number of `a`'s strictly followed by the same number of `b`'s. It contains strings like `'ab'`, `'aabb'` or `''` (the empty string). As we just hinted, there is an intrinsic tie between regular languages and PDAs:

All context-free languages are recognised by PDAs and PDAs only recognise context-free languages.

Like a DFA, a PDA is a theoretical machine that recognises a set of strings. For any string over an alphabet, the machine will either accept or reject it. The set of all strings that the machine accepts is the language of that machine.

The key difference from a DFA is that a PDA is equipped with an unbounded stack. This stack is what gives PDAs their extra expressive power as illustrated by Chomsky's hierarchy. This acts as a memory that a DFA simply does not have. 

Visually, a PDA is made up of a finite set of states with transitions among them. However, unlike a DFA, each transition can also inspect and manipulate the stack: pushing symbols onto it, popping symbols off it, or both. One state is the start state, some states are accepting. A string is fed into the machine via the start state, and the machine transitions through its states by individually parsing the string's characters and managing its stack. Once all characters are parsed, the machine stops. If it lands in an accepting state (with some formulations also requiring an empty stack), the machine accepts the string. So, the language of the PDA is the set of all strings that, after being parsed character-by-character, lands in an accepting state [9]. To further clarify, let's construct a PDA that recognises the aforementioned context-free language aⁿbⁿ.

![PDA for aⁿbⁿ](/images/irregular-javascript-expressions/pda_for_anbn.webp)

Let's walk through how the machine recognises our language by looking at one example string `'ab'`. Ideally, the machine should accept `'ab'`.

`'ab'` begins in the start state. Firstly, the machine does not parse any character and pops nothing from the stack (equivalently, it parses the empty string `''` from the input string and pops the `''` from the stack). It also pushes an arbitrary string `'$'` that acts as a sentinel which signifies the end of the stack. It then transitions to the next state. In that state, the machine parses the first `'a'`, pops nothing from the stack and pushes an arbitrary string `'A'` into the stack. Basically, `'A'` signifies the amount of `'a'`'s that we have parsed in the string. As we will see shortly, in order to ensure that there is the same amount of `'b'`'s, we will have to pop . Since we pushed the same amount of `A`'s (whenever we saw an `'a'`) and we popped the same amount of `'A'`'s (whenever we saw a `'b'`), we know that the string contains the same amount of a and bs. Next, it parses the last `'b'`, pops `'A'` from the stack and pushes nothing onto it. Since we're not only left with the sentinel in the stack and we have nothing else to parse, we can take the transition to the last accepting state. Since there are no more possible transitions left, the machine stops. So, the machine lands in an accepting state and accepts the string `'ab'`. 

### 3.2 An Issue Of Language Recognition

Given the aforementioned context-free language, it's impossible to create a DFA for it.

One crucial difference between a DFA and a PDA is the addition of a form of memory. Essentially, DFAs do not have any external memory. They only have states. At any point in their computation, the DFA only knows about its current state, the character that it's reading and its transitions. It does not have memory of what it has seen before. Importantly, once we add memory (like an unbounded stack), we move up Chomsky's Hierarchy moving away from regular languages.

Hence, we can now to cash out the tension between JavaScript regular expressions and their theoretical counterpart. Since JavaScript regular expressions rely on memory, just like context-free languages, they correspond to languages in the hierarchy that move away from regular languages. In other words, JavaScript and theoretical regular expressions each act as syntatic sugar for different languages belonging in different levels in the hierarchy. In other words, they do not recognise the same languages. Hence, JavaScript regular expressions are not regular.

## PS

This article's main argument can be informally captured as follows.

1. Regular languages are **exactly and only** what DFAs recognise.
2. DFAs do not require memory.
3. So, regular languages do not require memory.

4. Theoretical regular expressions act as syntactic sugar for regular languages.
5. So, theoretical regular expressions do not require memory.

6. JavaScript backreferences require memory. 
7. So, JavaScript regular expressions require memory.

8. Hence, JavaScript regular expressions are not regular.

## Footnotes

1. Quoted from MDN at the time of writing.

2. We can argue that DFAs do have a form of memory - it's states and transitions. However, that memory is finite and bounded. DFAs cannot store arbitrary strings.

3. JavaScript also has [named backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference "named backreferences"). We can use custom names, instead of a positive whole number, to refer to the submatch of some previously defined [named capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group "named capturing groups").

4. Since DFAs only recognise regular languages and regular expressions act as syntactic sugar for regular languages, there must be a regular expression that corresponds to the DFA that does not accept any string. Intuitively, that's the empty set.

5. Here's a formal [proof](https://courses.grainger.illinois.edu/cs373/su2011/lectures/lecture10.pdf "proof") demonstrating that all theoretical regular expressions act as syntactic sugar for regular languages (URL valid at the time of writing).

6. DFAs, NFAs, regular languages, regular grammars and regular expressions are all intrinsically tied to each other.
![Relation between regular expressions, DFAs, NFAs, regular languages and regular grammar](/images/irregular-javascript-expressions/relation_between_regexp_dfa_nfa_reg_lang_reg_gram.webp)

7. Here's a [formal definition](https://www.khoury.northeastern.edu/home/vkp/390-fl07/FA-Formal-Definitions.pdf "formal definition") of a DFA (URL valid at the time of writing).

8. Visit [regexper.com](https://regexper.com/ "regexper.com") to visualise any JavaScript regular expression as a state machine.

9. Here's a [formal definition](https://www.khoury.northeastern.edu/home/vkp/390-fl07/Pushdown-Automata.pdf "formal definition") of a PDA (URL valid at the time of writing).

I was originally inspired to write this article after reading [Abdur-Rahmaan Janhangeer](https://www.compileralchemy.com/ "Abdur-Rahmaan Janhangeer")'s article - [Regex Engines: History and Contributions](https://www.linkedin.com/pulse/regex-engines-history-contributions-abdur-rahmaan-janhangeer "Regex Engines: History and Contributions").