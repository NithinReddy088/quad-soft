import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Database, Search, Cloud, Palette } from 'lucide-react';
import HeroAnimation from '../components/animations/HeroAnimation';
import ScrollReveal from '../components/animations/ScrollReveal';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const [showHeroAnimation, setShowHeroAnimation] = useState(true);

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Customized Web Application Development with latest technology to increase efficiency and reduce costs.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Apps',
      description: 'iOS and Android app development combining breadth of abilities with technological knowledge.',
    },
    {
      icon: <Database size={32} />,
      title: 'ERP Solutions',
      description: 'Enterprise Resource Planning to automate, plan, collaborate, and execute business requirements.',
    },
    {
      icon: <Search size={32} />,
      title: 'SEO & SMO',
      description: 'Strategic optimization to attract customers and convert them through proven techniques.',
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Hosting',
      description: 'Scalable cloud web hosting using clustered servers for optimal performance and security.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Services',
      description: 'Logo, catalog, and multimedia design that creates lasting impressions and brand identity.',
    },
  ];

  const products = [
    {
      title: 'Machine Monitoring System',
      description: 'Real-time monitoring and analytics for industrial machinery with advanced tracking capabilities.',
    },
    {
      title: 'Attendance Management',
      description: 'Complete attendance solution with biometric integration and payroll software.',
    },
    {
      title: 'Hallmark Card Printing',
      description: 'Specialized PVC card printing solution for jewelry businesses with purity details.',
    },
    {
      title: 'Cloud Counter',
      description: 'Complete cloud-based financial accounting system for modern businesses.',
    },
  ];

  const testimonials = [
    {
      name: 'Mr. Vasudev Ankoliya',
      company: 'A Royal Co. (CEO)',
      text: 'Vision360 is unconventional to National and International Market but Quad Softtech understands it and our requirements in deep and delivered as per our expectations within short time period.',
    },
    {
      name: 'Dr. Dharmendra Sheth',
      company: 'MOEC India pvt. ltd.',
      text: 'We are very happy with the service Quad SoftTech provides. Their response times are excellent, which keeps our down time to a minimum.',
    },
    {
      name: 'Mr. Pravin Pansuriya',
      company: 'Komal Industries (Manager)',
      text: 'We are in the 2nd year of using your company for our search engine optimization. I am really pleased with our Project Managers.',
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {showHeroAnimation && (
          <HeroAnimation onComplete={() => setShowHeroAnimation(false)} />
        )}
        
        <div className="container-custom text-center z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showHeroAnimation ? 0 : 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-hero mb-6 gold-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Complexity Resolves to Simplicity
            </motion.h1>
            
            <motion.p
              className="text-body-lg text-platinum max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Let your business grow with us. We create the impact with the first impression online.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Button size="lg">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Why Quad Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 text-center mb-4 gold-text">Why Quad SoftTech?</h2>
            <div className="w-24 h-1 gold-gradient mx-auto mb-12" />
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-body text-platinum max-w-4xl mx-auto text-center leading-relaxed">
              Quad Softtech offers great Website design and development, Mobile Application, SEO, Enterprise Resource Planning, 
              Web & cloud hosting, Domain Registration and Internet Marketing. We fulfill every client requirement in terms of 
              service, designing, coding and support. We strive to offer the best solution for your business and impartial advice 
              at an honest price. Delivering quality products and services is the predominant objective of Quad SoftTech.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 text-center mb-4">Services We Provide</h2>
            <p className="text-body text-platinum text-center mb-16">
              That make your work attractive
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card variant="bordered" className="h-full">
                  <div className="text-gold mb-4">{service.icon}</div>
                  <h3 className="text-h4 mb-3">{service.title}</h3>
                  <p className="text-body-sm text-platinum/80 mb-4">{service.description}</p>
                  <Button variant="ghost" size="sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 text-center mb-4 gold-text">Our Products</h2>
            <div className="w-24 h-1 gold-gradient mx-auto mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card variant="glass" className="h-full">
                  <h3 className="text-h4 mb-3 gold-text">{product.title}</h3>
                  <p className="text-body text-platinum/80 mb-6">{product.description}</p>
                  <Button variant="outline" size="sm">
                    Explore Product
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 text-center mb-16">What Our Clients Say</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card variant="elevated" className="h-full">
                  <div className="text-gold text-4xl mb-4">"</div>
                  <p className="text-body-sm text-platinum/90 mb-6 italic">{testimonial.text}</p>
                  <div className="border-t border-dark-grey pt-4">
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-caption text-platinum/70">{testimonial.company}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-charcoal to-black border-t border-dark-grey">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-body-lg text-platinum mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with our premium solutions.
            </p>
            <Button size="lg">
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
