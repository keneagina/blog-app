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
    <div style={{ marginBottom: '60px' }}>
      {/* Title with orange lines */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        <div style={{ 
          height: '2px', 
          width: '40px', 
          backgroundColor: '#FF6B00', 
          marginRight: '15px' 
        }}></div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0'
        }}>
          All Posts
        </h2>
        <div style={{ 
          height: '2px', 
          width: '40px', 
          backgroundColor: '#FF6B00', 
          marginLeft: '15px' 
        }}></div>
      </div>
      
      {/* Grid of posts */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '25px',
        marginBottom: '30px'
      }}>
        {visiblePosts.map(post => (
          <div key={post.id} style={{ minHeight: '360px' }}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      
      {/* Load more button */}
      {hasMore && (
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={handleLoadMore}
            style={{
              backgroundColor: '#FF6B00',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E55000'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF6B00'}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PostGrid; 