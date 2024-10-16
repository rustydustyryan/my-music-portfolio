import React from 'react';
import { formatClassName } from '../utils/formatClassName';

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <>
      <div className='category-title'>
        <h2>Explore</h2>
      </div>
      <div className="categories">
        <button
          className={`category-button all-category ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => onSelectCategory('All')}
        >
          All
        </button>
        {categories.map((category) => {
          const formattedClass = formatClassName(category);
          return (
            <button
              key={category}
              className={`category-button ${formattedClass} ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
