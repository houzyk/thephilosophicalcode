import { readAll } from "../../../lib/markdoc/read";
import { article } from "../../../lib/markdoc/frontmatter.schema";
import { SITE_URL } from "../../../config";

const articles = await readAll({
  directory: "articles",
  frontmatterSchema: article,
});

const filteredArticles = articles
  .filter((p) => p.frontmatter.draft !== true)
  .filter(({ frontmatter }) => !frontmatter.external);

export const GET = () => {
  return new Response(JSON.stringify({
      articles: filteredArticles.map(({ slug, frontmatter: { title } }) => ({
          title,
          route: `${SITE_URL}/data/articles/${slug}.json`
        })
      )
    })
  );
}
