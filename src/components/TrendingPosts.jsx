import React from 'react';
import PostCard from './PostCard';
import posts from '../data/posts';

const TrendingPosts = ({ filteredPosts }) => {
  // Use the filtered posts if provided, otherwise use all posts
  const postsToUse = filteredPosts || posts;
  
  // Get the first three posts that will be shown in featured section
  const featuredPostIds = postsToUse.slice(0, 3).map(post => post.id);
  
  // Get trending posts that are not in featured section
  const trendingPosts = postsToUse
    .filter(post => post.trending && !featuredPostIds.includes(post.id))
    .slice(0, 5);
  
  // If we don't have enough trending posts after filtering out featured ones,
  // add more non-featured posts to reach 5 posts total
  if (trendingPosts.length < 5) {
    const additionalPosts = postsToUse
      .filter(post => !featuredPostIds.includes(post.id) && !trendingPosts.some(tp => tp.id === post.id))
      .slice(0, 5 - trendingPosts.length);
    
    trendingPosts.push(...additionalPosts);
  }
  
  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="text-2xl font-bold text-[#333] mb-[15px] flex items-center border-b-2 border-[#eaeaea] pb-[10px]">
        Trending Now
        <div className="ml-[10px] h-1 w-[40px] bg-[#FF6B00] rounded-sm"></div>
      </h2>
      
      <div className="flex flex-col gap-5">
        {trendingPosts.length > 0 ? (
          trendingPosts.map(post => (
            <div key={post.id} className="h-[120px] border-b border-[#eaeaea] pb-[15px] mb-[5px]">
              <PostCard post={post} variant="trending" size="small" />
            </div>
          ))
        ) : (
          <div className="text-center p-5">
            <p>No trending posts found in this category.</p>
          </div>
        )}
      </div>
      
      <style>
        {`
          .trending-post-title:hover {
            color: #FF6B00 !important;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default TrendingPosts; 