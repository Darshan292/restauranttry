import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Fish } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white text-primary-500 shadow-md py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Fish className={`w-8 h-8 ${isScrolled ? 'text-primary-500' : 'text-white'}`} />
          <span className="font-display text-xl md:text-2xl font-semibold">(Name & Logo)</span>
        </NavLink>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-body text-base transition-colors duration-300 hover:text-accent-300 ${
                isActive ? 'font-medium border-b-2 border-accent-400' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-body text-base transition-colors duration-300 hover:text-accent-300 ${
                isActive ? 'font-medium border-b-2 border-accent-400' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => 
              `font-body text-base transition-colors duration-300 hover:text-accent-300 ${
                isActive ? 'font-medium border-b-2 border-accent-400' : ''
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `font-body text-base transition-colors duration-300 hover:text-accent-300 ${
                isActive ? 'font-medium border-b-2 border-accent-400' : ''
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/reservations" 
            className={({ isActive }) => 
              `font-body text-base transition-colors duration-300 hover:text-accent-300 ${
                isActive ? 'font-medium border-b-2 border-accent-400' : ''
              }`
            }
          >
            Reservations
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-body text-base transition-colors duration-300 hover:text-accent-300 ${
                isActive ? 'font-medium border-b-2 border-accent-400' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Nav Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden flex items-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-primary-500' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary-500' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col py-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-primary-500 font-body text-lg p-3 transition-colors duration-300 hover:bg-gray-100 ${
                    isActive ? 'font-medium bg-gray-100' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-primary-500 font-body text-lg p-3 transition-colors duration-300 hover:bg-gray-100 ${
                    isActive ? 'font-medium bg-gray-100' : ''
                  }`
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/menu" 
                className={({ isActive }) => 
                  `text-primary-500 font-body text-lg p-3 transition-colors duration-300 hover:bg-gray-100 ${
                    isActive ? 'font-medium bg-gray-100' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Menu
              </NavLink>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => 
                  `text-primary-500 font-body text-lg p-3 transition-colors duration-300 hover:bg-gray-100 ${
                    isActive ? 'font-medium bg-gray-100' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Gallery
              </NavLink>
              <NavLink 
                to="/reservations" 
                className={({ isActive }) => 
                  `text-primary-500 font-body text-lg p-3 transition-colors duration-300 hover:bg-gray-100 ${
                    isActive ? 'font-medium bg-gray-100' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Reservations
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-primary-500 font-body text-lg p-3 transition-colors duration-300 hover:bg-gray-100 ${
                    isActive ? 'font-medium bg-gray-100' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;