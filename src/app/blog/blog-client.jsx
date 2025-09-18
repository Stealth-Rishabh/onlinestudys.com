"use client";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { motion } from "framer-motion";
// import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

const fetchPosts = async (page) => {
  const response = await fetch(
    `https://onlinestudys.com/wordpress/wp-json/wp/v2/posts?_embed&page=${page}&per_page=9`
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);
  const postsPerPage = parseInt(
    response.headers.get("X-WP-Per-Page") || "9",
    10
  );
  const calculatedPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));

  return { posts: data, totalPages: calculatedPages };
};

const BlogCard = ({ id, date, title, description, imageUrl, slug }) => {
  return (
    <div
      id={id}
      className="group w-full overflow-hidden border border-gray-300 rounded"
    >
      <div className="flex items-center">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="rounded-t w-full object-cover h-44 sm:h-48 aspect-video"
        />
      </div>
      <div className="p-4 lg:p-6 h-full transition-all duration-300 rounded-b-2xl group-hover:bg-green-50">
        <span className="text-green-600 font-medium mb-3 block">{date}</span>
        <Link href={`/blog/${slug}`}>
          <h4
            className="text-xl text-gray-900 hover:text-primary-color transition-all duration-300 hover:underline font-medium leading-8 mb-5"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
        <p
          className="text-gray-500 mb-5 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link
          href={`/blog/${slug}`}
          className="cursor-pointer text-lg text-green-600 font-semibold"
        >
          Read more..
        </Link>
      </div>
    </div>
  );
};

const BlogClient = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Prefetch next page
  useEffect(() => {
    if (data?.totalPages && page < data.totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["posts", page + 1],
        queryFn: () => fetchPosts(page + 1),
      });
    }
  }, [page, data, queryClient]);

  if (error) {
    return (
      <section className="py-12 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-red-500">Error fetching posts.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            level={2}
            align="center"
            subtext="Stay updated with our latest insights and articles"
            className="text-black text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Our latest blog
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse border border-gray-300 rounded-2xl"
                >
                  <div className="bg-gray-200 h-48 rounded-t-2xl" />
                  <div className="p-4 lg:p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-5" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))
            : data?.posts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  date={new Date(post.date).toLocaleDateString()}
                  title={post.title.rendered}
                  description={
                    post.content.rendered
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 150) + "..."
                  }
                  imageUrl={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://pagedone.io/asset/uploads/1696244317.png"
                  }
                  slug={post.slug}
                />
              ))}
        </div>

        {/* Pagination Controls */}
        {!isLoading && data?.totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1 || isFetching}
              className={`px-4 py-2 rounded ${
                page === 1 || isFetching
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-pink-800 text-white hover:bg-pink-900"
              }`}
            >
              Previous
            </button>

            <div className="flex items-center gap-2 overflow-x-auto">
              {Array.from({ length: data.totalPages }, (_, index) => index + 1)
                .slice(
                  Math.max(0, page - 3),
                  Math.min(data.totalPages, page + 2)
                )
                .map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    disabled={isFetching}
                    className={`w-10 h-10 rounded ${
                      page === pageNumber
                        ? "bg-pink-800 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    } ${isFetching ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    {pageNumber}
                  </button>
                ))}
            </div>

            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, data.totalPages))
              }
              disabled={page === data.totalPages || isFetching}
              className={`px-4 py-2 rounded ${
                page === data.totalPages || isFetching
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-pink-800 text-white hover:bg-pink-900"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Loading overlay for subsequent fetches */}
        {isFetching && !isLoading && (
          <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">Loading...</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogClient;
