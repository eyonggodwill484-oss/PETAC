import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import petacLogo from '../../imports/PETAC.png';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src={petacLogo}
              alt="PETAC Consulting"
              className="h-16 w-auto object-contain bg-white/10 p-2 rounded-lg"
            />
            <p className="text-sm text-primary-foreground/80">
              Professional consulting services in petroleum, environmental monitoring, and quality control.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/activities" className="text-primary-foreground/80 hover:text-accent transition-colors">Activities</Link></li>
              <li><Link to="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Petroleum Analysis</li>
              <li>Environmental Testing</li>
              <li>Laboratory Services</li>
              <li>Quality Control</li>
              <li>Sampling & Inspection</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">Douala - Ndogbong, Cameroon</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                <a href="tel:+237" className="text-primary-foreground/80 hover:text-accent transition-colors">+237 XXX XXX XXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-accent" />
                <a href="mailto:contact@petacconsulting.com" className="text-primary-foreground/80 hover:text-accent transition-colors">contact@petacconsulting.com</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} PETAC Consulting SARL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
