# Keep It Dry

> *Don't Repeat Yourself* (DRY for short) is a cherished principle guiding developers world-wide. In this article, we'll take a philosophical dive into what it implies and how it pushes Philosophy to its limits.

### 1. Don't Repeat Yourself

  Firstly, let's understand how the DRY principle works. Imagine that we're a developer tasked with coding a simple program that tells us whether a positive integer is even or odd. Recall that a number is even if we can *fully* divide it by 2 and odd if we can't. So, given a number, our little program divides it by 2 and checks if we obtain a remainder. If the remainder is 0, then our number is even. Alternatively, if it isn't 0, then our number is odd. For example, our program may decide whether 14 or 15 are even using the following block of code (if you're not used to coding or the Ruby programming language, please find some comments before each line of code explaining what that line does).


```
  # our program checks if the remainder of dividing 15 by 2 is 0
  if 15 % 2 == 0
    # our program prints "15 is even" if the remainder is 0
    puts '15 is even'
  else
    # our program prints "15 is odd" if the remainder isn't 0
    puts '15 is odd'
  end

  # our program checks if the remainder of dividing 14 by 2 is 0
  if 14 % 2 == 0
    # our program prints "14 is even" if the remainder is 0
    puts '14 is even'
  else
    # our program prints "14 is odd" if the remainder isn't 0
    puts '14 is odd'
  end
```

  Eventually, our program prints `"15 is odd"` and `"14 is even"`- that's cool! However, let's criticize our code. Notice that we're repeating ourselves. We wrote virtually the same code to check the evenness of 14 and 15. What if we were given a thousand numbers instead of just two? we would waste our time in writing more than a thousand lines of repeating code! Naturally, this is where the DRY principle kicks in. Irrespective of how many numbers we are given, we need to find a way to only write a few lines of code which can be used to test the evenness of any number *without* repeating ourselves. In doing so, our code becomes adaptable, scalable and repeatable. To do this, let's see use functions!.


  In essence, a function takes some input, does something with that input in order to return an output. So, we need to code a function that takes a positive integer as input, check whether that integer is even and returns an output that tells us whether the number is even or not. For example, we may code a function called `even()` as follows.


```
  # our function takes a number as input
  def even(number)
    # our function checks if the remainder of dividing our input by 2 is 0
    if number % 2 == 0
      # our function tells us that our number is even if the remainder is 0
      puts "#{number} is even"
    else
      # our function tells us that our number is odd if the remainder is 0
      puts "#{number} is odd"
    end
  end
```

  From now on, we can check whether 15 and 14 are even by simply calling `even()` on them. `even(14)` prints `"14 is even"` and `even(15)` prints `"15 is odd"`. In doing so, we don't write if-statements for each number like we previously did. We don't repeat ourselves anymore!


  So far, we've seen one simple scenario of how the DRY principle works. In the wild world of software, there are way more complex scenarios than ours! Irrespective of such complexity, the *raison d'être* of the DRY principle stays the same- We do not waste our time in writing repeating code because our code should be adaptable, scalable and re-usable. We've also seen that functions are a neat way to keep our code dry. In my opinion, this is because functions allow us to abstract away from unnecessary details just like *human languages abstract away from unnecessary details*


### 2. Layers Of Abstractions

### 3. Can The Real Layer Please Stand Up?

### 4. Confused Talk, Confused Philosophy


### PS

  We may further simplify our `even()` function as follows.


```
  def even(number)
    puts (number % 2).zero? ? "#{number} is even" : "#{number} is odd"
  end
```
