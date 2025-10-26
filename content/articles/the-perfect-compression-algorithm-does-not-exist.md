---
external: false
title: "The Perfect Compression Algorithm Does Not Exist"
description: "In this article, we'll informally prove that the perfect compression algorithm does not (and cannot) exist."
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/the-perfect-compression-algorithm-does-not-exist/cover.webp"
date: 2025-10-26
author: "Muhammad Houzair Koussa"
---
![The Perfect Compression Algorithm Does Not Exist](/images/the-perfect-compression-algorithm-does-not-exist/cover.webp)

> In this article, we'll informally prove that the perfect compression algorithm does not (and cannot) exist.

## 1. Preliminaries

To make the upcoming proof [1] as clear and concise as possible, we'll start by clarifying the claim, that the perfect compression algorithm does not exist, and contrasting it with some related but subtly different ideas. After that, we'll sketch a brief outline of the proof to give a sense of how it unfolds.

### Clarifying The Claim

Intuitively, the claim contains three ambiguous terms that require clarification - 'perfect', 'compression' and 'algorithm'.

#### Algorithm

Starting with the latter, let's characterise an algorithm as a function - a black-box that takes an input and returns an output. The primary motivation behind this characterisation is the [Lambda Calculus](https://plato.stanford.edu/entries/lambda-calculus/ "Lambda Calculus"). At its core, the Lambda Calculus consists entirely of black-box functions that can be created and applied. Despite this simplicity, it's a well-established result that the Lambda Calculus is a universal model of computation equivalent to Turing Machines. In other words, anything that can be computed by a conventional computer can be represented within the Lambda Calculus.

Thus, characterising an algorithm as a function seems like a theoretically robust way to clarify what an algorithm is. Importantly, this means that a proof demonstrating that a perfect compression algorithm does not exist would carry universal and objective validity. Regardless of computational power, model or physical implementation - whether classical, quantum or otherwise - no such algorithm could exist [2].

#### Compression

Secondly, let's characterise compression as follows [3]:

    a. Compression is essentially about strings.

    b. If a string `SS` is compressed into a string `S`, then the length of `S` is strictly less than the length of `SS`.

    c. `S` encodes `SS`. In other words, the information contained in `SS` is retrievable from `S` even if `S` is smaller in length. So, there is a procedure to decode/decompress the information contained in `SS` from `S`. Formally, there exists a decompression function `decompress` such that `SS = decompress(S)`.

As an illustration, consider the string `11111111110000000000` (10 `1`'s followed by 10 `0`'s). Intuitively, `1(10)0(10)` compresses `11111111110000000000`. Notice how our two strings meet all of the aforementioned characterisations.

    a. `11111111110000000000` and `1(10)0(10)` are both strings.

    b. The length of `1(10)0(10)` is strictly less than the length of `11111111110000000000`.

    c. We can easily write a decompression function that returns `11111111110000000000` given `1(10)0(10)`.

Notice that our characterisation applies to all kinds of strings - without restriction. This means that, not only can we compress arbitrary strings, but also compress programs themselves, and even compress strings into programs. Moreover, we have not imposed any limit on string length, allowing us to compress strings of arbitrary and unbounded length. For instance, consider the sequence of digits of π up to _n_ digits. As _n_ tends towards infinity, the corresponding string grows arbitrarily long. Yet, this infinite set of strings can be compressed into a finite [program](https://en.wikipedia.org/wiki/Chudnovsky_algorithm "program") that returns π up to _n_ digits. In effect, we have compressed an unbounded set of strings into a single finite and bounded program.

#### Perfect

Thirdly, a compression algorithm is perfect if it returns the smallest possible compression of any given string. In other words, given a string `SS`, the compression function `compress` is perfect if and only if `compress(SS)` returns a compressed string `s` such that, for all compressions of `SS`, `s` has the smallest length. For simplicity, we'll say that `s` is the minimal compression of `SS`.

For example, `1(5*2)0(5*2)` also compresses `11111111110000000000`. Intuitively, `1(10)0(10)` is a better compression because it's shorter in length. Colloquially, `1(10)0(10)` is a "more perfect" compression than `1(5*2)0(5*2)`.

Before wrapping things up, note that we'll only be considering binary strings throughout our proof, i.e. strings that only contains `0`'s and `1`'s. In particular, our proof demonstrates that there is no perfect compression algorithm for all strings within the set of all binary strings denoted as `{0,1}*` (including the empty string). This is in line with ensuring the universal and objective validity of our proof since `{0,1}*` is an infinite set that contains all possible pieces of data and computer programs [4]. 

To wrap things up, we may now clarify the claim as follows:

> For all strings `SS` in `{0,1}*`, there is no compression function `perfect_compress` such that `perfect_compress(SS)` returns the minimal compression of `SS`.

Informally, this means that:

> We cannot have a compression algorithm that will output the smallest possible compression of any given piece of data. 

### Contrasting The Claim

Having clarified the claim, let's now contrast it with some related but subtly different ideas.

#### Compressing All Strings

One such idea is the impossibility of compressing *all* strings. As a side note, this impossibility is quite easy to prove. 

Consider all binary strings of length `n`. Since we're in binary, the total number of such strings is `2 ** n` (`2` to the power of `n`). Given one of the aforementioned characterisations of compression, the length of a compressed string `S` is strictly less than the length of the original string `SS` itself. So, the total number of strings available to compress all strings of length `n` is at most `2 ** (n-1)`. Trivially, `2 ** (n-1)` is less than `2 ** n`. Hence, there are more strings of length `n` than strings of length at most `n-1` available to compress them into. By mathematical induction, it's impossible to compress all strings. So, the set of all binary strings `{0,1}*` can be partitioned into the subset of incompressible strings and the subset of compressible strings.

In contrast, we're not claiming that we cannot compress all strings. Instead, our claim is slightly stronger. We're claiming that there is no perfect compression algorithm even for the subset of compressible strings.

#### General Compression Algorithms

Secondly, we're not claiming that there are no general compression algorithm. These are algorithms that can compress any piece of data. In fact, there are several programs that implement such algorithms (like [gzip](https://www.gzip.org/ "gzip")). In contrast, we're claiming that there are no _perfect_ general compression algorithms. This means that any general compression algorithm has a hard limit - they cannot output the smallest possible compression of any piece of data.

#### Specialised Compression Algorithms

Thirdly, we're not claiming that there are no specialised compression algorithms. These are algorithms that can compress any piece of data of a given type. For example, [WebP](https://developers.google.com/speed/webp "WebP") can be considered as a specialised compression algorithm for image data. Moreover, we're also not claiming that there are no perfect and specialised compression algorithms [5]. To understand this subtlety, recall that our claim is that there is no perfect compression algorithm for the subset of compressible strings in `{0,1}*`. A specialised compression algorithm does not focus on that whole subset. Instead, it focuses on compressing strings drawn from a smaller subset (corresponding to a particular type of data) within that subset of compressible strings. In contrast, our claim concerns the whole subset of compressible strings, not the smaller subsets on which specialised algorithms focus.

However, our claim does have implications on specialised compression algorithm. In particular, they are subject to a no-free-lunch limit - even if these algorithms may be perfect within their specialised subset, they cannot be perfect in compressing anything beyond that subset. Moreover, it's impossible to simply merge multiple potentially perfect specialised algorithms to create a perfect “master compression algorithm” across all data types.

### Proof Outline

Our proof is a _reductio ad absurdum_ (proof by contradiction). Essentially, we'll assume that the perfect compression function exists to derive a contradiction. With our assumption in hand, we'll build a function `berry` which returns the smallest string that can be compressed with at least `n` characters. In particular, `berry` is composed of the perfection compression function and another function that yields all strings in `{0,1}*`. Our contradiction arises in showing that, given some input, the length of the `berry` function is inconsistent with its return value.

## 2. Kolmogorov Complexity

Let's begin our proof by assuming that the perfect compression function exists (call that function `perfect_compress`). We'll be writing most of the proof in Python to make it easier to follow along.

```py
def perfect_compress(SS: str) -> str:
    pass
```

Recall that `perfect_compress` takes any string `SS` and returns the minimal compression `s` of `SS`. In other words, for all possible compressions of `SS`, `s` is the smallest in length.

Since, for some arbitrary string `SS`, `perfect_compress(SS)` returns a string, we may find the length of the minimal compression of `SS` by calling `len(perfect_compress(SS))`. In fact, that particular length is called the [Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity "Kolmogorov Complexity") of any arbitrary string. So, given that `perfect_compress` supposedly exists, we may now write another function that returns the Kolmogorov Complexity of any string.

```py
def kolmogorov_complexity(SS: str) -> int:
    return len(perfect_compress(SS))
```

As a side node, the Kolmogorov Complexity of a string `SS` is often defined as the length of the shortest _computer program_ in some _fixed language_ that returns `SS`. There are two points worth unpacking here. 

Firstly, the shortest computer programs that returns `SS` is essentially the minimal compression of `SS`. To see why, recall that our aforementioned characterisations of compression applies to all strings without restriction such that we may compress strings into programs. 

Secondly, the impossibility of a perfect compression algorithm implies the impossibility of computing the Kolmogorov Complexity of any string. At first glance, one might suspect that the dependence of the Kolmogorov Complexity on some fixed language impacts the  universal and objective validity of our proof. Perhaps, we could avoid these impossibilities by changing the language. However, this is a no-go. The crucial point to understand is that the numerical _value_ of the Kolmogorov Complexity changes with respect to the chosen language. However, the computation of that value remains impossible independent of the language. In other words, although the value is language-relative, the impossibility of computing it is universal, objective and language-independent.

## 3. Berry's Paradox

With `kolmogorov_complexity` in hand, we may now build the `berry` function. Before doing that, let's take a look at Berry's Paradox. 

Consider the following "Berry Statement":

> The smallest positive integer that cannot be described in fewer than 15 English words.

Let's say that there is such an integer and let's call it `B`. So, `B` is the smallest positive integer that cannot be described in fewer than 15 English words. In other words, we need at least 15 English words to describe `B`. To witness Berry's Paradox, notice that the Berry Statement itself is a description of `B`. Crucially, the Berry Statement only contains 14 words. Thus, we've described an integer `B`, which by definition cannot be described in fewer than 15 words, with just 14 words. This is the essence of Berry's Paradox.

We may now build the `berry` function which is quite close in spirit to the Berry Statement. In particular, `berry` is a function that returns the smallest possible string that can be compressed with at least `n` characters. Given an input `n`, `berry(n)` returns the smallest string that can be compressed using strings of at least `n` in length. 

For example, if `berry(n)` returns `SSB`, then we need at least `n` characters to compress `SSB`. So, any compression `SB` of `SSB` is at least `n` in length. So, `SB` compresses `SSB` such that `len(SB)` is less than `len(SSB)` and `len(SB)` is at least `n`.

In terms of implementation, for some input `n`, `berry` loops through every possible binary strings in ascending order. For each binary string, it checks whether the Kolmogorov Complexity of that string is at least `n`. If that's the case, it returns that string, else the loop continues. In particular, if some string `SS` meets our check, then the Kolmogorov Complexity of `SS` is at least `n`. So, the minimal compression `s` of `SS` is at least `n` in length. Since we're looping through all strings in ascending order, the first string that meets our check and which `berry` returns is the smallest possible string that can be compressed with at least `n` characters.

In essence, `berry` requires two components - a function that yields all binary string in ascending order and a check for each binary string using `kolmogorov_complexity`.

The function that yields all binary strings can be implemented in Python as follows:

```py
from typing import Iterable

def all_binary_strings_in_ascending_order() -> Iterable[str]:
    n = 0
    while True:
        for i in range(2 ** n):
            yield f"{i:0{n}b}" if n > 0 else ''
        n += 1
```

Once we have `all_binary_strings_in_ascending_order`, we can use `kolmogorov_complexity` to implement `berry` in Python as follows:

```py
def berry(n: int) -> str:
    for binary_string in all_binary_strings_in_ascending_order():
        if kolmogorov_complexity(binary_string) >= n:
            return binary_string
```

## 4. Quod Erat Demonstrandum

With `berry` in hand, we may now derive a contradiction and reject our assumption that the perfect compression algorithm `perfect_compress` exists.

Firstly, notice that `berry` is of some finite length (call it `BERRY_LENGTH`). This is because all of its components are finite in length.

In particular, `all_binary_strings_in_ascending_order` is finite in length (in our case, it's the number of characters taken to write our Python snippet once converted to binary). One should distinguish between the fact that `all_binary_strings_in_ascending_order` generates infinitely many strings and that its code is finite in length. We're solely concerned with its finite code length.

Moreover, the loop and check are both of finite length. The check contains the `kolmogorov_complexity` function which itself contains the `perfect_compress` function. We need to impose that `perfect_compress` is of finite length. If it's not, then we would have a function infinite in length which already proves our claim that there is no perfect compression algorithm.

Secondly, let's call `berry` with some input `2 * BERRY_LENGTH`. So, `berry(2 * BERRY_LENGTH)` returns the smallest possible string `b` that can be compressed with at least `2 * BERRY_LENGTH` characters. In other words, `b` cannot be compressed in fewer than `2 * BERRY_LENGTH` characters.

Similar in spirit to Berry's Paradox, notice that the function call `berry(2 * BERRY_LENGTH)` is itself a compression of `b` since `berry(2 * BERRY_LENGTH)` returns `b`.

Crucially, `berry(2 * BERRY_LENGTH)` is of length `BERRY_LENGTH` and `BERRY_LENGTH` is less than `2 * BERRY_LENGTH`.

Thus, we've compressed a string `b`, which by definition cannot be compressed in fewer than `2 * BERRY_LENGTH` characters, with a program of `BERRY_LENGTH` characters in length. That's a contradiction! So, our assumption that `perfect_compress` exists is false. Hence, the perfect compression algorithm does not exist [6].

## Footnotes

1. This article is heavily inspired by the ideas and works of [Andrey Kolmogorov
](https://en.wikipedia.org/wiki/Andrey_Kolmogorov "Andrey Kolmogorov"), [Ray Solomonoff](https://en.wikipedia.org/wiki/Ray_Solomonoff "Ray Solomonoff"), [G. G. Berry](https://en.wikipedia.org/wiki/Berry_paradox "G. G. Berry") and [Gregory Chaitin](https://en.wikipedia.org/wiki/Gregory_Chaitin "Gregory Chaitin"). Our proof itself is an informal adaptation of their ideas and work.

2. In my opinion, our proof's universal and objective validity is fully dependent on the supposed veracity of [The Church-Turing Thesis](https://plato.stanford.edu/entries/church-turing/ "The Church-Turing Thesis").

3. Our three characterisations of compression are meant to only be necessary and not sufficient.

4. To understand how `{0,1}*` contains all possible pieces of data and computer programs, we have to come up with transition functions. In practice, these are mappings from one set of characters to another. For example, given the set of all possible characters in Python, a transition function would map each character to a substring containing only `0`'s and `1`'s. Consequently, we would then get the binary substring representing any particular Python program.

5. To say that we're "not claiming that there are no perfect and specialised compression algorithm" does not imply that there are such algorithms nor that they do not exist.

6. In hindsight, our proof not only shows that the perfect compression algorithm does not exist but also that it's impossible to compute the Kolmogorov Complexity of any string.

I may have, unintentionally, left some technical or mathematical errors in this article. If you spot them, kindly send a PR to this [repo](https://github.com/houzyk/thephilosophicalcode "repo") or send me an email - houzairmk@icloud.com.