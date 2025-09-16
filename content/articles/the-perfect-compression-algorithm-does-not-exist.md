---
external: false
title: "The Perfect Compression Algorithm Does Not Exist"
description: "In this article, we'll informally prove why the perfect compression algorithm does not (and cannot) exist. In particular, by drawing on concepts like Kolmogorov Complexity and Berry's Paradox, we'll show how such an algorithm is logically impossible."
authorUrl: "https://github.com/houzyk"
ogImagePath: "/images/the-perfect-compression-algorithm-does-not-exist/cover.webp"
date: 2025-09-16
author: "Muhammad Houzair Koussa"
---
![The Perfect Compression Algorithm Does Not Exist](/images/the-perfect-compression-algorithm-does-not-exist/cover.webp)

> In this article, we'll informally prove why the perfect compression algorithm does not (and cannot) exist. In particular, by drawing on concepts like Kolmogorov Complexity and Berry's Paradox, we'll show how such an algorithm is logically impossible.

## 1. Setting The Stage

In an effort to make our upcoming proof as concise and clear as possible, let's consider a few things.

#### 1.1 Disambiguating Our Claim

Notice that the claim that we aim to prove - namely 'the perfect compression algorithm does not exist' - contains three ambigious terms that require clarification: 'perfect', 'compression' and 'algorithm'. 

Starting with the latter, I will characterise an algorithm simply as a function - a black-box that takes an input and returns an output. My primary motivation behind this characterisation is theoretical. At its core, the Lambda Calculus consists entirely of black-box functions that can be created and applied (or called). Despite its simplicity, it is a well-established result that the Lambda Calculus is a universal model of computation equivalent to Turing Machines. In other words, anything that can be computed by a conventional computer can be represented within the Lambda Calculus. So, characterising 'algorithm' as 'function' seems like a theoretically robust way to disambiguate what an algorithm is.

#### 1.2 A Suble Contrast

It's also noteworthy to contrast our claim with the similar but subtley different claim that it's impossible to compress **all** strings. Actually, that is quite easy to prove. Let's consider all binary strings of length _n_. Since we're in binary, the total number of such strings is 2^_n_ (2 to the power of _n_). By definition, the length of a compressed string is strictly less than the length of the string itself. So, for all strings of length _n_, the total number of compressed strings available is at most 2^(_n_-1). Trivially, 2^(_n_-1) is less than 2^_n_. Hence, there are more strings of length _n_ than strings available to compress them. By mathematical induction, it's impossible to compress all strings.

#### 1.3 Proof Strategy

In terms of strategy, our proof is a _reductio ad absurdum_ (proof by contradiction). Essentially, we will assume that the perfect compression algorithm exists and derive a contradiction. In particular, with our algorithm in hand, we will be able to build a function whose job is to return the smallest string that can be compressed to at least n bits. In other words, given some arbitrary number n, our made-up function will return the smallest string that can be compressed with at least n bits.


## 2. Kolmogorov Complexity

## 3. Berry's Paradox

## 4. Berry's Function

## 5. Wrapping Up

## Footnotes