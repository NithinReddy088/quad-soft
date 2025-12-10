import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Career = () => {
  const benefits = [
    'Competitive salary packages',
    'Health insurance coverage',
    'Flexible working hours',
    'Remote work options',
    'Professional development',
    'Team building activities',
    'Modern office environment',
    'Performance bonuses',
  ];

  const openings = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Surat, India',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      title: 'Mobile App Developer',
      location: 'Surat, India',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['React Native', 'iOS', 'Android', 'Firebase'],
    },
    {
      title: 'UI/UX Designer',
      location: 'Surat, India',
      type: 'Full-time',
      experience: '2+ years',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    },
    {
      title: 'DevOps Engineer',
      location: 'Surat, India',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-black">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="text-h1 text-center mb-6 gold-text">Join Our Team</h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
            <p className="text-body-lg text-platinum text-center max-w-3xl mx-auto">
              Build your career with a team that values innovation, creativity, and excellence
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h3 text-center mb-12 gold-text">Why Work With Us?</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={0.2}>
              <p className="text-body text-platinum/90 text-center mb-12 leading-relaxed">
                At Quad SoftTech, we believe in nurturing talent and providing an environment where innovation thrives. 
                Join a team of passionate professionals working on cutting-edge technologies and exciting projects.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="flex items-center space-x-3 p-4 bg-charcoal rounded-lg border border-dark-grey hover:border-gold/50 transition-colors">
                    <div className="w-2 h-2 gold-gradient rounded-full flex-shrink-0" />
                    <span className="text-body-sm text-platinum">{benefit}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h3 text-center mb-12 gold-text">Current Openings</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card variant="bordered" className="group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-grow">
                      <h3 className="text-h4 mb-3 group-hover:text-gold transition-colors">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-body-sm text-platinum/70">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-gold" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gold" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} className="text-gold" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className="text-caption px-3 py-1 bg-gold/10 text-gold rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button variant="outline">
                        Apply Now <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="section-padding bg-gradient-to-br from-black to-charcoal border-t border-dark-grey">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 mb-6">Don't See a Perfect Match?</h2>
            <p className="text-body-lg text-platinum mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg">Send Your Resume</Button>
            <p className="text-body-sm text-platinum/60 mt-4">
              Email: hr@quadsofttech.com
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Career;
