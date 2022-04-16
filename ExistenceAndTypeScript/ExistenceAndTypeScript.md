# Existence And TypeScript

>   Two handy TypeScript features are the optional chaining and non-null assertion operators. In this article, we'll explore how these two work and why the way they work is philosophically interesting.

### 1. Is It Me You're Looking For?

  Fetching external data is a risky business. The data could be different from what we expected it to be or it could simply not exist. To curb down the risk of working with non-existent data, we may use TypeScript's optional chaining operator (syntactically, a question mark '?'). For example, let's say that we're fetching the following JSON from an API.

  ```
    "thisArticle": {
      "title": "Existence And TypeScript",
      "author": {
        "firstName": "Houzair",
        "lastName": "Koussa"
      }
    }
  ```

  In TypeScript, we may access our humble JSON data using the dot-notation - `thisArticle.title` returns `'Existence And TypeScript'` while `thisArticle.author` returns the author object. However, suppose that our API ran into some issues and we do not get back the `author` key. Consequently, trying to access the value of `thisArticle.author.firstName` would throw the following error: `Cannot read property 'firstName' of undefined`. To prevent this error, we may use TypeScript's optional chaining operator and write `thisArticle?.author?.firstName`. In doing so, our code would not dig deeper into the `author` key if it does not exist. So, the optional chaining operator acts as a safety net when dealing with non-existent data. It saves us from unforeseen errors if we do not find what we're looking for.

### 2. It Is Me You're Looking For!

  In contrast, we may use TypeScript's non-null assertion operator (syntactically, an exclamation mark '!') if we *do* know what we're looking for. For example, let's suppose that we have a really nice button and that we wanna give it a class name that suits its niceness. We can easily do that by querying for the button and adding the class `'.nice-button'` to it.

  ```
    const niceButton = document.querySelector('button');
    button.classList.add('nice-button');
  ```

  Although the above code snippet looks fine, TypeScript would warn us that `'niceButton' is possibly null`. In hindsight, TypeScript's warning is quite reasonable. The button probably lives in an external file and we may not always know if it exists. In any case, we may dispose of TypeScript's warning by using the non-null assertion operator as follows.

  ```
    const niceButton = document.querySelector('button')!;
  ```

  Notice the exclamation mark at the end. Essentially, it reassures TypeScript about the button's existence and that `niceButton` is not null. Personally, I'd rather check for the existence of `niceButton` with an if-statement instead of using the non-null assertion operator. Albeit, the operator is a handy feature to tell TypeScript that we know that some data definitely exists.

  So far, we've seen how the optional chaining and non-null assertion operators work in dealing with non-existent or existing data. Now, let's take a dive into why the way they work is philosophically interesting.

### 3. Possible Worlds

  Let's start with some history. In the early 1900's, a philosophical movement called 'Analytic Philosophy' gained momentum in British Philosophy. In essence, analytic philosophers aimed for rigour by fusing advances in logic, the natural sciences and mathematics with advances in philosophy. We then witnessed the development of exciting tools and fields such as the Philosophy of Quantum Mechanics. Eventually, Analytic Philosophy cemented itself as the predominant way of doing philosophy in the English speaking world (sadly). So, today, we have a plethora of "rigorous" tools to analyze philosophical issues such as modal existence. Briefly, 'modal existence' refers to how some objects *could* exist. For example, a parallel universe could exist. Then, we may ask philosophical questions about the modal existence of a parallel universe such as *how is that that a parallel universe could exist?* or *what does it mean to say that 'something could exist'?*. Generally, analytic philosophers use two tools to analyze modal existence - the mechanisms of Possible Worlds and Modal Logics.

  Beyond all the fancy maths, the idea behind a Possible World and a Modal Logic is quite simple. Firstly, a Possible World is another way our world could be. So, if something could exist, then it exists at some Possible World. Alternatively, if something cannot exist, then there is no Possible World where it exists. Additionally, if something must exist, then it exists across all Possible Worlds. Lastly, if something exists, then it exists in a special kind of Possible World - our world!

  **In essence, every single way that the world could be is a Possible World and anything that exists in these Possible Worlds are things that could exist.**

  For example, if we say that 'a parallel universe could exist', then we mean that there is a possible world where there is a parallel universe. Quite neat. Secondly, a Modal Logic is a formal language/system that allows us to deduce conclusions about these Possible Worlds (mostly in the form of proofs, arguments or theorems). Metaphorically, a Modal Logic is like a mathematical map which guides us through our explorations of the infinitely many Possible Worlds. For example, we can use a Modal Logic to derive contradictions on Possible Worlds. Think of a contradiction as a road-block in our map. If we come across one, then something's fishy.

### 4. The Return Of Symbolic Manipulation

  That's enough history - let's step back into our current subject matter. We said that TypeScript's optional chaining and non-null assertion operators deal with non-existent or existing data. This is a subtle, but intuitive, way of saying that these operators deal with the *possible* existence of data, i.e. its modal existence. Given what we covered on Possible Worlds, Modal Logics and modal existence, let's proceed with our philosophical dive by exploiting this subtlety.

  In a [previous article](../HelloComputer/HelloComputer.md), I conceptualized computation as symbolic manipulation. The big picture is that computation conceptually boils down to metaphysical symbols manipulating other metaphysical symbols (emphasis on 'metaphysical'). So, we may conceptualize a snippet of code, like `thisArticle?.author?.firstName`, as a symbol manipulating another symbol (in our case, it's the JSON data). Remember that one of the questions marks prevents our code from digging deeper into the `author` key if it does not exist. Intuitively, the question mark is telling our code that it's possible that the `author` key does not exist! Conceptually, it is telling our code that there is a Possible World where the `author` key does not exist and that the world where our code is executing might not be that Possible World.

  Additionally, we may conceptualize the snippet `document.querySelector('button')!` as a symbol manipulating another symbol (in this case, any data relating to our nice button). Remember that the exclamation mark reassures TypeScript about the button's existence. Intuitively, that exclamation mark is telling TypeScript that the button must exist, i.e. it's impossible that the button does not exist! Conceptually, it is reassuring TypeScript that it exists at the world where our code is executing. A fortiori, it reassures TypeScript that the button exists across all Possible Worlds.

  Two quick notes before we proceed. Firstly, our nice button does not exist across all Possible Worlds. However, for this article's sake, let's ignore this issue. We could think of a work-around by getting technical and talking of restricted Possible Worlds but let's not do that. Secondly, one may find the move from TypeScript to Possible Worlds quite dodgy. In response, I invite you to charitably conceptualize computation as symbolic manipulation as a way of grounding computation in a "paradise of formal languages" where we can easily paraphrase and translate from one formal language to another.

### 5. Contradiction Ergo Error

  So far, we've philosophically analyzed two code snippets containing our two TypeScript operators in terms of Possible Worlds. In Analytic Philosophy, it's common practice to showcase the strength of an analysis by talking about its explanatory power. Essentially, the goal is to show how we can explain some phenomenon associated with the object under analysis using the analysis itself. Think of how we analyze matter as atoms and molecules. We may then flex the explanatory power of our analysis by showing how the heating up of matter is *explained* by the faster vibration of atoms.

  Let's start with the optional chaining operator in `thisArticle?.author?.firstName`. Remember that it is telling our code that there is a Possible World where the `author` key does not exist. Additionally, our code does not throw an error if the key does not exist. Alternatively, note that it would not throw an error it actually exists. If we take a look at our metaphorical map (Modal Logic), we can prove that if an object exists at a Possible World, then there is no contradiction in if that object exists, or does not exist, in our world. In our context, it's like proving that there is no contradiction if the `author` key exists at some Possible World but it does, or does not, exist in the world where our code is executing. So, there are no road-blocks and nothing's fishy. Hence, no errors are thrown. Intuitively, the explanatory power of our analysis comes from drawing that parallel between the absence of computational errors in our code to the absence of contradictions in Modal Logic. So, we may conceptually explain (or, in the very least, characterize) computational errors as a lack of road-blocks in our metaphorical map of Possible Worlds.

  Moreover, remember that the non-null assertion operator in `document.querySelector('button')!` reassures TypeScript that the button exists across all Possible Worlds. Now, suppose that the external file that contains the button gets corrupted such that there is no button anymore. Since we've explicitly told TypeScript that such a button must exist when it does not exist, we would get the following error: `Cannot read properties of null (reading 'classList')`. Now, in Modal Logic, we can derive a contradiction if an object exists across all Possible Worlds but that object does not exist at one Possible World. In our context, it's like deducing a contradiction because the button does not exist at the world where our code is executing but TypeScript believes that it exists across all Possible Worlds. That's a road-block and we know that something's fishy. So, an error gets thrown. Once again, the explanatory power of our analysis of `document.querySelector('button')!` comes from drawing a parallel between the presence of a computational error in our code to the presence of contradictions in Modal Logic. So, we may conceptually explain (or characterize) road-blocks in our metaphorical map of Possible Worlds to computational errors.

  > In sum, we saw how TypeScript's optional chaining and non-null assertion operators work. We philosophically analyzed the way they work in terms of Possible Worlds and Modal Logics. Consequently, we were able to draw parallels between the realm of Possible Worlds and that of computational errors. In particular, we saw how we can easily jump from the presence/absence of contradictions in Modal Logic and across Possible Worlds to the presence/absence of computational errors in our code.

### PS

  1. If you want to learn more about the philosophy, mathematics and logic behind Possible Worlds or Modal Logics, I highly recommend [this article](https://plato.stanford.edu/entries/logic-modal/) by Garson and [this article](https://plato.stanford.edu/entries/possible-worlds/) by Menzel. Additionally, David Lewis' book 'On The Plurality Of Worlds' is a classic. Personally, the last area of logical research I dived into was about the Topological Semantics of Modal Logics. It was a tough but really rewarding journey. So, I'd highly recommend that if you want something really juicy.

  2. In section 3, I only spoke of Analytic Philosophy, Possible Worlds and Modal Logics. This does not imply that ideas surrounding modality is restricted to Analytic Philosophy. Actually, these idea are scattered across time and place. For example, we have writings of Islamic Philosophers, such as Ibn Sina, on modality from the 10th century. [Check it out here](https://plato.stanford.edu/entries/arabic-islamic-language/#ModProModSyl).

  3. In section 5, we proposed two theorems. Firstly, that we can prove that if an object exists at a Possible World, then there is no contradiction if that object exists, or does not exist, in another world. Secondly, that we can derive a contradiction if an object exists across all Possible Worlds but it does not exist at one Possible World. For those interested, these are their formal representations respectively.

  ```
    1. {◇p, p} ⊬ ⊥

    2. {◇p, ~p} ⊬ ⊥
  ```

  and

  ```
    {~p, □p} ⊢ ⊥
  ```

  Given this article's context, any proposition p with a modal operator (◇ and □) refer to assertions about data from TypeScript snippets containing the two operators like `thisArticle?.author?.firstName`. The remaining propositions refer to assertions on whether or not the data actually exists.
