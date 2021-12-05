
# Hello, Computer!

> Computers run the world, that's obvious! *What is it that computers do?* Now, that's less obvious. There are several, equally good, answers to that question. One may give an 'engineering' answer by talking about microchips or motherboards. One may also give a theoretical answer by talking of automata or Turing Machines. Alternatively, one may give a philosophical and slightly more abstract answer. In other words, instead of diving into the physical and theoretical implementations of a computer, one could try and explore what computers *conceptually* do.

#### Outline

Section 1. Inspired from the Analytic Philosophy of Language, I outline my method behind answering the question "what is is that computers *conceptually* do?".

Section 2. I outline my answer (dubbed "The Linguistic Answer") to what computers conceptually do. Fundamentally, my Linguistic Answer characterizes computation as **symbolic manipulation**.

Section 3. I take a slight detour in outlining the relationship between my Linguistic Answer and two paradigms of programming- the imperative paradigm (think JS or Python) and the declarative/functional paradigm (think Haskell or Agda).

Section 4. I briefly look at two philosophical implications of my Linguistic Answer.


### 1. My Method

Very often, Analytic Philosophers of Language approach a question, such as our very own "what is it that computers conceptually do", by simplifying that question into a simpler, but more abstract, question. The reasoning behind this approach is that such simplification allows us to better pin down the real issue at stake. With this in mind, it seems quite intuitive that we may simplify our aforementioned question into "what is a computation?". With this simplified question in hand, we follow the footsteps of these Analytic Philosophers in saying that the answer to our simplified question is finding the meaning of the word "Computation".

Finding the meaning behind words is notoriously tricky especially if you're operating in a vacuum. What I mean is that it is hard (some would argue impossible) to find the meaning of a word if we are not given some context on how that word is used or what our general intuitions behind that word are. So, we would need some kind of anchor on which to base our our analysis of the meaning of the word "Computation". It would have been less hard to do find that anchor if the word "Computation" referred to a physical object. For example, if we wanted to analyse the meaning of the word "Arbre", we could simply observe how French speakers use the word "Arbre" as they are interacting with physical trees. Unfortunately for us, the word "Computation" intuitively seem to refer to an abstract and non-physical object (bear in mind that we're not trying to find what computers are, but rather, what is is that they *conceptually* do). So, given the non-physicality of Computation, we need to find the anchor on which we shall base our analysis of the meaning of the word "Computation".


### 2. A Linguistic Answer

I stumbled on a really interesting video about the P vs NP problem once (https://www.youtube.com/watch?v=YX40hbAHx3s). Somewhere through that video, I told myself that, somehow, the P vs NP problem is intrinsically linked to how much *we can do given a particular amount of time and space*. To me, that also seems like a philosophically interesting anchor in finding the meaning of the word "Computation". I would go on further in proposing that, intuitively, Computation *is* what can be done given a particular amount of time and space. This entails that the meaning of the word "Computation" refers to how much can be *manipulated* through a particular region of space-time. To clarify, let's say that any form of manipulation is between a manipulator and the object being manipulated. Here, we find some form of structure whereby the manipulator is *related* the object being manipulated through the *relationship of manipulation*. So, we may abstract away from this structure by saying that this relationship of manipulation is formally similar to that of a string referring to an object (we've simply, substituted the manipulation relationship for the relationship of reference and the manipulator for a string). In the context of a Computation, that string would be a piece of code/instruction *manipulating* a region of space across time. Think of how code from low-level languages directly refer to memory (i.e. a region of space) and gives instructions on what to do with that bit of memory and for how long to do it for. Hence, we may say that, **conceptually**, Computation is symbolic manipulation.

One might retort that "okay, we've philosophized a bit to only came to the answer that Computation is about some pieces of instructions manipulating objects. We already knew that. It's obvious. That's exactly what coding is". To this we'd reply that this obviousness is beneficial for our analysis. It shows that our analysis meets our intuitions!. But here's a kicker- we did not propose that Computation is symbolic manipulation where the symbols are only from programing/coding languages. We left the interpretation of the word "symbolic" (in "symbolic manipulation") open in the context of a Computation. So, the symbols do not need to only be symbols from a programming language. These symbols can also be the instructions given in some natural or non-programming formal language. Think of pseudocode or when we're giving someone a recipe on how to bake our favorite cake. Somehow, that pseudocode or that person following your recipe is undertaking a Computation. It's just not the type of Computation we would generally associate with silicon powered computers. Also, bear in mind that we're trying to reach a *conceptual* understanding of Computation.



### 3. Two Programming Paradigms

So far, we came up with tentative, but intuitive, linguistic answer to our question of "what is a computation?". However, it would feel lacking if we do not somehow show how our answer connects to the actual practice of coding. Among the many flavours of programming languages, we find two common paradigms. Imperative languages and declarative languages. To my mind, imperative ones are those where we give explicit instructions to our computer on exactly what to do. Additionally, declarative ones are those where we simply tell our computer what we want.

Naturally, it is quite easy to see how our Linguistic Answer that Computation is symbolic manipulation is related to imperative languages. The symbols doing the manipulation are simply the explicit imperative instructions.

However, it is harder to see how our Linguistic Answer is related to declarative languages. To that, we may say that Computation carried in a declarative way is symbolic manipulation that only looks at the beginning and the end of a Computation. This is a black-box approach. We do not need to see *how* the symbols are being manipulated, we simply need to see that they were manipulated! So, compared to imperative languages, the symbols are not doing the manipulation. The symbols are **not** the instruction set, but rather, the symbols are the objects being manipulated themselves. So, we've shifted the objects being manipulated for the manipulator and we took the objects as being the symbols. We are able to conceptually carry out this shift because, as previously mentioned, we left the interpretation of the word "symbolic" open in the context of a Computation. To me, the ability for this shift is where the beauty of viewing Computation as symbolic manipulation resides.


### 4. Implications Of Our Linguistic Answer

It is philosophically interesting to observe the possible implications of our Linguistic Answer. Here, I briefly go through two of them.

Firstly, it seems that the absence of symbolic manipulation entails the absence of a computation. In terms of imperative languages, this is intuitive as a lack of instructions means an absence of computation. In terms of declarative languages, we see that an absence of symbolic manipulation entails an absence of objects being manipulated. However, that does not entail the absence of objects themselves because it seems that going from some objects to the absence of these objects is a Computation itself. They were simply manipulated our of existence.

Secondly, Computation requires that there are objects being manipulated! Naturally, if we do not have anything to manipulate then, we cannot carry out a Computation. So, it seems that, metaphysically, Computation is dependent on Existence. I wonder what this may imply for metaphysical theories that take the universe to be some sort of computer simulation. Isn't it paradoxical that Computation depends on Existence when (according to these simulation theories) Existence itself depends on Computation? I feel like an infinite regress may pop out here but i'm not gonna go there!


So, what is it that computers conceptually do? Or simply, what is a Computation? We proposed that a Computation is what can be done given an amount of space and time. This conceptually means that computers manipulate symbols! These symbols need not be from a programing language, they can also be from a natural language like English. In terms of coding, these symbols are either instruction sets (given imperative programming languages) or the objects being manipulated themselves (given declarative programming languages).

Happy coding!
