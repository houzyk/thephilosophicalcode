
# Keep It Dry

> *Don't Repeat Yourself* (DRY for short) is a cherished principle guiding developers world-wide. In this article, we'll take a philosophical dive into what it implies and how it pushes Philosophy to its limits.

### 1. Don't Repeat Yourself

  Imagine that we have to write a block of code that tells us whether a number is even or odd. We may code the following in order to check the evenness of 14 and 15.

```
# If you're not used to coding or Ruby, please find comments (like this one) before each line of code explaining what that line does.

# our code checks whether the remainder of dividing 15 by 2 is 0
if 15 % 2 == 0
  # our code prints "15 is even" if the remainder is 0
  puts '15 is even'
else
  # our code prints "15 is odd" if the remainder isn't 0
  puts '15 is odd'
end

if 14 % 2 == 0
  puts '14 is even'
else
  puts '14 is odd'
end
```

  Eventually, our code prints `15 is odd` and `14 is even`. That's cool but notice how we're repeating ourselves. We wrote virtually the same code to check the evenness of 14 and 15. What if we had a thousand numbers instead of just the two? It would be a waste of time to write repeating code to check the evenness of a thousand numbers. Naturally, this is where the DRY principle kicks in. Irrespective of how many numbers we are given, we want to be able to check their evenness using only a few lines of non-repeating code. In doing so, our code becomes adaptable, scalable and repeatable! To do this, let's use functions. Basically, a function takes some input, does something with it and returns an output. So, let's code a function called `even()` that takes a number, checks for its evenness and outputs whether it is even or odd.

```
# our function takes a number as input
def even(number)
  # our function checks if the remainder of dividing our number by 2 is 0
  if number % 2 == 0
    "#{number} is even"
  else
    "#{number} is odd"
  end
end
```

  We can now check whether 15 and 14 are even by calling `even()` with them- `puts even(14)` prints `14 is even` and `puts even(15)` prints `15 is odd`. In doing so, we don't write repeating if-statements anymore. We don't repeat ourselves!

### 2. Layers Of Abstractions

  In the wild word of code, there are obviously way more complex scenarios than checking for evenness. Irrespective of such complexity, the *raison d'être* of the DRY principle stays the same- *We don't waste our time in writing repeating code because our code should be adaptable, scalable and re-usable.* We've seen that functions are a neat way to keep our code dry. In other words, functions *abstract away* from unnecessary and repeating details. On this note, I believe that it is interesting to notice how this abstraction behind programming functions is analogous to how nicknaming works in human languages.

  Let's pretend that we've encountered an odd-looking person at the market with a shabby cap. Let's call them "Toto". Notice how the nickname "Toto" abstracts away from *describing* that person. In particular, anytime we speak of them, we would rather use the word "Toto" rather than the long-winded description "that odd-looking person with a shabby cap at the market". Here, we see how the nickname "Toto" is analogous to the programming function `even()`. They are both ways of abstracting away from unnecessary and repeating details. They are both keeping it dry! `even()` is a non-repeating way to check for evenness, "Toto" is a non-repeating way of speaking of an odd-looking person. In a cheeky way, it seems that the DRY principle doesn't only guide developers but it also guides pretty much everyone engaged in language (whether spoken, written, signed or merely mental).

  So far, we've seen an interesting relationship between a coding principle and human languages. So, let's dive further into the matter. It seems that abstraction, whether in human languages or programming functions, rely heavily on information preservation. To clarify, let's go back to our `even()` function. Recall that `even()` is an abstraction of our if-statements checking whether the remainder of dividing an input by 2 is 0. So, we may say that `even()` preserves the information associated with these if-statements. In turn, these if-statements themselves are preserving information! For example, we used the modulo operator `%` in these if-statements. Interestingly, the modulo operator itself is an abstraction of a more complex code that computes the remainder of dividing a number by another. So, it is preserving the information associated with this more complex code. We do not have to stop here. Our code is in Ruby. A quick google would tell us that Ruby is implemented using C. So, Ruby itself is high-level abstraction of code written in the low-level language C. We can go further down this rabbit hole until we reach the infamous Machine code (or should we stop here?).

  All the way from Machine code, to C, to Ruby, to `even()`, information is preserved! Intuitively, this form of information preservation gives rise a layered structure- a sort of layered pyramid whereby each layer preserves the information associated with its bottom layer. So, each layer is an abstraction of its bottom layer. Surprisingly (or maybe not), this pyramidal structure creeps up with our nickname "Toto". To clarify, recall that the word "Toto" is an abstraction of the description "that odd-looking person with a shabby cap at the market". Intuitive, the word "Toto" preserves the information contained in that description. In turn, this description itself is composed of other words like "odd-looking" and others. A quick dictionary search would tell us that the word "odd-looking" it itself defined using other words. So, the word "odd-looking" is itself an abstraction. But wait, these very words that define "odd-looking" are themselves defined using other words and, hence, are abstractions! So, we start to see this amazingly complex layered pyramid of linguistic abstraction where each layer is made up of a group of words. Each layer abstract away from its bottom layer and preserves the information of that bottom layer.

  In sum, the `even()` function and the nickname "Toto" both give rise to complex and layered pyramids of abstractions. Among all this complexity, a very intuitive, but interesting, question pops up- "what lies at the bottom of these pyramids?". We said that each layer is preserving information of its bottom layer. However, we're entering paradox-land if we say that the last layer of our pyramid is preserving information from its bottom layer. By definition, there is no bottom layer to the last layer... The last layer contains information at its purest state. It contains information that cannot be further broken down- a sort of atomic information. Alternatively, there could be no such last layer. Our pyramids of abstractions may not have a bottom and it's just turtles all the way down! so, there is no atomic information. Instead, there's a wild and infinite chain of information cascading down towards nowhere. Absurd yes but logically possible.

### 3. Can The Last Layer Please Stand Up?

  We've reached a philosophical fork-road (I'm not suggesting that our road only forks into two. That would be fallacious to think but I'll simply stick to two in this article). Firstly, pyramids of abstractions have a last layer. Secondly, it's just turtles stacked on top of each other and there's no last layer. So, let's keeping diving by going through a reason for choosing each of these two options.

  Firstly, one argument for believing that a last layer comes from human language itself. We've seen how a simple word like "Toto" gives rise to a highly complex pyramid. It is quite obvious that we manipulate all kinds of words from all kinds of languages. It seems quite natural that each of these word give rise of a complex pyramid themselves. That's a lot of complexity (just think of the sheer complexity of linguistics abstractions derived from the words in this article itself). It also seems quite natural that we, humans, have limited mental powers. If there was no last layer to our linguistic pyramids, then we would have infinite information to deal with. It seems absurd to believe that us, humans with finite mental capabilities, would be able to process an infinite amount of information. So, we may conclude that there is no infinite chain of information. Hence, there is a last layer to our pyramids of abstraction.

  Secondly, let's go through an argument for believing that there is no last layer. Let's go back to our `even()` function once again. One could answer that the last layer of the pyramid arising from `even()` is Machine code. The problem with this answer is its arbitrariness- why stop at Machine code? Can't we dive deeper? Let's talk of the logic gates themselves! But why stop here? These logic gates are made up of atoms. But these atoms are made up of sub-atomic particles. What if our beloved physicists tell us that our standard particle model doesn't work anymore and  we found smaller stuff. This is not surprising given that this kind of paradigm shift happens a lot. To me, that's the beauty of Science. Anyway, my point is that there doesn't seem to be a non-arbitrary stopping point. There doesn't seem to be non-arbitrarily chosen last layer. Additionally, in my [last article](/HelloComputer/HelloComputer.md), we saw how Computation goes beyond silicon powered computers. Conceptually, Computation is much more than just Machine code. When we consider a human computation like following a recipe, we see that finding a non-arbitrary last layer gets even more complication. Is it the atoms making up then human? Is it their soul? Is it their brain? Is it their body? You get the picture.

  At this point, we could anticipate many counter-arguments to our two aforementioned arguments. One could say that the first argument says more about our mental capabilities rather than pyramids of abstractions themselves. Alternatively, one could say that the second argument puts the epistemological cart before the metaphysical horse (That's a philosopher's way of saying we're chatting tosh). Let's not pay too much attention to these possible counter-argument. Instead, let's take a pause and think about the question we're trying to answer- *"what lies at the bottom of layered pyramids of abstraction?"* Maybe that question itself is ill-posed- there is no right answer. In trying to find such an answer, we've confused ourselves. We've philosophized too much. We've reached the limits of Philosophy. Hell, maybe we've reacted the limits of human thought itself.

### 4. Confused Talk, Confused Philosophy

  Think of a time when you heard or saw a kid uttering their first word. Isn't it amazing how such a young brain deals with such complexity? They'll then grow up. In a cheeky way (yet again), the DRY principle is guiding them.

  > At last, we saw that the DRY principle guides not only developers but can be connected to mostly anyone engaged with a human language. It is fascinating how such a simple principle gives rise to highly complex pyramids of abstractions. Instead of confusing ourselves with these amazing relations and complexity, we should simple take a pause and remain in awe of what humans can do. Let's not push Philosophy and human thought to their limits.

### PS

  Here's two quick, but highly important, disclaimers before you leave.


  1. Human languages and abstraction are way more complex phenomena than how I've written about them in this article. I only simplified these phenomena in trying to get a point across. For example, I've made heavy use of the nickname "Toto" but this nicknaming example is not and should not be taken as a definitive picture of how nicknaming in human languages generally work. Instead, it is only a faint picture of my own philosophical thoughts and experiences with nicknaming in the English language. I believe that we should share these linguistic experiences but we *must not* believe that our own linguistic constraints, experiences and phenomena can be imposed on those who do not share our language. Instead, we *must* observe and interact with as many languages and people as possible with a human-focused, empathetic, open-minded and empirical approach. Philosophy and Humanity itself don't need apathetic and unfounded approaches anymore.


  2. We may further simplify our `even()` function as follows.
```
def even(number)
  (number % 2).zero? ? "#{number} is even" : "#{number} is odd"
end
```
We could also check if the arguments are not numbers or `null`. To avoid all that hassle and to keep it dry, we can instead use Ruby's built-in `#even?` method (In Ruby, functions are called "methods" 😉).
