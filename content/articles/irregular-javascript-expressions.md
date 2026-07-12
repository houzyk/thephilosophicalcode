---
external: false
title: "(Ir)regular JavaScript Expressions"
description: "The MDN reference on JavaScript regular expressions notes that \"JavaScript regular expressions are in fact not regular [...]\". This highlights a subtle tension between theoretical regular expressions and their implementation in JavaScript. In this article, I cash-out and examine this tension by contrasting JavaScript regular expressions with their theoretical counterparts."
author: "Muhammad Houzair Koussa"
authorUrl: "https://houzair.me/"
ogImagePath: "/images/irregular-javascript-expressions/cover.webp"
date: 2026-07-12
---

![(Ir)regular JavaScript Expressions](/images/irregular-javascript-expressions/cover.webp)

> [The MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions "The MDN reference") on JavaScript regular expressions notes that "JavaScript regular expressions are in fact not regular [...]". This highlights a subtle tension between theoretical regular expressions and their implementation in JavaScript. In this article, I cash out and examine this tension by contrasting JavaScript regular expressions with their theoretical counterparts.

## Abstract

For context, here's the full note from MDN [1]:

> JavaScript regular expressions are in fact not regular, due to the existence of [backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference "backreferences") (regular expressions must have finite states). However, they are still a very useful feature.

By drawing on ideas from this note, I structure this article into four sections.

In section 1, I lay the groundwork for cashing out and examining the tension between JavaScript and theoretical regular expressions. Firstly, I define concepts such as an alphabet, languages and classes of languages. Secondly, I take a look at Chomsky's hierarchy. Thirdly, I introduce the concept of a language denoting mechanism (a well-defined system for denoting a class of languages) and of a *regular* language denoting mechanism.

With these concepts in hand, my cashing-out strategy begins by analysing the claim that "JavaScript regular expressions are not regular" as the claim that "JavaScript regular expressions are not a regular language denoting mechanism". In contrast, theoretical regular expressions are a regular language denoting mechanism. Given this contrast, I think that my analysis makes the tension between JavaScript and theoretical regular expressions quite apparent - **JavaScript regular expressions are not a regular language denoting mechanism but their theoretical counterparts are**. To back up this analysis, my cashing-out strategy ends with the following examination spread across the remaining sections.

In section 2, I properly characterise regular language denoting mechanisms. I informally define the class of regular languages by talking about the class of *finite state* machines, called deterministic finite automata (DFAs). These machines constitute the quintessential language denoting mechanism that defines the class of regular languages. Any other regular language denoting mechanism must denote that particular class of languages. So, a language denoting mechanism is regular if and only if the class of languages it denotes *is* the class of regular languages.

In section 3, I show how both JavaScript and theoretical regular expressions are language denoting mechanisms. In particular, by observing their syntax rules and that each regular expression denotes a language, I infer that they are both well-defined systems for denoting a class of languages. I also explain how theoretical regular expressions (by their equivalence to DFAs) are a regular language denoting mechanism.

In section 4, I focus on how JavaScript regular expressions are not a regular language denoting mechanism. Firstly, I dive into some code to demonstrate the usefulness of backreferences. Then, by considering the JavaScript regular expression `/^(a*)b+\1$/` with a backreference as a counter-example, I informally prove that there's at least one instance of a JavaScript regular expression that does not denote a regular language. So, the class of languages denoted by JavaScript regular expressions is not the class of regular languages. So, they are not a regular language denoting mechanism. Hence, JavaScript regular expressions are not regular.

## 1. Groundwork

### 1.1 Alphabets, languages and classes of languages

An alphabet is a finite non-empty set of characters (like the set of characters `{'0', '1'}` behind binary notation). A string is constructed by concatenating finitely many characters from an alphabet (like `'0'`, `'01'` or `'111'`). The empty string `''` is constructed by concatenating no characters at all. A language is a set of such strings. A class of languages is a set of such languages. So, a class of languages is a set of sets of strings.

![An alphabet, a language and a class of languages](/images/irregular-javascript-expressions/alphabet_language_class_of_languages.webp)

### 1.2 Chomsky's hierarchy

![Chomsky's hierarchy](/images/irregular-javascript-expressions/chomsky_hierarchy.webp)

Chomsky's hierarchy is a containment hierarchy of classes of formal languages. The further out the hierarchy, the more complex the languages get. Traditionally, regular languages occupy the innermost layer with context-free languages immediately surrounding them. 

For our current purposes, the hierarchy allows us to visualise that each layer in the hierarchy corresponds to a different class of languages. In particular, it also hints at how different classes of languages are denoted by different language denoting mechanisms.

### 1.3 Language denoting mechanisms

Informally, a language denoting mechanism is a well-defined system for denoting a class of languages. 

For our current purposes, we'll say that a system consists of well-defined instances. In particular, there are rigorous rules governing these instances. As a rough example, we may consider the different types behind Python as a well-defined system. Its instances are valid Python types like `bool` or `str`. Each instance is governed by rigorous rules - the `for` keyword cannot be a Python type. Moreover, each instance must denote a language (a set of strings). For example, syntactically, the `bool` type denotes `'True'` and `'False'`. Naturally, a language denoting mechanism denotes the class of all languages denoted by its instances.

In summary, a language denoting mechanism must satisfy the following properties:

1. It consists of well-defined instances.
2. Each instance denotes a language.

As a side note, I would like to justify my introduction of the concept of a language denoting mechanism. I believe that its theoretical value is to act as a bridge between systems that are *intrinsically* distinct but *extrinsically* similar to each other. It allows us to easily talk about and bridge these kinds of systems. For example, we often speak of Turing Machines and the Lambda Calculus as equivalent models of computation. Intuitively, these are intrinsically distinct entities - one is a mechanical device with a tape and a head while the other feels like syntactic manipulation. However, they both extrinsically "talk about" (i.e. denote) the class of recursively enumerable languages. So, framing them as language denoting mechanisms allows us to easily talk about and bridge these intrinsically distinct systems.

Given how Chomsky's hierarchy hints at how different classes of languages are denoted by different language denoting mechanisms, I can also introduce the concept of a regular language denoting mechanism. In essence, a language denoting mechanism is regular if and only if the class of languages it denotes *is* the class of regular languages. Similarly, a mechanism is context-free if and only if it denotes the class of context-free languages.

![Regular language denoting mechanism](/images/irregular-javascript-expressions/regular_language_denoting_mechanism.webp)

## 2. Regular language denoting mechanisms

### 2.1 The class of regular languages

A classic example of a regular language is the set of all strings of even length over an alphabet like `{'a'}`. It contains strings like `'aa'`, `'aaaa'` or `''` (the empty string). The class of regular languages is defined in relation to DFAs.

The class of regular languages *is* the class of languages recognised by DFAs.

### 2.2 DFAs

A DFA is a theoretical machine that recognises a set of strings. This set is the language of that machine. In particular, for any string over the machine's alphabet, the machine will either accept or reject it. The set of all strings that the machine accepts *is* the language of that machine. 

Visually, a DFA is made up of a finite set of states with transitions among them. Each of these states is either "accepting" or "rejecting". One of these states must be the start state. Any string over the machine's alphabet is fed into the machine via that start state. As it's fed through, the machine transitions through its states by individually reading the string's characters. It's deterministic as, for each state, each character determines exactly one transition. 

Once all characters are read, the machine stops. It lands in either an accepting or rejecting state. If it's an accepting state, then the machine accepts the string. Otherwise, it rejects it. So, the language of the DFA is the set of all strings that, after being read character by character, land in an accepting state. To further clarify, let's construct a DFA that recognises the aforementioned regular language.

![DFA for language of even length](/images/irregular-javascript-expressions/dfa_for_language_of_even_length.webp)

Let's walk through how the machine recognises our language by looking at two example strings: `'a'` and `'aa'`. Ideally, the machine should accept `'aa'` and reject `'a'`.

`'aa'` begins in the start state "even length". The machine reads the first `'a'` and transitions to the "odd length" state. It then reads the last `'a'` and lands back in the "even length" state. Since there are no more characters to read, the machine stops. So, the machine lands in an accepting state and accepts the string `'aa'`. 

Given `'a'`, it begins in the start state and transitions into the "odd length" state once it reads the only character `'a'`. Since there are no characters left, the machine lands in a rejecting state and rejects `'a'`.

### 2.3 DFAs as the quintessential regular language denoting mechanism

It's standard to [formally define](https://www.khoury.northeastern.edu/home/vkp/390-fl07/FA-Formal-Definitions.pdf "formally define") a DFA as a 5-tuple consisting of states, an alphabet, a transition function, the start state and a set of accepting states. So, a DFA is governed by rigorous rules. A DFA is well-defined. Moreover, it denotes a language. In other words, DFAs are a language denoting mechanism. 

Since the class of regular languages is defined in relation to DFAs, I consider DFAs to constitute the quintessential language denoting mechanism that defines the class of regular languages. Any other regular language denoting mechanism *must* denote that particular class of languages. So, the class of languages that such a mechanism denotes *is* the class of languages recognised by DFAs.

So far, I have laid the groundwork for my cashing-out strategy and properly characterised regular language denoting mechanisms. Remember that my strategy hinges on showing that JavaScript regular expressions are not a regular language denoting mechanism but their theoretical counterparts are. So, I now show how both JavaScript and theoretical regular expressions are language denoting mechanisms. Then, I explain how theoretical regular expressions are a regular language denoting mechanism.

## 3. Regular expressions as language denoting mechanisms

To see how both JavaScript and theoretical regular expressions are language denoting mechanisms, let's consider two observations about them.

### 3.1 Observation 1 - well-defined instances

Our first observation is that both kinds of instances are governed by rigorous rules. Each instance is well-defined.

Firstly, we can infer that JavaScript regular expressions are governed by these rules by observing that an invalid expression like `/a{1/u` throws a syntax error (because it's missing the `}`).

Secondly, we observe that it is standard to recursively define theoretical regular expressions as follows.

Given some alphabet,

1. The empty set is a regular expression.
2. The empty string `''` is a regular expression.
3. Any character from the alphabet is a regular expression.
4. For any two regular expressions `R` and `S`,
    1. The concatenation `RS` is a regular expression.
    2. The alternation `R|S` (the set union of all the strings in `R` and `S`) is a regular expression.
5. For any regular expression `R`,
    1. The Kleene star `R*` (the set of all strings generated by concatenating any finite non-negative number of strings from `R`) is a regular expression.
    2. The grouping `(R)` is a regular expression. It denotes the same set of strings as `R`.
6. Nothing else is a regular expression.

For example, we can easily construct a familiar regular expression like `(ab)|a` using these rules. Starting with `a` and `b` as characters (rule 3), we concatenate them to get `ab` (rule 4.1). Rule 5.2 gives `(ab)`. Alternating with `a` gives `(ab)|a` (rule 4.2).

As a side note, one may feel that these rules are incomplete because regular expressions from popular programming languages support operators beyond those shown in the rules (like `+` or `?`). However, this feeling can be safely dismissed since most of these additional operators can be defined by the operators from the rules. For example, we can define the `R+` operator as `R(R*)`. It's crucial to point out that we cannot do this for *all* operators from popular programming languages (backreferences are one such exception!). To further clarify, here's a table of common operators and their rule-based definitions:

| Operator | Description | Rule-based definition | Example |
|---|---|---|---|
| `R+` | One or more | `R(R*)` | `a+` = `a(a*)` |
| `R?` | Optional | `R\|''` | `a?` = `a\|''` |
| `R{n}` | Exactly n | `RR...R` (n concatenations) | `a{3}` = `aaa` |
| `R{n,m}` | Between n and m | `R{n}` concat `R?` repeated (m−n) times | `a{2,4}` = `aa(a\|'')(a\|'')` |
| `[abc]` | Character class | `a\|b\|c` | `[aeiou]` = `a\|e\|i\|o\|u` |
| `[^abc]` | Negated class | Alternation of all alphabet characters *not* listed | `[^ab]` = `c\|d\|...` |
| `.` | Any character | Alternation of all alphabet characters | `a.b` = `a(x\|y\|z\|...)b` |

### 3.2 Observation 2 - each instance denotes a language

Our second observation is that both JavaScript and theoretical regular expressions match a set of strings. For example, `/^(aa)*$/` (JavaScript) and `(aa)*` (theoretical) both equivalently match the set of strings `{'', 'aa', 'aaaa', ...}`. In other words, both kinds of instances denote a language. 

As a side note, a JavaScript regular expression can also match a parent string because it matches one of its substrings. For example, `/(aa)*/` also matches the parent string `'baab'` as it matches the substring `'aa'`. I consider such parent strings as elements of the language that the expression denotes.

In summary, both kinds of instances are well-defined and denote a language. So, both JavaScript and theoretical regular expressions are language denoting mechanisms.

### 3.3 Theoretical regular expressions are a regular language denoting mechanism

It's standard to say that theoretical regular expressions are equivalent to DFAs. In fact, we can [prove](https://courses.grainger.illinois.edu/cs373/su2011/lectures/lecture10.pdf "prove") it. This means that, as a language denoting mechanism, the class of languages that theoretical regular expressions denote is the class of languages recognised by DFAs. By definition, that's the class of regular languages. Hence, theoretical regular expressions are a regular language denoting mechanism.

Following my cashing-out strategy, I now focus on how JavaScript regular expressions are not a regular language denoting mechanism by looking at backreferences.

## 4. Backreferences

Backreferences allow us to refer to submatches of previously defined [capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group "capturing groups") in any JavaScript regular expression. A backreference matches the same string as its group. It refers to the same submatch.

Syntactically, a capturing group looks like `(pattern)` in some parent regular expression `/...(pattern).../`. Suppose that a string `M` matches `/...(pattern).../`. In such a case, the capturing group `(pattern)` segments (i.e. captures) a substring (of `M`) that matches its defined pattern. That substring is called the capturing group's submatch. 

A JavaScript regular expression may contain multiple capturing groups. In such a case, these capturing groups are in a one-to-one *ordered* relation to their submatches. As illustrated below, if some string of the form `...[1]...[2]...[3]...` matches a regular expression of the form `/...(c1)...(c2)...(c3).../`, then the capturing groups `(c1)`, `(c2)` and `(c3)` are in a one-to-one ordered relation to the submatches `[1]`, `[2]` and `[3]` respectively.

![Capturing groups in JS](/images/irregular-javascript-expressions/capturing_groups_in_js.webp)

In JavaScript, we can run the `RegExp.prototype.exec()` method to see this one-to-one ordered relation. For example, given `/(a)(b)/` and a matching string `'ab'`, running `/(a)(b)/.exec('ab')` returns the array `[ 'ab', 'a', 'b', index: 0, input: 'ab', groups: undefined ]`. The element `'a'` (at index `1`) is the submatch of the first capturing group `(a)`. Similarly, the element `'b'` (at index `2`) is the submatch of the second group `(b)`.

With backreferences, we can easily refer to these submatches. Syntactically, a backreference has the format `\N` where `N` is a positive whole number referring to some previously occurring capturing group. Since capturing groups are in a one-to-one ordered relation to their submatches, `N` points to the submatch at position `N` in the order [2].

We can add backreferences to the aforementioned regular expression `/(a)(b)/`. For example, `/(a)(b)\2\1\2/`. To clarify, the backreference `\1` refers to the submatch of the capturing group `(a)`. Similarly, the two backreferences `\2` both refer to the submatch of the capturing group `(b)`. 

For example, the string `'abbab'` matches the regular expression `/(a)(b)\2\1\2/`. The submatch of `(a)` is `'a'` and the submatch of `(b)` is `'b'`. `\1` refers to `'a'` and `\2` refers to `'b'`.

To demonstrate the usefulness of backreferences, consider the following function `parseHtmlTags`. It's a simple HTML tag parser. It returns matching non-nested open/close tags of the form `<xyz>...</xyz>` after reading some arbitrary string.

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

The backreference in `parseHtmlTags` is especially useful in making HTML tag reading quite dynamic. Intuitively, we don't need to specify a whole list of potential HTML tags alternating with one another (like `(<p>(.*?)<\/p>)` or `(<div>(.*?)<\/div>)` or `(<a>(.*?)<\/a>)`). Once we have an HTML tag name as a submatch of the capturing group in `<(\w+)>`, we can dynamically refer to it using the backreference in `<\/\1>`.

### 4.1 JavaScript regular expressions are not a regular language denoting mechanism

As a language denoting mechanism, the class of languages denoted by JavaScript regular expressions is not the class of regular languages. I prove this by showing that there's at least one instance of a JavaScript regular expression that does not denote a regular language. 

Consider the JavaScript regular expression `/^(a*)b+\1$/` with a backreference as a counter-example. Intuitively, it denotes the language described as `aⁿbʲaⁿ` where `n >= 0` and `j >= 1` containing strings like `'aabaa'` or `'bbb'`.

For the sake of contraction, assume that `aⁿbʲaⁿ` is a regular language.

Informally, the general pumping lemma for regular languages states that, for any regular language `RL`, if a string `uwv` in `RL` contains a sufficiently long substring `w`, then `w` can be split into 3 parts `xyz` (where `xy` must be sufficiently long and `y` must have a non-zero length). Then, we can keep on pumping up the number of `y`'s such that `ux..y..zv` remains in `RL` [3]. 

![General pumping lemma for regular languages](/images/irregular-javascript-expressions/general_pumping_lemma_for_regular_languages.webp)

For example, take the string `'aaaa'` from the regular language of even length over an alphabet like `{'a'}`.

We can see that `'aaaa'` has the form `uwv` where `u = ''`, `w = 'aa'` and `v = 'aa'`. 

So, `'aaaa'` is `'' + 'aa' + 'aa'`. 

`w` can be split into 3, `'' + 'aa' + ''`, where `x = ''`, `y = 'aa'` and `z = ''` (remember that `y` must have a non-zero length).

We can then pump up the number of `y`'s. Since `y = 'aa'` and we pump it 3 times, we get `'aaaaaa'`.

When we add back `x` and `z` to the pumped-up `y`, `w` pumps up to `'' + 'aaaaaa' + ''`. So, `w = 'aaaaaa'`.

When we add back `u` and `v` to the pumped-up `w`, we get `'' + 'aaaaaa' + 'aa'`. This gives `'aaaaaaaa'` which is a string in our regular language.

Going back to our proof, `aⁿbʲaⁿ` must satisfy the general pumping lemma. So, let `u = ''`, `w = aᵏ` and `v = baᵏ` for some value `k` that satisfies the pumping lemma. So, `uwv = '' + aᵏ + baᵏ` and `uwv = aᵏbaᵏ`. `aᵏbaᵏ` is in `aⁿbʲaⁿ`.

`w` can be split into 3. So, `aᵏ = xyz` for some values of `x`, `y` and `z` that satisfy the lemma.

We can now pump up the number of `y`'s. Let's pump it to 2. Since `aᵏ` contains at least one `a` and only `a`'s while `y` must have a non-zero length, then `y` must also contain at least one `a` and only `a`'s.

So, `yy` contains more `a`'s than `y`. 

When we add back `x` and `z` to the two-times pumped-up `y`, `w` pumps up to `xyyz`.

Since, the number of `a`'s in `xyz` is `aᵏ`, then the number of `a`'s in `xyyz` is more than `aᵏ`. For simplicity, I'll now write `xyyz` as `aᵏ⁺`.

When we add back `u` and `v` to the pumped-up `w`, we get `'' + 'aᵏ⁺' + baᵏ`. This gives `'aᵏ⁺baᵏ'` which is **not a string in `aⁿbʲaⁿ`**.

We've reached our contradiction. `aⁿbʲaⁿ` is not a regular language. So, `/^(a*)b+\1$/` is an instance of a JavaScript regular expression that does not denote a regular language. As a language denoting mechanism, the class of languages denoted by JavaScript regular expressions is not the class of regular languages.Hence, JavaScript regular expressions are not a regular language denoting mechanism.

### 4.2 Tying it all together

Here's an informal argument summarising my cashing-out strategy and examination.

1. A language denoting mechanism is a well-defined system for denoting a class of languages.
2. JavaScript and theoretical regular expressions are both well-defined systems for denoting a class of languages.
3. So, JavaScript and theoretical regular expressions are both language denoting mechanisms.

4. A language denoting mechanism is regular if and only if the class of languages it denotes is the class of regular languages.
5. Due to their equivalence to DFAs, theoretical regular expressions denote the class of regular languages.
6. So, theoretical regular expressions are a regular language denoting mechanism.
7. Due to backreferences, the class of languages denoted by JavaScript regular expressions is not the class of regular languages.
8. So, JavaScript regular expressions are not a regular language denoting mechanism.

9. To say that "JavaScript regular expressions are not regular" is to say that "JavaScript regular expressions are not a regular language denoting mechanism". Therefore, the tension becomes apparent and cashed out. In essence, JavaScript regular expressions are not a regular language denoting mechanism but their theoretical counterparts are.

## Footnotes

1. Quoted from [the MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions "the MDN reference") on JavaScript regular expressions at the time of writing (July 2026).

2. JavaScript also permits forward referencing by matching the empty string. Moreover, JavaScript also has [named backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference "named backreferences"). We can use custom names, instead of a positive whole number, to refer to the submatch of some previously defined [named capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group "named capturing groups").

3. Formally, the general pumping lemma for regular languages states that, for any regular language `RL`, there exists a positive integer `p`, called the pumping length, such that every string of form `uwv` in `RL` (where the length `len(w)` of `w` is such that `len(w) >= p`) can be written in the form `uwv = uxyzv`. The length `len(xy)` of `xy` is such that `len(xy) <= p`. The length `len(y)` of `y` is such that `len(y) >= 1`. Then, for any positive integer `k`, any string of form `uxyᵏzv` is in `RL`.

I was originally inspired to write this article after reading [Abdur-Rahmaan Janhangeer](https://www.compileralchemy.com/ "Abdur-Rahmaan Janhangeer")'s article - [Regex Engines: History and Contributions](https://www.linkedin.com/pulse/regex-engines-history-contributions-abdur-rahmaan-janhangeer "Regex Engines: History and Contributions").