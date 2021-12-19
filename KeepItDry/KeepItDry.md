
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


### 3. Can The Real Layer Please Stand Up?

### 4. Confused Talk, Confused Philosophy


### PS

  We may further simplify our `even()` function as follows.

```
  def even(number)
    (number % 2).zero? ? "#{number} is even" : "#{number} is odd"
  end
```

  We could also check if the arguments are not numbers or if none are given. To avoid all that hassle and to keep it dry, Ruby comes with a built-in `#even?` function.
