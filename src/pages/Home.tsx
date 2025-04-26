import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import MenuCard from '../components/MenuCard';
import { popularDishes } from '../data/menuItems';
import { testimonials } from '../data/testimonials';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-hero-pattern bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              (Name) Restaurant
            </h1>
            <p className="font-body text-xl text-white max-w-2xl mx-auto mb-8">
              Authentic delicacies in the heart of Mumbai
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button to="/menu" variant="primary" size="lg">
                View Menu
              </Button>
              <Button to="/reservations" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-20">
                Book a Table
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <ArrowRight size={24} className="text-white transform rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 px-4 bg-accent-500">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://img.freepik.com/free-photo/roasted-salmon-ironic-pan-served-with-teriyaki-sauce_114579-1944.jpg?t=st=1745672815~exp=1745676415~hmac=1ed3bb5e0137f8d5d3ee2f5f2a8322741077ea7b2b9518649413181197e994f5&w=1380" 
                alt="Traditional Cuisine" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="md:pl-8">
              <SectionTitle 
                title="A Taste of Tradition" 
                align="left" 
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-body text-gray-700 mb-6">
                  Welcome to (Name), where we take pride in serving authentic seafood delicacies crafted with traditional recipes passed down through generations. 
                </p>
                <p className="font-body text-gray-700 mb-6">
                  Our culinary team meticulously prepares each dish using locally-sourced, fresh ingredients to bring you the true essence of coastal Maharashtra's rich culinary heritage.
                </p>
                <Button to="/about" variant="primary">
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Our Signature Dishes" 
            subtitle="Experience the finest selection of our head chef's masterpieces" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularDishes.slice(0, 4).map((dish, index) => (
              <MenuCard key={dish.id} item={dish} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/menu" variant="secondary">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-primary-500 bg-opacity-5">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="What Our Guests Say" 
            subtitle="Don't just take our word for it – here's what our valued customers have to say" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1723066217456-cf0b10ceda2b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-primary-500 bg-opacity-80"></div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Rich Flavors of Coastal Cuisine
            </h2>
            <p className="font-body text-xl text-white mb-8 max-w-2xl mx-auto">
              Book your table today and embark on a culinary journey you won't forget.
            </p>
            <Button to="/reservations" variant="primary" size="lg" className="bg-white text-primary-500 hover:text-white ">
              Reserve Your Table
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;