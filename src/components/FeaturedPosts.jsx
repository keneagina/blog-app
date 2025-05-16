import React from 'react';
import PostCard from './PostCard';
import posts from '../data/posts';

const FeaturedPosts = ({ filteredPosts }) => {
  // Use the filtered posts if provided, otherwise use all posts
  const postsToUse = filteredPosts || posts;
  
  // Get the first three posts for featured section
  const featuredPosts = postsToUse.slice(0, 3);
  const mainPost = featuredPosts[0];
  const secondaryPosts = featuredPosts.slice(1, 3);
  
  if (featuredPosts.length === 0) {
    return (
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-[#333] mb-5 border-b-2 border-[#eaeaea] pb-[10px]">
          Featured Posts
        </h2>
        <div className="p-10 text-center bg-[#f9f9f9] rounded-lg">
          <p>No posts found in this category.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-[#333] mb-5 border-b-2 border-[#eaeaea] pb-[10px]">
        Featured Posts
      </h2>
      
      {/* Main featured post (vertical) - ROW 1 */}
      {mainPost && (
        <div className="mb-[30px]">
          <PostCard post={mainPost} variant="featured" size="large" />
        </div>
      )}
      
      {/* Two smaller posts (horizontal row) - ROW 2 */}
      {secondaryPosts.length > 0 && (
        <div className="flex gap-[25px] flex-wrap bg-[#f9f9f9] p-5 rounded-lg">
          {secondaryPosts.map(post => (
            <div key={post.id} className="flex-1 min-w-[280px] basis-[calc(50%-15px)]">
              <PostCard post={post} variant="featured" size="medium" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedPosts; 