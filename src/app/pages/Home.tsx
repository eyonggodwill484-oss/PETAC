import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Droplet, FlaskConical, Shield, Factory } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';  


const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400',
    alt: 'Industrial oil refinery complex at dusk',
    caption: 'Petroleum Analysis',
  },
  {
    src: 'https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400',
    alt: 'Industrial pipeline infrastructure',
    caption: 'Quality Control',
  },
];

const heroStats = [
  { value: '2026', label: 'Est. Year' },
  { value: '50+', label: 'Projects Delivered' },
  { value: 'ISO', label: '17025 Accredited' },
];

export function Home() {
  useSEO('Home', 'Welcome to PETAC Consulting SARL. Your trusted partner in petroleum analysis, environmental monitoring, and quality control.');

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Factory,
      title: 'Petroleum Analysis',
      description: 'Comprehensive testing and quality control for petroleum products',
    },
    {
      icon: Droplet,
      title: 'Environmental Monitoring',
      description: 'Water, soil, air quality testing and analysis',
    },
    {
      icon: FlaskConical,
      title: 'Laboratory Services',
      description: 'ISO 17025 accredited laboratory testing and analysis',
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Inspection, sampling, and quality assurance services',
    },
  ];

  const whyChooseUs = [
    'Expertise in petroleum and environmental consulting',
    'Commitment to international standards (ISO 17025, ISO 1996)',
    'Timely delivery of reliable results',
    'Professional and client-focused approach',
    'Strategic location in Douala for efficient service delivery',
  ];

  const industries = [
    { name: 'Oil & Gas', image: 'https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800' },
    { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1721554146444-379243d27942?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800' },
    { name: 'Water Treatment', image: 'https://images.unsplash.com/photo-1586018455896-ba31e793edd5?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800' },
    { name: 'Environmental Services', image: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800' },
  ];

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">

        {/* Background slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentSlide}
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          {/* Deep directional overlay — left side darker for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/30" />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
        </div>

        {/* Slide progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30">
          <motion.div
            key={currentSlide}
            className="h-full bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </div>

        {/* Main content — left-aligned */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
          <div className="max-w-3xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/60 bg-accent/10 backdrop-blur-sm text-accent text-sm font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              ISO 17025 Accredited · Since 2026
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6"
            >
              Excellence in{' '}
              <span className="text-accent">
                Petroleum, water
              </span>{' '}
              &amp; Environmental Consulting
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed"
            >
              Delivering accurate, reliable, and internationally compliant technical services in petroleum analysis, water analysis,  environmental monitoring, and quality control — from Douala, Cameroon.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg shadow-lg shadow-accent/30 hover:bg-accent/90 hover:shadow-accent/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get a Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 backdrop-blur-md text-white font-semibold border border-white/25 rounded-lg hover:bg-white/15 hover:border-white/50 transition-all duration-200"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.6 }}
              className="flex gap-8 border-t border-white/15 pt-8"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-white/55 tracking-wider uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom-right: slide counter + dots */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-3">
          {/* Current slide caption */}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60"
            >
              {heroImages[currentSlide].caption}
            </motion.span>
          </AnimatePresence>
          {/* Slide counter */}
          <div className="text-white/40 text-xs font-mono">
            <span className="text-white font-semibold">{String(currentSlide + 1).padStart(2, '0')}</span>
            {' / '}{String(heroImages.length).padStart(2, '0')}
          </div>
          {/* Dot indicators */}
          <div className="flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide
                    ? 'w-6 h-2 bg-accent'
                    : 'w-2 h-2 bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your technical and consulting needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="text-accent" size={28} />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">About PETAC Consulting</h2>
              <p className="text-lg text-muted-foreground mb-6">
                PETAC Consulting SARL is a dynamic and forward-thinking consulting company established in January 2026 and headquartered in Douala – Ndogbong, Cameroon. We specialize in delivering high-quality technical and consulting services in the fields of petroleum, water, environmental monitoring analysis, and quality control.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At PETAC Consulting, we are committed to providing accurate, reliable, and timely solutions that support industries, organizations, and institutions in maintaining compliance with international standards while optimizing operational performance.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1758573467240-f944226c2026?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=600"
                alt="Young woman looking through a microscope in a lab"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=600"
                alt="A factory with a lot of red and white pipes"
                className="rounded-lg w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose PETAC</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for technical excellence and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Providing specialized consulting services across multiple sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img loading="lazy"
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end">
                  <h3 className="text-white p-6 w-full">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact us today to discuss how we can support your technical and consulting needs
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
            >
              Contact Us Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
