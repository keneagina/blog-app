import React, { useState } from 'react';

const CategoryFilter = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Fixed list of 5 categories (matching those in posts.js)
  const categories = [
    'All',
    'Employee Advocacy',
    'Marketing',
    'Social Media',
    'Analytics',
    'Leadership'
  ];
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };
  
  return (
    <div style={{
      marginBottom: '40px',
      marginTop: '20px',
      textAlign: 'center'
    }}>
      {/* Centered title with orange lines */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px'
      }}>
        <div style={{ 
          height: '2px', 
          width: '40px', 
          backgroundColor: '#FF6B00', 
          marginRight: '15px' 
        }}></div>
        <h3 style={{
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0'
        }}>
          Categories
        </h3>
        <div style={{ 
          height: '2px', 
          width: '40px', 
          backgroundColor: '#FF6B00', 
          marginLeft: '15px' 
        }}></div>
      </div>
      
      {/* Category buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'center'
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              border: 'none',
              background: selectedCategory === category ? '#FF6B00' : '#f0f0f0',
              color: selectedCategory === category ? 'white' : '#666',
              cursor: 'pointer',
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 