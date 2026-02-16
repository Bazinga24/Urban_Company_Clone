import React from 'react';

const categories = ['All', 'Plumber', 'Electrician', 'Cleaner', 'Carpenter'];

const ServiceFilter = ({ currentCategory, onSelectCategory }) => {
    return (
        <div className="flex space-x-2 overflow-x-auto pb-4 hide-scrollbar">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category === 'All' ? '' : category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${(currentCategory === category || (currentCategory === '' && category === 'All'))
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ServiceFilter;
