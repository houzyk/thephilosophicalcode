
# Hello, Computer!

> Computers run the world, that's obvious! *What is it that computers do?* That's less obvious. There are several, equally good, answers to that question. One may give an 'engineering' answer by talking about microchips or motherboards. One may also give a theoretical answer by talking of automata or Turing Machines. Alternatively, one may give a philosophical and slightly more abstract answer. So, instead of diving into the physical and theoretical implementations of computers, let's explore what computers *conceptually* do.


### 1. Our Method

Analytic Philosophers often approach a question, such as our very own "what is it that computers conceptually do", by simplifying that question into a simpler, but more abstract, one. The reasoning behind this approach is that such simplification allows us to better pin down the real issue at stake. With this in mind, it seems quite intuitive that we may simplify our question into "what is a Computation?". With this simplified question in hand, we follow the footsteps of these Analytic Philosophers in saying that the answer to our simplified question is, quite naturally, finding the meaning of the word "Computation".

Finding the meaning behind words is notoriously tricky especially if we're operating in a vacuum. What I mean is that it is hard (some would argue impossible) to find the meaning of a word if we are not given some context on how that word is used or what our general intuition behind that word is. So, we would need some kind of anchor on which to base our analysis of the meaning of the word "Computation". It would have been less hard to find that anchor if the word "Computation" referred to a physical object. For example, as linguists, if we wanted to analyse the meaning of the word "Arbre", we could simply observe how French speakers use the word "Arbre" as they are interacting with physical trees. Unfortunately for us, the word "Computation" intuitively seem to refer to an abstract and non-physical object (bear in mind that we're not trying to find what physical computers are, but rather, what is it that they *conceptually* do). So, given the non-physicality of a concept like Computation, we need to find the anchor on which we shall base our analysis of the meaning of the word "Computation".


### 2. A Linguistic Answer

I stumbled on a really interesting video about the P vs NP problem once (https://www.youtube.com/watch?v=YX40hbAHx3s). Somewhere through that video, I told myself that, somehow, the P vs NP problem is intrinsically linked to how much *we can do given a particular amount of space and time*. Retrospectively, that seems like a interesting anchor in finding the meaning of the word "Computation". I would go on further in proposing that, intuitively, Computation *is* what can be done given a particular amount of space and time. This entails that the meaning of the word "Computation" refers to what is *manipulated* through a particular region of space-time. To clarify, let's say that any form of manipulation is between a manipulator and the object being manipulated. Here, we find a logical structure whereby the manipulator is *related* to the object being manipulated through the *relationship of manipulation*. So, we may abstract away from this structure by saying that this relationship of manipulation is formally similar to the relationship of reference  between a string of words/symbols and an object being referred. Importantly, we've substituted the manipulation relationship for the reference relationship irrespective of whether the manipulator (or the object being manipulated) are substituted for the string of symbols (or the object being referred). In the context of a Computation, that string *could* be a piece of code/instruction *manipulating* a region of space-time. Think of how code from low-level languages directly refer to memory (i.e. a region of space-time) and gives instructions on what to do with that bit of memory and for how long to do it for. So, we may say that, **conceptually**, Computation is symbolic manipulation!

One might retort that "okay, we've philosophized a bit to only came to the answer that Computation is about some pieces of instructions/strings manipulating objects. We already knew that. It's obvious. That's exactly what coding is". To this we'd reply that this obviousness is beneficial for our analysis. It shows that our analysis meets our intuitions!. But here's a kicker- we did not propose that Computation is symbolic manipulation where the symbols are *only* from programing languages. We left the interpretation of the word "symbolic" open in the context of a Computation. So, the symbols do not need to only be symbols from a programming language. These symbols can also be from some natural or non-programming formal languages. Think of pseudo-code or when we're giving someone a recipe on how to bake our favorite cake. Intuitively, that pseudo-code and that person following our recipe are undertaking Computations. It's just not the type of Computation that we would generally associate with silicon powered computers.



### 3. Two Programming Paradigms

So far, we came up with a tentative, but intuitive, Linguistic Answer to our question of "what is a Computation?". It would feel lacking if we do not show how our answer connects to the actual practice of coding. Among the many flavours of programming languages, we find two common paradigms. Imperative languages (like JS) and declarative ones (like Haskell). To me, imperative ones are those where we give explicit instructions to our computer and declarative ones are those where we simply tell our computer what we want.

On one hand, it is quite natural to see how our Linguistic Answer that Computation is symbolic manipulation is related to imperative languages. The symbols doing the manipulation are simply the explicit imperative instructions of our code.

On the other hand, it seems less natural to see how our Linguistic Answer is related to declarative languages. To that, we may say that Computation carried in a declarative way is symbolic manipulation that only looks at the *results* of a Computation. This is a black-box approach. We do not need to specify *how* the Computation is being carried, we simply need to see that the Computation has been carried. So, we do not need to specify *how* symbols are to be manipulated, we simply need to see that they were manipulated. Importantly, compared to imperative languages, the symbols are **not** doing the manipulation. The symbols are **not** the instruction set, but rather, the symbols are the objects being manipulated themselves! So, we've shifted from viewing the instruction sets as symbols to viewing the objects being manipulated as symbols themselves. We are able to conceptually carry out this shift because, as previously mentioned, we left the interpretation of the word "symbolic" open in the context of a Computation. To me, the possibility of this shift is where the beauty of viewing Computation as symbolic manipulation resides.


### 4. Implications Of Our Linguistic Answer

It is philosophically interesting to observe the possible implications of our Linguistic Answer. So, let's briefly go through two of them.

Firstly, it seems that the absence of symbolic manipulation entails the absence of a Computation. In terms of imperative languages, this means that the lack of an instruction set entails an absence of a Computation. In terms of declarative languages, we see that an absence of symbolic manipulation entails an absence of objects being manipulated. However, that does not entail that the objects themselves become absent. This is because it seems that going from some objects to zero objects is a Computation itself. They were simply manipulated out of existence.

Secondly, Computation requires that there exist objects being manipulated! Naturally, if there isn't anything to manipulate then, no Computation can be carried. So, it seems that Computation is metaphysically dependent on Existence. I wonder what this implies for metaphysical theories that take the universe to be some sort of computer simulation. Isn't it paradoxical that Computation depends on Existence when (according to these simulation theories) Existence itself depends on Computation? I feel like an infinite regress may pop out here or we're simply equivocating. So, let's not go there.


> In the end, what is it that computers conceptually do? Or what is a Computation? We proposed that a Computation is what can be done given an amount of space-time. Conceptually, this means that computers manipulate symbols! These symbols need not be from a programing language, they can also be from a natural language like English. In terms of coding, these symbols are either instruction sets (given imperative programming languages) or the objects being manipulated themselves (given declarative programming languages).


### PS

We kept the article devoid of logical/mathematical technicalities so far. For those who wanna deep dive into the matter, this section is for you. Let's begin by asking ourselves how do we lay "symbolic manipulation" on a formal basis? Those used to TCS and Logic might see each model of Computation as a precisification of "symbolic manipulation". So, we see that the semantics of "symbolic manipulation" is varied. So, we have a Pluralism of Computation! For example, we may precisificate "symbolic manipulation" as a Turing Machine tuple (Q, L, s, t) where

1 Q is a finite set of states q.

2 L is a finite set of symbols.

3 s in the initial state q (in Q).

4 t is our common-place TM transition function.

Importantly, notice how symbolic manipulation crops in the very formal definition of a TM (at 2)! Alternatively, we may precisificate "symbolic manipulation" using the Lambda Calculus or any other model of Computation. To me, this plurality, which crops out from our Linguistic Answer, offers a very intuitive philosophical basis to fundamental CS ideas such as the Church-Turing thesis.
