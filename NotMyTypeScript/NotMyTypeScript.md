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

  Fortunately for our million dollar app, TypeScript would actually yell at us if we were to access `thisArticle.wordLength`. Metaphorically, it would quite candidly say something like "hey bud, I'm not too sure about that key 'wordLength'. It's not really my type. I'm sorry to say but I don't think it exists." On top of that, TypeScript also gives us two additional features to deal with JavaScript's limitations on dealing with objects. These are the optional chaining and non-null assertion operators.

### 2. Is It Me You're Looking For?!

### 3. Possible Worlds

### 4. The Return Of Symbolic Manipulation

### 5. Contradiction Ergo Error

### PS
