import React from 'react';

const ProviderCard = ({ provider, onBook }) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {provider.name}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            {provider.category}
                        </p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${provider.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {provider.availability}
                    </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">
                        ${provider.hourly_rate}/hr
                    </div>
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">{provider.rating}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        onClick={() => onBook(provider)}
                        disabled={provider.availability !== 'Available'}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${provider.availability === 'Available'
                                ? 'bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                                : 'bg-gray-300 cursor-not-allowed'
                            }`}
                    >
                        {provider.availability === 'Available' ? 'Book Now' : 'Busy'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProviderCard;
