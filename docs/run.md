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
| Stuff | `/stuff` |
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

## Cypress

There are currently two automated test suites:

1. Vercel Preview - runs on any vercel preview url
2. Vercel Prod - runs on the live website


To run Vercel Preview locally on the prod app:

```
npm run cypress-test-on-vercel-preview
```

To run Vercel Preview locally on a specific Vercel preview url:

```
npx cypress run --spec 'cypress/e2e/vercel-preview.cy.ts' --config baseUrl='<PREVIEW-URL>'
```

To run Vercel Preview locally on a local app:

1. Run the app locally

2. `npm run cypress-test-on-vercel-preview-local`


To run Vercel Prod locally on the prod app:

```
npm run cypress-test-on-vercel-prod
```

To run Vercel Prod locally on a local app:

1. Run the app locally

2. `npm run cypress-test-on-vercel-prod-local`
