import React from 'react';

function Products() {
  const products = [
    { name: 'Millet', description: 'Premium quality millet grains.', image: '/images/millet.jpg' },
    { name: 'Paprika', description: 'Rich and flavorful ground paprika.', image: '/images/paprika.jpg' },
    { name: 'Sorghum', description: 'Nutritious whole sorghum grains.', image: '/images/sorghum.jpg' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Our Cereals & Spices
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-green-600">{product.name}</h2>
            <p className="text-orange-300">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;