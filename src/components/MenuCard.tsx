import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  const { name, description, price, image, isVegetarian, spiceLevel } = item;

  const renderSpiceLevel = () => {
    if (!spiceLevel) return null;
    
    return (
      <div className="flex items-center">
        {Array.from({ length: spiceLevel }).map((_, i) => (
          <Flame key={i} size={14} className="text-red-500" />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
    >
      {image && (
        <div className="md:w-1/3 h-48 md:h-auto">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={`p-6 flex flex-col justify-between ${image ? 'md:w-2/3' : 'w-full'}`}>
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display font-bold text-primary-500 text-xl">{name}</h3>
            <span className="font-display font-semibold text-secondary-500">₹{price}</span>
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            {isVegetarian && (
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Veg</span>
            )}
            
            {renderSpiceLevel()}
          </div>
          
          <p className="font-body text-gray-600 line-clamp-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;