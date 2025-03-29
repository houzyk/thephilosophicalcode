# Setup + Run

## Requirements

1. Node: LTS / 18+.
2. Docker (optional).

## Run

Clone this repo.

```
git clone https://github.com/houzyk/thephilosophicalcode.git
```

Or fork it.

Run the app locally with the following commands.

```
npm install
npm run dev
```

Go to `localhost:3000`.

## Routes

| Page | Route |
| -------- | ------- |
| Home / About  | `/` |
| Articles | `/articles` |
| People | `/people` |
| A Specific Article | `/articles/<article-title-goes-here>` |
| Endpoints - Entry | `/data/entry.json` |
| Endpoints - People | `/data/people.json` |
| Endpoints - Articles | `/data/articles.json` |
| Endpoints - Specific Article | `/data/articles/<article-title-goes-here>` |
| RSS | `/rss.xml` |
| Sitemap | `/sitemap-0.xml` |

## Build

To build the project locally.

```
npm run build
```

Go to `/dist`. You can serve it locally with `npx serve ./dist`

Alternatively, `npm run preview`.