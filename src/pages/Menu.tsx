import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import MenuCard from '../components/MenuCard';
import { menuItems, menuCategories } from '../data/menuItems';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('appetizers');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <PageHeader 
        title="Our Menu" 
        subtitle="Discover our authentic delicacies"
        backgroundImage="https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Explore Our Culinary Offerings" 
            subtitle="Each dish is prepared with traditional recipes and the freshest ingredients" 
          />

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {menuCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-body transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {/* Spice Level Legend */}
          {/* <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-display text-xl font-semibold text-primary-500 mb-4">Spice Level Guide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="flex mr-2">
                  <span className="text-red-500">🔥</span>
                </div>
                <span className="font-body text-gray-700">Mild</span>
              </div>
              <div className="flex items-center">
                <div className="flex mr-2">
                  <span className="text-red-500">🔥 🔥</span>
                </div>
                <span className="font-body text-gray-700">Medium</span>
              </div>
              <div className="flex items-center">
                <div className="flex mr-2">
                  <span className="text-red-500">🔥 🔥 🔥</span>
                </div>
                <span className="font-body text-gray-700">Spicy</span>
              </div>
            </div>
          </div> */}

          {/* Dietary Information */}
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-gray-600">
              Please inform your server of any food allergies or dietary restrictions.
              <br />
              We can adjust spice levels and ingredients to accommodate your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Specials */}
      <section className="py-16 px-4 bg-primary-500 bg-opacity-5">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Seasonal Specials" 
            subtitle="Limited-time offerings featuring the freshest seasonal ingredients" 
          />
          <div className="bg-white p-8 rounded-lg shadow-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl font-semibold text-primary-500 mb-6">Monsoon Delicacies (June-September)</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-display text-xl font-medium text-secondary-500">Bombil Fry with Ragi Amboli</h4>
                    <span className="font-display font-semibold text-primary-500">₹380</span>
                  </div>
                  <p className="font-body text-gray-700">
                    Crispy Bombay duck fish served with traditional ragi (finger millet) pancakes, a monsoon staple in coastal Maharashtra.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-display text-xl font-medium text-secondary-500">Kaju Chi Usal</h4>
                    <span className="font-display font-semibold text-primary-500">₹320</span>
                  </div>
                  <p className="font-body text-gray-700">
                    A Konkan speciality of cashew nuts in spicy gravy, traditionally enjoyed during the rainy season.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;