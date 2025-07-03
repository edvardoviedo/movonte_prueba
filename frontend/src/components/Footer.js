import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-dark-bg border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              Movonte
            </motion.h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative digital solutions. With 15+ years of experience, we're your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-melon/20 rounded-full flex items-center justify-center text-melon hover:bg-melon hover:text-dark-bg transition-all duration-300"
              >
                <span className="text-lg">📧</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-blue-accent/20 rounded-full flex items-center justify-center text-blue-accent hover:bg-blue-accent hover:text-white transition-all duration-300"
              >
                <span className="text-lg">💼</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-melon/20 rounded-full flex items-center justify-center text-melon hover:bg-melon hover:text-dark-bg transition-all duration-300"
              >
                <span className="text-lg">🌐</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-melon transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-melon transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-melon transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-melon">📍</span>
                <span>Global Services Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-melon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-melon">✉️</span>
                <span>hello@movonte.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Movonte. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-melon transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-melon transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-melon transition-colors duration-300 text-sm"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;