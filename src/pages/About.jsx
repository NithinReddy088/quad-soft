import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Award, Users, Briefcase, Clock } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import FloatingElements from '../components/animations/FloatingElements';
import Card from '../components/ui/Card';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

import React from 'react';

const About = () => {
  const features = [
    'Helping you stretch your limits. We work for and with you.',
    'Reap benefits of carefully tested and all-inclusive products.',
    'Get lucky with our competitive prices and optimized projects.',
    'Following predefined methodologies and frameworks.',
    'Use of proprietary tools to improve development effectiveness.',
    'Avail timely and full-satisfaction guaranteed products.',
  ];

  const stats = [
    { icon: <Users size={32} />, value: 500, suffix: '+', label: 'Happy Clients' },
    { icon: <Briefcase size={32} />, value: 1000, suffix: '+', label: 'Projects Completed' },
    { icon: <Clock size={32} />, value: 15, suffix: '+', label: 'Years Experience' },
    { icon: <Award size={32} />, value: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-black">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="text-h1 text-center mb-6 gold-text">About Quad SoftTech</h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
            <p className="text-body-lg text-platinum text-center max-w-3xl mx-auto">
              Founded in 2008, delivering world-class quality work to enterprises globally
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-h3 mb-8 gold-text">Our Story</h2>
              <div className="space-y-6 text-body text-platinum/90 leading-relaxed">
                <p>
                  Quad SoftTech was founded on a simple belief: We see our customers as invited guests to our place, 
                  and we are the hosts. It's our job to make the customer experience a little bit better.
                </p>
                <p>
                  Founded in 2008, in the city Surat, India, Quad Softtech started with a clear focus on creating 
                  cutting edge solutions for providing world class quality work to our medium & small enterprise 
                  companies with our mature process implementation. We have traversed a challenging and exciting path, 
                  harnessing a multitude of technologies, domains, services, nurturing a skilled pool of resources and 
                  serving global clientele.
                </p>
                <p>
                  Gaining expertise and experience in Web Development Services, Software Solutions, Custom Web and 
                  Desktop Application, Enterprise Resource Planning (ERP), Mobile Application Development, Support & 
                  Maintenance and Design Services, we have provided end-to-end solutions to large portfolio of customers.
                </p>
                <p>
                  We are a team of highly experienced individuals who have knowledge on incessantly changing technology. 
                  We are expertise in Web Development, Android and iOS Application Development, eCommerce Portals, ERP 
                  Development, Embedded Solutions, Internet Marketing, Search Engine Optimization (SEO) and Social Media 
                  Optimization (SMO).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="text-center"
              >
                <motion.div 
                  className="text-gold mb-4 flex justify-center"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-h2 gold-text mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-body-sm text-platinum">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card variant="glass" className="h-full">
                <Eye size={40} className="text-gold mb-6" />
                <h3 className="text-h3 mb-4 gold-text">Our Vision</h3>
                <p className="text-body text-platinum/90 leading-relaxed">
                  Our vision is to provide best solutions to customers and add ethics to their dealing and to develop 
                  an insightful and technology-driven e-business matrix where success is a process and our valued 
                  clients are partners in growth.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card variant="glass" className="h-full">
                <Target size={40} className="text-gold mb-6" />
                <h3 className="text-h3 mb-4 gold-text">Our Mission</h3>
                <p className="text-body text-platinum/90 leading-relaxed">
                  To harness and sharpen the best of strategic and technical skills in order to deal with real-life 
                  business issues and develop innovative e-business solutions for optimizing organizational growth.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h3 text-center mb-12 gold-text">Our Approach</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card variant="bordered" className="h-full">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 gold-gradient rounded-full mt-2 flex-shrink-0" />
                    <p className="text-body-sm text-platinum/90">{feature}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-h3 mb-8 gold-text">Our Philosophy</h2>
              <p className="text-body text-platinum/90 leading-relaxed mb-8">
                Any company big or small cannot survive unless they have good clients as it is said that 'Customers are King' 
                and we truly believe this. We believe that growth of any company depends on the clientele it possesses. 
                Client satisfaction has always been the priority for Quad SoftTech because clients or the customers are the 
                most essential and important factor of any business organization and we try our best to satisfy them. Clients 
                are the driving force for Quad SoftTech and our addressing point is their satisfaction towards our work and company.
              </p>
              <div className="inline-block px-8 py-4 border-2 border-gold rounded-lg">
                <p className="text-h4 gold-text italic">"Sometimes we win, sometimes we learn."</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
