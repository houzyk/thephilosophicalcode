---
external: false
title: "(Ir)regular JavaScript Expressions"
description: "The MDN reference on JavaScript regular expressions\"JavaScript regular expressions are in fact not regular\". This highlights a subtle tension between actual regular expressions and their implementation in JavaScript. In this article, we examine this tension by exploring the theory behind regular expressions, cashing out the tension as an issue of computational expressivity and showing how backreferences make JavaScript regular expressions irregular."
author: "Muhammad Houzair Koussa"
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/irregular-javascript-expressions/cover.webp"
date: 2026-01-31
---

![(Ir)regular JavaScript Expressions](/images/irregular-javascript-expressions/cover.webp)

> [The MDN reference on JavaScript regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions "The MDN reference on JavaScript regular expressions") states that "JavaScript regular expressions are in fact not regular". This highlights a subtle tension between actual regular expressions and their implementation in JavaScript. In this article, we examine this tension by exploring the theory behind regular expressions, cashing out the tension as an issue of computational expressivity and showing how backreferences make JavaScript regular expressions irregular.

## 1. Synopsis

Broadly, our examination consists of three sections.

In section 1, we explore the theory behind regular expressions in order to get a grasp of what actual regullar expressions are. We begin by showing how regular expressions act as syntactic sugar for a larger class of languages called *regular languages*. We then discuss how these languages are generated from a class of machines called *Deterministic Finite Automata* (DFA).