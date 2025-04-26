import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="Have questions or feedback? We're here to help!" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-500 bg-opacity-5 p-8 rounded-lg"
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex">
                  <MapPin size={24} className="text-secondary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-medium text-primary-500 mb-1">Address</h4>
                    <address className="font-body text-gray-700 not-italic">
                      123 Seafood Lane, Dadar West<br />
                      Mumbai, Maharashtra 400028<br />
                      India
                    </address>
                    <Button 
                      href="https://maps.google.com" 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                    >
                      View on Map
                    </Button>
                  </div>
                </li>
                
                <li className="flex">
                  <Phone size={24} className="text-secondary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-medium text-primary-500 mb-1">Phone</h4>
                    <p className="font-body text-gray-700">
                      <a href="tel:+919876543210" className="hover:text-primary-500 transition-colors">
                        +91 98765 43210
                      </a>
                    </p>
                    <p className="font-body text-gray-600 text-sm mt-1">
                      For reservations and general inquiries
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Mail size={24} className="text-secondary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-medium text-primary-500 mb-1">Email</h4>
                    <p className="font-body text-gray-700">
                      <a href="mailto:info@maaslli.com" className="hover:text-primary-500 transition-colors">
                        info@maaslli.com
                      </a>
                    </p>
                    <p className="font-body text-gray-600 text-sm mt-1">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Clock size={24} className="text-secondary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-medium text-primary-500 mb-1">Opening Hours</h4>
                    <div className="font-body text-gray-700">
                      <p className="mb-1"><strong>Monday - Friday</strong></p>
                      <p>Lunch: 12:00 PM - 3:30 PM</p>
                      <p>Dinner: 7:00 PM - 11:30 PM</p>
                      
                      <p className="mt-3 mb-1"><strong>Saturday - Sunday</strong></p>
                      <p>Lunch: 12:00 PM - 4:00 PM</p>
                      <p>Dinner: 7:00 PM - 12:00 AM</p>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" variant="primary">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-primary-500 bg-opacity-5">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Find Us" 
            subtitle="Located in the heart of Dadar West, Mumbai" 
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571675814!2d72.71637654482287!3d19.082177512225895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1669982264200!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Maaslli Seafood Restaurant Location"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <p className="font-body text-gray-700">
              Easily accessible via public transportation. Valet parking available during dinner hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;