import type { APIRoute } from 'astro';

import { readAll } from "../../../lib/markdoc/read";
import { article } from "../../../lib/markdoc/frontmatter.schema";
import { SITE_URL } from "../../../config";

export const GET:APIRoute = async ({ params, props }) => {
  const { slug } = params;

  const {
    title,
    description,
    date,
    author,
    authorUrl,
    ogImagePath,
  } = props;

  return {
    body: JSON.stringify({
      title,
      description,
      author,
      author_url: authorUrl,
      date_published: date,
      cover_photo: `${SITE_URL}${ogImagePath}`,
      live_url: `${SITE_URL}/articles/${slug}`
    })
  }
}

export const getStaticPaths = async () => {
  const articles = await readAll({
    directory: "articles",
    frontmatterSchema: article,
  });

  const filteredArticles = articles
    .filter((p) => p.frontmatter.draft !== true)
    .filter(({ frontmatter }) => !frontmatter.external);

  return filteredArticles.map((article) => {
    const {
      slug,
      frontmatter
    } = article;

    return ({
      params: { slug },
      props: {
        ...frontmatter
      }
    });
  });
}
