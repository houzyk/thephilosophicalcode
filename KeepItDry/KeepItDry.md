# Keep It Dry

> *Don't Repeat Yourself* (DRY for short) is a cherished principle guiding developers world-wide. In this article, we'll take a philosophical dive into what it implies and how it pushes Philosophy to its limits.

### 1. Don't Repeat Yourself

  Let's understand how the DRY principle works. Imagine that we're tasked with coding a simple program that tells us whether a positive integer is even or odd. For example, our program may check the evenness of 14 and 15 as follows.


```
  # If you're not used to coding or the Ruby programming language, please find comments (like this one) before each line of code explaining what that line does.

  # our program checks whether the remainder of dividing 15 by 2 is 0
  if 15 % 2 == 0
    # our program prints "15 is even" when the remainder is 0
    puts '15 is even'
  else
    # our program prints "15 is odd" when the remainder isn't 0
    puts '15 is odd'
  end

  # our program checks whether the remainder of dividing 14 by 2 is 0
  if 14 % 2 == 0
    # our program prints "14 is even" when the remainder is 0
    puts '14 is even'
  else
    # our program prints "14 is odd" when the remainder isn't 0
    puts '14 is odd'
  end
```


  Eventually, our program prints `"15 is odd"` and `"14 is even"`- that's cool! However, let's criticize our code. Notice that we're repeating ourselves. We wrote virtually the same code to check the evenness of 14 and 15. What if we were given a thousand numbers instead of just two? we would then waste our time in writing more than a thousand lines of repeating code! Naturally, this is where the DRY principle kicks in. Irrespective of how many numbers we are given, we need to find a way to only write a few lines of non-repeating code. In doing so, our code becomes adaptable, scalable and repeatable. To do this, let's use functions. In essence, a function takes some input, does something with it and returns an output. So, let's code a function that takes a positive integer, check whether it is even and outputs whether the number is even. For example, we may code the `even()` function as follows.


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

  From now on, we can check whether 15 and 14 are even by calling `even()` on them. `even(14)` prints `"14 is even"` and `even(15)` prints `"15 is odd"`. In doing so, we don't write repeating if-statements anymore. We don't repeat ourselves!


  So far, we've seen one simple scenario of how the DRY principle works. In the wild, there are way more complex scenarios than ours! Irrespective of such complexity, the *raison d'être* of the DRY principle stays the same- *We do not waste our time in writing repeating code because our code should be adaptable, scalable and re-usable.* We've also seen that functions are a neat way to keep our code dry. In my opinion, this is because functions abstract away from unnecessary details just like *human languages abstract away from unnecessary details*.


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
