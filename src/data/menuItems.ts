import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 1,
    name: "Bangda Tawa Fry",
    description: "Fresh mackerel marinated with traditional spices and pan-fried to perfection.",
    price: 290,
    image: "https://media.istockphoto.com/id/1292615251/photo/indian-fish-platter-popular-sea-food-starter-from-india-served-in-a-banana-leaf-over-a-white.jpg?s=2048x2048&w=is&k=20&c=10xebDWH7nMxn1RieCrhBwCPzwQQt6SaP1JLSc8geSw=",
    category: "appetizers",
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 2,
    name: "Prawn Koliwada",
    description: "Deep-fried prawns coated with special koliwada masala, a Mumbai street food specialty.",
    price: 350,
    image: "https://images.pexels.com/photos/3296683/pexels-photo-3296683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "appetizers",
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 3,
    name: "Crispy Fish Fingers",
    description: "Tender fish pieces coated with semolina and fried golden, served with garlic aioli.",
    price: 320,
    image: "https://img.freepik.com/free-photo/side-view-chicken-strips-with-black-olive-lettuce-sauce-plate_141793-4859.jpg?t=st=1745671286~exp=1745674886~hmac=e4950fecc01491721096273874a5bfd803347470f8ea5a7be8508b741cfbb58c&w=1380",
    category: "appetizers",
    spiceLevel: 1
  },
  
  // Main Courses
  {
    id: 4,
    name: "Surmai Curry",
    description: "King fish cooked in coconut-based gravy with traditional spices.",
    price: 420,
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "mains",
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 5,
    name: "Prawn Sukka",
    description: "Dry preparation of prawns with freshly ground spices, curry leaves, and grated coconut.",
    price: 380,
    image: "https://images.pexels.com/photos/5591664/pexels-photo-5591664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "mains",
    spiceLevel: 3
  },
  {
    id: 6,
    name: "Bombil Fry",
    description: "Bombay duck fish coated with semolina and deep-fried to a crispy texture.",
    price: 350,
    image: "https://as2.ftcdn.net/v2/jpg/03/96/99/63/1000_F_396996352_GpgtbJz71KPwp06HTx7WVkwr8vXgD8NK.jpg",
    category: "mains",
    spiceLevel: 2
  },
  {
    id: 7,
    name: "Crab Masala",
    description: "Fresh crab meat cooked with traditional masala and coconut milk.",
    price: 460,
    category: "mains",
    isPopular: true,
    spiceLevel: 2
  },
  
  // Vegetarian Specials
  {
    id: 8,
    name: "Tendli Bhaji",
    description: "Ivy gourd stir-fried with mustard seeds, curry leaves, and fresh coconut.",
    price: 220,
    image:"https://www.whiskaffair.com/wp-content/uploads/2017/12/Tindora-Fry-2-1.jpg",
    category: "vegetarian",
    isVegetarian: true,
    spiceLevel: 1
  },
  {
    id: 9,
    name: "Dal Fry",
    description: "Yellow lentils tempered with ghee, cumin, and garlic, a perfect accompaniment to any meal.",
    price: 190,
    image:"https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg?t=st=1745671832~exp=1745675432~hmac=dc4805a2a8ffe40a8efaaac500033a58c83ede6d2e3508cdbf78d60ec15655d2&w=1060",
    category: "vegetarian",
    isVegetarian: true,
    spiceLevel: 1
  },
  
  // Rice and Breads
  {
    id: 10,
    name: "Ukdiche Modak",
    description: "Steamed rice dumplings filled with coconut and jaggery, a traditional Maharashtrian delicacy.",
    price: 220,
    category: "rice-breads",
    isVegetarian: true
  },
  {
    id: 11,
    name: "Neer Dosa",
    description: "Thin rice crepes without fermentation, perfect to complement spicy curries.",
    price: 120,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/neer-dosa-recipe.jpg",
    category: "rice-breads",
    isVegetarian: true
  },
  {
    id: 12,
    name: "Tandalachi Bhakri",
    description: "Traditional rice flatbread, a staple in coastal Maharashtra.",
    price: 80,
    category: "rice-breads",
    isVegetarian: true
  },
  
  // Desserts
  {
    id: 13,
    name: "Ukdiche Modak",
    description: "Steamed rice dumplings filled with coconut and jaggery, a traditional Maharashtrian delicacy.",
    price: 180,
    category: "desserts",
    isVegetarian: true
  },
  {
    id: 14,
    name: "Mango Sheera",
    description: "Semolina pudding flavored with ripe Alphonso mangoes and cardamom.",
    price: 160,
    image: "https://www.ruchikrandhap.com/wp-content/uploads/2020/07/Mango-Sheera_1-scaled.jpg",
    category: "desserts",
    isVegetarian: true
  },
  {
    id: 15,
    name: "Kharvas",
    description: "Traditional Maharashtrian dessert made from colostrum milk and jaggery.",
    price: 150,
    category: "desserts",
    isVegetarian: true
  }
];

export const menuCategories = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'vegetarian', name: 'Vegetarian Specials' },
  { id: 'rice-breads', name: 'Rice & Breads' },
  { id: 'desserts', name: 'Desserts' }
];

export const popularDishes = menuItems.filter(item => item.isPopular);