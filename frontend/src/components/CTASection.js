import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="cta" className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern h-full w-full"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-6 h-6 bg-melon/20 rounded-full blur-lg"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -360, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-8 h-8 bg-blue-accent/20 rounded-full blur-lg"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Transform Your Business?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-melon to-blue-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's work together to streamline your operations and drive exceptional results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                LET'S WORK TOGETHER!
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-melon/20 rounded-full flex items-center justify-center">
                    <span className="text-melon text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Free Consultation</h4>
                    <p className="text-gray-300">Get expert advice tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-accent text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Fast Implementation</h4>
                    <p className="text-gray-300">Quick deployment with minimal disruption</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-melon/20 rounded-full flex items-center justify-center">
                    <span className="text-melon text-xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Ongoing Support</h4>
                    <p className="text-gray-300">Continuous assistance and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Start Your Digital Journey
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-melon focus:ring-1 focus:ring-melon transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-melon focus:ring-1 focus:ring-melon transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-melon focus:ring-1 focus:ring-melon transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows="4"
                    className="w-full px-4 py-3 bg-dark-gray/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-melon focus:ring-1 focus:ring-melon transition-all duration-300 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-melon to-melon-light hover:from-melon-light hover:to-melon text-dark-bg font-bold py-4 px-8 rounded-lg transition-all duration-300 melon-glow disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'GET STARTED NOW'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;