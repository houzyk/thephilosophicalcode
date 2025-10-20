---
external: false
title: "The Perfect Compression Algorithm Does Not Exist"
description: "In this article, we'll informally prove the claim that the perfect compression algorithm does not exist."
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/the-perfect-compression-algorithm-does-not-exist/cover.webp"
date: 2025-10-20
author: "Muhammad Houzair Koussa"
---
![The Perfect Compression Algorithm Does Not Exist](/images/the-perfect-compression-algorithm-does-not-exist/cover.webp)

> In this article, we'll informally prove the claim that the perfect compression algorithm does not exist.

## 1. Preliminaries

In an effort to make our upcoming proof as clear and concise as possible, let's clarify a few things.

#### Unpacking Our Claim

Intuitively, our claim contains three ambigious terms that require clarification - 'perfect', 'compression' and 'algorithm'. 

Starting with the latter, let's characterise an algorithm as a function - a black-box that takes an input and returns an output. The primary motivation behind this characterisation is theoretical. At its core, the [Lambda Calculus](https://plato.stanford.edu/entries/lambda-calculus/ "Lambda Calculus") consists entirely of black-box functions that can be created and applied. Despite this simplicity, it's a well-established result that the Lambda Calculus is a universal model of computation equivalent to Turing Machines. In other words, anything that can be computed by a conventional computer can be represented within the Lambda Calculus. So, characterising 'algorithm' as 'function' seems like a theoretically robust way to clarify what an algorithm is.  

Secondly, let's characterise compression as follows:

    a. Compression is essentially about strings.

    b. If a string `S` is compressed into a string `S1`, then the length of `S1` is strictly less than the length of `S`.

    c. `S1` encodes `S`. In other words, there is a procedure to decode the information contained in `S` from `S1`. Formally, there exists a function `F` such that `S = F(S1)`.

As an illustration, consider the string `11111111110000000000` (10 `1`'s followed by 10 `0`'s). Intuitively, `1(10)0(10)` compresses `11111111110000000000`. Notice how our compressed string meets all of the aforementioned characterisations.

    a. `11111111110000000000` and `1(10)0(10)` are both strings.

    b. The length of `1(10)0(10)` is strictly less than the length of `11111111110000000000`.

    c. We can easily write a function that returns `11111111110000000000` given `1(10)0(10)`.


Thirdly, a compression algorithm is perfect if it returns the smallest possible compression of any given string. In other words, given a string S, the compression function `compress` is perfect if and only if `compress(S)` returns a compressed string S1 such that, for all compressions of S, S1 has the smallest length. For simplicity, we'll say that S1 is the minimal compression of S.

For example, `1(5*2)0(5*2)` also compresses `11111111110000000000`. Intuitively, `1(10)0(10)` is the better compression because it's shorter in length. Colloquially, `1(10)0(10)` is a more "perfect" compression than `1(5*2)0(5*2)`.

Before wraping things up, note that our proof will only be considering binary strings, i.e. strings that only contains `0`'s and `1`'s. Actually, we will be proving that the perfect compression algorithm does not exist by considering the set of all possible binary strings denotated as `{0,1}*`. The latter is an infinite set that contains all possible pieces of information including all possible programs and data. Consequently, we've unpacked our claim into:

> For all strings `S` in `{0,1}*`, there is no compression function `compress` such that `compress(S)` is the minimal compression of `S`. 

This means that we cannot have a compression algorithm that will output the smallest possible compression of any given piece of data.


#### Contrasting Our Claim

It's also noteworthy to contrast our claim with the similar but subtley different claim that it's impossible to compress **all** strings. Actually, that is quite easy to prove. Let's consider all binary strings of length _n_. Since we're in binary, the total number of such strings is 2^_n_ (2 to the power of _n_). By definition, the length of a compressed string is strictly less than the length of the string itself. So, for all strings of length _n_, the total number of compressed strings available is at most 2^(_n_-1). Trivially, 2^(_n_-1) is less than 2^_n_. Hence, there are more strings of length _n_ than strings available to compress them. By mathematical induction, it's impossible to compress all strings.

Secondly, our claim is not that there cannot exist general compression algorithms. We do have . The crucial point is that these general compressions algorithms are not perfect. In other words, they will never be able to produce the smallesst possible compression of any piece of data. 

Thirdly, this gives rise to a "no free lunch" princple concerning compression algorithms.Specialised compressions algorithm will always have a limit. We could, for example, theoretically come up with the perfect compression algorith

#### 1.3 General Compression Algorithms

<!-- general algorithms -->

#### 1.4 Proof Context

<!-- program length -->

#### 1.5 Proof Strategy

In terms of strategy, our proof is a _reductio ad absurdum_ (proof by contradiction). Essentially, we will assume that the perfect compression algorithm exists and derive a contradiction. In particular, with our algorithm in hand, we will be able to build a function whose job is to return the smallest string that can be compressed to at least n bits. In other words, given some arbitrary number n, our made-up function will return the smallest string that can be compressed with at least n bits.


## 2. Kolmogorov Complexity

## 3. Berry's Paradox

## 4. Berry's Paradox As A Function

## 5. Wrapping Up

<!-- no free lunch algorithms -->

## Footnotes