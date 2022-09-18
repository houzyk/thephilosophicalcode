
# Too Much To Handle

> Problem solving lies at the heart of Software Engineering. However, there's a fundamental limit to how many programs we can build compared to how many computational problems there can be. In this article, we'll informally prove that such a limit exists because there are infinitely way more problems than programs. Ergo, we'll show that there exists unsolvable problems.

### 1. The Road Ahead.

Caveat time! Throughout this article, I use the words 'problem' and 'computational problem' interchangeably. Naturally, I do not mean that all problems are computational problems. I'm simply assuming a shared and intuitive understanding of the notion of a computational problem. So, to align our intuitions, here's a comprehensive list of what I do (and don't) consider as computational problems. 

A. 'How to sort a list effectively?' - computational problem.
B. 'Why does your cat not love you?' - not a computational problem.
C. 'How to effectively process natural languages?' - computational problem.
D. 'How to get good at CSS?' - well, that's an existential problem. Sorry.

Caveat aside, our article's goal is to prove that there exists unsolvable problems. In essence, we have to prove that there are way more problems than programs available to solve them. Naturally, we need a way to count these programs and problems. To count these, we compare the sets of all possible programs and problems to the sets of Natural and Real numbers respectively. Then, we'll show that the number of problems exceed that of programs because the size of the set of Real numbers exceed that of the Natural numbers.

### 1.  *How To Count Programs* For Dummies.

JavaScript is a Turing-Complete language. This means that anything that a Turing-Machine can compute can be written in JavaScript. Alternatively, any sound program that can be written in JavaScript can be computed by a Turing-Machine. So, it is theoreticaly fair to assume that the set of all sound JavaScript programs is the set of all possible programs.   

In order to count these programs, we'll assign a unique number to every possible character in JavaScript's syntax. So, `let` can be given the number `12520` and `=` gets the number `500`. So, every possible phrase in JavaScript is mapped to a unique number. Intuitively, given this mapping, we can also map every JavaScript program to a unique number. For example, we can deconstruct our beloved 'Hello World!' program as follows.  

```
  console.log("Hello, World!");
```

So, our program is mapped to `112233445566778899`. Neat and from here on, we can easily imagine how we can map any JavaScript program into a unique number. Now that every character is JavaScript has a unique number, we can also easily mix and match these numbers. For example, `11 22 33 44 11 88 99` would simply be `console.log(console);`. So, just like we can form all the Natural numbers with only the characters 0 to 9, we can for a set of all possible JavaScript programs. Hence, we . We can see how this set can be infinitely big . In essence, we shall say that the sizt set of all possible programs is less or equal to the size of the set of Natural numbers.

1. It is entirely possible that two numbers refer to two programs that do the same thing. That's fine, the important thing here is that a number does not refer to more than one program.
2. Some numbers might refer to programs that crash, have syntax errors or are useless. That's also fine. The subtley here is that the number of possible computer programs isn't strictly equal to the size of the Natural numbers but is less or equal to that size.

### 2. Problems For Dummies.

So far, we have

### 3. The Struggle Is Real.

### 4. Some Infinities Are Bigger Than Other Infinities.

> 

### PS

1. There's not much explicit. That's my fault, to . However, that does not mean that I can't leave you with some breadcrumbs to follow.
