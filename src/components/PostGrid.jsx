import React, { useState } from 'react';
import PostCard from './PostCard';

const PostGrid = ({ posts, initialCount = 6 }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, posts.length));
  };
  
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;
  
  return (
    <div className="mb-[60px]">
      {/* Title with orange lines */}
      <div className="flex items-center justify-center mb-[30px]">
        <div className="h-[2px] w-[40px] bg-[#FF6B00] mr-[15px]"></div>
        <h2 className="text-2xl font-bold text-[#333] m-0">
          All Posts
        </h2>
        <div className="h-[2px] w-[40px] bg-[#FF6B00] ml-[15px]"></div>
      </div>
      
      {/* Grid of posts */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[25px] mb-[30px]">
        {visiblePosts.map(post => (
          <div key={post.id} className="min-h-[360px]">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      
      {/* Load more button */}
      {hasMore && (
        <div className="text-center">
          <button 
            onClick={handleLoadMore}
            className="bg-[#FF6B00] text-white border-none rounded-[25px] px-[30px] py-[12px] text-base font-bold cursor-pointer transition-colors duration-300 shadow-md hover:bg-[#E55000]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PostGrid; 