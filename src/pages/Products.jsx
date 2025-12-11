import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, CreditCard, Cloud } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import FloatingElements from '../components/animations/FloatingElements';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Products = () => {
  const products = [
    {
      icon: <Monitor size={48} />,
      title: 'Machine Monitoring System',
      description: 'We are presenting Machine Monitoring System which is useful for industry to tracking production machine. It is an advance system that provides real-time monitoring and analytics for industrial machinery.',
      features: [
        'Real-time machine tracking',
        'Production analytics dashboard',
        'Performance monitoring',
        'Alert notifications',
        'Historical data analysis',
      ],
    },
    {
      icon: <Users size={48} />,
      title: 'Attendance Management System',
      description: 'Quad AMS proffers Payroll software to record time and attendance details by fingerprint biometric devices or other time keeping systems. Complete attendance management solution for modern businesses.',
      features: [
        'Biometric integration',
        'Payroll automation',
        'Leave management',
        'Shift scheduling',
        'Comprehensive reports',
      ],
    },
    {
      icon: <CreditCard size={48} />,
      title: 'Hallmark Card Printing',
      description: 'Any gold jewelry has purity detail which has to be printed on pvc card while delivering jewelry. We proffer Hallmark card printing solution for jewelry businesses.',
      features: [
        'PVC card printing',
        'Purity detail management',
        'Custom design templates',
        'Batch processing',
        'Quality assurance',
      ],
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud Counter (Financial Accounting)',
      description: 'Cloud computing consists of hardware and software resources made available on the web as managed external services. Complete cloud-based accounting solution for businesses.',
      features: [
        'Cloud-based access',
        'Financial reporting',
        'Invoice management',
        'Expense tracking',
        'Multi-user support',
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-black">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="text-h1 text-center mb-6 gold-text">Our Products</h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
            <p className="text-body-lg text-platinum text-center max-w-3xl mx-auto">
              Innovative software solutions designed to streamline your business operations
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding relative overflow-hidden">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring' }}
                whileHover={{ scale: 1.02 }}
              >
                <Card variant="glass" className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Product Info */}
                    <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                      <motion.div 
                        className="text-gold mb-6"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {product.icon}
                      </motion.div>
                      <h2 className="text-h3 mb-4 gold-text">{product.title}</h2>
                      <p className="text-body text-platinum/90 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <Button variant="outline">Learn More</Button>
                    </div>

                    {/* Features List */}
                    <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                      <div className="bg-charcoal/50 rounded-lg p-6 border border-dark-grey">
                        <h3 className="text-h4 mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {product.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 gold-gradient rounded-full mt-2 flex-shrink-0" />
                              <span className="text-body-sm text-platinum/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-charcoal to-black border-t border-dark-grey">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 mb-6">Interested in Our Products?</h2>
            <p className="text-body-lg text-platinum mb-8 max-w-2xl mx-auto">
              Contact us to learn more about how our products can benefit your business
            </p>
            <Button size="lg">Request a Demo</Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Products;
