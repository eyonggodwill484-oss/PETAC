import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Droplet, Cloud, Gem, Mountain, Leaf, Scale, FileCheck, GraduationCap, BookOpen, Briefcase } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export function WaterAnalysis() {
  useSEO('Water Analysis', 'Water quality analysis for potable, surface, underground and wastewater applications with international standards compliance.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Droplet className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Water Analysis</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our water analysis services provide critical insights into water quality for industrial, environmental, and domestic applications. We analyze potable water, surface water, underground water and wastewater.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our testing aligns with international standards to ensure safety, regulatory compliance, and sustainable water resource quality management.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function GasAnalysis() {
  useSEO('Gas Analysis', 'Precise gas analysis solutions for industrial operations, environmental safety and regulatory compliance.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Cloud className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Gas Analysis</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We deliver precise gas analysis solutions that support industrial operations, environmental safety, and regulatory compliance. Our expertise ensures accurate characterization of gases such as butane, methane and others.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This contributes to improved efficiency, safety, and environmental protection across various industrial applications.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function MineralsAnalysis() {
  useSEO('Minerals Analysis', 'Detailed evaluation of material composition and quality for gold, silver, diamond and other minerals.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Gem className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Minerals Analysis</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our minerals analysis services provide detailed evaluation of material composition and quality for minerals such as gold, silver, diamond and others, supporting mining operations, resource management, and investment decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We emphasize accuracy and consistency to enhance value across the supply chain while maintaining internationally recognized analytical standards.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function SoilAnalysis() {
  useSEO('Soil Analysis', 'Comprehensive soil analysis for quality assessment, contamination levels, and suitability for various applications.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Mountain className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Soil Analysis</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We offer comprehensive soil analysis services to assess quality, contamination levels, and suitability for various applications. We analyze heavy metals in soil, hydrocarbons contaminants in soil and other parameters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our results support environmental protection, agricultural productivity, and construction planning, aligned with recognized global IFC soil contamination and quality reference standards.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function EnvironmentalMonitoring() {
  useSEO('Environmental Monitoring & Analysis', 'Continuous monitoring and analytical services for air, water, soil, meteorological parameters and noise levels.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Leaf className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Environmental Monitoring & Analysis</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We provide continuous environmental monitoring and analytical services for air, water, soil, meteorological parameters and noise levels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our approach helps organizations meet environmental regulations, reduce risks, and promote sustainable practices while maintaining operational efficiency in alignment with ISO/IEC 1996 guidelines.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function CalibrationServices() {
  useSEO('Calibration of Equipment and Instruments', 'Professional calibration services ensuring instruments operate at optimal accuracy per international metrology standards.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Scale className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Calibration of Equipment and Instruments</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We ensure that instruments and equipment operate at optimal accuracy through professional calibration services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              By adhering to international metrology standards, we enhance measurement reliability, reduce uncertainties, and support high-quality outputs across operations in alignment with ISO/IEC 17025 guidelines.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function ValidationReporting() {
  useSEO('Validation and Reporting of Analytical Results', 'Robust validation and reporting services ensuring accurate, traceable results compliant with international quality standards.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileCheck className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Validation and Reporting of Analytical Results</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We offer robust validation and reporting services to ensure that all analytical results are accurate, traceable, and compliant with international quality standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our reports are designed to support critical decision-making and provide confidence to clients, regulators, and investors.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function InternshipRecruitment() {
  useSEO('Recruitment of Academic & Professional Internship Students', 'Recruitment and placement of qualified academic and internship students bridging theory and industry experience.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Recruitment of Academic & Professional Internship Students</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We support the development of future professionals by recruiting and placing qualified academic and internship students.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This initiative helps bridge the gap between theoretical knowledge and practical industry experience, fostering the next generation of skilled professionals.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function TrainingServices() {
  useSEO('Training of Personnels & Workers', 'Specialized training programs enhancing technical competence, safety awareness and operational efficiency.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Training of Personnels & Workers</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We provide specialized training programs designed to enhance technical competence, safety awareness, and operational efficiency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our training aligns with industry standards and equips personnel with the skills needed to deliver high-quality performance and outputs.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function WorkerPlacement() {
  useSEO('Placement of Workers to Partnering Companies', 'Facilitating skilled professionals placement into partner organizations bridging talent with industry demands.');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Briefcase className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Placement of Workers to Partnering Companies</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We facilitate the placement of skilled professionals into partner organizations, ensuring the right talent meets industry demands.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This service supports workforce efficiency and contributes to the success of both employers and employees, eventually reducing unemployment rate.
            </p>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}