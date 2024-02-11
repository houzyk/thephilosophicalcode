import { SITE_URL } from "../../config";

export const GET = () => {
  return new Response(JSON.stringify({
      routes: {
        people: `${SITE_URL}/data/people.json`,
        articles: `${SITE_URL}/data/articles.json`
      }
    })
  );
}
