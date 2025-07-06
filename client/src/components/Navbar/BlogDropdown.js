import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 focus:outline-none"
      >
        Blog
      </button>
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <Link
              to="/blog"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              All Blog Posts
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDropdown;
