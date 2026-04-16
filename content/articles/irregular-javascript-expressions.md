---
external: false
title: "(Ir)regular JavaScript Expressions"
description: "The MDN reference on JavaScript regular expressions notes that \"JavaScript regular expressions are in fact not regular\". This highlights a subtle tension between actual regular expressions and their implementation in JavaScript. In this article, we examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart."
author: "Muhammad Houzair Koussa"
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/irregular-javascript-expressions/cover.webp"
date: 2026-04-16
---

![(Ir)regular JavaScript Expressions](/images/irregular-javascript-expressions/cover.webp)

> [The MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions "The MDN reference") on JavaScript regular expressions notes that "JavaScript regular expressions are in fact not regular". This highlights a subtle tension between actual regular expressions and their implementation in JavaScript. In this article, we examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart.

## Abstract

For context, here's the full note from MDN:

> JavaScript regular expressions are in fact not regular, due to the existence of backreferences (regular expressions must have finite states). However, they are still a very useful feature.

By drawing on ideas from this note, this article is organised into three sections. Firstly, we explore the theory behind actual regular expressions to understand why they must have finite states. Secondly, we cash out the underlying tension (between actual and JavaScript regular expressions) as an issue of *language recognition*. Finally, we demonstrate the usefulness of backreferences and conceptually understand how they make JavaScript regular expressions irregular.

In section 1, we show how regular expressions act as syntactic sugar for a class of languages called 'regular languages'. We then discuss how these languages are recognised by and are intrinsically tied to a class of *finite state* machines called Deterministic Finite Automata (DFA).

In section 2, we take a look at Chomsky's hierarchy. The latter hints at how different classes of languages are recognised by different classes of machines. This gives us a way to cash out the aforementioned tension by talking about the different levels in the hierarchy. Essentially, to understand why JavaScript regular expressions are irregular *is* to understand how they recognise a larger (hence different) class of languages than actual regular expressions.

In section 3, we dive into some code to demonstrate the usefulness of backreferences. We then conceptually analyse the way they work to abduct that they rely on memory. A fortiori, JavaScript regular expressions rely on memory. In contrast, DFAs are finite state machines without memory that are intrinsically tied to regular languages. So, JavaScript regular expressions are not regular because they recognise a different class of languages compared to DFAs.

## 1. Backreferences

In JavaScript regular expressions, backreferences allow us to explicitly refer to some previously defined capturing group in the expression. We may refer to that or by using named backreferences.

To clarify, a capturing group syntactically is `(pattern)`. Intuitively, the first occurence of a match in a string will be saved as a capturing group. Capturing groups create a one-to-one relation between the match and the regular expression.

![Capturing groups in JS](/images/irregular-javascript-expressions/capturing_groups_in_js.webp)

Let's look at some code as examples. Syntactically, a backreference has the format `\N` where `N` is a positive whole number referencing some previously occuring coapturing group. For example, in the regex `/(a)(b)\2\1\2/`, we have two capturing groups: firstly, `(a)`. Secondly, `(b)`. So, in our regex, the backreferece `\1` is refering to whatever value would have matched the first capturing group `(a)`. Morevoer, the two backreferences `\2` both refer to whatever value has matched the second capturing group `(b)`. For example, `/(a)(b)\2\1\2/` would match the string `'abbab'`. In this case, the first backreference is the first `'a'` while the second backreference is the `'b'`. However, the regex would not march a string like `'abaab'` since the value at the first backreference does not match the value of the first capturing group. To see this clearer, imagine `/(\d+)a\1/`. This. In other words, we have kept the value of the digit in memory and then matched it afterwards. If there was another number at the backreference spot, there would be not match.

With backreferences, we do not need to write the same capturing groups multiple times.

Given this, a useful case for

For example, we can dynamically capture HTML tag elements with a capturing group. This is helpful as I do not need to specify a whole list of potential HTML tags that need to be matched on both sides. We just know that a match is any HTML tag as log as it respects the format.

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"');
```

Intuitively, backreferences requires memory. We somehow need to be able to capture a group and refer back to it while at the same time know its current value. For example, in the HTML tag regex, we need to know what kind of tag we've matched at runtime. Say that we've matched a picture tag, we need to have the value picture in memory to match it later to with. 

JavaScript regular expressions rely on memory during computation.

## 1. The Theory Behind Regular Expressions

### 1.1 Regular Expressions As Syntactic Sugar

To see how regular expressions act as syntactic sugar, let's consider two observations about them.

Firstly, regular expressions are governed by strict syntax rules over a finite alphabet (a set of characters). These rules dictate whether a string is a valid regular expression or not. For example, the string `a{1` is an invalid regular expression because it's missing the `}`, whereas `a{1}` is valid. It's standard to recursively define the rules as follows:

Given some finite alphabet (like the set of Unicode characters with the empty string);

1. The empty set is a regular expression [1].
2. The empty string `''` is a regular expression.
3. Any character from the alphabet is a regular expression.
4. For any two regular expressions `R` and `S`,
    1. The concatenation `RS` is a regular expression.
    2. The alternation `R|S` (the set union of all the strings in `R` and `S`) is a regular expression.
    3. The Kleene star `R*` (the set of all strings generated by concatenating any finite non-negative number of strings from `R`) is a regular expression.
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

Secondly, some regular expressions can match more than one string (some even have infinite matches). Intuitively, we can form a set of all possible matches to a regular expression. In this sense, when we say that a string "matches" a regular expression, we're saying that this string is an element of that set. In other words, a regular expressions is just a shorthand way of talking about that set.

So far, we've observed that regular expressions obey strict syntax rules over an alphabet, and that they serve as a shorthand way of talking about a set of strings. Formally, a set of strings over an alphabet is called a language. With that in mind, regular expressions are characteristically syntactic sugar for a particular class of languages called 'regular languages' [2].


### 1.2 Regular Languages and DFAs

A classic example of a regular language is the set of all strings of even length over an alphabet like `{'a'}`. It contains strings like `'aa'`, `'aaaa'` or `''` (the empty string). Its corresponding regular expression is `(aa)*`.

There are many interesting formal properties that govern these languages (like the union of two regular languages is also a regular language). However, for our current purposes, one such interesting property is their intrinsic tie to the DFA class of finite state machines:

All regular languages are recognised by DFAs and DFAs only recognise regular languages.

A DFA is a theoretical machine that recognises a set of strings. This set is the language of that machine. In particular, for all strings over an alphabet, the machine will either accept or reject it. The set of all strings that the machine accepts _is_ the language of that machine. 

Visually, a DFA is made up of a set of finite states with transitions among them. Some of these states are "accepting" and others are "rejecting". One of these states must be the start state. Any string over an alphabet is fed into the machine via that start state. As it's fed through, the machine transitions through its states by individually parsing the string's characters. Once all characters are parsed, the machine stops. It either lands in an accepting or rejecting state. If it's an accepting state, then the machine accepts the string. Conversely, it rejects it. So, the language of the DFA is the set of all strings that, after being parsed character-by-character, lands in an accepting state. To further clarify, let's construct a DFA that recognises the aforementioned regular language expressed by the regular expression `(aa)*`.

![DFA for language over a of even length](/images/irregular-javascript-expressions/dfa_for_language_over_a_of_even_length.webp)

Let's walk through how the machine recognises our language by looking at two example strings: `'a'` and `'aa'`. Ideally, the machine should accept `'aa'` and reject `'a'`.

`'aa'` begins in the start state "even length". The machine parses the first `'a'` and transitions to the "odd length" state. It then parses the last `'a'` and lands back into the "even length" state. Since there are no more characters to parse, the machine stops. So, the machine lands in an accepting state and accepts the string `'aa'`. 

Given `a`, it begins in the start state and transitions into the the "odd length" state once it parses the only character `'a'`. Since there are no characters left, the machine lands in a rejecting state and rejects `'a'`.

On a side note, different configurations of states and transitions yields different regular languages. It's possible that DFAs with seemingly different configurations accept the same set of strings. Intuitively, this is how seemingly different regular expressions act as syntactic sugar for the same regular language (like `(aa)*` and `(a{2})*`). 

So far, we've discussed how regular languages are recognised by and are intrinsically tied to DFAs. Since regular expressions act as syntactic for regular languages, we've also illustrated an intrinsic tie between DFAs and regular expressions. A key insight from this tie is that if some concept/object is incompatible with a DFA, then it must be incompatible with regular languages and regular expressions.

## 2. An Issue Of Language Recognition

The tension between JS regular expressions and actual regular expressions will bear on the aforementioned insight. To properly understand this, we will look at Chomsky's hierarchy of languages and what they mean. Then, we will concentrate on two levels in our hierarchy - regular languages and context free languages. We will see how each language reguire different machines. one is the DFA which we already saw and the other is the PDA. We will see how a DFA works and, informally, show that the difference is - a form of memory. With this in mind, we will use our insight and see that if something uses memory, then that thing is iincomptabile with regular languages, DFAs and hence, regular expressions.

### 2.1 Chomsky's Hierarchy

![Chomsky's Hierarchy](/images/irregular-javascript-expressions/chomsky_hierarchy.webp)

Chomsky's hierarchy contains subsets of formal languages. At the very bottom, we have regular languages and just above we have context-free languages. The interesting feature of this language is that each language in the hierarchy needs a different type of machine to recognise it. For our current purposes, we will be focusing on the difference between the machines used to recognise regular languages and context-free languages.

As a side note, the last layer are those languages recognised by Turing Machines.

### 2.2 Context-free languages and PDAs

A classic example of a context-free language is the set of all strings of the form `aⁿbⁿ` over an alphabet like `{'a', 'b'}`. This is the set of strings starting with some number of `a` strictly followed by the same number of `b`. It contains strings like `'ab'`, `'aabb'` or `''` (the empty string). Its corresponding regular expression is `(aa)*`.

Similarly to regular languages, one such interesting property is their intrinsic tie to the PDA (Pushdown Automata) class of finite state machines:

All context-free languages are recognised by PDAs and PDAs only recognise context-free languages.

Like a DFA, a PDA is a theoretical machine that recognises a set of strings. For all strings over an alphabet, the machine will either accept or reject it. The set of all strings that the machine accepts is the language of that machine.

The key difference from a DFA is that a PDA is equipped with an unbounded stack. This stack is what gives PDAs their extra expressive power as illustrated by Chomsky's hierarcy. This acts as a memory that a DFA simply does not have. 

Visually, a PDA is made up of a set of finite states with transitions among them, just like a DFA. However, each transition can also inspect and manipulate the stack: pushing symbols onto it, popping symbols off it, or both. One state is the start state, some states are accepting. A string is fed into the machine via the start state, and the machine transitions through its states by individually parsing the string's characters and managing its stack. Once all characters are parsed, the machine stops. If it lands in an accepting state (with some formulations also requiring an empty stack), the machine accepts the string. So, the language of the PDA is the set of all strings that, after being parsed character-by-character, lands in an accepting state. To further clarify, let's construct a PDA that recognises the aforementioned context-free language aⁿbⁿ.

### 2.3 Language Recognition (DFA vs PDA)

Given the aforementioned context-free language, it's impossible to create a DFA for it.

One crucial difference between a DFA and a PDA is the addition of a form of memory. Essentially, DFAs do not have any external memory. They only have states. At any point in their computation, the DFA only knows about its current state, the character that its reading and its transitions. It does not have memory of what it has seen before. 

Hence, we can how to cash out

## Footnotes

1. explain why the empty set

2. talk about the proof

3. ...
![Relation between regular expressions, DFAs, NFAs, regular languages and regular grammar](/images/irregular-javascript-expressions/relation_between_regexp_dfa_nfa_reg_lang_reg_gram.webp)

4. add the formal definition of a DFA here

5. add a the website for turning regexp into dfas

6. Explain that there is a DFA for all strings. That does not mean that the DFA is all powerful. The issue comes in dealineation. Talk of overgeneration and undergeneration.

7. ref ARJ article

8. talk of regex to DFA/NFA conversion and vice versa

9. named backreferences and named caputring groups