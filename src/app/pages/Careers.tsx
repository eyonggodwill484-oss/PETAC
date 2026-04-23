import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Briefcase, MapPin, Clock, GraduationCap, Users, TrendingUp, Award } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export function Careers() {
  useSEO('Careers', 'Join the PETAC Consulting SARL team and build your career in petroleum and environmental services.');

  const positions = [
    {
      title: 'Laboratory Analyst',
      department: 'Laboratory Services',
      location: 'Douala, Cameroon',
      type: 'Full-time',
      description: 'We are seeking a skilled Laboratory Analyst to perform chemical and physical testing of petroleum products, water, and environmental samples.',
      requirements: [
        'Bachelor\'s degree in Chemistry, Environmental Science, or related field',
        'Experience with laboratory testing equipment',
        'Knowledge of ISO 17025 standards',
        'Attention to detail and analytical skills',
      ],
    },
    {
      title: 'Field Sampling Technician',
      department: 'Field Operations',
      location: 'Douala, Cameroon',
      type: 'Full-time',
      description: 'Looking for a Field Sampling Technician to collect samples from various locations and conduct on-site testing.',
      requirements: [
        'Diploma or degree in Science or Engineering',
        'Valid driver\'s license',
        'Ability to work in various field conditions',
        'Strong organizational skills',
      ],
    },
    {
      title: 'Quality Assurance Officer',
      department: 'Quality Control',
      location: 'Douala, Cameroon',
      type: 'Full-time',
      description: 'Seeking a QA Officer to oversee quality control processes and ensure compliance with international standards.',
      requirements: [
        'Bachelor\'s degree in related field',
        '3+ years experience in quality assurance',
        'Knowledge of ISO standards',
        'Strong communication skills',
      ],
    },
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous training and skill development opportunities',
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with experienced professionals in a supportive team',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and promotion opportunities',
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Attractive salary packages and employee benefits',
    },
  ];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400"
            alt="Two scientists working on computers in a laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-4">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Build your career with a leading consulting company in petroleum and environmental services
            </p>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl mb-4">Why Work at PETAC?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a dynamic team committed to excellence, innovation, and professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-accent" size={28} />
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-muted p-8 rounded-xl">
            <h3 className="text-2xl mb-4 text-center">Our Company Culture</h3>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              At PETAC Consulting, we foster a culture of integrity, collaboration, and continuous improvement. We believe in empowering our team members to deliver exceptional results while maintaining work-life balance and professional satisfaction.
            </p>
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
            <h2 className="text-4xl md:text-5xl mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} className="text-accent" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} className="text-accent" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} className="text-accent" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>

                <p className="text-muted-foreground mb-4">{position.description}</p>

                <div>
                  <h4 className="mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl md:text-5xl mb-6">Don't See a Perfect Match?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
            >
              Submit Your Resume
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
