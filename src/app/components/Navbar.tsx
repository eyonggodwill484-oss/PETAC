import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import petacLogo from '../../imports/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Activities', path: '/activities' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const servicesSubItems = [
    { name: 'Services Overview', path: '/services' },
    { name: 'Consultancy & Quality Inspection', path: '/services/consultancy-quality-control' },
    { name: 'Sampling and Transportation of Products', path: '/services/sampling-transportation' },
    { name: 'Petroleum Products Analysis', path: '/services/petroleum-analysis' },
    { name: 'Water Analysis', path: '/services/water-analysis' },
    { name: 'Gas Analysis', path: '/services/gas-analysis' },
    { name: 'Minerals Analysis', path: '/services/minerals-analysis' },
    { name: 'Soil Analysis', path: '/services/soil-analysis' },
    { name: 'Environmental Monitoring', path: '/services/environmental-monitoring' },
    { name: 'Equipment Calibration', path: '/services/calibration-services' },
    { name: 'Validation and Reporting', path: '/services/validation-reporting' },
    { name: 'Internship Recruitment', path: '/services/internship-recruitment' },
    { name: 'Training Services', path: '/services/training-services' },
    { name: 'Worker Placement', path: '/services/worker-placement' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={petacLogo}
              alt="PETAC Consulting"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              if (link.path !== '/services') {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-3 text-base font-semibold tracking-wide transition-colors ${
                      isActive(link.path)
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FE6404]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              }

              return (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`relative py-3 text-base font-semibold tracking-wide transition-colors group flex items-center gap-1`}
                      type="button"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 mb-0.5 transition-transform group-hover:rotate-180" />
                      {isActive(link.path) && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FE6404]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </DropdownMenuTrigger>


                  <DropdownMenuContent align="start" className="w-72" sideOffset={6}>

                    <div className="px-2 pb-2 space-y-0.5">
                      {servicesSubItems.map((item) => (
                        <DropdownMenuItem key={item.path} asChild>
                          <Link
                            to={item.path}
                            className="block text-sm text-foreground/80 hover:text-[#FE6404] rounded px-2 py-1"
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}

            <Link
              to="/contact"
              className="px-8 py-3 bg-[#FE6404] text-white font-bold rounded-lg shadow shadow-[#FE6404]/30 hover:bg-[#FE6404]/90 hover:shadow-md hover:shadow-[#FE6404]/40 transition-all"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-foreground"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-base font-semibold ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/70 hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 bg-accent text-accent-foreground font-bold rounded-lg text-center shadow shadow-accent/30"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

