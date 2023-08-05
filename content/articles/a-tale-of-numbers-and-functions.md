---
external: false
title: "A Tale Of Numbers And Functions"
description: "In theory, anything computational is a function - including numbers. In this article, we'll explore how to represent numbers and carry out basic arithmetic operations using nothing but functions."
author: "Muhammad Houzair Koussa"
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/a-tale-of-numbers-and-functions/cover.webp"
date: 2023-08-05
---
![A Tale Of Numbers And Functions](/images/a-tale-of-numbers-and-functions/cover.webp)

> In theory, anything computational is a function - including numbers. In this article, we'll explore how to represent numbers and carry out basic arithmetic operations using nothing but functions.

## 1. Breaking Down Numbers.

A basic, but crucial, idea in mathematics is that complex things are built on top of simpler things. In other words, complex mathematical structures are derivable from simpler ones. So, for any reasonably complex mathematical structure, we can break it down into its simpler substructure. For example, the real numbers are built on top of the rational numbers. In turn, these are derived from the rational numbers which can be broken down into the integers and the natural numbers.

In the late 19th and early 20th century, mathematicians and philosophers alike pondered on our crucial idea. In particular, they pondered on the extent to which we can break down mathematical structures. Crucially, they were in search of a foundation for all of mathematics. They pondered on whether there was any such thing as the *simplest* mathematical structure - a sort of mathematical atom. These atoms would be the foundations upon which all other mathematical structures are built. They thought that, with this foundation in hand, we would be able to mechanically/programatically derive any mathematical structure irrespective of its complexity. As a result, all mathematical structures would be broken down into these atoms. In other words, we can picture mathematics itself as a pyramid of structures stacked on top of each other. Complex mathematical structures are on top while the 'simpler' structures are nearer to the foundation.

![Mathematical Pyramid Of Complex And Simple Things](/images/a-tale-of-numbers-and-functions/Mathematical_Pyramid_Of_Complex_And_Simple_Things.webp)

Naturally, in their search of the mathematical atoms, they pondered on numbers and how to break them down into simpler substructures. In particular, thanks to the work of [Giuseppe Peano](https://en.wikipedia.org/wiki/Giuseppe_Peano "Giuseppe Peano"), we were able to derive numbers from a simpler structure called the Peano Axioms. These are as follows.

1. Zero is a number.
2. The successor of a number is a number.
3. If the successors of two numbers are equal, then they are the same number.
4. Zero is not the successor of any number.
5. Equality '=' is reflexive, symmetric, transitive and closed.


For our current purposes, we do not need to understand the technical details and terms behind these axioms. The only idea to keep in mind is that numbers are built on top of simpler structures. In particular, we can derive them from the "simpler" Peano axioms. More importantly, we *can break down numbers into simpler things*.

![Mathematical Pyramid Of Complex And Simple Things With The Peano Axioms](/images/a-tale-of-numbers-and-functions/Mathematical_Pyramid_Of_Complex_And_Simple_Things_With_The_Peano_Axioms.webp)

## 2. Numbers As Functions.

## 3. Numbers As JS Functions.

## 4. Basic Arithmetic Operations With Functions.

## 5. Basic Arithmetic Operations With JS Functions.

## 6. Wrap Up.

## PS.

A. It turns out that we cannot derive all mathematical structures. This is because of [Gödel's Incompleteness Theorems](https://plato.stanford.edu/entries/goedel/#IncThe "Gödel's Incompleteness Theorems"). This implies that, firstly, there are true mathematical statements that cannot be proven. Secondly, it also implies that we cannot prove that mathematics is consistent. In other words, we cannot prove that mathematics itself does not lead to a contradiction.

B. If you want to dive deeper into these axioms. I highly recommend Bertrand Russell's Introduction To Mathematical Philosophy. Interestingly, we can also prove that all Peano Axioms are derivable from Hume's Principle in Second-Order Logic. This is called Frege's Theorem. Check out my proof [here](https://www.academia.edu/49584456/Freges_Theorem "here").

C. We can go even further and derive numbers from just sets. In particular, we define 0 as the empty set "∅" and recursively define numbers as follows.


```
0 <=> ∅
1 <=> {∅}
2 <=> {∅, {∅}}
3 <=> {∅, {∅}, {∅, {∅}}}
...
```

D. Here's all the code that we've seen in one place.
