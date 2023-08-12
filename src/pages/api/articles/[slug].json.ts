import type { APIRoute } from 'astro';

export const get:APIRoute = async ({ params }) => {
  const slug = params.slug;
  return {
    body: JSON.stringify({
      name: slug
    })
  }
}

export const getStaticPaths = () => {
  return [
    { params: { slug: "0"} }
  ]
}
