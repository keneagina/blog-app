import React, { useState } from 'react';
import PostCard from './post-card';
import { Post } from './post-card';

interface PostGridProps {
  posts: Post[];
  initialCount?: number;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, initialCount = 6 }) => {
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);
  
  const handleLoadMore = (): void => {
    setVisibleCount(prev => Math.min(prev + 6, posts.length));
  };
  
  const visiblePosts: Post[] = posts.slice(0, visibleCount);
  const hasMore: boolean = visibleCount < posts.length;
  
  return (
    <div className="mb-[60px] w-full flex flex-col items-center">
      {/* Title with orange lines */}
      <div className="flex items-center justify-center mb-[30px] w-full">
        <div className="h-[2px] w-[40px] bg-[#FF6B00] mr-[15px]"></div>
        <h2 className="text-2xl font-bold text-[#333] m-0">
          All Posts
        </h2>
        <div className="h-[2px] w-[40px] bg-[#FF6B00] ml-[15px]"></div>
      </div>
      
      {/* Grid of posts in centered container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center justify-center w-full max-w-7xl">
        {visiblePosts.map(post => (
          <div key={post.id} className="w-full max-w-[350px] h-[520px]">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      
      {/* Load more button */}
      {hasMore && (
        <div className="text-center mt-8">
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