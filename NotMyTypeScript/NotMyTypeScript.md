# Not My TypeScript

>   The *raison d'être* of TypeScript is quite straight-forward- JavaScript is the back-bone of the modern web but it has problems, TypeScript is here to solve these problems. In essence, it's an improved super-set of JavaScript filled with new features. Two such features are the optional chaining and non-null assertion operators. In this article, we'll explore how these two TypeScript features work and why the way they work is philosophically interesting.

### 1. JavaScript's Best Friend

  Let's begin by understanding one of JavaScript's problems by looking at the humble JavaScript object. Essentially, it's a collection of key-value pairs that contains data. Intuitively We can think of each key as a property and its corresponding value as a description of that property. For example, we may represent this article as a JavaScript object called 'thisArticle' which contains two keys - 'title' and 'author'. Naturally, 'Not My TypeScript' describes the key 'title' and 'Houzair Koussa' describes the article's author. In code, this looks as follows.

  `
    const thisArticle = {
      title: "Not My TypeScript",
      author: "Houzair Koussa"
    }
  `

  Given the `thisArticle` object, we may access any of it's key using the dot-notation. Particularly, `thisArticle.title` gives us 'Not My TypeScript' and `thisArticle.author` gives us 'Houzair Koussa'. Quite neat but this is where JavaScript becomes troublesome. If we were to access some inexistent key in the `thisArticle` object, JavaScript would remain calm and do absolutely nothing. For example, `thisArticle.wordLength` woudd simply give us `undefined`. This is odd and quite limiting. Intuitively, we would prefer if JavaScript does not remain stoic and does something about accessing inexistent keys. That's because, due to this oddity, our million dollar JavaScript app that accesses the inexistent key `wordLength` would not yell at us during development but would graciously crash during production. In hindsight, we'd want JavaScript to throw some error messages at us. We'd want it to yell at us.

  Fortunately for our million dollar app, TypeScript would actually yell at us if we were to access `thisArticle.wordLength`. Metaphorically, it would quite candidly say something like "hey bud, I'm not too sure about that key 'wordLength'. It's not really my type. I'm sorry to say but I don't think it exists." On top of that, TypeScript also gives us two additional features to deal with JavaScript's limitations on dealing with objects and things that may or may not exist. These are the optional chaining and non-null assertion operators.

### 2. Is It Me You're Looking For?!

  Suppose that our million dollar app obtains the `thisArticle` object from an external source, like an API. When working with such external source, we generally do not know how they were implemented and how they behave. It is possible that we externally obtain the `thisArticle` object but, due to some unforeseen errors, we do not get back the `author` key in `thisArticle`. At this point, TypeScript would not yell at us because it thinks that there is such a key as `author`. To help us against these unforeseen circumstances, we may use the optional chaining operation (syntactically, a question mark '?'). So, instead of writing `thisArticle.author` as we would in plain JavaScript, we would write `thisArticle?.author`. In practice, this means that our program would not dig deeper into the `author` key and head into catastrophy down the road. Intuitively, our code short-circuits if it does not find what it's looking for.

  Sometimes, however, we do know what we're looking for and we know where the thing we're looking for is at. TypeScript, on the other hand, may not know that. It may smell danger when there isn't any. For example, let's say we're querying for a button from the DOM and we want to click it.

  `
    const button = document.querySelector('.nice-button');
    button.click();
  `

  This will not make TypeScript happy and reasonably so. The button of class `.nice-button` may not exist. TypeScript would believe that we would be looking for something that is not there. Once again, TypeScript would be like 'hey but, I'm not sure about that button. Looks like a nice button but it's not really my type. Are you sure it even exists?' However, let's suppose that we've actually implemented that button and we know that it's there. Fortunately for us, TypeScript provides us with the non-null assertion operation (syntactically, an exclamation mark '!') with a way of letting it know that we're certain that it exists. In code, we do it as follows:

  `
    const button = document.querySelector('.nice-button')!;
  `

  The exclamation mark at the end reassures TypeScript about the button's existence. Generally, I tend to avoid using the non-null assertion operator. It is possible that, sometime in the future, our code base got so big that we forgot that there's a query selector looking for a `.nice-button`. Then, we go on and delete that class in our HTML.

  So far, we've looked at how JavaScript is limited in dealing with issues of existence and how TypeScript allows us to push beyond these limits. Traditionally, the issue of existence has been the business of Philosophers. So, let's take a look about how we may philosophically understanding the way these operators work.

### 3. Possible Worlds

  Existence is a huge topic in Philosophy, especially for Metaphysicians. In the early 1900's, there was a move in British Philosophy where advances in Logic and Mathematics were applied to solving Philosophical problems. The relationship was not one-sided, there was also lots of Philosophical Ideas affecting the way Logic was carried out. These lead to the emergence of highly exciting fields of Philosophy such as the Philosophy of Mathematics or the Philosophy of Quantum Mechanics started to emerge. Today, this way of doing Philosophy is called 'Analytic Philosophy' and is the predominant way of doing Philosophy in the English-speaking world (sadly). Despite it's limitations, it allowed Philosophers to look at Philosophical concepts, such as Existence, through new lenses. In particular, there was significant advances in the way we understood modal existence. These are issues where we try to philosophically understand how some object *could* exist. It's entirely common-place to say that Unicorns do not exist but they *could* have existed. Understanding how these things could have existed forms the bread and butter of issues surrounding modal existence. To be fair, one may but one can easily imagine the philosophical importance of when we start to think about such as strings from string theory.

  One way that Analytic Philosophy helped us in understanding modal existence is through the mechanisms of Possible World. Beyond all the fancy maths and logic, the idea of a Possible World is quite simple. It's simply another world, quite similar to ours, but with some varying degree of changes. So, to say that 'x could exist' would simply be analyzed and broken down into 'x exists in a possible world'. This means that every single way that the world could be was a Possible World. Anything that exists in these worlds where things that could possibly exist. The idea, despite its simplicity, quickly took off. It helped us answer lots of questions and had a stable mathematical foundation in the form of set theory. We even invented more maths along side with it. We even got new logics such as Modal Logic which are very much used in AI research these days.

### 4. The Return Of Symbolic Manipulation

### 5. Contradiction Ergo Error

### PS

  1. If you want to learn more about the Philosophy and Logic behind Possible Worlds and Modal Logics. I highly recommend [this article](https://plato.stanford.edu/entries/logic-modal/) by Garson and [this other article](https://plato.stanford.edu/entries/possible-worlds/) by Menzel. Additionally, David Lewis' book 'On The Plurality Of Worlds' is a classic.

  2. In section 3, I initially talked about Possible Worlds before introducing Modal Logic. I do not intend this flow to establish any form of historical causation. I am not implying that the development of Possible Worlds led to the development of Modal Logics. Actually, ideas of other possible Worlds and modal systems are scattered across history and are not unique to Analytic Philosophy. For example, we find writings of Islamic Philosophers, such as Ibn Sina, on Modality since the 10th century. [See here](https://plato.stanford.edu/entries/arabic-islamic-language/#ModProModSyl).
