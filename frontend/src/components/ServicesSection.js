import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "Complete digital overhaul to modernize your business processes and boost efficiency.",
      features: ["Cloud Migration", "Process Automation", "Digital Strategy"]
    },
    {
      icon: "⚡",
      title: "Custom Software Development",
      description: "Tailored software solutions built specifically for your unique business requirements.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Solutions"]
    },
    {
      icon: "🔧",
      title: "Business Consulting",
      description: "Expert guidance to optimize your operations and accelerate growth with proven strategies.",
      features: ["Strategic Planning", "Process Optimization", "Technology Advisory"]
    },
    {
      icon: "🛡️",
      title: "System Integration",
      description: "Seamlessly connect your existing systems for improved data flow and operational efficiency.",
      features: ["API Integration", "Data Synchronization", "Legacy System Updates"]
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and reporting solutions.",
      features: ["Business Intelligence", "Predictive Analytics", "Custom Dashboards"]
    },
    {
      icon: "🎯",
      title: "Ongoing Support",
      description: "Continuous support and maintenance to ensure your systems run smoothly and stay updated.",
      features: ["24/7 Monitoring", "Regular Updates", "Technical Support"]
    }
  ];

  return (
    <section id="services" className="py-20 section-gradient relative overflow-hidden">
      {/* Background Elements */}
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-melon to-blue-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover-lift group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-melon transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-melon rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-melon/20 to-blue-accent/20 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
              alt="Digital Transformation Technology"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent z-20"></div>
            <div className="absolute bottom-8 left-8 right-8 z-30">
              <h4 className="text-2xl font-bold text-white mb-2">
                Cutting-Edge Technology
              </h4>
              <p className="text-gray-300">
                Leveraging the latest technologies to build future-ready solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;