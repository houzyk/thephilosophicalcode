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
    const niceButton = document.querySelector('.nice-button')!;
  ```

  Notice the exclamation mark at the end. Essentially, it reassures TypeScript about the button's existence and that `niceButton` is not `null` (Personally, i'd say that it's preferable to check for the existence of `niceButton` with an if-statement instead of using the non-null assertion operator).

  In sum, the non-null assertion operator reassures TypeScript when we know that data exists and is not null.

### 3. Possible Worlds

  So far, we've seen how the optional chaining and non-null operators deal with nonexistent and existing data. Now, let's take a philosophical dive into how the way they work is metaphysically interesting.

  Traditionally, the issue of existence has been the business of philosophers. In particular, Metaphysics is *the* philosophical field that deals with questions of what's existence, what exists, how they exist and why they exist. In the early 1900's, a philosophical movement called 'Analytic Philosophy' gained momentum in British Philosophy. In essence, Analytic Philosophers emphasized for mathematical, scientific and logical rigour in philosophy. Advances in logic, the natural sciences and mathematics fused with advances in philosophy until they became one.  We then witnessed the development of really exciting fields of research such as Mathematical Philosophy or the Philosophy of Quantum Mechanics. That movement has been so influential that, today, Analytic Philosophy is, sadly, the predominant way of doing Philosophy in the English speaking world. Needless to say, Metaphysics was also influenced and so where concepts surrounding existence. One such concept was that of modal existence. Quite simply, modal existence refers to how some object *could* have existed. For example, we may say that a parallel universe could exist. Then, we could ask metaphysical questions surrounding the modal existence of a parallel universe such as 'how is that that parallel universes could exist?' or 'what does it mean to say that something could exist?'.

  Today, it's the norm for Analytic Philosophers to understand modal existence through the mechanisms of Possible Worlds and Modal Logics. Beyond all the fancy maths and logic, the idea behind a Possible World and a Modal logic is quite simple. Firstly, a Possible World is another way our world could be. Then, we say that if something could exist, then it exists are some Possible World. In essence, **every single way that the world could be is a Possible World and anything that exists in these Possible Worlds are things that could exist**. For example, if we say that 'a parallel universe could exist', then we mean that there is a possible world where there exists a parallel universe. Quite neat.


  Secondly, a Modal Logic is a formal system that allows us to deduce conclusions about these possible worlds (mostly in the form of proofs, arguments or theorems). Eventually, the mechanisms of Possible Worlds and Modal Logics, quickly took off and are now well-oiled tool in areas such as AI research. In my opinion, it's rise was due to its intuitiveness and its firm mathematical and logic foundation.

  So far, we've looked at how TypeScript's optional chaining and non-null assertion operators allows us to deal with the *possible* existence or nonexistence of data. In essence, the modal existence of data. Additionally, we also talked of Possible Worlds and Modal Logics as mechanisms for understanding modal existence. Naturally, let's explore how these two overlap.

### 4. The Return Of Symbolic Manipulation

  In a recent article, I talked of conceptualizing computation as symbolic manipulation. The big picture is that computation conceptually boils down to symbols manipulating other symbols. In hindsight, I believe that I was attracted to conceptualizing computation as symbolic manipulation because of the philosophical work that became possible. There is large analysis potential in laying phenomena down to language. Another hallmark of Analytic Philosophy. In my opinion, it seems easier to abstract away to language and draw conclusions on that matter. So, let's harness the analytic potential of viewing computation as symbolic maniputaltion in finding an overlap between possible worlds and our TypeScript operators.

  Let's begin with the



### 5. Contradiction Ergo Error



### PS

  1. If you want to learn more about the Philosophy and Logic behind Possible Worlds or Modal Logics, I highly recommend [this article](https://plato.stanford.edu/entries/logic-modal/) by Garson and [this article](https://plato.stanford.edu/entries/possible-worlds/) by Menzel. Additionally, David Lewis' book 'On The Plurality Of Worlds' is a classic.

  2. In section 3, I strictly spoke of Analytic Philosophy. I also talked about Possible Worlds before introducing Modal Logic. I do not intend this flow to establish any form of historical causation. I am not implying that the development of Possible Worlds led to the development of Modal Logics. Actually, ideas of other possible Worlds and modal systems are scattered across history and are not unique to Analytic Philosophy. For example, we find writings of Islamic Philosophers, such as Ibn Sina, on Modality from the 10th century. [See here](https://plato.stanford.edu/entries/arabic-islamic-language/#ModProModSyl).
