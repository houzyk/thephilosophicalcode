
# Keep It Dry

> *Don't Repeat Yourself* (DRY for short) is a cherished principle guiding developers world-wide. In this article, we'll take a philosophical dive into what it implies and how it pushes Philosophy to its limits.

### 1. Don't Repeat Yourself

  Imagine that we have to write a block of code that tells us whether a number is even or odd. For example, we may code the following to check the evenness of 14 and 15.

```
if 15 % 2 == 0
  puts '15 is even'
else
  puts '15 is odd'
end

if 14 % 2 == 0
  puts '14 is even'
else
  puts '14 is odd'
end
```

  Eventually, our code prints `15 is odd` and `14 is even`. That's cool but notice how we're repeating ourselves. We wrote virtually the same code to check the evenness of 14 and 15. Worryingly, it would be a waste of time writing repeating code to check the evenness of more numbers. This is where the DRY principle kicks in. Irrespective of how many numbers we are given, we want to be able to check their evenness using only a few lines of non-repeating code. In doing so, our code becomes adaptable, scalable and repeatable! To do this, let's use functions. Basically, a function takes some input, does something with it and returns an output. So, let's code a function called `even()` that takes a number, checks for its evenness and outputs whether it is even or odd.

```
def even(number)
  if number % 2 == 0
    puts "#{number} is even"
  else
    puts "#{number} is odd"
  end
end
```

  We can now check whether 14 and 15 are even. `even(14)` prints `14 is even` and `even(15)` prints `15 is odd`. Notice that we didn't code repeating conditionals. We don't repeat ourselves anymore!

### 2. Layers Of Abstractions

  In the wild, there are obviously way more complex scenarios than checking for evenness. Irrespective of such complexity, the *raison d'être* of the DRY principle stays the same. *We don't waste our time in writing repeating code because our code should be adaptable, scalable and re-usable.* We've seen that functions are a neat way to keep our code dry. Intriguingly, functions seem to *abstract* away from unnecessary and repeating details. On this note, I believe that it is also intriguing to notice that this abstraction behind programming functions is analogous to how nicknaming works in human languages.

  Let's pretend that we've encountered an odd-looking person at the market with a shabby cap. Let's call them "Toto". Notice how the nickname "Toto" abstracts away from *describing* that person. In particular, anytime we speak of them, we would use the word "Toto" rather than the long-winded description "that odd-looking person with a shabby cap at the market". Here, we see how the nickname "Toto" is analogous to the programming function `even()`. Both are ways of abstracting away from unnecessary and repeating details. They are both keeping it dry! `even()` is a non-repeating way to check for evenness. "Toto" is a non-repeating way of speaking about an odd-looking person. In a cheeky way, it seems that the DRY principle doesn't only guide developers but it also guides pretty much anyone engaged with a language (whether spoken, written, signed or mental).

  So far, we've seen an interesting relationship between a coding principle and human languages. So, let's further dive into the matter. It seems that abstraction, whether in human languages or programming functions, rely heavily on information preservation. To clarify, let's reconsider our `even()` function. Recall that `even()` is an abstraction of our conditionals checking whether the remainder of dividing an input by 2 is 0. So, we may say that `even()` preserves the information associated with these conditionals. In turn, these conditionals themselves are preserving information! For example, we used the modulo operator `%` in these conditionals. That operator itself is an abstraction of a more complex code that computes the remainder of dividing a number by another. So, the operator is preserving the information associated with that more complex code. We don't have to stop here. Our code is in Ruby. A quick google search tells us that Ruby is implemented using C. So, Ruby itself is a high-level abstraction of some code written in the low-level language C. We can dive further into this rabbit hole until we reach the infamous machine code!

  So, all the way from machine code, to C, to Ruby, to `even()`, information is being preserved! Intuitively, this preservation gives rise to a layered structure- a layered pyramid whereby each layer preserves the information associated with its bottom layer. So, each layer is an abstraction of its bottom layer. Surprisingly, this pyramidal structure also creeps up with our nickname "Toto". To clarify, recall that the word "Toto" is an abstraction of the description "that odd-looking person with a shabby cap at the market". Intuitively, the nickname "Toto" preserves the information contained in that description. In turn, this description itself is composed of other words like "odd-looking" or "market". A quick dictionary search shows us that the word "odd-looking" is itself defined using other words. So, the word "odd-looking" is itself an abstraction. But wait, these very words that define "odd-looking" are themselves defined using other words and, hence, are abstractions too! So, we begin to see this amazingly complex layered pyramid of linguistic abstractions. Each pyramidal layer is made up of a group of words. Each layer abstract away from its bottom layer and preserves the linguistic information from that bottom layer.

  In sum, the `even()` function and the nickname "Toto" both give rise to complex and layered pyramids of abstractions. Among all this complexity, a very intuitive and interesting question pops up- "what's the bottom layer of pyramids of abstractions like?". We said that each pyramidal layer is preserving the information from its bottom layer. However, we'll enter paradox-land if we say that the last layer of a pyramid is preserving information from its bottom layer. By definition, there is no bottom layer to the last layer. The latter contains information at its purest state. It contains information that cannot be broken down- a sort of atomic information. Alternatively, there could be no last layer. A pyramid of abstractions may not have a bottom after all. It's just turtles all the way down! There is no atomic information. Instead, there's a wild and infinite chain of information cascading down towards nowhere (absurd, but logically possible).

### 3. Can The Last Layer Please Stand Up?

  We've reached a philosophical fork-road (I'm not suggesting that our road only forks into two. That would be fallacious but I'll simply stick to two in this article). On one hand, pyramids of abstractions have a last layer. On the other hand, it's just turtles stacked on top of each other and there's no last layer. Let's continue our philosophical dive by going through an argument for believing in each of these two options.

  Firstly, one argument for believing that there is a last layer comes from human language itself. We've seen how a simple word like "Toto" gives rise to a highly complex pyramid of abstractions. It is quite obvious that we manipulate all kinds of words from all kinds of languages everyday. Consequently, each of these words give rise to complex pyramids themselves. That's a lot of complexity! Think of the sheer complexity of linguistic abstractions arising from the very words in this article itself. It also seems quite obvious that we, humans, have finite mental capabilities. If there was no last layer to a linguistic pyramid, then we would have an infinite amount of information to process. It seems absurd to believe that humans with finite mental capabilities would be able to process an infinite amount of information. So, we may conclude that there is no infinite chain of information. Hence, there *is* a last layer to each a pyramid of abstractions.

  Secondly, let's go through an argument for believing that there is no last layer. Let's go back to our `even()` function. One could propose that the last layer of the pyramid arising from `even()` is machine code. To me, the problem with this proposition is its arbitrariness. Why stop at machine code? Can't we dive deeper? We could talk of logic gates. But why stop here? These logic gates are made up of atoms. But these atoms are made up of sub-atomic particles. What if our beloved physicists tell us that our standard particle model doesn't work anymore and that we found other stuff. That wouldn't be surprising given that this kind of paradigm shift happens a lot. To me, that's the beauty of Science. Anyway, my point is that there doesn't seem to be a non-arbitrary stopping point. There doesn't seem to be non-arbitrarily chosen last layer. In my [previous article](/HelloComputer/HelloComputer.md), we saw that Computation goes beyond silicon powered computers. So, conceptually, Computation is much more than just machine code. When we consider a human undertaking a computation like a following a recipe, we see that finding a non-arbitrary last pyramidal layer gets even more complicated. Is it the atoms making up the human? Is it their soul? Is it their brain? Is it their body? You get the point.

  We could anticipate counter-arguments to our two aforementioned arguments. One could say that the first argument says more about our mental capabilities than pyramids of abstractions. One could also say that the second argument puts the epistemological cart before the metaphysical horse (That's a philosopher's way of saying we're chatting tosh). However, let's not pay too much attention to these possible counter-arguments. Instead, let's take a pause and think about the question that we're trying to answer. *What's the bottom layer of pyramids of abstractions like?* Maybe that question itself is ill-posed... There is no answer! In trying to find such an answer, we're confusing ourselves. We've reached the limits of Philosophy.

### 4. Confused Philosophy

  Take the question "what brand of sock did the big bad wolf, from the Red Riding Hood story, wear?". Before even trying to answer that question, let's take a pause and ponder on whether our question is well-posed. Is there even an answer to that question? It seems highly unlikely that we can know the brand of sock given that it isn't even mentioned in the story. The point that I'm trying to get across is that a well-formed question does not entail that the question is well-posed. Thinking that any question isn't ill-posed is what Analytic philosophers call "linguistic confusion". Especially in Philosophy, we should restrain ourselves from hastily answering a question without thinking on whether that question is ill-posed or not. Linguistic confusion only leads to confused Philosophy! We may not always know whether our question is ill-posed before trying to answer it. Sometimes, we may find out about the ill-posed nature of a question only after we've tried answering it. To me, this seems to be the case with our question "what's the bottom layer of pyramids of abstractions like?". In fairness, I believe that there's some philosophical interest in *trying to* answer that question but we should restrain ourselves from believing that we *have* an answer. This is because the act of abstraction is a deeply human one. It is also deeply human to ask questions. Given that abstraction is deeply human, it seems futile to try and find an *objective* answer to a human-focused question like "what's the bottom layer of pyramids of abstractions like?". It's not because there isn't any layer, it's simply because we've stumbled on an ill-posed question. It's a question whose answer lies outside the realm of Philosophy.

  > At last, we saw that the DRY principle guides not only developers but can be cheekily connected to mostly anyone engaged with a human language. It is fascinating how such a simple coding principle gives rise to highly complex pyramids of abstractions. Instead of confusing ourselves with asking questions about these amazing connections and complexity, we should simple take a pause and not push Philosophy to its limits.

### PS

  Here's three quick, but important, disclaimers before you leave.

  1. Human languages are way more complex than how I've written about them in this article. For example, I've made heavy use of the nickname "Toto" but this nicknaming example is not and should not be taken as a definitive picture of how nicknaming in human languages generally work. Instead, it is only a faint picture of my own philosophical thoughts and experiences with nicknaming in the English language. I believe that we should share these linguistic experiences but we *must not* believe that our own linguistic constraints and experiences can be imposed on those who do not share our language. Instead, we *must* observe and interact with as many languages and people as possible with a human-focused, empathetic, open-minded and empirical approach.


  2. At the end of section 4, I spoke about the futility of trying to find an *objective* answer to our question "what's the bottom layer of pyramids of abstractions like?". I am not suggesting that there are subjective answers. It is fallacious to substitute the absence of objectivity with the presence of subjectivity.


  3. Usually, we don't use a `puts` inside of a function. So, we may modify and refactor our `even()` function as follows.
```
def even(number)
  (number % 2).zero? ? "#{number} is even" : "#{number} is odd"
end
```
We could also check if the arguments are not numbers or `null`. To avoid all that hassle and to keep it dry, we can use Ruby's built-in `#even?` method (In Ruby, functions are called "methods" 😉).
