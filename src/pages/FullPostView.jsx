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
      <div className="bg-white py-10 px-5 max-w-[800px] mx-auto text-center">
        <h2 className="text-[28px] mb-5">Post not found</h2>
        <p className="text-lg mb-[30px]">The post you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block bg-[#FF6B00] text-white py-3 px-6 rounded no-underline font-bold transition-colors duration-300 hover:bg-[#E55000]">
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <main className="bg-white">
      <div className="max-w-[1000px] mx-auto py-10 px-5">
        {/* Back to home button */}
        <div className="mb-[30px]">
          <Link to="/" className="inline-flex items-center text-[#666] no-underline font-semibold transition-colors duration-300 hover:text-[#FF6B00]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="mr-2">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to blog
          </Link>
        </div>
        
        {/* Hero image */}
        <div className="mb-10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-xl mb-[30px]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1000&q=80';
            }}
          />
          
          <div className="max-w-[800px] mx-auto">
            <div>
              <span className="inline-block bg-[#f0f0f0] text-[#666666] py-[5px] px-3 rounded-full text-[13px] font-semibold mb-[15px]">
                {post.category}
              </span>
              <h1 className="text-4xl font-bold text-[#333] mb-5 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-[#999] text-sm mb-[30px]">
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="mx-[10px]">•</span>
                <span>{Math.ceil(post.content.length / 500)} min read</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Post content */}
        <article className="max-w-[800px] mx-auto">
          <div className="text-lg leading-[1.8] text-[#444] mb-[50px]">
            <p>{post.content}</p>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-[#eaeaea] pt-10 mt-10">
              <h3 className="text-2xl font-bold text-[#333] mb-[25px]">
                Related Posts
              </h3>
              <div className="flex gap-[30px] flex-wrap">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    to={`/post/${relatedPost.slug}`} 
                    key={relatedPost.id}
                    className="no-underline text-inherit flex-1 basis-[calc(50%-15px)] min-w-[280px]"
                  >
                    <div className="border border-[#eaeaea] rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                      <div className="relative">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-[180px] object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1000&q=80';
                          }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="inline-block bg-[#f0f0f0] text-[#666666] py-[3px] px-[10px] rounded-full text-xs font-semibold mb-[10px]">
                          {relatedPost.category}
                        </span>
                        <h4 className="text-lg font-bold text-[#333] mb-[10px] leading-tight">
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