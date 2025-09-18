const WORDPRESS_BASE_URL = 'https://onlinestudys.com/wordpress/wp-json/wp/v2';
const CACHE_TIME = 3600; // 1 hour in seconds

/**
 * Fetches a single blog post by its slug from the WordPress REST API.
 * This function is used to get the data for individual blog post pages.
 *
 * @param {string} slug The slug of the blog post to fetch.
 * @returns {Promise<Object|null>} A promise that resolves to the post object or null if not found or an error occurs.
 */
export async function fetchBlogPost(slug) {
  if (!slug) {
    console.error("fetchBlogPost requires a slug.");
    return null;
  }

  try {
    const response = await fetch(
      `${WORDPRESS_BASE_URL}/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: CACHE_TIME },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch post with slug '${slug}'. Status: ${response.status}`);
      return null;
    }

    const posts = await response.json();

    if (posts.length === 0) {
      console.warn(`No post found with slug: '${slug}'`);
      return null;
    }

    return posts[0];
  } catch (error) {
    console.error("An error occurred while fetching the blog post:", error);
    return null;
  }
}
