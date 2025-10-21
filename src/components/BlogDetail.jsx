import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogDetail() {
  const { slug } = useParams();

  // All blog posts data
  const allPosts = [
    {
      id: 1,
      title: 'The Benefits of Organic Cereals in Your Diet',
      excerpt: 'Discover how organic cereals like millet and sorghum can boost your health and add variety to your meals.',
      slug: 'benefits-of-organic-cereals',
      author: 'ZPEOLFOODS NG Team',
      date: 'October 15, 2024',
      readTime: '5 min read',
      category: 'Health & Nutrition',
      content: `
        <p>In today's fast-paced world, maintaining a healthy diet can be challenging. However, incorporating organic cereals into your daily meals is one of the simplest and most effective ways to boost your overall health and well-being.</p>

        <h2>What Makes Organic Cereals Special?</h2>
        <p>Organic cereals are grown without synthetic pesticides, herbicides, or genetically modified organisms (GMOs). This means you're getting pure, wholesome grains that nature intended, free from harmful chemicals that can accumulate in your body over time.</p>

        <h2>Key Health Benefits</h2>
        
        <h3>1. Rich in Essential Nutrients</h3>
        <p>Organic cereals like millet, sorghum, and corn are packed with essential vitamins and minerals including B vitamins, iron, magnesium, and zinc. These nutrients are crucial for energy production, immune function, and overall cellular health.</p>

        <h3>2. High in Dietary Fiber</h3>
        <p>One of the standout benefits of organic cereals is their high fiber content. Dietary fiber helps maintain healthy digestion, regulates blood sugar levels, and keeps you feeling full longer, which can aid in weight management.</p>

        <h3>3. Heart Health</h3>
        <p>Regular consumption of whole grain organic cereals has been linked to reduced risk of heart disease. The fiber, antioxidants, and other beneficial compounds in these grains help lower cholesterol levels and maintain healthy blood pressure.</p>

        <h3>4. Sustained Energy Release</h3>
        <p>Unlike refined cereals that cause blood sugar spikes and crashes, organic whole grain cereals provide a steady release of energy throughout the day. This makes them perfect for breakfast or as a pre-workout snack.</p>

        <h3>5. Better for the Environment</h3>
        <p>Choosing organic isn't just good for you—it's good for the planet too. Organic farming practices promote soil health, conserve water, and reduce pollution, making it a sustainable choice for future generations.</p>

        <h2>How to Incorporate Organic Cereals into Your Diet</h2>
        <ul>
          <li><strong>Breakfast:</strong> Start your day with a bowl of organic cornflakes topped with fresh fruits and nuts.</li>
          <li><strong>Smoothies:</strong> Blend ground organic grains into your morning smoothie for added nutrition.</li>
          <li><strong>Baking:</strong> Use organic cereal flour in your baking recipes for healthier bread, muffins, and pancakes.</li>
          <li><strong>Snacking:</strong> Enjoy organic cereal bars or homemade granola made with organic grains.</li>
        </ul>

        <h2>ZPEOLFOODS NG's Commitment to Quality</h2>
        <p>At ZPEOLFOODS NG, we're passionate about providing you with the highest quality organic cereals. We work directly with local Nigerian farmers who use sustainable farming practices to grow the finest grains. Every product is carefully processed to preserve its natural nutrients and flavors.</p>

        <p>Our range includes weight management cereals designed to support your health goals, whether you're looking to gain healthy weight or manage your weight loss journey. Each product is crafted with care and backed by our commitment to quality and your well-being.</p>

        <h2>Conclusion</h2>
        <p>Making the switch to organic cereals is a simple yet powerful step toward better health. With their rich nutrient profile, sustained energy benefits, and positive environmental impact, organic cereals deserve a prominent place in your daily diet.</p>

        <p>Ready to experience the difference? Explore our range of organic cereals and start your journey to better health today!</p>
      `,
    },
    {
      id: 2,
      title: 'Top 5 Spices to Elevate Your Nigerian Dishes',
      excerpt: 'Learn about the essential spices that bring authentic flavor to Nigerian cuisine, from paprika to ginger.',
      slug: 'top-5-spices-nigerian-dishes',
      author: 'ZPEOLFOODS NG Team',
      date: 'October 10, 2024',
      readTime: '6 min read',
      category: 'Cooking & Recipes',
      content: `
        <p>Nigerian cuisine is renowned for its bold flavors, rich aromas, and vibrant colors. At the heart of these distinctive characteristics are the spices that have been used for generations. Whether you're a seasoned cook or just starting your culinary journey, understanding these essential spices will transform your cooking.</p>

        <h2>1. Paprika - The Color and Flavor Enhancer</h2>
        <p>Paprika is a versatile spice that adds both color and flavor to Nigerian dishes. Made from dried and ground peppers, it brings a sweet, mild flavor with subtle smoky notes.</p>

        <h3>Best Uses:</h3>
        <ul>
          <li><strong>Jollof Rice:</strong> Adds that characteristic red color and subtle sweetness</li>
          <li><strong>Pepper Soup:</strong> Enhances the soup's rich color and depth</li>
          <li><strong>Grilled Meats:</strong> Perfect for marinades and dry rubs</li>
          <li><strong>Stews:</strong> Brings warmth and complexity to tomato-based stews</li>
        </ul>

        <p><strong>Health Benefits:</strong> Rich in antioxidants, vitamin A, and capsaicin, paprika supports immune function and may help with pain relief.</p>

        <h2>2. Ginger - The Warming Wonder</h2>
        <p>Fresh or powdered, ginger is indispensable in Nigerian cooking. Its warm, spicy, and slightly sweet flavor profile makes it incredibly versatile.</p>

        <h3>Best Uses:</h3>
        <ul>
          <li><strong>Pepper Soup:</strong> A key ingredient that provides warmth and depth</li>
          <li><strong>Ginger Tea:</strong> Perfect for wellness and relaxation</li>
          <li><strong>Marinades:</strong> Tenderizes meat while adding flavor</li>
          <li><strong>Baking:</strong> Adds warmth to traditional Nigerian snacks</li>
        </ul>

        <p><strong>Health Benefits:</strong> Ginger is known for its anti-inflammatory properties, aids digestion, and can help relieve nausea. It's also excellent for boosting immunity.</p>

        <h2>3. Turmeric - The Golden Healer</h2>
        <p>Known as "yellow ginger" in some Nigerian markets, turmeric brings a warm, earthy flavor and vibrant golden color to dishes.</p>

        <h3>Best Uses:</h3>
        <ul>
          <li><strong>Rice Dishes:</strong> Adds beautiful color and subtle flavor to rice</li>
          <li><strong>Soups and Stews:</strong> Enhances flavor and provides health benefits</li>
          <li><strong>Curry Dishes:</strong> Essential for authentic curry flavor</li>
          <li><strong>Golden Milk:</strong> A healthy beverage gaining popularity</li>
        </ul>

        <p><strong>Health Benefits:</strong> Turmeric contains curcumin, a powerful anti-inflammatory compound. It supports joint health, brain function, and overall wellness.</p>

        <h2>4. Cayenne Pepper - The Heat Master</h2>
        <p>No Nigerian kitchen is complete without cayenne pepper. This fiery spice brings the heat that Nigerian cuisine is famous for.</p>

        <h3>Best Uses:</h3>
        <ul>
          <li><strong>Pepper Soup:</strong> Provides that authentic spicy kick</li>
          <li><strong>Suya Spice:</strong> A key component in this popular street food seasoning</li>
          <li><strong>Stews:</strong> Adjusts heat levels to your preference</li>
          <li><strong>Yaji:</strong> Essential in this traditional spice blend</li>
        </ul>

        <p><strong>Health Benefits:</strong> Cayenne pepper boosts metabolism, aids digestion, and may help with pain relief. It's rich in vitamins A and C.</p>

        <h2>5. Cinnamon - The Sweet Aromatic</h2>
        <p>While not traditionally Nigerian, cinnamon has become increasingly popular in modern Nigerian cooking, especially in beverages and baked goods.</p>

        <h3>Best Uses:</h3>
        <ul>
          <li><strong>Zobo Drink:</strong> Adds warmth and complexity</li>
          <li><strong>Tea:</strong> Enhances flavor and provides health benefits</li>
          <li><strong>Baking:</strong> Perfect for cakes, cookies, and pastries</li>
          <li><strong>Rice Dishes:</strong> Adds a subtle sweet-spicy note</li>
        </ul>

        <p><strong>Health Benefits:</strong> Cinnamon helps regulate blood sugar levels, has anti-inflammatory properties, and is rich in antioxidants.</p>

        <h2>Tips for Using Spices</h2>

        <h3>Storage:</h3>
        <ul>
          <li>Keep spices in airtight containers away from heat and light</li>
          <li>Store in a cool, dry place to maintain potency</li>
          <li>Ground spices typically last 6-12 months for best flavor</li>
        </ul>

        <h3>Cooking Tips:</h3>
        <ul>
          <li>Toast whole spices briefly before grinding for enhanced flavor</li>
          <li>Add ground spices early in cooking to allow flavors to develop</li>
          <li>Start with less and adjust to taste—you can always add more</li>
          <li>Combine spices to create your unique signature blends</li>
        </ul>

        <h2>Why Choose ZPEOLFOODS NG Spices?</h2>
        <p>At ZPEOLFOODS NG, we understand that great cooking starts with great ingredients. Our spices are:</p>
        <ul>
          <li><strong>100% Organic:</strong> No synthetic additives or preservatives</li>
          <li><strong>Freshly Ground:</strong> Maximum flavor and potency</li>
          <li><strong>Locally Sourced:</strong> Supporting Nigerian farmers</li>
          <li><strong>Quality Tested:</strong> Ensuring consistency and purity</li>
        </ul>

        <h2>Conclusion</h2>
        <p>These five essential spices form the foundation of delicious Nigerian cooking. By understanding their unique characteristics and uses, you can create authentic, flavorful dishes that will delight your family and friends.</p>

        <p>Ready to spice up your kitchen? Explore our premium range of organic spices and take your cooking to the next level!</p>
      `,
    },
    {
      id: 3,
      title: 'Sustainable Farming Practices in Nigeria',
      excerpt: 'Explore how ZPEOLFOODS NG sources its grains and spices sustainably from local farmers.',
      slug: 'sustainable-farming-nigeria',
      author: 'ZPEOLFOODS NG Team',
      date: 'October 5, 2024',
      readTime: '7 min read',
      category: 'Sustainability',
      content: `
        <p>As the world grapples with climate change and environmental degradation, sustainable farming has never been more important. At ZPEOLFOODS NG, we're proud to be at the forefront of sustainable agriculture in Nigeria, working hand-in-hand with local farmers to produce high-quality organic products while protecting our environment for future generations.</p>

        <h2>What is Sustainable Farming?</h2>
        <p>Sustainable farming is an agricultural approach that focuses on producing food in ways that are environmentally sound, economically viable, and socially responsible. It's about meeting today's needs without compromising the ability of future generations to meet their own needs.</p>

        <h2>Our Sustainable Practices</h2>

        <h3>1. Organic Farming Methods</h3>
        <p>We work exclusively with farmers who avoid synthetic pesticides, herbicides, and fertilizers. Instead, they use:</p>
        <ul>
          <li><strong>Natural Pest Control:</strong> Beneficial insects and companion planting</li>
          <li><strong>Organic Fertilizers:</strong> Compost and natural manure</li>
          <li><strong>Crop Rotation:</strong> Maintaining soil health and preventing pest buildup</li>
          <li><strong>Green Manure:</strong> Plants grown to enrich the soil naturally</li>
        </ul>

        <h3>2. Water Conservation</h3>
        <p>Water is precious in Nigeria, and our partner farmers implement smart water management practices:</p>
        <ul>
          <li><strong>Drip Irrigation:</strong> Delivering water directly to plant roots, reducing waste</li>
          <li><strong>Rainwater Harvesting:</strong> Collecting and storing rainwater for dry seasons</li>
          <li><strong>Mulching:</strong> Retaining soil moisture and reducing evaporation</li>
          <li><strong>Indigenous Crops:</strong> Growing drought-resistant local varieties</li>
        </ul>

        <h3>3. Soil Health Management</h3>
        <p>Healthy soil is the foundation of sustainable agriculture. Our farming partners focus on:</p>
        <ul>
          <li><strong>Minimal Tillage:</strong> Reducing soil erosion and preserving soil structure</li>
          <li><strong>Cover Crops:</strong> Protecting soil from erosion and adding organic matter</li>
          <li><strong>Composting:</strong> Recycling organic waste into nutrient-rich soil amendment</li>
          <li><strong>Crop Diversity:</strong> Maintaining soil biodiversity and health</li>
        </ul>

        <h3>4. Biodiversity Preservation</h3>
        <p>We believe in farming with nature, not against it:</p>
        <ul>
          <li><strong>Native Species:</strong> Prioritizing indigenous crops that thrive naturally in Nigerian climate</li>
          <li><strong>Habitat Protection:</strong> Maintaining natural areas for beneficial wildlife</li>
          <li><strong>Pollinator Support:</strong> Protecting bees and other pollinators</li>
          <li><strong>No GMOs:</strong> Preserving natural genetic diversity</li>
        </ul>

        <h2>Supporting Local Farmers</h2>
        <p>Sustainability isn't just about the environment—it's about people too. ZPEOLFOODS NG is committed to supporting Nigerian farming communities:</p>

        <h3>Fair Pricing</h3>
        <p>We ensure farmers receive fair compensation for their produce, providing them with stable income and economic security. This enables them to invest in their farms and communities.</p>

        <h3>Training and Education</h3>
        <p>We provide regular training sessions on:</p>
        <ul>
          <li>Modern organic farming techniques</li>
          <li>Sustainable pest management</li>
          <li>Soil conservation methods</li>
          <li>Post-harvest handling and storage</li>
          <li>Business and financial management</li>
        </ul>

        <h3>Market Access</h3>
        <p>By partnering directly with farmers, we eliminate middlemen and provide guaranteed markets for their produce. This creates stability and encourages long-term investment in sustainable practices.</p>

        <h3>Community Development</h3>
        <p>Our partnerships extend beyond just buying produce. We support:</p>
        <ul>
          <li>Rural infrastructure development</li>
          <li>Education initiatives for farming families</li>
          <li>Health and wellness programs</li>
          <li>Women's empowerment in agriculture</li>
        </ul>

        <h2>The Impact of Sustainable Farming</h2>

        <h3>Environmental Benefits</h3>
        <ul>
          <li><strong>Carbon Sequestration:</strong> Healthy soils absorb and store carbon, fighting climate change</li>
          <li><strong>Water Quality:</strong> No chemical runoff means cleaner water sources</li>
          <li><strong>Biodiversity:</strong> Organic farms support 30% more species than conventional farms</li>
          <li><strong>Soil Health:</strong> Organic matter in soil increases, improving long-term productivity</li>
        </ul>

        <h3>Health Benefits</h3>
        <ul>
          <li>Products free from synthetic chemicals and pesticides</li>
          <li>Higher nutrient content in organically grown foods</li>
          <li>No antibiotic resistance from agricultural chemicals</li>
          <li>Safer for farmworkers and nearby communities</li>
        </ul>

        <h3>Economic Benefits</h3>
        <ul>
          <li>Reduced input costs for farmers (no expensive chemicals)</li>
          <li>Premium prices for organic products</li>
          <li>Long-term soil productivity and farm viability</li>
          <li>Job creation in rural communities</li>
        </ul>

        <h2>Challenges and Solutions</h2>

        <h3>Challenge: Initial Transition Period</h3>
        <p><strong>Solution:</strong> We support farmers during the 2-3 year transition period with training, resources, and guaranteed purchasing agreements.</p>

        <h3>Challenge: Lower Initial Yields</h3>
        <p><strong>Solution:</strong> Fair pricing compensates for lower volumes, and yields typically improve over time as soil health improves.</p>

        <h3>Challenge: Knowledge Gap</h3>
        <p><strong>Solution:</strong> Continuous education, mentorship programs, and farmer-to-farmer learning networks.</p>

        <h3>Challenge: Market Access</h3>
        <p><strong>Solution:</strong> Direct partnerships and long-term contracts provide stability and market certainty.</p>

        <h2>Our Vision for the Future</h2>
        <p>ZPEOLFOODS NG envisions a Nigeria where:</p>
        <ul>
          <li>Sustainable farming is the norm, not the exception</li>
          <li>Farmers prosper while protecting the environment</li>
          <li>Consumers have access to healthy, organic products</li>
          <li>Future generations inherit fertile, productive land</li>
          <li>Nigerian agriculture leads Africa in sustainability</li>
        </ul>

        <h2>How You Can Support Sustainable Farming</h2>

        <h3>1. Choose Organic</h3>
        <p>Every purchase of organic products votes for sustainable farming practices and supports farmers who care for the land.</p>

        <h3>2. Buy Local</h3>
        <p>Supporting Nigerian farmers reduces transportation emissions and keeps money in local communities.</p>

        <h3>3. Reduce Waste</h3>
        <p>Use products fully, compost scraps, and minimize food waste to honor farmers' efforts.</p>

        <h3>4. Spread the Word</h3>
        <p>Share information about sustainable farming with friends and family. Education creates change.</p>

        <h3>5. Demand Quality</h3>
        <p>Ask retailers about their sourcing practices. Consumer demand drives industry change.</p>

        <h2>Conclusion</h2>
        <p>Sustainable farming isn't just a buzzword—it's a necessity for our planet's future. At ZPEOLFOODS NG, we're committed to proving that it's possible to produce high-quality, delicious products while caring for the environment and supporting local communities.</p>

        <p>Every time you choose a ZPEOLFOODS NG product, you're not just feeding your family—you're investing in Nigerian farmers, protecting the environment, and building a sustainable future for all of us.</p>

        <p>Join us in making a difference. Choose sustainable. Choose organic. Choose ZPEOLFOODS NG.</p>
      `,
    },
  ];

  // Find the blog post by slug
  const post = allPosts.find(p => p.slug === slug);

  // If post not found
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, we couldn&apos;t find the blog post you&apos;re looking for.</p>
        <Link 
          to="/blog" 
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link to="/" className="text-green-600 hover:underline">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/blog" className="text-green-600 hover:underline">Blog</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">{post.title}</span>
      </nav>

      {/* Article Header */}
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 md:p-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="text-gray-700 leading-relaxed [&_p]:mb-6 [&_p]:text-base [&_p]:leading-relaxed [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:space-y-2 [&_ul_li]:list-disc [&_ul_li]:text-gray-700 [&_ul_li]:leading-relaxed [&_ul_li_strong]:text-green-600 [&_ul_li_strong]:font-semibold [&_strong]:font-semibold [&_strong]:text-gray-900 [&_a]:text-green-600 [&_a]:hover:text-green-700 [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Call to Action */}
      <div className="mt-8 bg-green-50 rounded-lg p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Enjoyed this article?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our range of premium organic products and experience the ZPEOLFOODS NG difference.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/products"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            View Products
          </Link>
          <Link
            to="/blog"
            className="inline-block border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
          >
            Read More Articles
          </Link>
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm mb-3">Share this article:</p>
        <div className="flex justify-center gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700"
            aria-label="Share on Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700"
            aria-label="Share on Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700"
            aria-label="Share on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
