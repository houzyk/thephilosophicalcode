---
external: false
title: "(Ir)regular JavaScript Expressions"
description: "The MDN reference on JavaScript regular expressions notes that \"JavaScript regular expressions are in fact not regular\". This highlights a subtle tension between actual regular expressions and their implementation in JavaScript. In this article, we examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart."
author: "Muhammad Houzair Koussa"
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/irregular-javascript-expressions/cover.webp"
date: 2026-02-01
---

![(Ir)regular JavaScript Expressions](/images/irregular-javascript-expressions/cover.webp)

> [The MDN reference on JavaScript regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions "The MDN reference on JavaScript regular expressions") notes that "JavaScript regular expressions are in fact not regular". This highlights a subtle tension between actual regular expressions and their implementation in JavaScript. In this article, we examine this tension by contrasting JavaScript regular expressions with their theoretical counterpart.

## Synopsis

For context, here's the full note from MDN:

> JavaScript regular expressions are in fact not regular, due to the existence of backreferences (regular expressions must have finite states). However, they are still a very useful feature.

By drawing on ideas from this note, our examination is organised into three sections. Firstly, we explore the theory behind regular expressions to understand why they must have finite states. Secondly, we cash out the underlying tension as an issue of *language recognition*. Finally, we conceptually analyse how backreferences make JavaScript regular expressions irregular.

In section 1, we show how regular expressions act as syntactic sugar for a class of languages called 'regular languages'. We then discuss how these languages are recognised by and are intrinsically tied to a class of *finite state* machines called 'Deterministic Finite Automata' (DFA).

In section 2, we take a look at Chomsky's hierarchy. Each hierarchy hints at how different classes of languages are recognised by different classes of machines. This gives us a way to cash out the aforementioned tension by talking about the different levels in the hierarchy. Essentially, to understand why JavaScript regular expressions are not regular *is* to understand how they recognise a larger (hence different) class of languages than actual regular expressions.

In section 3, we dive into some code to understand what backreferences are and how they work in practice. We then conceptually analyse the way they work to abduct that they rely on memory. A fortiori, JavaScript regular expressions rely on memory. In contrast, DFA's are state machines without memory that are intrinsically tied to regular languages. So, JavaScript regular expressions are not regular because they recognise a different class of languages than DFA's.

## 1. The Theory Behind Regular Expressions

### 1.1 Regular Expressions As Syntactic Sugar

### 1.2 Regular Languages

### 1.3 Deterministic Finite Automata (DFA)

## 2. An Issue Of Language Recognition

### 2.1 Chomsky's Hierarchy

### 2.2 Language Recognition

## 3. Backreferences

### 3.1 Code - In Practice

### 3.2 Code - Conceptual Analysis

### 3.3 Memory And Finite States

## Footnotes