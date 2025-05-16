import React, { useState } from 'react';

interface CategoryFilterProps {
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Fixed list of 5 categories (matching those in posts.js)
  const categories: string[] = [
    'All',
    'Employee Advocacy',
    'Marketing',
    'Social Media',
    'Analytics',
    'Leadership'
  ];
  
  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };
  
  return (
    <div className="mb-10 mt-5 text-center">
      {/* Centered title with orange lines */}
      <div className="flex items-center justify-center mb-[25px]">
        <div className="h-[2px] w-[40px] bg-[#FF6B00] mr-[15px]"></div>
        <h3 className="text-[22px] font-bold text-[#333] m-0">
          Categories
        </h3>
        <div className="h-[2px] w-[40px] bg-[#FF6B00] ml-[15px]"></div>
      </div>
      
      {/* Category buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`
              px-5 py-[10px] 
              rounded-[20px] 
              border-none 
              cursor-pointer 
              text-base 
              transition-all 
              duration-300
              ${selectedCategory === category 
                ? 'bg-[#FF6B00] text-white font-bold' 
                : 'bg-[#f0f0f0] text-[#666] font-normal'}
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 