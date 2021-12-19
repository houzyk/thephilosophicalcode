
# Keep It Dry

> *Don't Repeat Yourself* (DRY for short) is a cherished principle guiding developers world-wide. In this article, we'll take a philosophical dive into what it implies and how it pushes Philosophy to its limits.

### 1. Don't Repeat Yourself

  Imagine that we have to write a block of code that tells us whether a number is even or odd. For example, we may check the evenness of 14 and 15 as follows.


```
  # If you're not used to coding or the Ruby programming language, please find comments (like this one) before each line of code explaining what that line does.


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


  Eventually, our code prints `15 is odd` and `14 is even`- that's cool! However, notice how we're repeating ourselves. We wrote virtually the same code to check the evenness of 14 and 15. What if we started with a thousand numbers instead of two? We would have wasted our time in writing more than a thousand lines of repeating code! Naturally, this is where the DRY principle kicks in. Irrespective of how many numbers we are given, we want to check for their evenness using only a few lines of non-repeating code. In doing so, our code becomes adaptable, scalable and repeatable! To do this, let's use functions. Basically, a function takes some input, does something with it and returns an output. So, let's code a function called `even()` that takes a number, checks for its evenness and outputs whether it is even or odd.


```
  # our function takes a number as input
  def even(number)
    # our function checks if the remainder of dividing our number by 2 is 0
    if number % 2 == 0
      return "#{number} is even"
    else
      return "#{number} is odd"
    end
  end
```

  From now on, we can check whether 15 and 14 are even by calling `even()` on them- `puts even(14)` prints `14 is even` and `puts even(15)` prints `15 is odd`. In doing so, we don't write repeating if-statements anymore. We don't repeat ourselves! In the wild, there are way more complex scenarios than checking for evenness. Irrespective of such complexity, the *raison d'être* of the DRY principle stays the same- *We don't waste our time in writing repeating code because our code should be adaptable, scalable and re-usable.* We've seen that functions are a neat way to keep our code dry. In essence, functions *abstract away* from unnecessary and repeating details.


### 2. Layers Of Abstractions

  Let's pretend that we've encountered an odd-looking person at the market with a shabby cap. Let's call them "Toto". Notice how the word "Toto" abstracts away from *describing* that person. In particular, anytime we speak of them, we would rather use the nickname "Toto" rather than the long-winded description "that odd-looking person with a shabby cap at the market". Intuitively, the nickname "Toto" is analogous to the function `even()`. They are both ways of abstracting away from unnecessary and repeating details. They are both keeping it dry! `even()` is a non-repeating way to check for evenness, "Toto" is a non-repeating way of speaking of an odd-looking person.

  So far, we've seen an interesting relationship between a coding principle and human languages. It would be philosophically uninteresting if we don't dig further into the matter. It seems that abstraction, whether in human languages or programming functions rely heavily on information preservation. To clarify,


  Intuitively, this rise to a layered structure of information- a sort of pyramid whereby. Each layer preserves the information from its bottom layer and, hence, becomes simpler than the bottom layer. This is quite obvious with our `even()` function. That function abstracts away from these if-statements that check for evenness. In turn, these if-statements abstract away from the Ruby programming language. A bit of research shows us that Ruby itself was implemented of. So, at some point, when we checked whether a remainder is obtained when dividing by 2, we've gone through an abstraction that had to convert the number 2 into binary. So, this is how higher-level languages are stacked upon lower-level languages until we've reached the infamous Machine Code.

  Analogously, in human languages, a nickname like "Toto" abstracts away from "that odd-looking person with a shabby cap at the market". We can now also see that this description itself contains words that themselves are abstraction of concepts. For example, the word "odd-looking" itself . So, it seems that words are build from other words that themselves are built from other words in a sort of layered pyramid of abstraction.

  In sum, the `even()` function and the nickname "Toto" are both part of complex layered pyramids of abstractions. At the end of the day, we might want to know what lies at the bottom of these pyramids. We;ve spoken of each layer of the pyramid as preserving information. Intuitively, we would believe that this information gotta come from somewhere. Surely, that somewhere *is* the bottom of the pyramid. It seems funny to think that there's no such bottom and that its turtles all the way down. One good argument for believing that such a bottom exist comes from natural language itself. It says that we're humans with limited mental powers. It would seem nonsensical to believe that humans, with limited powers, could process . If we do it whenever we communicate, the sheer amount of complexity of the abstractions pyramids would have humans short-circuit. Since we don't see humans short-circuiting everywhere from using languages, it seems to believe that there is a bottom layer to our linguistic pyramids of abstractions.

### 3. Can The Real Layer Please Stand Up?

### 4. Confused Talk, Confused Philosophy


### PS

  Here's two quick, but highly important, disclaimers before you leave.


  1. Human languages and Abstraction are way more complex phenomena than how I've written about them in this article. I only simplified these phenomena in trying to get a point across. For example, I've made heavy use of the nickname "Toto" but this nicknaming example is not and should not be taken as a definitive picture of how nicknaming in human languages generally work. Instead, it is only a faint picture of my own philosophical thoughts and experiences with nicknaming in the English language. I believe that we should share these linguistic experiences but we *must not* believe that our own linguistic constraints, experiences and phenomena can be imposed on those who do not share our language. Instead, we *must* observe and interact with as many languages and people as possible with a human-focused, empathetic, open-minded and empirical approach. Philosophy and Humanity itself don't need apathetic and unfounded approaches anymore.


  2. We may further simplify our `even()` function as follows.
  ```
    def even(number)
      (number % 2).zero? ? "#{number} is even" : "#{number} is odd"
    end
  ```
  We could also check if the function's arguments are not numbers or if none are given. To avoid all that hassle and to keep it dry, we can instead use Ruby's built-in `#even?` function.
