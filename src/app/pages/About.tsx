import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import image from ''

export function About() {
  useSEO('About Us', 'Learn more about PETAC Consulting SARL, our core values, mission, and expertise in environmental and petroleum services.');

  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparency and ethical practices in all our operations',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Adherence to international standards and best practices',
    },
    {
      icon: TrendingUp,
      title: 'Reliability',
      description: 'Consistent and accurate results you can depend on',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuous improvement and modern techniques',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Tailored solutions that meet your specific needs',
    },
  ];

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1758573467057-99f26217b2ae?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400"
            alt="Man working at a microscope in a laboratory"
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
            <h1 className="text-5xl md:text-6xl mb-4">About PETAC Consulting SARL</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in petroleum analysis, water analysis, environmental monitoring,calibration and quality control consulting
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  PETAC Consulting SARL is a dynamic and forward-thinking consulting  and service providing  company established in January 2026 and headquartered in Douala – Ndogbong, Cameroon. We specialize in delivering high-quality technical and consulting services in the fields of petroleum, water, environmental monitoring analysis, calibration, maintenance and quality control.
                </p>
                <p>
                  At PETAC Consulting, we are committed to providing accurate, reliable, and timely solutions that support industries, organizations, and institutions in maintaining compliance with international standards while optimizing operational performance.
                </p>
                <p>
                  Our expertise covers inspection, sampling, transportation, laboratory testing, calibration and data analysis of petroleum products, water, soil, air, meteorological parameters, and Maintainance. We apply rigorous methodologies aligned with globally recognized standards such as ISO 17025 and ISO 1996 to ensure precision and credibility in every project.
                </p>
                <p>
                  Driven by a passion for excellence, our team combines technical competence with modern technologies to deliver results that help clients and investors make informed decisions, manage risks, and improve quality assurance systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Replace the src below with the actual image once added to your project */}
              <img loading="lazy"
                src="/about-image.jpg"
                alt="PETAC Consulting Representative"
                className="rounded-lg w-full h-[500px] object-cover shadow-xl"
                onError={(e) => {
                  // Fallback in case the image hasn't been placed yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1766297248047-6ec337099802?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800";
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <p className="text-5xl mb-1">2026</p>
                <p className="text-sm">Established</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-primary text-primary-foreground p-8 rounded-xl"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Target className="text-accent-foreground" size={28} />
              </div>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="text-lg text-primary-foreground/90">
                To provide dependable and high-quality consulting, inspection, sampling, and analytical services that enhance environmental safety, product integrity, and operational efficiency for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-secondary text-secondary-foreground p-8 rounded-xl"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-secondary" size={28} />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-lg text-secondary-foreground/90">
                To become a leading reference in petroleum, water, calibration, and environmental monitoring consulting services across Cameroon and the African region, recognized for professionalism, innovation, and integrity.
              </p>
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
            <h2 className="text-4xl md:text-5xl mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose PETAC</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-6 rounded-xl"
            >
              <div className="text-accent text-4xl mb-3">01</div>
              <h3 className="mb-2">Expertise You Can Trust</h3>
              <p className="text-muted-foreground">
                Specialized knowledge in petroleum, water, calibration, and environmental monitoring
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl"
            >
              <div className="text-accent text-4xl mb-3">02</div>
              <h3 className="mb-2">International Standards</h3>
              <p className="text-muted-foreground">
                Commitment to ISO 17025 and ISO 1996 compliance in all our operations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl"
            >
              <div className="text-accent text-4xl mb-3">03</div>
              <h3 className="mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Fast turnaround times without compromising on accuracy and quality
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl"
            >
              <div className="text-accent text-4xl mb-3">04</div>
              <h3 className="mb-2">Client-Focused Approach</h3>
              <p className="text-muted-foreground">
                Personalized solutions tailored to your specific requirements and challenges
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl"
            >
              <div className="text-accent text-4xl mb-3">05</div>
              <h3 className="mb-2">Strategic Location</h3>
              <p className="text-muted-foreground">
                Based in Douala for efficient service delivery across Cameroon and beyond
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-xl"
            >
              <div className="text-accent text-4xl mb-3">06</div>
              <h3 className="mb-2">Modern Technology</h3>
              <p className="text-muted-foreground">
                Latest equipment and methodologies for precise and reliable results
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1737874960921-d1205a4f55da?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800"
                alt="Two men wearing safety vests and hard hats"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <p className="text-white p-6">Field Operations</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1758573466865-e0a3e20204e0?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800"
                alt="Scientist working with laboratory equipment and glassware"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <p className="text-white p-6">Laboratory Testing</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800"
                alt="A factory with a lot of red and white pipes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <p className="text-white p-6">Industrial Inspection</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
