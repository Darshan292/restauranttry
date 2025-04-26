import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const { name, image, comment, rating, date } = testimonial;

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4 items-center">
          {image && (
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <h4 className="font-display font-semibold text-primary-500">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        
        <div className="flex">{renderStars()}</div>
        
        <blockquote className="font-body text-gray-700 italic">"{comment}"</blockquote>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;