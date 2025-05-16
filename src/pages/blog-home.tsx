import React, { useState } from 'react';
import FeaturedPosts from '../components/featured-posts';
import TrendingPosts from '../components/trending-posts';
import CategoryFilter from '../components/category-filter';
import PostGrid from '../components/post-grid';
import posts from '../data/posts';
import { Post } from '../components/post-card';

const BlogHome: React.FC = () => {
  // State for category selection
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Handle category selection and filter posts
  const handleCategorySelect = (category: string): void => {
    setActiveCategory(category);
    console.log(`Category selected: ${category}`);
  };

  // Filter posts based on the selected category
  const filteredPosts: Post[] = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <main className="bg-white">
      <div className="px-5 py-10 max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="flex flex-row flex-wrap gap-[60px] mb-[70px]">
          {/* Left column - Featured Posts (wider) */}
          <div className="flex-[1.5] min-w-[300px]">
            <FeaturedPosts filteredPosts={posts} />
          </div>
          
          {/* Right column - Trending Posts (narrower) */}
          <div className="flex-1 min-w-[300px]">
            <TrendingPosts filteredPosts={posts} />
          </div>
        </div>

        {/* Category Filter above All Posts */}
        <div className="border-t border-[#eaeaea] pt-[30px] mb-[30px]">
          <CategoryFilter onCategorySelect={handleCategorySelect} />
        </div>

        {/* All Posts Grid - Only this component uses filtered posts */}
        <div className="pt-[10px]">
          <PostGrid posts={filteredPosts} initialCount={6} />
        </div>
      </div>
    </main>
  );
};

export default BlogHome; 