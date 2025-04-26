import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { ReservationFormData } from '../types';

const Reservations: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ReservationFormData>();

  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    // This would typically send the data to a backend API
    console.log(data);
    alert('Reservation request received! We will contact you shortly to confirm your booking.');
  };

  return (
    <div>
      <PageHeader 
        title="Reservations" 
        subtitle="Book your table for an unforgettable dining experience"
        backgroundImage="https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle 
            title="Book Your Table" 
            subtitle="Make a reservation and experience authentic seafood cuisine" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Reservation Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-xl font-semibold text-primary-500 mb-4">Reservation Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-lg font-medium text-secondary-500 mb-2">Opening Hours</h4>
                  <p className="font-body text-gray-700">
                    <strong>Monday - Friday:</strong><br />
                    Lunch: 12:00 PM - 3:30 PM<br />
                    Dinner: 7:00 PM - 11:30 PM
                  </p>
                  <p className="font-body text-gray-700 mt-2">
                    <strong>Saturday - Sunday:</strong><br />
                    Lunch: 12:00 PM - 4:00 PM<br />
                    Dinner: 7:00 PM - 12:00 AM
                  </p>
                </div>
                
                <div>
                  <h4 className="font-display text-lg font-medium text-secondary-500 mb-2">Reservation Policy</h4>
                  <ul className="list-disc list-inside space-y-2 font-body text-gray-700">
                    <li>Reservations are recommended, especially for weekends and holidays.</li>
                    <li>For groups of 8 or more, please contact us directly by phone.</li>
                    <li>We hold reservations for 15 minutes past the reserved time.</li>
                    <li>Special events may require a deposit.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-display text-lg font-medium text-secondary-500 mb-2">Contact for Assistance</h4>
                  <p className="font-body text-gray-700">
                    For special arrangements or immediate assistance, please call us at:
                    <br />
                    <a href="tel:+919876543210" className="text-primary-500 hover:underline">+91 98765 43210</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-primary-500 bg-opacity-5 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('name', { required: "Name is required" })}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('email', { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-2 border rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('phone', { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Phone number must be 10 digits"
                        }
                      })}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block font-body text-sm font-medium text-gray-700 mb-1">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-2 border rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('date', { required: "Date is required" })}
                      />
                      {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block font-body text-sm font-medium text-gray-700 mb-1">
                        Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="time"
                        className={`w-full px-4 py-2 border rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('time', { required: "Time is required" })}
                      >
                        <option value="">Select a time</option>
                        <optgroup label="Lunch">
                          <option value="12:00">12:00 PM</option>
                          <option value="12:30">12:30 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="13:30">1:30 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="14:30">2:30 PM</option>
                          <option value="15:00">3:00 PM</option>
                        </optgroup>
                        <optgroup label="Dinner">
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                          <option value="21:30">9:30 PM</option>
                          <option value="22:00">10:00 PM</option>
                        </optgroup>
                      </select>
                      {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block font-body text-sm font-medium text-gray-700 mb-1">
                      Number of Guests <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="guests"
                      className={`w-full px-4 py-2 border rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 ${errors.guests ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('guests', { required: "Number of guests is required" })}
                    >
                      <option value="">Select number of guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                    {errors.guests && <p className="mt-1 text-sm text-red-500">{errors.guests.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequests" className="block font-body text-sm font-medium text-gray-700 mb-1">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                      placeholder="Any dietary restrictions, celebration details, or seating preferences"
                      {...register('specialRequests')}
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" variant="primary" fullWidth>
                      Reserve Table
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-600 mt-2">
                    By submitting this form, you agree to our reservation policy.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;