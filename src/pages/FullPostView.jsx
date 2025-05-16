import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts';

const FullPostView = () => {
  const { postSlug } = useParams();
  
  // Find the post with the matching slug
  const post = posts.find(p => p.slug === postSlug);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = posts
    .filter(p => p.category === post?.category && p.id !== post?.id)
    .slice(0, 2);
  
  if (!post) {
    return (
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Post not found</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>The post you're looking for doesn't exist.</p>
        <Link to="/" style={{
          display: 'inline-block',
          backgroundColor: '#FF6B00',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}>
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <main style={{ backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Back to home button */}
        <div style={{ marginBottom: '30px' }}>
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#666',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'color 0.3s ease'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: '8px' }}>
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to blog
          </Link>
        </div>
        
        {/* Hero image */}
        <div style={{ marginBottom: '40px' }}>
          <img 
            src={post.image} 
            alt={post.title} 
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '30px'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1000&q=80';
            }}
          />
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#f0f0f0',
                color: '#666666',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '15px'
              }}>
                {post.category}
              </span>
              <h1 style={{ 
                fontSize: '36px', 
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '20px',
                lineHeight: '1.3'
              }}>
                {post.title}
              </h1>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                color: '#999',
                fontSize: '14px',
                marginBottom: '30px'
              }}>
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span style={{ margin: '0 10px' }}>•</span>
                <span>{Math.ceil(post.content.length / 500)} min read</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Post content */}
        <article style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#444',
            marginBottom: '50px'
          }}>
            <p>{post.content}</p>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div style={{ 
              borderTop: '1px solid #eaeaea',
              paddingTop: '40px',
              marginTop: '40px'
            }}>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '25px'
              }}>
                Related Posts
              </h3>
              <div style={{ 
                display: 'flex',
                gap: '30px',
                flexWrap: 'wrap'
              }}>
                {relatedPosts.map(relatedPost => (
                  <Link 
                    to={`/post/${relatedPost.slug}`} 
                    key={relatedPost.id}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      flex: '1 1 calc(50% - 15px)',
                      minWidth: '280px'
                    }}
                  >
                    <div style={{ 
                      border: '1px solid #eaeaea',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      ':hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                      }
                    }}>
                      <div style={{ position: 'relative' }}>
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          style={{
                            width: '100%',
                            height: '180px',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1000&q=80';
                          }}
                        />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <span style={{
                          display: 'inline-block',
                          backgroundColor: '#f0f0f0',
                          color: '#666666',
                          padding: '3px 10px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600',
                          marginBottom: '10px'
                        }}>
                          {relatedPost.category}
                        </span>
                        <h4 style={{ 
                          fontSize: '18px', 
                          fontWeight: 'bold',
                          color: '#333',
                          marginBottom: '10px',
                          lineHeight: '1.4' 
                        }}>
                          {relatedPost.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
};

export default FullPostView; 