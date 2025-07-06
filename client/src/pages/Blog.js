import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPostContent = async () => {
      const foundPost = blogPosts.find((p) => p.id === id);
      if (foundPost && foundPost.contentFile) {
        try {
          const response = await fetch(process.env.PUBLIC_URL + `/${foundPost.contentFile}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const contentHtml = await response.text();
          setPost({ ...foundPost, content: contentHtml });
        } catch (error) {
          console.error('Error loading blog post content:', error);
          setPost(null);
        }
      } else {
        setPost(foundPost || null);
      }
    };
    loadPostContent();
  }, [id]);

  if (!post) {
    return <div className="max-w-5xl mx-auto px-4 py-12 text-center text-red-600">Blog post not found.</div>;
  }

  // Structured data JSON-LD for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.authorName || "ChatWhole"
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://chatwhole.com/blog/${id}`
    },
    "image": post.image || undefined,
    "keywords": post.tags ? post.tags.join(", ") : undefined
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - ChatWhole</title>
        <meta name="description" content={post.excerpt || 'Blog post on ChatWhole'} />
        <meta name="keywords" content={post.tags ? post.tags.join(", ") : ""} />
        <link rel="canonical" href={`https://chatwhole.com/blog/${id}`} />
        <meta property="og:title" content={`${post.title} - ChatWhole`} />
        <meta property="og:description" content={post.excerpt || 'Blog post on ChatWhole'} />
        <meta property="og:url" content={`https://chatwhole.com/blog/${id}`} />
        <meta property="og:type" content="article" />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - ChatWhole`} />
        <meta name="twitter:description" content={post.excerpt || 'Blog post on ChatWhole'} />
        {post.image && <meta name="twitter:image" content={post.image} />}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-lg shadow-lg">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-900 mb-2">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm sm:text-base">
            <div>
              By <span className="font-semibold">{post.authorName || "ChatWhole"}</span>
            </div>
            <div className="hidden sm:block">•</div>
            <time className="mt-1 sm:mt-0" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </header>
        <section className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.content }} />
        <footer className="mt-12 border-t pt-6 flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link to="/blog" className="text-yellow-400 hover:text-yellow-500 font-semibold">
              &larr; Back to All Blog Posts
            </Link>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://chatwhole.com/blog/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
                aria-label="Share on Facebook"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://chatwhole.com/blog/${id}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 font-semibold"
                aria-label="Share on Twitter"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://chatwhole.com/blog/${id}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-semibold"
                aria-label="Share on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/get-demo"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
            >
              Demo our project
            </Link>
            <a
              href="https://www.linkedin.com/company/chatwholes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-center"
            >
              Follow us on LinkedIn
            </a>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Blog;
