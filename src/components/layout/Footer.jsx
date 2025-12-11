import { Link } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const services = [
    'Web Development',
    'Mobile Apps',
    'ERP Solutions',
    'SEO & SMO',
    'Cloud Hosting',
    'Custom Software',
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal border-t border-dark-grey">
      <div className="container-custom py-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.jpeg"
                alt="Quad SoftTech"
                className="h-10 w-auto mb-2"
              />
              <div className="text-xs text-platinum">Since 2008</div>
            </div>
            <p className="text-sm text-platinum leading-relaxed mb-4">
              Complexity Resolves to Simplicity
            </p>
            <p className="text-sm text-platinum/70">
              Premium web development, mobile apps, and digital solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gold-text">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-platinum hover:text-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gold-text">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-platinum hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gold-text">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-sm text-platinum">
                  <div>Sales: +91 9377997794</div>
                  <div>Support: +91 9377997793</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-sm text-platinum">
                  <div>info@quadsofttech.com</div>
                  <div>support@quadsofttech.com</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Globe size={18} className="text-gold mt-1 flex-shrink-0" />
                <a
                  href="https://www.quadsofttech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-platinum hover:text-gold transition-colors"
                >
                  www.quadsofttech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-grey flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-platinum/70">
            © {new Date().getFullYear()} Quad SoftTech. All rights reserved.
          </p>
          <p className="text-sm text-platinum/70">
            Surat, India | Founded 2008
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
