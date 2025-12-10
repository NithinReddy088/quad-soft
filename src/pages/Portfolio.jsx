import { ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Vision360',
      client: 'A Royal Co.',
      category: 'Custom Software',
      description: 'Unconventional solution for National and International Market with advanced features.',
    },
    {
      title: 'E-Commerce Platform',
      client: 'Retail Business',
      category: 'Web Development',
      description: 'Complete online store with payment gateway integration and inventory management.',
    },
    {
      title: 'Mobile Banking App',
      client: 'Financial Institution',
      category: 'Mobile Application',
      description: 'Secure iOS and Android banking application with biometric authentication.',
    },
    {
      title: 'ERP System',
      client: 'Manufacturing Company',
      category: 'Enterprise Software',
      description: 'Comprehensive ERP solution for production, inventory, and financial management.',
    },
    {
      title: 'Healthcare Portal',
      client: 'Medical Center',
      category: 'Web Application',
      description: 'Patient management system with appointment scheduling and medical records.',
    },
    {
      title: 'Real Estate Platform',
      client: 'Property Developer',
      category: 'Web Development',
      description: 'Property listing and management platform with virtual tour capabilities.',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Application', 'Custom Software', 'Enterprise Software'];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-black">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="text-h1 text-center mb-6 gold-text">Our Portfolio</h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
            <p className="text-body-lg text-platinum text-center max-w-3xl mx-auto">
              Showcasing our successful projects and satisfied clients across various industries
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-charcoal border-y border-dark-grey">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card variant="bordered" className="h-full group">
                  <div className="aspect-video bg-dark-grey rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <div className="text-gold/20 text-6xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-caption text-gold px-3 py-1 bg-gold/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-h4 mb-2">{project.title}</h3>
                  <p className="text-body-sm text-platinum/60 mb-3">{project.client}</p>
                  <p className="text-body-sm text-platinum/80 mb-4">{project.description}</p>
                  
                  <Button variant="ghost" size="sm" className="group-hover:text-gold">
                    View Details <ExternalLink className="ml-2" size={16} />
                  </Button>
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
            <h2 className="text-h2 mb-6">Want to Be Our Next Success Story?</h2>
            <p className="text-body-lg text-platinum mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing for your business
            </p>
            <Button size="lg">Start Your Project</Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
