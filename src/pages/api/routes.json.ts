import type { APIRoute } from 'astro';


import { readAll } from "../../lib/markdoc/read";
import { article } from "../../lib/markdoc/frontmatter.schema";
import { SITE_URL } from "../../config";

const articles = await readAll({
  directory: "articles",
  frontmatterSchema: article,
});

const filteredArticles = articles
  .filter((p) => p.frontmatter.draft !== true)
  .filter(({ frontmatter }) => !frontmatter.external);

export const get: APIRoute = async () => {
  return ({
    body: JSON.stringify({
      routes: {
        _: `${SITE_URL}/api/routes.json`,
        people: `${SITE_URL}/api/people.json`,
        stuff: `${SITE_URL}/api/stuff.json`,
        articles: {
          index: `${SITE_URL}/api/articles.json`,
          shows: filteredArticles.map(({ slug }) => `${SITE_URL}/api/articles/${slug}.json`)
        }
      }
    })
  });
}
