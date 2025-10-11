import React from 'react';
import { Link } from 'react-router-dom';
// Placeholder image paths - update with actual filenames after upload
import cornflakes1 from '../assets/images/cornflakes1.jpeg';
import cornflakes2 from '../assets/images/cornflakes2.jpeg';
import weightgain1 from '../assets/images/weight-gain1.jpeg';
import weightgain2 from '../assets/images/weight-gain2.jpeg';
import weightloss1 from '../assets/images/weight-loss1.jpeg';
import weightloss2 from '../assets/images/weight-loss2.jpeg';

function Products() {
  const products = [
    {
      name: 'FruitZ & Berries Crunchy Cornflakes',
      headline: 'Pure corn. Real fruits. Unmatched crunch.',
      description: 'That’s FruitZ & Berries Crunchy Cornflakes — naturally prepared by ZPEOLFOODS NG.',
      images: [cornflakes1, cornflakes2],
      slug: 'fruitz-berries-cornflakes',
    },
    {
      name: 'Healthy Weight Gain Cereal',
      headline: 'Healthy weight starts here',
      description: 'Crafted with nutrient-rich grains and plant power to help you gain weight the healthy way.',
      images: [weightgain1, weightgain2],
      slug: 'healthy-weight-gain-cereal',
    },
    {
      name: 'Weight Loss Cereal',
      headline: 'Eat Smart, Feel Light, Live Well.',
      description: 'Our Weight Loss Cereal helps you achieve balance — the healthy, sustainable way.',
      images: [weightloss1, weightloss2],
      slug: 'weight-loss-cereal',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Our Cereals & Spices
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
              {product.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${product.name} image ${imgIndex + 1}`}
                  className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-md"
                />
              ))}
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">{product.name}</h2>
            <p className="text-orange-500 text-sm sm:text-base font-medium mb-2">{product.headline}</p>
            <p className="text-gray-600 text-sm sm:text-base mb-4">{product.description}</p>
            <Link
              to={`/products/${product.slug}`}
              className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-600 text-sm sm:text-base"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;