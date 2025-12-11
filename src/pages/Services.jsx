import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Palette, Search, Globe, Cloud, MessageSquare, Image, FileText, Server, Cpu } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import FloatingElements from '../components/animations/FloatingElements';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services = () => {
  const serviceCategories = [
    {
      category: 'Web Development Services',
      services: [
        { icon: <Code size={28} />, title: 'Web Application Development', description: 'Custom web applications built with cutting-edge technology' },
        { icon: <Globe size={28} />, title: 'Website Development', description: 'Professional websites that drive business growth' },
        { icon: <Server size={28} />, title: 'ASP.NET Web Development', description: 'Robust enterprise solutions using Microsoft technologies' },
        { icon: <Database size={28} />, title: 'E-Commerce Solutions', description: 'Complete online store development and management' },
        { icon: <FileText size={28} />, title: 'Content Management System', description: 'Easy-to-manage CMS platforms for your content' },
        { icon: <Cloud size={28} />, title: 'API Integration', description: 'Google, Facebook, MSN, Yahoo API integration services' },
        { icon: <Palette size={28} />, title: 'Web Template Design', description: 'Beautiful, responsive web templates' },
      ],
    },
    {
      category: 'Mobile Application',
      services: [
        { icon: <Smartphone size={28} />, title: 'Android Application Development', description: 'Native Android apps with latest SDK and tools' },
        { icon: <Smartphone size={28} />, title: 'iPhone Application Development', description: 'iOS apps perfectly aligned with customer expectations' },
      ],
    },
    {
      category: 'Software Development',
      services: [
        { icon: <Cpu size={28} />, title: 'Custom Software Development', description: 'Tailored software solutions for your unique needs' },
        { icon: <Database size={28} />, title: 'ERP Development', description: 'Enterprise Resource Planning for business automation' },
      ],
    },
    {
      category: 'Web Designing Services',
      services: [
        { icon: <Palette size={28} />, title: 'Website Design', description: 'Visually stunning and user-friendly designs' },
        { icon: <Image size={28} />, title: 'Brochure Design', description: 'Professional marketing materials that impress' },
      ],
    },
    {
      category: 'SEO Optimization Services',
      services: [
        { icon: <Search size={28} />, title: 'Search Engine Optimization', description: 'Improve rankings and drive organic traffic' },
        { icon: <MessageSquare size={28} />, title: 'Search Engine Marketing', description: 'Paid advertising campaigns that convert' },
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-black overflow-hidden">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <h1 className="text-h1 text-center mb-6 gold-text">Our Services</h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
            <p className="text-body-lg text-platinum text-center max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your business to new heights
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section key={catIndex} className={`section-padding ${catIndex % 2 === 0 ? 'bg-black' : 'bg-charcoal'}`}>
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-h3 mb-12 gold-text">{category.category}</h2>
            </ScrollReveal>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -15 },
                    visible: { opacity: 1, y: 0, rotateX: 0 }
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                >
                  <Card variant="bordered" className="h-full group">
                    <motion.div 
                      className="text-gold mb-4"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.2
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-h4 mb-3">{service.title}</h3>
                    <p className="text-body-sm text-platinum/80 mb-6">{service.description}</p>
                    <Button variant="ghost" size="sm">
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-black to-charcoal border-t border-dark-grey">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 mb-6">Need a Custom Solution?</h2>
            <p className="text-body-lg text-platinum mb-8 max-w-2xl mx-auto">
              We specialize in creating tailored solutions that perfectly fit your business requirements
            </p>
            <Button size="lg">Get in Touch</Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
