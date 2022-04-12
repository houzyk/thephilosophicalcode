# Existence In TypeScript

>   Two handy TypeScript features are the optional chaining and non-null assertion operators. In this article, we'll explore how these two work and why the way they work is philosophically interesting.

### 1. Is It Me You're Looking For?

  Fetching API data is a classic, but risky, developer move. Such data could be different from what we expected it to be or it could simply not exist. To curb down this risk of working with nonexistent data, we may use TypeScript's optional chaining operator (syntactically, a question mark '?'). For example, let's say that we're fetching the following JSON.

  ```
    "thisArticle": {
      "title": "Existence In TypeScript",
      "author": {
        "firstName": "Houzair",
        "lastName": "Koussa"
      }
    }
  ```

  We may access this JSON's data using the dot-notation. Particularly, `thisArticle.title` is `'Existence In TypeScript'` and `thisArticle.author` returns the author object. However, suppose that we do not get back the `author` key when fetching our humble JSON. Consequently, trying to access the value of `thisArticle.author.firstName` would throw the following error: `Cannot read property 'firstName' of undefined`. To prevent this error, we may use TypeScript's optional chaining operator and write `thisArticle?.author?.firstName`. So, our code would not dig deeper into the `author` key if it does not exist.

  In sum, the optional chaining operator acts as a safety net when dealing with nonexistent data. It saves us from unforeseen errors if we do not find what we're looking for. In contrast, we may use TypeScript's non-null assertion operator (syntactically, an exclamation mark '!') if we do know what we're looking for.

### 2. It Is Me You're Looking For!

  Let's suppose that we have a really nice button and we wanna give it a class name that fits its niceness. We can easily do that by querying for that button and adding the class `'.nice-button'` to it.

  ```
    const niceButton = document.querySelector('button');
    button.classList.add('nice-button');
  ```

  Although the above snippet looks fine, TypeScript is not gonna be happy and would warn us that `'niceButton' is possibly null`. In hindsight, TypeScript's warning is quite reasonable. The button probably lives in an external file and we can't be sure that it exists. Nevertheless, we may dispose of TypeScript's warning by using the non-null assertion operator as follows.

  ```
    const niceButton = document.querySelector('button')!;
  ```

  Notice the exclamation mark at the end. Essentially, it reassures TypeScript about the button's existence and that `niceButton` is not `null` (Personally, i'd say that it's preferable to check for the existence of `niceButton` with an if-statement instead of using the non-null assertion operator).

  In sum, the non-null assertion operator reassures TypeScript when we know that data exists and is not null.

### 3. Possible Worlds

  So far, we've seen how the optional chaining and non-null operators work in dealing with nonexistent and existing data. Now, let's take a dive into why the way they work is philosophically interesting.

  Let's start with some history. In the early 1900's, a philosophical movement called 'Analytic Philosophy' gained momentum in British Philosophy. In essence, analytic philosophers emphasized for philosophical rigour. So, they fused advances in logic, the natural sciences and mathematics with advances in philosophy. We then witnessed the development of exciting tools and fields such as the Philosophy of Quantum Mechanics or the Philosophy of Mathematics. Eventually, Analytic Philosophy cemented itself as the predominant way of doing Philosophy in the English speaking world (sadly). So, today, we have a plethora of "rigorous" tools to analyze philosophical issues such as existence. One such issue is that of modal existence. Quite simply, 'modal existence' refers to how some object *could* have existed. For example, a parallel universe could exist. Then, we may ask philosophical questions about the modal existence of a parallel universe such as *how is that that a parallel universe could exist?* or *what does it mean to say that 'something could exist'?*. Generally, Analytic Philosophers use two tools to analyze modal existence - the mechanisms of Possible Worlds and Modal Logics.

  Beyond all the fancy maths and logic, the idea behind a Possible World and a Modal logic is quite simple. Firstly, a Possible World is another way our world could be. So, if something could exist, then it exists at some Possible World. In essence, **every single way that the world could be is a Possible World and anything that exists in these Possible Worlds are things that could exist**. For example, if we say that 'a parallel universe could exist', then we mean that there is a possible world where there is a parallel universe. Quite neat.

  Secondly, a Modal Logic is a formal system that allows us to deduce conclusions about these Possible Worlds (mostly in the form of proofs, arguments or theorems). Metaphorically, a Modal Logic is like a mathematical map which guides us through our explorations of the infinitely many Possible Worlds. A quick note before we proceed. We won't need any maths in our philosophical dive into our TypeScript operators (but I'll leave resources and relevant theorems at the end if you wish to explore more). All that we need to know is that we can use a Modal Logic to derive contradictions on Possible Worlds. Think of a contradiction as a road-block in our metaphorical map. If we come across one, then something's fishy.

### 4. The Return Of Symbolic Manipulation

  Notice how we said that TypeScript's optional chaining and non-null assertion operators help us deal with the nonexistence or the existence of data. Subtly, but quite naturally, this is like saying that these operators help us deal with the *possible* existence of data, i.e. its modal existence. Given what we covered on Possible Worlds, Modal Logics and modal existence, we may proceed with our philosophical dive by exploiting this subtlety.

  In a past article, I wrote about conceptualizing computation as symbolic manipulation. The big picture is that computation conceptually boils down to symbols metaphysically manipulating other symbols (emphasis on 'metaphysically'). So, we may conceptualize a snippet of code, like `thisArticle?.author?.firstName` as a symbol manipulating another symbol (our JSON data). Intuitively, our snippet says that the `author` key and the `firstName` key could exist (or possibly exist). Then, we may say that there is a Possible World where they keys `author` and `firstName` exist.

  Additionally, we may conceptualize the snippet `document.querySelector('button')!` as a symbol manipulating another symbol (any data relating to our nice button). Intuitively, our snippet says that the nice button necessarily exists. In Possible Worlds talk, to say that something necessarily exists is like saying that it exists across all Possible Worlds. So, we may say that our button exists across all Possible Worlds (This is clearly false - a button does not exist across all Possible Worlds. Just think of a Possible World where there is no technology. However, for this article's sake, let's ignore this issue. We could think of a work-around by getting technical and talking of restricted Possible Worlds but let's not do that).

  So far, we've provided a philosophical analysis of code snippets containing our two TypeScript operators in terms of Possible Worlds. To showcase the strength of our analysis, let's talk about its explanatory power (conceptually, of course).

### 5. Contradiction Ergo Error

### PS

  1. If you want to learn more about the Philosophy and Logic behind Possible Worlds or Modal Logics, I highly recommend [this article](https://plato.stanford.edu/entries/logic-modal/) by Garson and [this article](https://plato.stanford.edu/entries/possible-worlds/) by Menzel. Additionally, David Lewis' book 'On The Plurality Of Worlds' is a classic.

  2. In section 3, I strictly spoke of Analytic Philosophy. I also talked about Possible Worlds before introducing Modal Logic. I do not intend this flow to establish any form of historical causation. I am not implying that the development of Possible Worlds led to the development of Modal Logics. Actually, ideas of other possible Worlds and modal systems are scattered across history and are not unique to Analytic Philosophy. For example, we find writings of Islamic Philosophers, such as Ibn Sina, on Modality from the 10th century. [See here](https://plato.stanford.edu/entries/arabic-islamic-language/#ModProModSyl).
