import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Our story, culture, and culinary passion"
      />

      {/* Restaurant Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Restaurant's Culinary Team" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div>
              <SectionTitle 
                title="Our Story" 
                align="left" 
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-body text-gray-700 mb-4">
                  Founded in 2018, (Name) was born from a desire to preserve and celebrate the rich culinary heritage of coastal Maharashtra.
                </p>
                <p className="font-body text-gray-700 mb-4">
                  Our founder, grew up learning traditional recipes from his grandmother in his ancestral village. After years of working in top restaurants across India, he decided to return to his roots and create a dining experience that would honor these authentic flavors while introducing them to a wider audience.
                </p>
                <p className="font-body text-gray-700">
                  The name (Name) means (meaning), reflecting our specialty and heritage. Every dish we serve is prepared with time-honored techniques and the freshest ingredients, creating a genuine taste of coastal Maharashtra's rich culinary traditions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Traditions */}
      <section className="py-16 px-4 bg-primary-500 bg-opacity-5">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Our Culinary Traditions" 
            subtitle="Exploring the rich heritage of Saraswat and GSB cuisine" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-4">(Our Cuisine)</h3>
              <p className="font-body text-gray-700 mb-4">
                (Our cuisine) is characterized by its unique blend of flavors, featuring coconut, kokum, tamarind, and a variety of aromatic spices. The (Native), known for their vegetarian and seafood dishes, have developed a cuisine that is both sophisticated and humble.
              </p>
              <p className="font-body text-gray-700">
                At (Name), we pay homage to this tradition with dishes like (Special dish 1) (Dish description), (Special dish 2) (Dish description), and (Special dish 3) (Dish description).
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-4">(Cusine name) Cuisine</h3>
              <p className="font-body text-gray-700 mb-4">
                The (Cuisine name) cuisine is notable for its meticulous preparation methods and careful balance of flavors. The cooking often features coconut in various forms, along with aromatic tempering of mustard seeds, curry leaves, and asafoetida.
              </p>
              <p className="font-body text-gray-700">
                Our menu showcases (Cusine) specialties such as : (specialties...)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Chef */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle 
                title="Meet Our Chef" 
                align="left" 
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display text-xl font-semibold text-primary-500 mb-4">Chef (Name)</h3>
                <p className="font-body text-gray-700 mb-4">
                  With over 20 years of culinary experience, Chef (Name) brings a profound understanding of coastal Maharashtra's diverse cooking traditions to our kitchen.
                </p>
                <p className="font-body text-gray-700 mb-4">
                  His journey began in his family's kitchen, where he learned the intricacies of traditional spice blends and cooking techniques from his grandmother. After formal training at the (Institute name), Mumbai, he honed his skills at prestigious restaurants across India before returning to his passion for regional cuisine.
                </p>
                <p className="font-body text-gray-700">
                  "At (Name), each dish tells a story of our heritage. We don't just serve food; we preserve a culinary legacy and invite our guests to experience the authentic flavors of our ancestors." - (Chef Name)
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Chef" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restaurant Values */}
      <section className="py-16 px-4 bg-secondary-500">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do" 
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-3">Authenticity</h3>
              <p className="font-body text-gray-700">
                We remain true to traditional recipes and cooking methods, ensuring that each dish authentically represents its cultural heritage.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-3">Sustainability</h3>
              <p className="font-body text-gray-700">
                We source our seafood responsibly, working with local fishermen who use sustainable fishing practices to protect marine ecosystems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-3">Hospitality</h3>
              <p className="font-body text-gray-700">
                We believe in treating every guest like family, offering warm, attentive service that makes everyone feel at home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;