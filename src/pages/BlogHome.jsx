import React, { useState } from 'react';
import FeaturedPosts from '../components/FeaturedPosts';
import TrendingPosts from '../components/TrendingPosts';
import CategoryFilter from '../components/CategoryFilter';
import PostGrid from '../components/PostGrid';
import posts from '../data/posts';

const BlogHome = () => {
  // State for category selection
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle category selection and filter posts
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    console.log(`Category selected: ${category}`);
  };

  // Filter posts based on the selected category
  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <main style={{ backgroundColor: 'white' }}>
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Two-column layout */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '60px',
          flexWrap: 'wrap',
          marginBottom: '70px'
        }}>
          {/* Left column - Featured Posts (wider) */}
          <div style={{ 
            flex: '1.5',
            minWidth: '300px'
          }}>
            <FeaturedPosts filteredPosts={posts} />
          </div>
          
          {/* Right column - Trending Posts (narrower) */}
          <div style={{ 
            flex: '1',
            minWidth: '300px'
          }}>
            <TrendingPosts filteredPosts={posts} />
          </div>
        </div>

        {/* Category Filter above All Posts */}
        <div style={{ 
          borderTop: '1px solid #eaeaea',
          paddingTop: '30px',
          marginBottom: '30px'
        }}>
          <CategoryFilter onCategorySelect={handleCategorySelect} />
        </div>

        {/* All Posts Grid - Only this component uses filtered posts */}
        <div style={{ 
          paddingTop: '10px'
        }}>
          <PostGrid posts={filteredPosts} initialCount={6} />
        </div>
      </div>
    </main>
  );
};

export default BlogHome; 