import { useState } from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: [
        { label: 'Sales', value: '+91 9377997794' },
        { label: 'Support', value: '+91 9377997793' },
      ],
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: [
        { label: 'General', value: 'info@quadsofttech.com' },
        { label: 'Support', value: 'support@quadsofttech.com' },
        { label: 'HR', value: 'hr@quadsofttech.com' },
      ],
    },
    {
      icon: <Globe size={24} />,
      title: 'Website',
      details: [
        { label: '', value: 'www.quadsofttech.com' },
      ],
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: [
        { label: '', value: 'Surat, Gujarat, India' },
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-black">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="text-h1 text-center mb-6 gold-text">Get In Touch</h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
            <p className="text-body-lg text-platinum text-center max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can help you achieve your goals
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card variant="bordered" className="text-center h-full">
                  <div className="text-gold mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-h4 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, dIndex) => (
                      <div key={dIndex}>
                        {detail.label && (
                          <p className="text-caption text-platinum/60">{detail.label}</p>
                        )}
                        <p className="text-body-sm text-platinum">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Card variant="glass">
                <h2 className="text-h3 mb-8 gold-text text-center">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    required
                  />
                  
                  <Input
                    label="Your Message"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                  />
                  
                  <div className="text-center">
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-charcoal border-t border-dark-grey">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h3 mb-6 gold-text">Why Choose Quad SoftTech?</h2>
            <p className="text-body text-platinum/90 max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience and 500+ satisfied clients, we deliver world-class solutions 
              that drive business growth. Our team of experts is committed to providing exceptional service 
              and support throughout your project journey.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
