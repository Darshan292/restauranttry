export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export interface Testimonial {
  id: number;
  name: string;
  image?: string;
  comment: string;
  rating: number;
  date: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'events';
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}