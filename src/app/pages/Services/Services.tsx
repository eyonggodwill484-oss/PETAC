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
  ClipboardList,
  FlaskConical,
  TrendingUp,
  Settings,
  CheckCircle2
} from 'lucide-react';

export function Services() {
  useSEO('Our Services', 'Explore our comprehensive range of specialized services in petroleum, water analysis, and environmental testing.');

  const servicesList = [
    {
      icon: ShieldCheck,
      title: 'Consultancy & Quality Control Inspection',
      description: 'We provide expert consultancy and independent quality control inspection services to ensure that products meet required specifications and industry expectations. Our solutions help clients minimize risks, maintain compliance with international standards, and enhance product integrity, ultimately improving market acceptance and operational performance.',
    },
    {
      icon: Truck,
      title: 'Sampling and Transportation of Products',
      description: 'Our sampling and product handling services are carried out with precision and professionalism to preserve the integrity of materials from source to laboratory. We ensure that all processes align with international best practices, enabling clients to rely on representative samples for accurate evaluation and decision-making.',
    },
    {
      icon: Factory,
      title: 'Petroleum Products Analysis',
      description: 'We offer advanced analytical services for petroleum products to determine quality, composition, and compliance with global specifications. Our work supports efficient refining, trading, and distribution activities while helping investors and stakeholders make informed decisions based on reliable data collected from the analysis of Crude Oil, gasoline, diesel, jetA1 fuel, kerosene, bitumen, fuel oil etc.',
    },
    {
      icon: Droplet,
      title: 'Water Analysis',
      description: 'Our water analysis services provide critical insights into water quality for industrial, environmental, and domestic applications & uses. It can be potable water, surface water, underground water or waste water. By aligning with international standards, we help clients ensure safety, regulatory compliance, and sustainable water resource quality management.',
    },
    {
      icon: Cloud,
      title: 'Gas Analysis',
      description: 'We deliver precise gas analysis solutions that support industrial operations, environmental safety, and regulatory compliance. Our expertise ensures accurate characterization of gases such as butane, methane etc contributing to improved efficiency, safety, and environmental protection.',
    },
    {
      icon: Gem,
      title: 'Minerals Analysis',
      description: 'Our minerals analysis services provide detailed evaluation of material composition and quality of minerals such as gold, silver, diamond etc, supporting mining operations, resource management, and investment decisions. We emphasize accuracy and consistency to enhance value across the supply chain.',
    },
    {
      icon: Mountain,
      title: 'Soil Analysis',
      description: 'We offer comprehensive soil analysis services to assess quality, contamination levels, and suitability for various applications. We analyze heavy metals in soil, hydrocarbons contaminants in soil etc. Our results support environmental protection, agricultural productivity, and construction planning, all aligned with recognized global global IFC soil contaminationand quality reference Standard time .',
    },
    {
      icon: Leaf,
      title: 'Environmental Monitoring & Analysis',
      description: 'We provide continuous environmental monitoring and analytical services for air, water, soil, meteorological parameters and noise levels. Our approach helps organizations meet environmental regulations, reduce risks, and promote sustainable practices while maintaining operational efficiency in alignment with ISO/IEC 1996 guidelines.',
    },
    {
      icon: Scale,
      title: 'Calibration of Equipment and Instruments',
      description: 'We ensure that instruments and equipment operate at optimal accuracy through professional calibration services. By adhering to international metrology standards, we enhance measurement reliability, reduce uncertainties, and support high-quality outputs across operations in alignment with ISO/IEC 17025 guidelines.',
    },
    {
      icon: FileCheck,
      title: 'Validation and Reporting of Analytical Results',
      description: 'We offer robust validation and reporting services to ensure that all analytical results are accurate, traceable, and compliant with international quality standards. Our reports are designed to support critical decision-making and provide confidence to clients, regulators, and investors.',
    },
    {
      icon: GraduationCap,
      title: 'Recruitment of Academic & professional Internship Students',
      description: 'We support the development of future professionals by recruiting and placing qualified academic and internship students. This initiative helps bridge the gap between theoretical knowledge and practical industry experience.',
    },
    {
      icon: BookOpen,
      title: 'Training of Personnels & Workers',
      description: 'We provide specialized training programs designed to enhance technical competence, safety awareness, and operational efficiency. Our training aligns with industry standards and equips personnels with the skills needed to deliver high-quality performance and outputs.',
    },
    {
      icon: Briefcase,
      title: 'Placement of Workers to Partnering Companies',
      description: 'We facilitate the placement of skilled professionals into partner organizations, ensuring the right talent meets industry demands. This service supports workforce efficiency and contributes to the success of both employers and employees and eventually reduces unemployment rate.',
    },
    {
      icon: ClipboardList,
      title: 'Auditing of Management Personnel',
      description: 'We conduct professional assessments of management systems and personnel performance to identify strengths, gaps, and improvement opportunities. Our audits help our company and other organizations strengthen governance, enhance accountability, and align with best practices.',
    },
    {
      icon: FlaskConical,
      title: 'Setting Up of Standard Petroleum, water, & environmental Laboratories',
      description: 'We provide end-to-end support in establishing petroleum, water & environmental laboratories that meet international standards. Our expertise ensures that facilities are designed for efficiency, accuracy, and compliance, enabling clients to achieve reliable analytical results.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Proposals to Potential Investors',
      description: 'We develop well-structured and data-driven investment proposals that highlight opportunities, risks, and expected returns. Our approach provides investors with confidence and clarity, supporting informed decision-making and sustainable investments.',
    },
    {
      icon: Settings,
      title: 'Routine Works and Travels',
      description: 'We offer flexible support services, including routine operational tasks and field assignments, ensuring continuity and efficiency in client operations. Our team is equipped to operate across diverse environments while maintaining high standards of professionalism and reliability.',
    }
  ];

  return (
    <div>
       <section className="relative h-[65vh] flex items-center justify-center overflow-hidden animate-water-ripple">
         <div className="absolute inset-0">
           <img loading="lazy"
             src="https://images.unsplash.com/photo-1581093449818-2655b2467fd6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400"
             alt="person in purple long sleeve shirt and white pants sitting on gray and black digital device"
             className="w-full h-full object-cover animate-water-wave"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/95"></div>
         </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 font-bold tracking-tight">Our Services</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
              At PETAC Consulting SARL, we deliver a comprehensive range of specialized services designed to support individuals, private industries and state owned companies in achieving operational excellence, regulatory compliance, and sustainable growth. Our approach integrates globally recognized standards, advanced technical expertise, and a commitment to accuracy and reliability.
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
                 <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-sm">
                   <service.icon className="text-accent group-hover:text-white transition-colors duration-500 animate-water-drop" size={32} />
                 </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
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
