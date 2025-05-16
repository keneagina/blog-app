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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#333',
          marginBottom: '20px',
          borderBottom: '2px solid #eaeaea',
          paddingBottom: '10px'
        }}>
          Featured Posts
        </h2>
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#f9f9f9',
          borderRadius: '8px' 
        }}>
          <p>No posts found in this category.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#333',
        marginBottom: '20px',
        borderBottom: '2px solid #eaeaea',
        paddingBottom: '10px'
      }}>
        Featured Posts
      </h2>
      
      {/* Main featured post (vertical) - ROW 1 */}
      {mainPost && (
        <div style={{ marginBottom: '30px' }}>
          <PostCard post={mainPost} variant="featured" size="large" />
        </div>
      )}
      
      {/* Two smaller posts (horizontal row) - ROW 2 */}
      {secondaryPosts.length > 0 && (
        <div style={{ 
          display: 'flex', 
          gap: '25px', 
          flexWrap: 'wrap',
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px'
        }}>
          {secondaryPosts.map(post => (
            <div key={post.id} style={{ 
              flex: '1 1 calc(50% - 15px)',
              minWidth: '280px'
            }}>
              <PostCard post={post} variant="featured" size="medium" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedPosts; 