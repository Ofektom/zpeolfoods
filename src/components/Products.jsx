import React from 'react';
import { Link } from 'react-router-dom';
// Cereal images
import cornflakes1 from '../assets/images/cornflakes1.jpeg';
import cornflakes2 from '../assets/images/cornflakes2.jpeg';
import weightgain1 from '../assets/images/weight-gain1.jpeg';
import weightgain2 from '../assets/images/weight-gain2.jpeg';
import weightloss1 from '../assets/images/weight-loss1.jpeg';
import weightloss2 from '../assets/images/weight-loss2.jpeg';
// Spices images (placeholders, update with actual filenames)
import spices1 from '../assets/images/spice1.jpeg';
import spices2 from '../assets/images/spice2.jpeg';
import spices3 from '../assets/images/spice3.jpeg';
import spices4 from '../assets/images/spice4.jpeg';
// Swallows images (placeholders, update with actual filenames)
import swallow1 from '../assets/images/swallow1.jpeg';
import swallow2 from '../assets/images/swallow2.jpeg';
import swallow3 from '../assets/images/swallow3.jpeg';

function Products() {
  const categories = [
    {
      name: 'Cereals',
      products: [
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
      ],
    },
    {
      name: 'Spices',
      products: [
        {
          name: 'Premium Paprika',
          headline: 'Rich flavor, vibrant color.',
          description: 'Our Premium Paprika adds a bold, smoky taste to your dishes, sourced from organic farms.',
          images: [spices1],
          slug: 'premium-paprika',
        },
        {
          name: 'Organic Turmeric',
          headline: 'Golden spice, pure goodness.',
          description: 'Pure, organic turmeric to enhance your meals with health benefits and rich flavor.',
          images: [spices2],
          slug: 'organic-turmeric',
        },
        {
          name: 'Pure Ginger Powder',
          headline: 'Zesty and versatile.',
          description: 'Finely ground ginger powder for cooking and wellness, organically sourced.',
          images: [spices3],
          slug: 'pure-ginger-powder',
        },
        {
          name: 'Cayenne Pepper',
          headline: 'Spice up your life.',
          description: 'Fiery cayenne pepper to add heat and depth to your culinary creations.',
          images: [spices4],
          slug: 'cayenne-pepper',
        },
      ],
    },
    {
      name: 'Swallows',
      products: [
        {
          name: 'Swavita™ Yam Swallow',
          headline: 'Smooth, wholesome, traditional.',
          description: 'Nutrient-rich yam swallow, perfect for a healthy and satisfying meal.',
          images: [swallow1],
          slug: 'swavita-yam-swallow',
        },
        {
          name: 'Plantain Swallow',
          headline: 'Rich in flavor, light on the stomach.',
          description: 'Made from organic plantains, offering a delicious and healthy swallow option.',
          images: [swallow2],
          slug: 'plantain-swallow',
        },
        {
          name: 'Cassava Swallow',
          headline: 'Authentic and nutritious.',
          description: 'Traditional cassava swallow, crafted for wellness and taste.',
          images: [swallow3],
          slug: 'cassava-swallow',
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Our Cereals, Spices & Swallows
      </h1>
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {category.products.map((product, prodIndex) => (
              <div key={prodIndex} className="bg-white p-4 sm:p-6 rounded-lg shadow">
                <div
                  className={`${
                    product.images.length > 1 ? 'grid grid-cols-2 gap-2 sm:gap-4' : ''
                  } mb-4`}
                >
                  {product.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${product.name} image ${imgIndex + 1}`}
                      className={`w-full ${
                        product.images.length > 1
                          ? 'h-24 sm:h-32 md:h-40'
                          : 'h-48 sm:h-64 md:h-80'
                      } object-cover rounded-md`}
                    />
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">
                  {product.name}
                </h3>
                <p className="text-orange-500 text-sm sm:text-base font-medium mb-2">
                  {product.headline}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {product.description}
                </p>
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
      ))}
    </div>
  );
}

export default Products;