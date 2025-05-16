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
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '15px'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#333',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid #eaeaea',
        paddingBottom: '10px'
      }}>
        Trending Now
        <div style={{ 
          marginLeft: '10px', 
          height: '4px', 
          width: '40px', 
          backgroundColor: '#FF6B00', 
          borderRadius: '2px' 
        }}></div>
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {trendingPosts.length > 0 ? (
          trendingPosts.map(post => (
            <div key={post.id} style={{ 
              height: '120px',
              borderBottom: '1px solid #eaeaea',
              paddingBottom: '15px',
              marginBottom: '5px'
            }}>
              <PostCard post={post} variant="trending" size="small" />
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>
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