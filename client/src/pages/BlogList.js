import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';
import { Helmet } from 'react-helmet-async';

const POSTS_PER_PAGE = 5;

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  if (posts.length === 0) {
    return <div className="max-w-5xl mx-auto px-4 py-12 text-center">No blog posts available.</div>;
  }

  return (
    <>
      <Helmet>
        <title>All Blog Posts - ChatWhole</title>
        <meta name="description" content="Read all articles and insights on data engineering and data science from ChatWhole." />
        <link rel="canonical" href="https://chatwhole.com/blog" />
        <meta property="og:title" content="All Blog Posts - ChatWhole" />
        <meta property="og:description" content="Read all articles and insights on data engineering and data science from ChatWhole." />
        <meta property="og:url" content="https://chatwhole.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Blog Posts - ChatWhole" />
        <meta name="twitter:description" content="Read all articles and insights on data engineering and data science from ChatWhole." />
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">All Blog Posts</h1>
        <div className="space-y-8">
          {currentPosts.map((post) => (
            <article key={post.id} className="border border-gray-300 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-2">
                <Link to={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{post.excerpt}</p>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-yellow-400 hover:text-yellow-500 font-semibold"
              >
                Read More &rarr;
              </Link>
            </article>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded w-full sm:w-auto ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-white'}`}
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded w-full sm:w-auto ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogList;
