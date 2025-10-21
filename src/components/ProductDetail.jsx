import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Cereal images
import cornflakes1 from '../assets/images/cornflakes1.jpeg';
import cornflakes2 from '../assets/images/cornflakes2.jpeg';
import weightgain1 from '../assets/images/weight-gain1.jpeg';
import weightgain2 from '../assets/images/weight-gain2.jpeg';
import weightloss1 from '../assets/images/weight-loss1.jpeg';
import weightloss2 from '../assets/images/weight-loss2.jpeg';
// Spices images
import spices1 from '../assets/images/spice1.jpeg';
import spices2 from '../assets/images/spice2.jpeg';
import spices3 from '../assets/images/spice3.jpeg';
import spices4 from '../assets/images/spice4.jpeg';
// Swallows images
import swallow1 from '../assets/images/swallow1.jpeg';
import swallow2 from '../assets/images/swallow2.jpeg';
import swallow3 from '../assets/images/swallow3.jpeg';

function ProductDetail() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // All products data
  const allProducts = [
    {
      name: 'FruitZ & Berries Crunchy Cornflakes',
      headline: 'Pure corn. Real fruits. Unmatched crunch.',
      description: 'That\'s FruitZ & Berries Crunchy Cornflakes — naturally prepared by ZPEOLFOODS NG.',
      fullDescription: 'Our FruitZ & Berries Crunchy Cornflakes are crafted with the finest quality corn and enriched with real fruits and berries. Each bite delivers a satisfying crunch and natural sweetness, making it the perfect way to start your day. Our unique processing method preserves the natural flavors and nutrients, ensuring you get the best breakfast experience every time.',
      images: [cornflakes1, cornflakes2],
      slug: 'fruitz-berries-cornflakes',
      category: 'Cereals',
      features: [
        '100% natural ingredients',
        'No artificial flavors or colors',
        'Rich in vitamins and minerals',
        'Perfect for breakfast or snacking',
        'Suitable for all ages'
      ]
    },
    {
      name: 'Healthy Weight Gain Cereal',
      headline: 'Healthy weight starts here',
      description: 'Crafted with nutrient-rich grains and plant power to help you gain weight the healthy way.',
      fullDescription: 'Our Healthy Weight Gain Cereal is specially formulated with nutrient-dense ingredients to support healthy weight gain. Packed with complex carbohydrates, proteins, and essential vitamins, this cereal provides sustained energy throughout the day while helping you reach your weight goals naturally and safely.',
      images: [weightgain1, weightgain2],
      slug: 'healthy-weight-gain-cereal',
      category: 'Cereals',
      features: [
        'High in calories and nutrients',
        'Rich in protein and complex carbs',
        'Natural ingredients only',
        'Supports muscle growth',
        'Great taste and texture'
      ]
    },
    {
      name: 'Weight Loss Cereal',
      headline: 'Eat Smart, Feel Light, Live Well.',
      description: 'Our Weight Loss Cereal helps you achieve balance — the healthy, sustainable way.',
      fullDescription: 'Designed for those on a weight management journey, our Weight Loss Cereal combines fiber-rich grains with metabolism-boosting ingredients. This low-calorie, high-fiber option keeps you feeling full longer while supporting your body\'s natural fat-burning processes, all without sacrificing taste or nutrition.',
      images: [weightloss1, weightloss2],
      slug: 'weight-loss-cereal',
      category: 'Cereals',
      features: [
        'Low in calories, high in fiber',
        'Keeps you feeling full longer',
        'Supports healthy metabolism',
        'No added sugars',
        'Delicious and satisfying'
      ]
    },
    {
      name: 'Premium Paprika',
      headline: 'Rich flavor, vibrant color.',
      description: 'Our Premium Paprika adds a bold, smoky taste to your dishes, sourced from organic farms.',
      fullDescription: 'Experience the authentic taste of Premium Paprika, carefully sourced from the finest organic farms. This vibrant spice adds depth, color, and a subtle smokiness to your dishes. Whether you\'re seasoning meats, enhancing stews, or adding flair to your favorite recipes, our paprika delivers consistent quality and flavor in every pinch.',
      images: [spices1],
      slug: 'premium-paprika',
      category: 'Spices',
      features: [
        'Organically sourced',
        'Bold, smoky flavor',
        'Vibrant natural color',
        'Versatile for many dishes',
        'No additives or preservatives'
      ]
    },
    {
      name: 'Organic Turmeric',
      headline: 'Golden spice, pure goodness.',
      description: 'Pure, organic turmeric to enhance your meals with health benefits and rich flavor.',
      fullDescription: 'Our Organic Turmeric is a golden treasure of health and flavor. Known for its anti-inflammatory properties and rich antioxidants, this pure turmeric powder is perfect for adding to curries, smoothies, teas, and more. Sourced from organic farms and processed with care to preserve its natural potency and vibrant color.',
      images: [spices2],
      slug: 'organic-turmeric',
      category: 'Spices',
      features: [
        'Certified organic',
        'High in curcumin content',
        'Anti-inflammatory properties',
        'Pure and potent',
        'Multiple health benefits'
      ]
    },
    {
      name: 'Pure Ginger Powder',
      headline: 'Zesty and versatile.',
      description: 'Finely ground ginger powder for cooking and wellness, organically sourced.',
      fullDescription: 'Our Pure Ginger Powder brings the warm, spicy flavor of fresh ginger to your kitchen in a convenient form. Finely ground from organic ginger roots, it\'s perfect for baking, cooking, making tea, or adding to smoothies. Known for its digestive benefits and immune-boosting properties, this versatile spice is a must-have in every kitchen.',
      images: [spices3],
      slug: 'pure-ginger-powder',
      category: 'Spices',
      features: [
        'Finely ground for easy use',
        'Organic and pure',
        'Aids digestion',
        'Boosts immunity',
        'Versatile for cooking and wellness'
      ]
    },
    {
      name: 'Cayenne Pepper',
      headline: 'Spice up your life.',
      description: 'Fiery cayenne pepper to add heat and depth to your culinary creations.',
      fullDescription: 'Turn up the heat with our premium Cayenne Pepper! This fiery spice brings intense flavor and metabolism-boosting properties to your dishes. Ground from the finest cayenne peppers, it adds the perfect kick to sauces, marinades, and any dish that needs extra heat. Use sparingly for a mild warmth or generously for an authentic spicy experience.',
      images: [spices4],
      slug: 'cayenne-pepper',
      category: 'Spices',
      features: [
        'Intense heat and flavor',
        'Boosts metabolism',
        'Pure cayenne with no fillers',
        'Versatile seasoning',
        'Rich in capsaicin'
      ]
    },
    {
      name: 'Swavita™ Yam Swallow',
      headline: 'Smooth, wholesome, traditional.',
      description: 'Nutrient-rich yam swallow, perfect for a healthy and satisfying meal.',
      fullDescription: 'Swavita™ Yam Swallow brings you the authentic taste of traditional African cuisine in a convenient, nutritious form. Made from premium yam flour, this smooth and wholesome swallow is rich in carbohydrates and essential nutrients. Perfect for pairing with your favorite soups and stews, it provides sustained energy and satisfaction.',
      images: [swallow1],
      slug: 'swavita-yam-swallow',
      category: 'Swallows',
      features: [
        '100% pure yam flour',
        'Smooth and easy to prepare',
        'Rich in complex carbohydrates',
        'Traditional authentic taste',
        'No artificial additives'
      ]
    },
    {
      name: 'Plantain Swallow',
      headline: 'Rich in flavor, light on the stomach.',
      description: 'Made from organic plantains, offering a delicious and healthy swallow option.',
      fullDescription: 'Our Plantain Swallow offers a lighter, naturally sweet alternative to traditional swallow meals. Made from carefully selected organic plantains, it\'s gentle on the stomach while being rich in vitamins, minerals, and dietary fiber. This nutritious option pairs beautifully with various Nigerian soups and is perfect for those seeking a healthier swallow choice.',
      images: [swallow2],
      slug: 'plantain-swallow',
      category: 'Swallows',
      features: [
        'Made from organic plantains',
        'Light and easy to digest',
        'Rich in vitamins and minerals',
        'Naturally sweet flavor',
        'High in dietary fiber'
      ]
    },
    {
      name: 'Cassava Swallow',
      headline: 'Authentic and nutritious.',
      description: 'Traditional cassava swallow, crafted for wellness and taste.',
      fullDescription: 'Experience the authentic taste of Cassava Swallow, a staple in African cuisine. Our premium cassava flour is processed using traditional methods to preserve its natural nutrients and deliver that characteristic smooth texture. This gluten-free option is perfect for those with dietary restrictions while still providing the authentic taste and satisfaction of traditional swallow.',
      images: [swallow3],
      slug: 'cassava-swallow',
      category: 'Swallows',
      features: [
        '100% pure cassava flour',
        'Gluten-free option',
        'Traditional preparation method',
        'Smooth and consistent texture',
        'Rich in energy-giving carbs'
      ]
    },
  ];

  // Find the product by slug
  const product = allProducts.find(p => p.slug === slug);

  // If product not found
  if (!product) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
        <Link 
          to="/products" 
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link to="/" className="text-green-600 hover:underline">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/products" className="text-green-600 hover:underline">Products</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">{product.name}</span>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - View ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-green-600 ring-2 ring-green-600' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>
            <p className="text-xl text-orange-500 font-medium mb-4">
              {product.headline}
            </p>
            <p className="text-gray-600 text-base mb-6">
              {product.fullDescription}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact/Order Buttons */}
            <div className="mt-auto space-y-3">
              <a
                href={`https://wa.me/2348182985558?text=Hi, I'm interested in ordering ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Order via WhatsApp
              </a>
              <Link
                to="/contact"
                className="block w-full text-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Contact Us for Details
              </Link>
              <Link
                to="/products"
                className="block w-full text-center border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
              >
                View More Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8 bg-green-50 rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose ZPEOLFOODS NG?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-green-600 mb-2">🌿 100% Organic</h3>
            <p className="text-gray-600 text-sm">
              All our products are made from premium organic ingredients, ensuring the highest quality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2">✨ No Additives</h3>
            <p className="text-gray-600 text-sm">
              We never use artificial flavors, colors, or preservatives in our products.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2">🇳🇬 Locally Made</h3>
            <p className="text-gray-600 text-sm">
              Proudly made in Nigeria, supporting local farmers and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
