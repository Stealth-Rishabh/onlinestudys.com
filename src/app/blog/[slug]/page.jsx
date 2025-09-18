import BlogClientPage from "./blog-client";

import { fetchBlogPost } from '@/lib/blog';

// This function now runs on the SERVER for both the page and metadata
async function getPost(slug) {
  return await fetchBlogPost(slug);
}

// The metadata function is now async and uses the same data fetcher
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  // If the post isn't found, provide a default title and description
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for could not be found.",
    };
  }

  // Strip HTML from the excerpt for a clean meta description
  const metaDescription = post.yoast_head_json.description;
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${post.title.rendered}`,
    description: metaDescription,
    alternates: {
      canonical: `https://onlinestudys.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title.rendered,
      description: metaDescription,
      type: "article",
      url: `https://onlinestudys.com/blog/${params.slug}`,
      images: featuredImage ? [{ url: featuredImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: metaDescription,
      images: featuredImage ? [featuredImage] : [],
    },
  };
}

// The page component itself is now an async component
const BlogDetailsPage = async ({ params }) => {
  // Data is fetched on the server before the page is sent to the browser
  const post = await getPost(params.slug);

  // The fetched data is passed as a prop to the client component for rendering
  return <BlogClientPage initialPost={post} slug={params.slug} />;
};

export default BlogDetailsPage;