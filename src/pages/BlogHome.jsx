import React, { useState } from 'react';
import FeaturedPosts from '../components/FeaturedPosts';
import TrendingPosts from '../components/TrendingPosts';
import CategoryFilter from '../components/CategoryFilter';
import PostGrid from '../components/PostGrid';
import posts from '../data/posts';

const BlogHome = () => {
  // The category selection state is maintained but doesn't affect the content
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle category selection (only for UI state, doesn't filter content)
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    console.log(`Category selected: ${category}`); // Just for demonstration
  };

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

        {/* All Posts Grid */}
        <div style={{ 
          paddingTop: '10px'
        }}>
          <PostGrid posts={posts} initialCount={6} />
        </div>
      </div>
    </main>
  );
};

export default BlogHome; 