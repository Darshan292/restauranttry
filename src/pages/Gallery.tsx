import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import GalleryImageComponent from '../components/GalleryImage';
import { galleryImages } from '../data/galleryImages';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'food' | 'interior' | 'events'>('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      <PageHeader 
        title="Gallery" 
        subtitle="Take a visual tour of our restaurant and cuisine"
        backgroundImage="https://images.pexels.com/photos/2845812/pexels-photo-2845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Explore Our Space and Creations" 
            subtitle="Get a glimpse of the (Name) experience through our gallery" 
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-body transition-colors duration-300 ${
                filter === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('food')}
              className={`px-4 py-2 rounded-full font-body transition-colors duration-300 ${
                filter === 'food'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Food
            </button>
            <button
              onClick={() => setFilter('interior')}
              className={`px-4 py-2 rounded-full font-body transition-colors duration-300 ${
                filter === 'interior'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setFilter('events')}
              className={`px-4 py-2 rounded-full font-body transition-colors duration-300 ${
                filter === 'events'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Events
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryImageComponent 
                key={image.id} 
                image={image} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;