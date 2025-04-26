import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const textColorClass = light ? 'text-white' : 'text-primary-500';
  const subtitleColorClass = light ? 'text-accent-100' : 'text-secondary-500';

  return (
    <div className={`mb-10 ${alignmentClasses[align]}`}>
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-display text-2xl md:text-3xl font-bold ${textColorClass} mb-2`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`font-body max-w-2xl mx-auto ${subtitleColorClass} ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: align === 'center' ? '80px' : '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`h-1 bg-accent-400 mt-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;