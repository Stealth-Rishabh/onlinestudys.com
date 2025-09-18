import { headers } from "next/headers";

// Force dynamic rendering to ensure fresh data on each request
export const dynamic = "force-dynamic";

// API endpoints
const WORDPRESS_BLOG_API =
  "https://onlinestudys.com/wordpress/wp-json/wp/v2/posts";
const CAREER_API = process.env.NEXT_PUBLIC_API_BASE_URL
  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/indexCareer.php`
  : "https://onlinestudys.com/api/indexCareer.php";

// Static routes with their metadata
const staticRoutes = [
  {
    url: "/",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    url: "/about-us",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/contact-us",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/privacy-policy",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: "/terms-conditions",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  // University specific routes
  {
    url: "/amity",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/chandigarh",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/galgotias",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/parul",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  // Program specific routes
  {
    url: "/mca",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
];

// Fetch blog posts from WordPress API
async function fetchBlogPosts() {
  try {
    const response = await fetch(
      `${WORDPRESS_BLOG_API}?per_page=100&_fields=slug,modified,status`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch blog posts:", response.status);
      return [];
    }

    const posts = await response.json();

    // Filter only published posts and ensure they have required fields
    const publishedPosts = posts.filter(
      (post) => post.status === "publish" && post.slug && post.modified
    );

    return publishedPosts.map((post) => ({
      url: `/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Fetch career posts from custom backend API
async function fetchCareerPosts() {
  try {
    const response = await fetch(`${CAREER_API}?scope=active`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Failed to fetch career posts:", response.status);
      return [];
    }

    const careers = await response.json();

    // Filter only active careers and ensure they have required fields
    const activeCareers = careers.filter(
      (career) =>
        career.slug &&
        (career.status === "active" ||
          career.status === "published" ||
          !career.status)
    );

    return activeCareers.map((career) => ({
      url: `/career/${career.slug}`,
      lastModified: new Date(
        career.updated_at || career.created_at || career.modified || Date.now()
      ),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching career posts:", error);
    return [];
  }
}

export default async function sitemap() {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://onlinestudys.com`;

  // Fetch dynamic content
  const [blogPosts, careerPosts] = await Promise.all([
    fetchBlogPosts(),
    fetchCareerPosts(),
  ]);

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...blogPosts, ...careerPosts];

  // Add base URL to all routes
  return allRoutes.map((route) => ({
    ...route,
    url: `${baseUrl}${route.url}`,
  }));
}
