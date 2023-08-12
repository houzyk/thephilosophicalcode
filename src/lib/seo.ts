type PageMeta = {
  title: string;
  description?: string;
  canonicalUrl?: string;
};

type PageOgMeta = {
  title: string;
  description?: string;
  type: "website";
  url?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
  publishDate?: string;
};

type PageTwitterMeta = {
  title: string; // same as og:title
  description?: string; // same as og:description
  card: "summary_large_image";
  image?: string; // same as og:image
  imageAlt?: string; // same as og:image:alt
};

type BlogPostOgMeta = {
  title: string;
  description?: string;
  type: "article";
  url?: string;
  author?: string;
  publishDate: string; // ISO string
  image?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
};

type BlogPostTwitterMeta = {
  title: string;
  description?: string;
  card: "summary_large_image";
  site?: string;
  creator?: string;
  image?: string;
  imageAlt?: string;
};

export function getPageMeta({
  title: pageTitle,
  description,
  baseUrl,
  ogImageAbsoluteUrl,
  ogImageAltText,
  ogImageWidth,
  ogImageHeight,
  publishDate
}: {
  title: string;
  description: string;
  baseUrl?: string;
  ogImageAbsoluteUrl?: string;
  ogImageAltText?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  publishDate?: string;
}): { meta: PageMeta; og: PageOgMeta; twitter: PageTwitterMeta } {
  if (!pageTitle) {
    throw Error("title is required for page SEO");
  }
  if (ogImageAbsoluteUrl) {
    ogImageAltText = !ogImageAltText
      ? `${pageTitle}`
      : ogImageAltText;
  }

  const meta: PageMeta = { title: pageTitle, description: description };

  const og: PageOgMeta = {
    title: pageTitle,
    description: description,
    type: "website",
    url: baseUrl,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
    imageWidth: ogImageWidth ? String(ogImageWidth) : undefined,
    imageHeight: ogImageHeight ? String(ogImageHeight) : undefined,
    publishDate,
  };

  const twitter: PageTwitterMeta = {
    title: pageTitle,
    description: description,
    card: "summary_large_image",
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
  };

  return {
    meta,
    og,
    twitter,
  };
}

export function getBlogPostMeta({
  title: pageTitle,
  description,
  canonicalUrl,
  pageUrl,
  authorName,
  publishDate,
  ogImageAbsoluteUrl,
  ogImageAltText,
  ogImageWidth,
  ogImageHeight
}: {
  title: string;
  description: string;
  canonicalUrl?: string;
  pageUrl?: string;
  authorName?: string;
  publishDate: string;
  ogImageAbsoluteUrl?: string;
  ogImageAltText?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  siteOwnerTwitterHandle?: string;
  contentAuthorTwitterHandle?: string;
}): { meta: PageMeta; og: BlogPostOgMeta; twitter: BlogPostTwitterMeta } {
  if (!pageTitle) {
    throw Error("title is required for page SEO");
  }
  if (ogImageAbsoluteUrl && !ogImageAltText) {
    ogImageAltText = `${pageTitle}`;
  }

  const meta: PageMeta = {
    title: pageTitle,
    description: description,
    canonicalUrl,
  };

  const og: BlogPostOgMeta = {
    title: pageTitle,
    description: description,
    type: "article",
    url: pageUrl,
    author: authorName,
    publishDate: publishDate,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
    imageWidth: ogImageWidth ? String(ogImageWidth) : undefined,
    imageHeight: ogImageHeight ? String(ogImageHeight) : undefined,
  };

  const twitter: BlogPostTwitterMeta = {
    title: pageTitle,
    description: description,
    card: "summary_large_image",
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
  };

  return {
    meta,
    og,
    twitter,
  };
}
