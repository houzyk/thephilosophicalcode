---
external: false
title: "The Perfect Compression Algorithm Does Not Exist"
description: "In this article, we'll informally prove that the perfect compression algorithm does not (and cannot) exist."
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/the-perfect-compression-algorithm-does-not-exist/cover.webp"
date: 2025-10-23
author: "Muhammad Houzair Koussa"
---
![The Perfect Compression Algorithm Does Not Exist](/images/the-perfect-compression-algorithm-does-not-exist/cover.webp)

> In this article, we'll informally prove that the perfect compression algorithm does not (and cannot) exist.

## 1. Preliminaries

To make the upcoming proof as clear and concise as possible, we'll start by clarifying the claim (that the perfect compression algorithm does not exist) and contrasting it with some related but subtley different ideas. After that, we'll sketch a brief outline of the proof to give a sense of how it unfolds.

### Clarifying The Claim

Intuitively, the claim contains three ambigious terms that require clarification - 'perfect', 'compression' and 'algorithm'. 

#### Algorithm

Starting with the latter, let's characterise an algorithm as a function - a black-box that takes an input and returns an output. The primary motivation behind this characterisation is theoretical. At its core, the [Lambda Calculus](https://plato.stanford.edu/entries/lambda-calculus/ "Lambda Calculus") consists entirely of black-box functions that can be created and applied. Despite this simplicity, it's a well-established result that the Lambda Calculus is a universal model of computation equivalent to Turing Machines. In other words, anything that can be computed by a conventional computer can be represented within the Lambda Calculus. So, characterising 'algorithm' as 'function' seems like a theoretically robust way to clarify what an algorithm is.

#### Compression

Secondly, let's characterise compression as follows:

    a. Compression is essentially about strings.

    b. If a string `SS` is compressed into a string `S`, then the length of `S` is strictly less than the length of `SS`.

    c. `S` encodes `SS`. In other words, the information contained in `SS` is retrievable from `S` even if `S` is smaller in length. So, there is a procedure to decode/retrieve/decompress the information contained in `SS` from `S`. Formally, there exists a decompression function `decompress` such that `SS = decompress(S)`.

As an illustration, consider the string `11111111110000000000` (10 `1`'s followed by 10 `0`'s). Intuitively, `1(10)0(10)` compresses `11111111110000000000`. Notice how our compressed string meets all of the aforementioned characterisations.

    a. `11111111110000000000` and `1(10)0(10)` are both strings.

    b. The length of `1(10)0(10)` is strictly less than the length of `11111111110000000000`.

    c. We can easily write a decompression function that returns `11111111110000000000` given `1(10)0(10)`.

Our characterisation applies to all kinds of strings - without restriction. This is crucial because it means that we can not only compress arbitrary strings but also compress programs themselves, and even compress strings into programs. Moreover, we have not imposed any limit on string length, allowing us to compress strings of arbitrary and unbounded length. For instance, consider the sequence of digits of π up to _n_ digits. As _n_ tends to infinity, the corresponding string grows arbitrarily long. Yet, this infinite family of strings can be compressed into a finite [program](https://en.wikipedia.org/wiki/Chudnovsky_algorithm "program") that returns π up to _n_ digits. In effect, we have compressed an unbounded sequence of strings into a single finite and bounded program.

#### Perfect

Thirdly, a compression algorithm is perfect if it returns the smallest possible compression of any given string. In other words, given a string `SS`, the compression function `compress` is perfect if and only if `compress(SS)` returns a compressed string `S` such that, for all compressions of `SS`, `S` has the smallest length. For simplicity, we'll say that `S` is the minimal compression of `SS`.

For example, `1(5*2)0(5*2)` also compresses `11111111110000000000`. Intuitively, `1(10)0(10)` is a better compression because it's shorter in length. Colloquially, `1(10)0(10)` is a "more perfect" compression than `1(5*2)0(5*2)`.

Before wraping things up, note that our proof will only be considering binary strings, i.e. strings that only contains `0`'s and `1`'s. Actually, we will be proving that the perfect compression algorithm does not exist by considering the set of all possible binary strings denotated as `{0,1}*`. Despite this simple set The latter is an infinite set that contains all possible pieces of information including all possible programs and data (it also includes the empty string). This keeps our proof theoretically robust as one can easily imagine transition functions which maps any strings to the strings in `{0,1}*` Consequently, we've unpacked our claim into:

> For all strings `SS` in `{0,1}*`, there is no compression function `compress` such that `compress(S)` is the minimal compression of `SS`. 

This means that we cannot have a compression algorithm that will output the smallest possible compression of any given piece of data.


### Contrasting Our Claim

#### Compressing All Possible Strings

It's also noteworthy to contrast our claim with the similar but subtley different claim that it's impossible to compress **all** strings. Actually, that is quite easy to prove. Let's consider all binary strings of length _n_. Since we're in binary, the total number of such strings is 2^_n_ (2 to the power of _n_). By definition, the length of a compressed string is strictly less than the length of the string itself. So, for all strings of length _n_, the total number of compressed strings available is at most 2^(_n_-1). Trivially, 2^(_n_-1) is less than 2^_n_. Hence, there are more strings of length _n_ than strings available to compress them. By mathematical induction, it's impossible to compress all strings.

#### General Compression Algorithms

Secondly, our claim is not that there cannot exist general compression algorithms. We do have . The crucial point is that these general compressions algorithms are not perfect. In other words, they will never be able to produce the smallesst possible compression of any piece of data. 

#### Specialised Compression Algorithms

Thirdly, this gives rise to a "no free lunch" princple concerning compression algorithms.Specialised compressions algorithm will always have a limit. We could, for example, theoretically come up with the perfect compression algorith


### Proof Outline

Our proof is a _reductio ad absurdum_ (proof by contradiction). Essentially, we will assume that the perfect compression function exists to derive a contradiction. In particular, with our assumption in hand, we will be able to build a function `berry` which returns the smallest string that can be compressed to at least `n` bits. Finally, we will build another function that yields all strings in `{0,1}*` to show that `berry` is inconsistent. Hence, a perfect compression algorithm cannot exist. 


## 2. Kolmogorov Complexity

## 3. Berry's Paradox

## 4. Berry's Paradox As A Function

## 5. Wrapping Up

## Footnotes