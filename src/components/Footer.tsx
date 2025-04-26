import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">(Name) Seafood</h3>
            <p className="font-body text-sm mb-4">
              Authentic seafood restaurant serving traditional coastal delicacies in Mumbai.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/maaslli/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link to="/" className="hover:text-accent-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-accent-300 transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent-300 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-accent-300 transition-colors">Reservations</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Seafood Lane, Dadar West, Mumbai, Maharashtra 400028</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent-300 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@maaslli.com" className="hover:text-accent-300 transition-colors">info@example.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 font-body text-sm">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>12:00 PM - 3:30 PM</p>
                  <p>7:00 PM - 11:30 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p>12:00 PM - 4:00 PM</p>
                  <p>7:00 PM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center font-body text-sm">
          <p>&copy; {new Date().getFullYear()} (Name) Seafood Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;