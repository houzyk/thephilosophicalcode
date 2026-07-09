---
external: false
title: "(Ir)regular JavaScript Expressions"
description: "The MDN reference on JavaScript regular expressions notes that \"JavaScript regular expressions are in fact not regular [...]\". This highlights a subtle tension between theoretical regular expressions and their implementation in JavaScript. In this article, I cash-out and examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart."
author: "Muhammad Houzair Koussa"
authorUrl: "https://houzair.me/"
ogImagePath: "/images/irregular-javascript-expressions/cover.webp"
date: 2026-07-09
---

![(Ir)regular JavaScript Expressions](/images/irregular-javascript-expressions/cover.webp)

> [The MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions "The MDN reference") on JavaScript regular expressions notes that "JavaScript regular expressions are in fact not regular [...]". This highlights a subtle tension between theoretical regular expressions and their implementation in JavaScript. In this article, I cash-out and examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart.

## Abstract

For context, here's the full note from MDN [1]:

> JavaScript regular expressions are in fact not regular, due to the existence of [backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference "backreferences") (regular expressions must have finite states). However, they are still a very useful feature.

By drawing on ideas from this note, I structure this article into four sections.

In section 1, I lay the groundwork for cashing-out and examining the tension between JavaScript and theoretical regular expressions. Firstly, I define concepts such as an alphabet, languages and classes of languages. Secondly, I introduce the concept of a language denoting mechanism. Thirdly, I take a look at Chomsky's hierarchy and introduce the concept of a regular language denoting mechanism.

With these concepts in hand, my cashing-out strategy begins by analysing the claim that "JavaScript regular expressions are not regular" as the claim that "JavaScript regular expressions are not a regular language denoting mechanism". In contrast, theoretical regular expressions are a regular language denoting mechanism. Consequently, my examination focuses on how JavaScript regular expressions are not a regular language denoting mechanism but their theoretical counterparts are.

In section 2, I informally define the class of regular languages by talking about the class of *finite state* machines, called deterministic finite automata (DFAs).

In section 3, I show how both JavaScript and theoretical regular expressions are language denoting mechanisms. I also note how theoretical regular expressions (along with regular grammars and NFAs) are regular language denoting mechanisms.

In section 4, I dive into some code to demonstrate the usefulness of backreferences. By considering a JavaScript regular expression with a backreference as a counter-example, I show that JavaScript regular expressions are not a regular language denoting mechanism. Hence, JavaScript regular expressions are not regular.

## 1. Groundwork

### 1.1 Alphabets, languages and classes of languages

An alphabet is a set of characters (like the set of characters `{'0', '1'}` behind binary notation). A string is constructed by concatenating characters from an alphabet (like `'0'`, `'01'` or `'111'`). The empty string `''` is constructed by concatenating no characters at all. A language is a set of such strings. A class of languages is a set of such languages. So, a class of languages is a set of sets of strings.

![An alphabet, a language and a class of languages](/images/irregular-javascript-expressions/alphabet_language_class_of_languages.webp)

### 1.2 Language denoting mechanism

Informally, a language denoting mechanism is a well-defined system for denoting a class of languages. 

For our current purposes, we'll say that a system consists of well-defined instances. In particular, there are rigorous and exhaustive rules governing these instances. For example, we may consider the syntax behind Python as a well-defined system. Its instances are valid Python snippets like `some_var = True`. Each snippet is governed by rigorous and exhaustive syntax rules. Moreover, each instance must denote a language (a set of strings). So, a language denoting mechanism denotes the class of all languages denoted by each of its instances.

In summary, a language denoting mechanism must satisfy the following properties:

1. It consists of well-defined instances.
2. Each instance denotes a language.

As a side note, I would like to justify my introduction of a concept of a language denoting mechanism. Its theoretical import is to act like a bridge between theoretical systems that are _intrinsinctly_ distinct but _extrinsinctly_ similar to each other. For example, we often speak of Turing Machines and the Lambda Calculus as equivalent models of computation. Intuitively, these are intrisinctly distinct entities - one feels like a mechanical devices with a tape and a head while the other feels like syntactic manipulation. However, they both extrinsinctly "talk about" (i.e. denote) the same class of recursively enumerable languages. So, framing them as language denoting mechanisms allows us to easily talk about and bridge these distinct systems.

### 1.3 Chomsky's hierarchy

![Chomsky's hierarchy](/images/irregular-javascript-expressions/chomsky_hierarchy.webp)

Chomsky's hierarchy is a containment hierarchy of formal languages (or their corresponding grammars). This hints at how different classes of languages are denoted by different language denoting mechanisms. One such class is the class of regular languages. The higher up the hierarchy, the more complex the languages get. Traditionally, regular languages live at the very bottom with context-free languages just above. An interesting property of the hierarchy is that each class of languages needs a different type of machine to recognise it. 

 Briefly, a language denoting mechanism is regular if and only if the class of languages it denotes *is* the class of regular languages.

![Regular language denoting mechanism](/images/irregular-javascript-expressions/regular_language_denoting_mechanism.webp)

### 1.4 Cashing-out and examination strategy

As previously mentioned, my cashing-out strategy begins by analysing the claim that "JavaScript regular expressions are not regular" as the claim that "JavaScript regular expressions are not a regular language denoting mechanism". In doing so, the tension between JavaScript and theoretical regular expressions become aparent since theoretical regular expressions are a regular language denoting mechanism. To properly examine, I proceed as follows.

I informally define the class of regular languages in order to properly understand that class of languages that regular language denoting mechanisms denote. These machines constitute the quintessential language denoting mechanism that defines the class of regular languages.

I show how both JavaScript and theoretical regular expressions are language denoting mechanism by observing their syntax rules and that each regular expression denotes a language. In particular, both these observations satisfy the two previously mentioned properties of a language denoting mechanism.

I explain how theoretical regular expressions (by their equivalence to DFAs, NFAs and regular grammars) are a regular language denoting mechanism. 

I consider the counter-example `/^(a*)b+\1$/` containing a backreference. I show how this is an instance which denotes. It denotes a context-free language. I show that there's at least one instance of a JavaScript regular expression that does not denote a regular language. In other words, JavaScript regular expressions denote a proper superclass of regular languages. So,  As a plus, I also show how that particular counter-example denotes a context-free language by looking at the class of machines called pushdown automata (PDAs).

To clarify, here's an informal argument summarising my examination.

1. A language denoting mechanism is a well-defined system for denoting a class of languages.
2. JavaScript regular expressions are a well-defined system for denoting a class of languages.
3. So, JavaScript regular expressions are a language denoting mechanism.

4. A language denoting mechanism is regular if and only if the class of languages it denotes *is* the class of regular languages.
5. Due to backreferences, JavaScript regular expressions denote a proper superclass of regular languages.
6. So, JavaScript regular expressions are not a regular language denoting mechanism.

7. To say that "JavaScript regular expressions are not regular" is to say that "JavaScript regular expressions are not a regular language denoting mechanism". Therefore, JavaScript regular expressions are not regular.

## 2. Regular languages

A classic example of a regular language is the set of all strings of even length over an alphabet like `{'a'}`. It contains strings like `'aa'`, `'aaaa'` or `''` (the empty string). Its corresponding regular expression is `(aa)*`.

There are many interesting formal properties that govern these languages (for example, the union of two regular languages is also a regular language). However, for our current purposes, one such interesting property is their informaly defition to the DFA class of finite state machines:

The class of regular languages _is_ the class of languages recognised by DFAs.

### 2.1 DFAs

A DFA is a theoretical machine that recognises a set of strings. This set is the language of that machine. In particular, for any string over an alphabet, the machine will either accept or reject it. The set of all strings that the machine accepts _is_ the language of that machine. 

Visually, a DFA is made up of a finite set of states with transitions among them. Some of these states are "accepting" and others are "rejecting". One of these states must be the start state. Any string over an alphabet is fed into the machine via that start state. As it's fed through, the machine transitions through its states by individually parsing the string's characters. Once all characters are parsed, the machine stops. It lands in either an accepting or rejecting state. If it's an accepting state, then the machine accepts the string. Otherwise, it rejects it [7]. So, the language of the DFA is the set of all strings that, after being parsed character-by-character, land in an accepting state. To further clarify, let's construct a DFA that recognises the aforementioned regular language expressed by the regular expression `(aa)*` [8].

![DFA for language over a of even length](/images/irregular-javascript-expressions/dfa_for_language_over_a_of_even_length.webp)

Let's walk through how the machine recognises our language by looking at two example strings: `'a'` and `'aa'`. Ideally, the machine should accept `'aa'` and reject `'a'`.

`'aa'` begins in the start state "even length". The machine parses the first `'a'` and transitions to the "odd length" state. It then parses the last `'a'` and lands back in the "even length" state. Since there are no more characters to parse, the machine stops. So, the machine lands in an accepting state and accepts the string `'aa'`. 

Given `'a'`, it begins in the start state and transitions into the "odd length" state once it parses the only character `'a'`. Since there are no characters left, the machine lands in a rejecting state and rejects `'a'`.

On a side note, different configurations of states and transitions yield different regular languages. It's possible that DFAs with seemingly different configurations accept the same set of strings. Intuitively, this is how seemingly different regular expressions act as syntactic sugar for the same regular language (like `(aa)*` and `(a{2})*`).

Formally, there are strict rules. Since each instance of a DFA also denotes a language, we can say that DFAs are a language denoting mechanism. Since, the class of regular languages is the class DFAs denotes, we consider DFAs to be the quitessential regular language denoting mechanism. In particular, any other regular language denoting mechanism must precisely denote that class of languages.

## 3. Regular expressions as a language denoting mechanism

To see how regular expressions are a language denoting mechanism, let's consider two observations about them.

### 3.1 Observation 1

Regular expressions are governed by strict syntax rules over a finite alphabet (a set of characters). These rules dictate whether a string is a valid regular expression or not. For example, the string `/a{1/u` is an invalid regular expression because it's missing the `}`, whereas `/a{1}/u` is valid. It's standard to recursively define the rules as follows.

Given some finite alphabet (like the set of Unicode characters),

1. The empty set is a regular expression [4].
2. The empty string `''` is a regular expression.
3. Any character from the alphabet is a regular expression.
4. For any two regular expressions `R` and `S`,
    1. The concatenation `RS` is a regular expression.
    2. The alternation `R|S` (the set union of all the strings in `R` and `S`) is a regular expression.
5. For any regular expression `R`,
    1. The Kleene star `R*` (the set of all strings generated by concatenating any finite non-negative number of strings from `R`) is a regular expression.
    2. The grouping `(R)` is a regular expression. It denotes the same set of strings as `R`.
6. Nothing else is a regular expression.


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

### 3.2 Observation 2

Some regular expressions can match more than one string (some even have infinitely many matches). Intuitively, we can form a set of all possible matches to a regular expression. In this sense, when we say that a string "matches" a regular expression, we're saying that this string is an element of that set. In other words, a regular expression is just a shorthand way of talking about that set.

So far, we've observed that theoretical regular expressions obey strict syntax rules over an alphabet, and that they serve as a shorthand way of talking about a set of strings. Formally, a set of strings over an alphabet is called a language. In effect, theoretical regular expressions act as syntactic sugar for a particular class of languages. Those are regular languages [5].

### 3.3 Theoretical regular expressions, grammars and NFAs

## 4. Backreferences

Backreferences allow us to refer to submatches of previously defined [capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group "capturing groups") in any JavaScript regular expression. A backreference matches the same string as its group. It refers to the same submatch.

Syntactically, a capturing group looks like `(pattern)` in some parent regular expression `/...(pattern).../`. Suppose that a string `M` matches `/...(pattern).../`. In such a case, the capturing group `(pattern)` segments (i.e. captures) a substring (of `M`) that matches its defined pattern. That substring is called the capturing group's submatch. 

A JavaScript regular expression may contain multiple capturing groups. In such a case, these capturing groups are in a one-to-one _ordered_ relation to their submatches. As illustrated below, if some string of the form `...[1]...[2]...[3]...` matches a regular expression of the form `/...(c1)...(c2)...(c3).../`, then the capturing groups `(c1)`, `(c2)` and `(c3)` are in a one-to-one ordered relation to the submatches `[1]`, `[2]` and `[3]` respectively.

![Capturing groups in JS](/images/irregular-javascript-expressions/capturing_groups_in_js.webp)

In JavaScript, we can run the `RegExp.prototype.exec()` method to see this one-to-one ordered relation. For example, given `/(a)(b)/` and a matching string `'ab'`, running `/(a)(b)/.exec('ab')` returns the array `[ 'ab', 'a', 'b', index: 0, input: 'ab', groups: undefined ]`. The element `'a'` (at index `1`) is the submatch of the first capturing group `(a)`. Similarly, the element `'b'` (at index `2`) is the submatch of the second group `(b)`.

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

### 4.1 JavaScript regular expressions denote a proper superclass of regular languages

Let's take the as a counter-example. In this section, I informally prove that this does not denote a regular language. In fact, it denotes a context-free language.

Intuitively, the language that `/^(a*)b+\1$/` denotes is equivalent to the language described as `aⁿbaⁿ` (where `n >= 0`). 

Briefly, the pumping lemma states that 

Firstly, I will use the pumping lemma to prove that . For the sake of contradiction, assume that is regular. By the pumping lemma, there exists such that.


In summary, `/^(a*)b+\1$/` is an instance of a JavaScript regular expression (with a backreference) that does not denote a regular language. So, as a language denoting mechanism, JavaScript regular expressions denote a proper superclass of regular languages. So, they are not a regular language denoting mechanism. In other words, they are not regular.

### 4.2 Context-free languages and NFAs

A classic example of a context-free language is the set of all strings of the form `aⁿbⁿ` over an alphabet like `{'a', 'b'}`. This is the set of strings starting with some number of `a`'s strictly followed by the same number of `b`'s. It contains strings like `'ab'`, `'aabb'` or `''` (the empty string).

Just like regular languages, context-free languages also have an intrinsic tie to a class of machines called pushdown automata (PDAs):

All context-free languages are recognised by PDAs and PDAs only recognise context-free languages [9].

Moreover, a PDA is also a theoretical machine that recognises a set of strings. For any string over an alphabet, the machine will either accept or reject it. The set of all strings that the machine accepts is the language of that machine. The key difference from a DFA is that a PDA is equipped with an unbounded stack. This stack is what gives PDAs their extra expressive power as illustrated by Chomsky's hierarchy. The stack acts as memory that a DFA lacks. 

Visually, a PDA is made up of a finite set of states with transitions among them. For each transition, the machine can also inspect and manipulate the stack. It can push symbols onto it or pop symbols off it. One state is the start state. Some of these states are "accepting" and others are "rejecting". A string is fed into the machine via the start state, and the machine transitions through its states by individually parsing the string's characters and managing its stack. Once no further transitions apply, the machine stops. If it lands in an accepting state, the machine accepts the string. Otherwise, it rejects it. So, the language of the PDA is the set of all strings that land in an accepting state [10]. To further clarify, let's construct a PDA that recognises the aforementioned context-free language `aⁿbⁿ`.

![PDA for aⁿbⁿ](/images/irregular-javascript-expressions/pda_for_anbn.webp)

Let's walk through how the machine recognises our language by looking at one example string `'ab'`. Ideally, the machine should accept `'ab'`.

`'ab'` begins in the start state. Firstly, the machine does not parse any character (it parses the empty string `''`) and pops nothing from the stack (it pops `''`). It also pushes a designated symbol `'$'` that acts as a sentinel which signifies the bottom of the stack. It then transitions to the next state where the machine parses the first `'a'`, pops nothing from the stack and pushes a designated symbol `'A'` onto the stack. Basically, `'A'` signifies the number of `'a'`'s that we have parsed throughout a computation. As we will see shortly, in order to ensure that there is the same number of `'b'`'s as `'a'`'s in a string, we have to pop all the `'A'`'s from the stack until we reach the bottom. Then, the machine transitions to the next state without popping or pushing anything from the stack. It then parses the last `'b'`, pops an `'A'` from the stack and pushes nothing onto it. Finally, since the sentinel `'$'` is the only symbol left on the stack, the machine pops it and transitions into an accepting state. So, it accepts `'ab'`.

### 4.3 Memory and finite states

Conceptually, for a backreference to refer to a capturing group's submatch, we have to store the value of that submatch in memory to later reference it. In the aforementioned HTML tag parser example, if the capturing group's submatch is `'p'` (from the tag `<p>`), we need to store the value `'p'`, so that the backreference `\1` may refer to it. So, backreferences rely on memory. It follows that JavaScript regular expressions rely on memory.

Importantly, notice how a DFA does not have memory during computation. It simply transitions between states on each computational step. For example, once it parses a character, the machine "forgets" it. Similarly, it does not have any memory of any previously parsed characters or states traversed. At any computational step, it only "knows" the current character, the current state and its transitions. Hence, DFAs are finite state machines without memory.


As previously mentioned, a key difference between a DFA and a PDA is the addition of an unbounded stack. DFAs do not have that kind of memory. They only have states and transitions. At any point in its computation, a DFA only knows about its current state, the character that it's reading and its available transitions. It does not know what it previously saw. 

We can now cash out the tension between JavaScript regular expressions and their theoretical counterpart. Notice that once we add memory (like an unbounded stack), we move up Chomsky's hierarchy and away from regular languages. So, any class of machines equipped with such memory can recognise a larger class of languages than regular languages (they can also recognise regular languages). In other words, any computational model that relies on such memory recognises a different set of languages from regular languages. Since JavaScript regular expressions rely on memory, they correspond to languages in the hierarchy that move away from regular languages [11]. In other words, JavaScript regular expressions act as syntactic sugar for languages belonging to a different containment level in the hierarchy than regular languages. So, they recognise a larger (and different) class of languages than DFAs and regular languages. Hence, they are not regular.


## Footnotes

1. Quoted from MDN at the time of writing.

2. We can argue that a DFA has a form of memory - its states and transitions. However, that memory is finite and bounded. A DFA cannot store arbitrary strings.

3. JavaScript also permits forward referencing by matching the empty string. Moreover, JavaScript also has [named backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference "named backreferences"). We can use custom names, instead of a positive whole number, to refer to the submatch of some previously defined [named capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group "named capturing groups").

4. Since DFAs only recognise regular languages and theoretical regular expressions act as syntactic sugar for regular languages, there must be a regular expression that corresponds to the DFA that does not accept any string. Intuitively, that's the empty set.

5. Here's a formal [proof](https://courses.grainger.illinois.edu/cs373/su2011/lectures/lecture10.pdf "proof") demonstrating that all theoretical regular expressions act as syntactic sugar for regular languages (URL valid at the time of writing).

6. DFAs, NFAs, regular languages, regular grammars and regular expressions are all intrinsically tied to each other.

7. Here's a [formal definition](https://www.khoury.northeastern.edu/home/vkp/390-fl07/FA-Formal-Definitions.pdf "formal definition") of a DFA (URL valid at the time of writing).

8. Visit [regexper.com](https://regexper.com/ "regexper.com") to visualise any JavaScript regular expression as a railroad diagram.

9. Nondeterministic PDAs, context-free languages and context-free grammars are all intrinsically tied to each other.

10. Here's a [formal definition](https://www.khoury.northeastern.edu/home/vkp/390-fl07/Pushdown-Automata.pdf "formal definition") of a PDA (URL valid at the time of writing).

11. This does not imply that JavaScript regular expressions act as syntactic sugar for context-free languages.

I was originally inspired to write this article after reading [Abdur-Rahmaan Janhangeer](https://www.compileralchemy.com/ "Abdur-Rahmaan Janhangeer")'s article - [Regex Engines: History and Contributions](https://www.linkedin.com/pulse/regex-engines-history-contributions-abdur-rahmaan-janhangeer "Regex Engines: History and Contributions").