# Existence In TypeScript

>   Two handy TypeScript features are the optional chaining and non-null assertion operators. In this article, we'll explore how these two operators work and why the way they work is metaphysically interesting.

### 1. Is It Me You're Looking For?

  Fetching API data is a classic move in the front-end developer's playbook. However, "it's never *just* an API call" is also a classic phrase in the front-end developer's dictionary. That's the risk of working with external data- it could be different from what we expected to to be or it could simply not exist. To curb down this risk of working with nonexistent data, front-end developers may use TypeScript's optional chaining operator (syntactically, a question mark '?').

  Let's say that our million dollar front-end app fetches this humble JSON containing some data about this article.

  `
    {
      "title": "Existence In TypeScript",
      "author": {
        "firstName": "Houzair",
        "lastName": "Koussa"
      }
    }
  `

  Our app may now access this JSON using the dot-notation. For example, `thisArticle.title` gives us `'Existence In TypeScript'`. However, suppose that, due to some unforeseen events, we do not get back the key `author` when we fetch our JSON. In this scenario, trying to access the value of `thisArticle.author.firstName` would throw the following type error: `Cannot read property 'firstName' of undefined`. To guard our app against these unforeseen events, we may use TypeScript's optional chaining operator and write `thisArticle?.author?.firstName`. In practice, this means that our app would not dig deeper into the `author` key if it does not exist. So, our app gets to live error-free for another day.

  In sum, the optional chaining operator acts as a safety net when dealing with nonexistent data. It saves us from unforeseen errors when we do not find what we're looking for. especially. In contrast, front-end developers may use TypeScript's non-null assertion operator (syntactically, an exclamation mark '!') when dealing with data that definitely exists.


### 2. It Is Me You're Looking For!

  Let's suppose that our million dollar app has a really nice button with the class `.nice-button`. That button is so nice, that we wanna give it a class name that fits its niceness. Using TypeScript, We can easily do that by querying for that button and adding a new class `'.super-duper-nice-button'` to it.

  `
    const niceButton = document.querySelector('.nice-button');
    button.classList.add('super-duper-nice-button');
  `

  Although the above snippet works fine in vanilla JavaScript, TypeScript is not gonna be happy. It's gonna yell at us and say `'niceButton' is possibly null`. In hindsight, TypeScript's behavior is quite reasonable. That button probably lives in another HTML document and we can't be sure that it's always gonna be there. To change TypeScript's behavior, we may use the non-null assertion operator as follows.

  `
    const niceButton = document.querySelector('.nice-button')!;
  `

  Notice the exclamation mark at the end. Essentially, it reassures TypeScript about the button's existence and that `niceButton` is not possibly `null`. Generally, I tend to avoid using the non-null assertion operator. Instead, we could check for the existence of `niceButton` using an if-statement before adding our new class.

  In sum, the non-null assertion operator reassures TypeScript that we know what we're looking for and we know where to look. So far, we've seen how the optional chaining and non-null operators work by dealing with nonexistent and existing data. Now, let's take a philosophical dive into how they way they work is metaphysically interesting.

### 3. Possible Worlds

  Traditionally, the issue of existence has been the business of philosophers. In particular, Metaphysics is the philosophical field that deals with questions of what's existence, what exists, how they exist and why they exist. In the early 1900's, a philosophical movement called 'Analytic Philosophy' gained momentum in British Philosophy. In essence, Analytic Philosophers emphasized for mathematical, scientific and logical rigour in philosophy. Advances in logic, the natural sciences and mathematics fused with advances in philosophy until they became one.  We then witnessed the development of highly exciting fields of research such as Mathematical Philosophy or the Philosophy of Quantum Mechanics. That movement has been so influential that, today, Analytic Philosophy is, sadly, the predominant way of doing Philosophy in the English speaking world. Needless to say, Metaphysics was also influenced and so where concepts surrounding existence. One such concept was that of modal existence. Quite simply, modal existence refers to how some object *could* have existed. For example, we may say that a parallel universe could exist. Then, we could ask metaphysical questions surrounding the modal existence of a parallel universe such as 'how is that that parallel universes could exist?' or 'what does it mean to say that something could exist?'.

  Today, it's the norm for Analytic Philosophers to understand modal existence through the mechanisms of Possible Worlds and Modal Logics. Beyond all the fancy maths and logic, the ideas of a Possible World and Modal logics are quite simple. Firstly, a Possible World is another way our world could be. Then, we say that if something could exist, then it exists are some Possible World. In essence, **every single way that the world could be is a Possible World and anything that exists in these Possible Worlds are things that could exist**. For example, if we say that a parallel universe could exist, then we mean that there is a possible world where there exists a parallel universe. Quite neat.


  Secondly, a Modal Logic is a formal system that allows us to deduce conclusions about these possible worlds (mostly in the form of proofs, arguments or theorems). Eventually, the mechanisms of Possible Worlds and Modal Logics, quickly took off and are not well-oiled tool in areas such as AI research. In my opinion, it's rise was due to its intuitiveness and its firm mathematical and logic foundation.

  So far, we've looked at how TypeScript's optional chaining and non-null assertion operators allows us to deal with the *possible* existence or nonexistence of data. In essence, the modal existence of data. Additionally, we also talked of Possible Worlds and Modal Logics as mechanisms for understanding modal existence. Naturally, let's explore how these two overlap.

### 4. The Return Of Symbolic Manipulation

### 5. Contradiction Ergo Error

### PS

  1. If you want to learn more about the Philosophy and Logic behind Possible Worlds or Modal Logics, I highly recommend [this article](https://plato.stanford.edu/entries/logic-modal/) by Garson and [this article](https://plato.stanford.edu/entries/possible-worlds/) by Menzel. Additionally, David Lewis' book 'On The Plurality Of Worlds' is a classic.

  2. In section 3, I strictly spoke of Analytic Philosophy. I also talked about Possible Worlds before introducing Modal Logic. I do not intend this flow to establish any form of historical causation. I am not implying that the development of Possible Worlds led to the development of Modal Logics. Actually, ideas of other possible Worlds and modal systems are scattered across history and are not unique to Analytic Philosophy. For example, we find writings of Islamic Philosophers, such as Ibn Sina, on Modality since the 10th century. [See here](https://plato.stanford.edu/entries/arabic-islamic-language/#ModProModSyl).
