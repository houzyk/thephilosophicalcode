# Setup + Run

## Requirements

1. Node: LTS / 18+.
2. Docker (optional).

## Run

Clone this repo.

```
git clone https://github.com/houzyk/thephilosophicalcode.git
```

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
| RSS | `/rss.xml` |
| Sitemap | `/sitemap-0.xml` |

## Build

To build the project locally.

```
npm run build
```

Go to `/dist`. You can serve it locally with `npx serve ./dist`

## Docker

This repo contains two Docker files. Find them in `./docker`.

Build the Docker image for the app itself and the generate-article.js script.

```
docker-compose up

```

After the build, you should have two images- `thephilosophicalcode-app` and `thephilosophicalcode-generate-article-script`

Run a `thephilosophicalcode-app` container.

```
docker run -p YOUR-PREFERED-PORT:80 thephilosophicalcode-app
```

Go to `localhost:YOUR-PREFERED-PORT`

Run a `thephilosophicalcode-generate-article-script` container.

(This should be used if you do not have node 18+. We should also make the container interactive and bind it to the root directory)

```
docker run --interactive -v ABSOLUTE-LOCAL-PATH-TO-THIS-REPO:/generate-article-script thephilosophicalcode-generate-article-script
```
