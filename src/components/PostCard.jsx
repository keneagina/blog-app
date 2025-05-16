import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, variant = 'standard', size = 'medium' }) => {
  // Determine card styling based on variant and size
  const getCardStyles = () => {
    // Base styles
    const baseStyle = {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: variant === 'trending' ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: variant === 'trending' ? 'none' : '1px solid #eaeaea',
      height: '100%',
      display: 'flex',
      flexDirection: variant === 'trending' ? 'row' : 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    // Size-specific styles
    switch (size) {
      case 'large':
        return {
          ...baseStyle,
        };
      case 'small':
        return {
          ...baseStyle,
          height: variant === 'trending' ? '120px' : undefined,
        };
      default: // medium
        return {
          ...baseStyle,
        };
    }
  };

  // Content renderers based on variant
  const renderImage = () => {
    const imageStyle = {
      width: '100%',
      objectFit: 'cover',
      height: variant === 'trending' ? '120px' : size === 'large' ? '380px' : '180px',
    };

    if (variant === 'trending') {
      imageStyle.width = '150px';
      imageStyle.borderRadius = '6px';
      imageStyle.flexShrink = 0;
    }

    return (
      <div 
        style={{ 
          position: 'relative',
          width: variant === 'trending' ? '150px' : '100%',
          flexShrink: 0
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={imageStyle}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1000&q=80';
          }}
        />
        {variant === 'featured' && size === 'large' && (
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: '#FF6B00',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '12px'
          }}>
            FEATURED
          </div>
        )}
      </div>
    );
  };

  const renderContent = () => {
    // Content styles vary by variant
    const contentStyle = {
      padding: variant === 'trending' ? '0 20px 0 0' : variant === 'featured' && size === 'large' ? '30px' : '20px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: variant === 'trending' ? 'center' : 'flex-start',
    };

    const titleSize = 
      variant === 'trending' ? '20px' :
      (variant === 'featured' && size === 'large') ? '28px' : '18px';

    return (
      <div style={contentStyle}>
        {variant !== 'trending' && (
          <div style={{ marginBottom: variant === 'featured' && size === 'large' ? '15px' : '10px' }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: '#f0f0f0',
              color: '#666666',
              padding: variant === 'featured' && size === 'large' ? '5px 12px' : '3px 10px',
              borderRadius: '20px',
              fontSize: variant === 'featured' && size === 'large' ? '13px' : '12px',
              fontWeight: '600'
            }}>
              {post.category}
            </span>
          </div>
        )}

        <h3 style={{ 
          fontSize: titleSize, 
          fontWeight: variant === 'trending' ? 'normal' : 'bold',
          marginBottom: variant === 'featured' && size === 'large' ? '15px' : '10px',
          color: '#333',
          lineHeight: '1.4',
          margin: variant === 'trending' ? '0' : undefined,
          transition: 'color 0.3s ease'
        }}
        className={variant === 'trending' ? "trending-post-title" : "post-title"}>
          {post.title}
        </h3>

        {variant === 'featured' && size === 'large' && (
          <p style={{ 
            fontSize: '16px',
            color: '#666',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            {post.excerpt}
          </p>
        )}

        {variant !== 'trending' && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: variant === 'featured' && size === 'large' ? '0' : 'auto',
            paddingTop: variant === 'featured' && size === 'large' ? '0' : '15px'
          }}>
            <span style={{ 
              fontSize: variant === 'featured' && size === 'large' ? '14px' : '12px',
              color: '#999'
            }}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            <span style={{ 
              color: '#666666',
              fontWeight: '600',
              fontSize: variant === 'featured' && size === 'large' ? '15px' : '12px',
              display: 'flex',
              alignItems: 'center'
            }}
            className="read-more">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width={variant === 'featured' && size === 'large' ? "16" : "12"} height={variant === 'featured' && size === 'large' ? "16" : "12"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: variant === 'featured' && size === 'large' ? '5px' : '4px' }}>
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        )}
      </div>
    );
  };

  // Determine order of image and content for trending variant
  const renderCardContent = () => {
    if (variant === 'trending') {
      return (
        <>
          {renderContent()}
          {renderImage()}
        </>
      );
    }
    return (
      <>
        {renderImage()}
        {renderContent()}
      </>
    );
  };

  const cardStyles = getCardStyles();

  return (
    <div style={cardStyles} className="post-card">
      <Link to={`/post/${post.slug}`} style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        display: 'flex',
        flexDirection: variant === 'trending' ? 'row' : 'column',
        height: '100%',
        width: '100%'
      }}>
        {renderCardContent()}
      </Link>

      <style>
        {`
          .post-card:hover {
            transform: translateY(-5px);
            box-shadow: ${variant === 'trending' ? 'none' : '0 10px 20px rgba(0, 0, 0, 0.1)'};
          }
          .post-title:hover, .trending-post-title:hover {
            color: #FF6B00 !important;
          }
          .read-more:hover {
            color: #FF6B00 !important;
          }
        `}
      </style>
    </div>
  );
};

export default PostCard; 