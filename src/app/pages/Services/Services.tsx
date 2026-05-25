import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useSEO } from '../../hooks/useSEO';

import {
  ShieldCheck,
  Truck,
  Factory,
  Droplet,
  Cloud,
  Gem,
  Mountain,
  Leaf,
  Scale,
  FileCheck,
  GraduationCap,
  BookOpen,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import petacImage from '../../../imports/services.jpg';


export function Services() {
  useSEO('Our Services', 'Explore our comprehensive range of specialized services in petroleum, water analysis, and environmental testing.');

  const servicesList = [
    {
      icon: ShieldCheck,
      title: 'Consultancy & Quality Control Inspection',
      description: 'We provide expert consultancy and independent quality control inspection services...',
      slug: 'consultancy-quality-control',
    },
    {
      icon: Truck,
      title: 'Sampling and Transportation of Products',
      description: 'Our sampling and product handling services preserve the integrity of materials...',
      slug: 'sampling-transportation',
    },
    {
      icon: Factory,
      title: 'Petroleum Products Analysis',
      description: 'We offer advanced analytical services for petroleum products including crude oil...',
      slug: 'petroleum-analysis',
    },
    {
      icon: Droplet,
      title: 'Water Analysis',
      description: 'Our water analysis services provide critical insights into water quality...',
      slug: 'water-analysis',
    },
    {
      icon: Cloud,
      title: 'Gas Analysis',
      description: 'We deliver precise gas analysis solutions for industrial operations...',
      slug: 'gas-analysis',
    },
    {
      icon: Gem,
      title: 'Minerals Analysis',
      description: 'Our minerals analysis provides detailed evaluation of material composition...',
      slug: 'minerals-analysis',
    },
    {
      icon: Mountain,
      title: 'Soil Analysis',
      description: 'We offer comprehensive soil analysis to assess quality and contamination...',
      slug: 'soil-analysis',
    },
    {
      icon: Leaf,
      title: 'Environmental Monitoring & Analysis',
      description: 'We provide continuous environmental monitoring for air, water, soil...',
      slug: 'environmental-monitoring',
    },
    {
      icon: Scale,
      title: 'Calibration of Equipment and Instruments',
      description: 'We ensure instruments operate at optimal accuracy through calibration...',
      slug: 'calibration-services',
    },
    {
      icon: FileCheck,
      title: 'Validation and Reporting of Analytical Results',
      description: 'We offer validation and reporting services for accurate analytical results...',
      slug: 'validation-reporting',
    },
    {
      icon: GraduationCap,
      title: 'Recruitment of Academic & professional Internship Students',
      description: 'We support future professionals by recruiting and placing internship students...',
      slug: 'internship-recruitment',
    },
    {
      icon: BookOpen,
      title: 'Training of Personnels & Workers',
      description: 'We provide specialized training programs to enhance technical competence...',
      slug: 'training-services',
    },
    {
      icon: Briefcase,
      title: 'Placement of Workers to Partnering Companies',
      description: 'We facilitate placement of skilled professionals into partner organizations...',
      slug: 'worker-placement',
    },
  ];

  return (
    <div>
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden animate-water-ripple">

          <div className="absolute inset-0">
            <img
              loading="lazy"
              src={petacImage}
              alt="PETAC Laboratory Services"
              className="w-full h-full object-cover animate-water-wave"
              style={{ filter: 'blur(2px)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60"></div>
          </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 font-bold tracking-tight">Our Services</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              At PETAC Consulting SARL, we deliver a comprehensive range of specialized services designed to support individuals, private industries and state-owned enterprises in achieving operational excellence, regulatory compliance, and sustainable growth. Our approach integrates globally recognized standards, advanced technical expertise, and an unwavering commitment to accuracy and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card border border-border p-8 rounded-2xl hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 animate-water-ripple"
              >
                {/* Keep a consistent card size (no conditional image area) */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-sm">
                  <service.icon className="text-accent group-hover:text-white transition-colors duration-500 animate-water-drop" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#FE6404] transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-grow mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors group/link"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border/50 p-12 md:p-16 rounded-[2.5rem] shadow-2xl backdrop-blur-sm"
          >
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-accent" size={48} />
            </div>
            <h2 className="text-3xl md:text-5xl mb-8 font-bold">Our Commitment to International Standards</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Across all our services, PETAC Consulting SARL integrates internationally recognized standards ASTM, methods, ISO/IEC compliance  and specifications to ensure consistency, accuracy, and credibility. This commitment enables us to deliver reliable results, improved operational performance, and enhanced client confidence, positioning us as a trusted partner in technical consulting and analytical services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093449818-2655b2467fd6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl mb-8 font-bold">Ready to Elevate Your Operations?</h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto font-light">
              Partner with PETAC Consulting SARL today and leverage our expertise for your growth and compliance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-accent text-accent-foreground text-lg font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-xl hover:shadow-accent/25"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}