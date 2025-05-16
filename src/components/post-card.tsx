import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Define types for post data
export interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  trending?: boolean;
}

// Define props for the PostCard component
interface PostCardProps {
  post: Post;
  variant?: 'standard' | 'trending' | 'featured';
  size?: 'small' | 'medium' | 'large';
}

const PostCard: React.FC<PostCardProps> = ({ post, variant = 'standard', size = 'medium' }) => {
  // Get card classes based on variant and size
  const getCardClasses = (): string => {
    // Base classes
    let classes = "bg-white rounded-lg overflow-hidden h-full flex";
    
    // Conditional classes based on variant
    if (variant === 'trending') {
      classes += " flex-row shadow-none border-none";
    } else {
      classes += " flex-col shadow-md border border-[#eaeaea] hover:shadow-xl";
    }
    
    // Size-specific classes
    if (size === 'small' && variant === 'trending') {
      classes += " h-[120px]";
    }
    
    return classes;
  };

  // Image rendering with tailwind classes
  const renderImage = (): ReactElement => {
    let imageContainerClasses = "relative";
    let imageClasses = "w-full object-cover";
    
    if (variant === 'trending') {
      imageContainerClasses += " w-[150px] flex-shrink-0";
      imageClasses += " w-[150px] h-[120px] rounded-md flex-shrink-0";
    } else {
      imageContainerClasses += " w-full";
      // Reduced image height to make card shorter
      imageClasses += variant === 'standard' ? " h-[220px]" : ` h-${size === 'large' ? '[380px]' : '[180px]'}`;
    }

    return (
      <div className={imageContainerClasses}>
        <img
          src={post.image}
          alt={post.title}
          className={imageClasses}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1000&q=80';
          }}
        />
        {variant === 'featured' && size === 'large' && (
          <div className="absolute top-5 left-5 bg-[#FF6B00] text-white px-3 py-[6px] rounded font-bold text-xs">
            FEATURED
          </div>
        )}
      </div>
    );
  };

  const renderContent = (): ReactElement => {
    // Determine content padding based on variant and size
    let contentClasses = "flex flex-col flex-grow";
    
    if (variant === 'trending') {
      contentClasses += " pr-5 justify-center";
    } else if (variant === 'featured' && size === 'large') {
      contentClasses += " p-[30px]";
    } else {
      contentClasses += " p-5";
    }

    // Determine title size based on variant and size
    const titleClasses = `
      ${variant === 'trending' ? 'text-xl font-normal' : 'font-bold'} 
      ${(variant === 'featured' && size === 'large') ? 'text-[28px]' : 'text-xl'}
      ${variant === 'featured' && size === 'large' ? 'mb-[15px]' : 'mb-[12px]'}
      text-[#333] leading-tight transition-colors hover:text-[#FF6B00]
      ${variant === 'trending' ? 'm-0' : ''}
      ${variant === 'standard' ? 'line-clamp-2' : ''}
    `;

    return (
      <div className={contentClasses}>
        {variant !== 'trending' && (
          <div className="mb-[10px]">
            <span className={`
              inline-block bg-[#f0f0f0] text-[#666666] rounded-full font-semibold
              ${variant === 'featured' && size === 'large' ? 'px-3 py-[5px] text-[13px]' : 'px-[10px] py-[3px] text-xs'}
            `}>
              {post.category}
            </span>
          </div>
        )}

        <h3 className={titleClasses}>
          {post.title}
        </h3>

        {variant === 'featured' && size === 'large' && (
          <p className="text-base text-[#666] mb-5 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {variant === 'standard' && (
          <p className="text-sm text-[#666] mb-5 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {variant !== 'trending' && (
          <div className={`
            flex justify-between items-center mt-auto
            ${variant === 'featured' && size === 'large' ? '' : 'pt-[12px] border-t border-[#f0f0f0]'}
          `}>
            <span className={`
              ${variant === 'featured' && size === 'large' ? 'text-sm' : 'text-xs'} 
              text-[#999]
            `}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            <span className={`
              text-[#666666] font-semibold flex items-center hover:text-[#FF6B00] transition-colors
              ${variant === 'featured' && size === 'large' ? 'text-[15px]' : 'text-xs'}
            `}>
              Read more
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={variant === 'featured' && size === 'large' ? 16 : 12} 
                height={variant === 'featured' && size === 'large' ? 16 : 12} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={variant === 'featured' && size === 'large' ? "ml-[5px]" : "ml-1"}
              >
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
  const renderCardContent = (): ReactElement => {
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

  const cardClasses = getCardClasses();

  return (
    <div className={`${cardClasses} transition-transform duration-300 hover:-translate-y-[5px]`}>
      <Link 
        to={`/post/${post.slug}`} 
        className={`no-underline text-inherit flex ${variant === 'trending' ? 'flex-row' : 'flex-col'} h-full w-full`}
      >
        {renderCardContent()}
      </Link>
    </div>
  );
};

export default PostCard; 