---
external: false
title: "A Tale Of Numbers And Functions"
description: "In a land far away, numbers are not numbers. In this article, we'll take a trip down this faraway land accompanied by a guy who always says 'no' to peas and our good friend Alonzo Church. In the end, we'll see how numbers might actually just be functions."
author: "Muhammad Houzair Koussa"
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/a-tale-of-numbers-and-functions/cover.webp"
date: 2023-08-02
---
![A Tale Of Numbers And Functions](/images/a-tale-of-numbers-and-functions/cover.webp)

> In a land far away, numbers are not numbers and arithmetic is not what it usually is. In this article, we'll take a trip down this faraway land accompanied by a guy who always says 'no' to peas and our good friend Alonzo Church. In the end, we'll see how numbers and arithmetic could just be functions and function calls.

## 1. The Guy Who Says 'No' To Peas.

Think of how we usually teach elementary and secondary mathematics. We always start with the simpler things and we add complexity as we proceed. This mirrors the crucial idea that, in mathematics, complex things are built on top of simpler things. For example, calculus is built on top of algebra which itself is built on top of arithmetic. With this idea in mind, it feels quite natural to ask how far can we break mathematical things down into simpler things.

In the late 19th and early 20th century, mathematicians and philosophers alike pondered on these simpler things and their implications. In particular, they were in search of a foundation for all of mathematics. They pondered on whether there was any such thing as the *simplest* mathematical thing - a sort of mathematical atom. They thought that, with this foundation in hand, we would be able to systematize all of mathematics. Using these atoms, we would be able to mechanically/programatically derive all mathematical statements. As a result, mathematics would be complete and uniform [1].

It felt quite intuitive to say that numbers are one of the simpler mathematical things out there. So, it is natural to propose that in order to get to these mathematical atoms, we should begin by breaking down the complexity of numbers themselves (the hope behind being that numbers are built on top of even simpler things).

Thanks to the work of these mathematicians and philosophers, we now know that the imaginary numbers are built on top of the reals. In turn, these are built on top of the rationals which are derived from the integers. Finally, we reach the 'simple' numbers (`0`, `1`, `2`...). We can visualise this simplification as a pyramid of complex things stacked on top of simpler ones. Complex mathematical theories are on top while the 'simpler' structures are nearer to the foundation.

![Mathematical Pyramid Of Complex And Simple Things](/images/a-tale-of-numbers-and-functions/Mathematical_Pyramid_Of_Complex_And_Simple_Things.webp)


With this visualisation in hand, we may better contextualize the work of the mathematician Giuseppe Peano. In particular, he broke down our 'simple' numbers into even simpler things called the Peano Axioms. Briefly, the idea is that all the natural numbers can be derived from the following statements/axioms.

1. Zero is a number.
2. The successor of a number is a number.
3. If the successors of two numbers are equal, then they are the same number.
4. Zero is not the successor of any number.
5. Equality '=' is reflexive, symmetric, transitive and closed.


For our current purposes, we do not need to understand the technical details and terms behind these axioms [2]. The only idea to keep in mind is that we *can break down numbers into simpler things* [3]. Numbers, in themselves, do not have to be just numbers. They are mere fictions built on top of simpler things.

![Mathematical Pyramid Of Complex And Simple Things With The Peano Axioms](/images/a-tale-of-numbers-and-functions/Mathematical_Pyramid_Of_Complex_And_Simple_Things_With_The_Peano_Axioms.webp)

## 2. Church Numerals.



## 3. Church Numerals In JS.

## 4. How To Calculate For Dummies.

## 5. How To Calculate For Dummies - The JS Edition.

## 6. Wrap Up.

## PS.

1. Godel

2. We can mathematically prove that all of arithmetic is derivable from the Peono Axioms in Second-Order Logic. A few years back, I wrote an undergraduate paper on just that. Here's the link.

2. We can go even further and say that numbers are just sets.

3. I do not actually know if Peano always said 'no' to peas.

3. Here's all the code that we've seen in one place.
