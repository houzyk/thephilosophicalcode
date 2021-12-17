# Keep It Dry

> *Don't Repeat Yourself* (DRY for short) is a cherished principle guiding developers world-wide. In this article, we'll take a philosophical dive into what it implies and how it pushes Philosophy to its limits.

### 1. Don't Repeat Yourself

  Firstly, let's understand how the DRY principle works. Imagine that we're a developer tasked with coding a simple program that tells us whether a positive integer is even or odd. Recall that a number is even if we can *fully* divide it by 2 and odd if we can't. So, given a number, our little program divides it by 2 and checks if we obtain a remainder. If the remainder is 0, then our number is even. Alternatively, if it isn't 0, then our number is odd. For example, our program may decide whether 14 or 15 are even using the following block of code (if you're not used to coding or the Ruby programming language, please find a comment after the "#" explaining what each line of code does).

```
if 15 % 2 == 0 # our program checks if the remainder of dividing 15 by 2 is 0
  puts "15 is even" # our program prints "15 is even" if the remainder is 0
else
  puts "15 is odd" # our program prints "15 is odd" if the remainder isn't 0
end


if 14 % 2 == 0 # our program checks if the remainder of dividing 14 by 2 is 0
  puts "14 is even" # our program prints "14 is even" if the remainder is 0
else
  puts "14 is odd"  # our program prints "14 is odd" if the remainder isn't 0
end
```



Our two blocks of code are quite problematic- notice how we're repeating ourselves. In particular, the only that has changed between our two blocks of code is the numbers 14 and 15. The. So, how would we avoid this repetition? Functions (sometimes called methods). In essence, a function is a bit like a box. We put something in the box (out input), the function does some things to that input and gives us back an output. Let's take a concrete example of such a function which we call `even()`.


```
  def even(number)
    if number % 2 == 0
      return "#{number} is even"
    else
      return "#{number} is odd"
    end
  end
```


`even()` takes in a number as an input. Then, it checks whether that number is fully divisible by 2. if it is, it outputs `true` and if it isn't, it outputs `false`. Now, we may then call our function using any number. As in our last example, we may call `even?(14)` which outputs `true`. We may also call `even?(15)` which outputs `false`. So, how have we not repeated ourselves? The thing is we've written less lines of code. we only need to call the function . In the wild, there are way more complex forms of the DRY principle than an even function On a side note, in the spirit of simplicity, it is possible to further refactor our code into as follows.

```
def even?(number)
  (number % 2).zero? ? "#{number} is even" : "#{number} is odd"
end
```

So far, we've seen how developers do not repeat themselves. This practice of not repeating ourselves is closer to home than the world of coding.

### 2. Layers Of Abstractions

### 3. Can The Real Layer Please Stand Up?

### 4. Confused Talk, Confused Philosophy
