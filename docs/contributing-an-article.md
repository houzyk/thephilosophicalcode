# Contributing An Article

Please follow the below if you want to add a new article to the repo.

## Script

You can run the following to scaffold a dummy article.

```
npm run generate-article
```

This will prompt for:

1. Your Github username.
2. Your article's title.
3. A path to your cover photo (optional).

It will scaffold the following:

1. A dummy article at `./content/articles/<your-article-title>.md`.
2. A cover image for your article at `./public/images/<your-article-title>/cover.webp`.
2. Add you to the list of contributors unless you're already there (`./content/people.json`).

Alternatively, you can add an article manually as follows:

1. Add a `{your-article-title-in-kebab-case}.md` in the `./contents/articles` directory.
2. Add your cover photo `cover.webp` in `./public/image/<your-article-title>`.
3. Add your name in the "authors" object at `./content/people.json`.

Alternatively, send me your article on houzairmk@icloud.com. I'll add it and share it. Do include your name and a possible way to contact you (so I can add you as an author).

## Housekeeping

1. If you have any links in your article, please write them in the following format.

```
[LinkTitle](YOUR-URL LinkTitle)
```

2. Please update the date of your article to when you send your article's PR.
3. A description is compulsory.

## Rules

1. Your article's title should be less or equal to 15 words.
2. Please refrain from using foul words.
3. Your article should concern at least the intersection of Philosophy, CS, Mathematics, Linguistics or Logic. Or any of the topics mentioned [here](https://thephilosophicalcode.com/).

## Assets

If you have any assets, please makes sure that they are only images and of the `.webp` format. Add them in `./public/images/<your-article-title>/`.

## Credit

I highly appreciate any new article. So, I will be adding your name under the "Authors" section to the [people's section](https://thephilosophicalcode.com/people/) to show appreciation.
