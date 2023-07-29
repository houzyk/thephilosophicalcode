![The Philosophical Code](https://github.com/houzyk/thephilosophicalcode/assets/88334281/de7a3b10-3abe-4b13-952f-759b5449fdbd)

# The Philosophical Code

Exploring Code From A Philosophical Point Of View.

The Philosophical Code is an open-source article series exploring the intersection of philosophy and computation. Our raison d'être is quite simple - think of code like a Ferrari! It's a very powerful car and we can go to a lot of places with it. The job of the Engineer is to drive that car; the job of the "Philosopher Of Code" is to open its hood and study the engines. In other words, our goal is to conceptually break down computation itself.

## Articles

1. [Hello, Computer!](https://thephilosophicalcode.com/articles/hello-computer/) by @houzyk
2. [Keep It Dry](https://thephilosophicalcode.com/articles/keep-it-dry/) by @houzyk
3. [Existence And TypeScript](https://thephilosophicalcode.com/articles/existence-and-typescript/) by @houzyk
4. [Too Much To Handle](https://thephilosophicalcode.com/articles/too-much-to-handle/) by @houzyk
5. [OneByteAtAAtime](https://thephilosophicalcode.com/articles/one-byte-at-a-time/) by @wafaajaunnoo

## Setup

```
npm install
```

```
npm run dev
```

### Routes

About/Home page - `localhost:3000/`

Articles page - `localhost:3000/articles`

People page - `localhost:3000/people`

Specific article page - `localhost:3000/articles/article-title`


## Contribution Guidelines

Please note that any contribution to this article series, whether in terms of an article or engineering, will result in your details (github name and github username) to be displayed on the people section [here](https://thephilosophicalcode.com/people/)  

### Adding An Article

Scaffold a dummy article using:

```
npm run generate-article
```

This will prompt you for:

1. Your Github username
2. Your article title

It will scaffold:

1. A dummy article.
2. An image folder for your article.
3. Add you to the list of contributors unless you're already there.

Alternatively, follow the below manually

  1. To add an article, add an `{your-article-name-in-kebab-case}.md` in the `./contents/articles` directory.
  2. Add your details in `./contents/people.json`
  5. The article name strictly equals the article's title.
  6. The article's name should be less than or equal to 15 words.
  7. The article should be related to at least one of these two subjects: Philosophy, Computer Science/Software Engineering, Mathematics, Logic or Linguistics. Or any of the areas mentioned [here](https://thephilosophicalcode.com/).
  8. Alternatively, you can also email me your article on houzairmk@icloud.com. I'll add it to this repo and share it.

