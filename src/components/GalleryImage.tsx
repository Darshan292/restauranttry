import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { GalleryImage as GalleryImageType } from '../types';

interface GalleryImageProps {
  image: GalleryImageType;
  index: number;
}

const GalleryImageComponent: React.FC<GalleryImageProps> = ({ image, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ scale: 1.03 }}
        className="overflow-hidden rounded-lg shadow-md cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
        />
      </motion.div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-accent-300 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 font-body">{image.alt}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryImageComponent;