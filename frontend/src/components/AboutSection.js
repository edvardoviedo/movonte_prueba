import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern h-full w-full"></div>
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
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-melon to-blue-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 hover-lift">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  15+ Years of Excellence
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At Movonte, we specialize in bringing businesses of all sizes to the future of technology. With over 15+ years of experience in business consulting, we have partnerships with leading technology providers to deliver cutting-edge solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our core mission is to help you and your collaborators streamline your operations in one place. Our goal of providing holistic solutions for your company is only possible through mutual collaboration.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  In our business consulting process, our experts take the time to really understand your needs and connect with you on a personal level, ensuring every solution is tailored to your specific challenges.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-melon/20 to-blue-accent/20 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
                alt="Business Consulting Professional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-bg/90 to-transparent p-8 z-20">
                <h4 className="text-xl font-bold text-white mb-2">
                  Expert Leadership
                </h4>
                <p className="text-gray-300">
                  Guiding your digital transformation journey
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center glass-effect rounded-2xl p-8 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-300 text-lg">Years Experience</div>
          </div>
          <div className="text-center glass-effect rounded-2xl p-8 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-300 text-lg">Projects Delivered</div>
          </div>
          <div className="text-center glass-effect rounded-2xl p-8 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-300 text-lg">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;