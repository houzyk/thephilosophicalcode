---
external: false
title: "A Tale Of Numbers And Functions"
description: "In theory, anything computational is a function - including numbers. In this article, we'll explore how to represent numbers and carry out basic arithmetic operations using nothing but functions."
author: "Muhammad Houzair Koussa"
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/a-tale-of-numbers-and-functions/cover.webp"
date: 2023-08-06
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

## 2. Numbers As Functions.

So far, we've seen that numbers do not have to be just numbers. We can break them down into simpler things. So, intuitively, numbers are mere fictions which can be represented by simpler things. For example, numbers can be represented by functions! To clarify, we say that a function is a blackbox that takes an input and gives back an output. Then, we follow [Alonzo Church](https://plato.stanford.edu/entries/church/ "Alonzo Church") in proposing that a number represents the number of times that an arbitrary function is called. So, a number N calls an arbitrary function N times.

  **In essence, a number N is a function that calls another arbitrary function N times.**

  So, the number `0` is a function that calls an arbitrary function zero times. In particular, it takes an arbitrary function F and an arbitrary value V . Then, it only returns that value without calling the function. It completely ignores the function F.

  ```
  0 = F => V => V
  ```

  In the same line of thought, the number `1` is a function that calls an arbitrary function one time. In particular, it takes an arbitrary function F and an arbitrary value V. Then, it returns that function with the value as argument.

  ```
  1 = F => V => F(V)
  ```

  Naturally, the number `2` is a function that calls an arbitrary function two times. In particular, it takes an arbitrary function F and an arbitrary value V. Then, it returns the function with the function with the value as argument.

  ```
  2 = F => V => F(F(V))
  ```

  Finally, we can recursively define other numbers as follows.

  ```
  3 = F => V => F(F(F(V)))
  4 = F => V => F(F(F(F(V))))
  ...
  ```

Intuitively, we may also visualise a number as the number of times that our arbitrary function is added to a stack. So, the number `3` would call the function F thrice and add it to the stack thrice.

![Adding Three Functions To The Stack](/images/a-tale-of-numbers-and-functions/Adding_Three_Functions_To_The_Stack.webp)

## 3. Numbers As JS Functions.

In JavaScript, we may now define the first four numbers as follows.

```
const zero = F => V => V;
const one = F => V => F(V);
const two = F => V => F(F(V));
const three = F => V => F(F(F(V)));
```
In order to test our definitions, we define our arbitrary function as `trackerFunc` and a variable `trackerFuncCallCount` that will count the number of times that `trackerFunc` is called.

```
let trackerFuncCallCount = 0;

const trackerFunc = () => {
  trackerFuncCallCount++; // increments for each function call
}
```

To test the definition of `zero`, we call it with `trackerFunc` as the arbitrary function argument and log the value of `trackerFuncCallCount`. We see that `trackerFuncCallCount` remains `0`.

```
zero(trackerFunc)();
console.log(trackerFuncCallCount); // => 0
```

Additionally, to test the definition of `one`, we call it with `trackerFunc` as the arbitrary function argument and log the value of `trackerFuncCallCount`. We see that `trackerFuncCallCount` is `1`!

```
one(trackerFunc)();
console.log(trackerFuncCallCount); // => 1
```


Moreover, we also see that the function `two` calls `trackerFunc` twice and `three` calls `trackerFunc` thrice!

```
two(trackerFunc)(); // trackerFuncCallCount => 2
three(trackerFunc)(); // trackerFuncCallCount => 3
```

In sum, we can easily see that any number N is a function that calls another arbitrary function N times. So, we've broken down numbers into simpler things. In particular, we've seen how numbers can be built on top of simple blackboxes that takes an input and gives an output. Hence, numbers can be represented by nothing but functions!

## 4. Basic Arithmetic Operations As Functions.

So far, we know how to represent numbers as functions. However, we can't do much with these numbers as functions yet. We wanna be able to carry out some basic arithmetic operations with them. For our current scope, we only look at how to represent addition and multiplication as functions. If you're curious about the rest, check the references at the end of this article.

### 4.1 Addition

Following Alonzo Church, let's propose that adding two numbers N and M together is like calling an arbitrary function N times and then calling it again M times. So, addition is a function that takes two functions N and M, an arbitrary function F and an arbitrary value V and returns the function N that calls `F` N times with `M(F)(V)` as value. In turn, `M(F)(V)` is the function M that calls `F` M times.

```
"+" = N => M => F => V => N(F)(M(F)(V))
```

Let's clarify `N(F)(M(F)(V))`. Let's not forget that N and M *represent* numbers as functions and that a number is a function that calls an arbitrary functions for some amount of times equal to that number. So, `N(F)(M(F)(V))` is passing the function `F` and `M(F)(V)` as arguments to the number `N`. So, `N` will call `F` N times with `M(F)(V)` as value. Remember that the F is called with that value only on the last function call! Visually;


![N Function Calls](/images/a-tale-of-numbers-and-functions/N_Function_Calls.webp)


Since `M(F)(V)` is the left after F is called N times. So, We have to evaluate it. Again, remember that M is a function that *represents* a number M that calls an arbitrary function M times!. So, `M(F)(V)` will simply call F for an M amout of times. Visually;

![M Function Calls](/images/a-tale-of-numbers-and-functions/M_Function_Calls.webp)

### 4.2 Multiplication


## 5. Basic Arithmetic Operations As JS Functions.

In JavaScript, we may now define addition and multiplication as follows.

```
const add = N => M => F => V => N(F)(M(F)(V));
const multiply = N => M => F => V => N(M(F))(V);
```

As we previously did to test our definitions, we use `trackerFunc` and the variable `trackerFuncCallCount` to count the number of times that `trackerFunc` is called.

### 5.1 Addition

To test the definition of `add`, firstly, we call it with `one`, `two` and `trackerFunc` as arguments. Secondly, we also try `three`, `three` and `trackerFunc`  as arguments.

```
add(one)(two)(trackerFunc)(); // trackerFuncCallCount => 3
add(three)(three)(trackerFunc)(); // trackerFuncCallCount => 6
```


Amazingly enough, we see that `trackerFuncCallCount` is `3` for `one` and `two`. This means that, as expected, `trackerFunc` has been called thrice.

We also see that `trackerFuncCallCount` is `6` for `three` and `three`. This means that, as expected, `trackerFunc` has been called 6 times.

Hence, we can easily see that addition of two numbers N and M is simply calling an arbitrary function N times and then M times.

### 5.1 Mutiplication

To test the definition of `multiply`, firstly, we call it with `one`, `two` and `trackerFunc` as arguments. Secondly, we also try `three`, `three` and `trackerFunc`  as arguments.

```
multiply(one)(two)(trackerFunc)(); // trackerFuncCallCount => 2
multiply(three)(three)(trackerFunc)(); // trackerFuncCallCount => 9
```


Amazingly enough, we see that `trackerFuncCallCount` is `2` for `one` and `two`. This means that, as expected, `trackerFunc` has been called twice.

We also see that `trackerFuncCallCount` is `9` for `three` and `three`. This means that, as expected, `trackerFunc` has been called 9 times.

> In sum, we saw that numbers can be broken down into simple Peano Axioms. This opened the possibility that numbers are mere fictions that can be represented by simple functions. Finally, following Alonzo Church, we represented numbers, addition and multiplication as nothing but functions.

## PS.

A. It turns out that we cannot derive all mathematical structures. This is because of [Gödel's Incompleteness Theorems](https://plato.stanford.edu/entries/goedel/#IncThe "Gödel's Incompleteness Theorems"). This implies that, firstly, there are true mathematical statements that cannot be proven. Secondly, it also implies that we cannot prove that mathematics is consistent. In other words, we cannot prove that mathematics itself does not lead to a contradiction.

B. If you want to dive deeper into the Peano Axioms. I highly recommend Bertrand Russell's Introduction To Mathematical Philosophy. Interestingly, we can also prove that all Peano Axioms are derivable from Hume's Principle in Second-Order Logic. This is called Frege's Theorem. Check out my proof [here](https://www.academia.edu/49584456/Freges_Theorem "here").

C. We can go even further and derive numbers from just sets. In particular, we define 0 as the empty set "∅" and recursively define numbers as follows.


```
0 = ∅
1 = {∅}
2 = {∅, {∅}}
3 = {∅, {∅}, {∅, {∅}}}
...
```

D. Representing a number N as a function that calls another arbitrary function N times is commonly known as the Church Numerals.

E. We can represent other arithmetic operations such as substraction and division using Church Encodings. Find out more [here](https://en.wikipedia.org/wiki/Church_encoding "here").

F. Notice that the Peano Axioms has a "successor" predicate. We can also represent this as a function as follows:

```
"succ" = N => F => V => F(N(F)(V))
```

G. Notice that the Peano Axioms also talks of equality "=". We can also represent identity as function as follows:

```
"=" = V => V
```

H. Here's all the code that we've seen (and more) in one place (Reload the page if you can't see the code or go [here](https://gist.github.com/houzyk/d38c66f1efcb62ea9e2803bd75812c73 "here")).


{% githubgist id="d38c66f1efcb62ea9e2803bd75812c73" /%}

I. I may have, unintentionally, left some technical or mathematical errors in this article. If you spot them, kindly send a PR to this [repo](https://github.com/houzyk/thephilosophicalcode "repo") or send me an email - houzairmk@icloud.con
