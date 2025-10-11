import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Benefits of Organic Cereals in Your Diet',
      excerpt: 'Discover how organic cereals like millet and sorghum can boost your health and add variety to your meals.',
      slug: 'benefits-of-organic-cereals',
    },
    {
      id: 2,
      title: 'Top 5 Spices to Elevate Your Nigerian Dishes',
      excerpt: 'Learn about the essential spices that bring authentic flavor to Nigerian cuisine, from paprika to ginger.',
      slug: 'top-5-spices-nigerian-dishes',
    },
    {
      id: 3,
      title: 'Sustainable Farming Practices in Nigeria',
      excerpt: 'Explore how ZPEOLFOODS NG sources its grains and spices sustainably from local farmers.',
      slug: 'sustainable-farming-nigeria',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        ZPEOLFOODS NG Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 sm:p-6 rounded-lg shadow text-center">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-600 rounded-full mx-auto mb-4"></div>
            <h2 className="text-lg sm:text-xl font-semibold text-orange-500 mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-block bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-yellow-600 text-sm sm:text-base"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;