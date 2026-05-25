import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Truck } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export function SamplingTransportation() {
  useSEO('Sampling and Transportation of Products', 'Precision sampling and product handling services preserving material integrity from source to laboratory.');

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
            <Truck className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Sampling and Transportation of Products</h1>
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
              Our sampling and product handling services are carried out with precision and professionalism to preserve the integrity of materials from source to laboratory. We ensure that all processes align with international best practices, enabling clients to rely on representative samples for accurate evaluation and decision-making.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We utilize specialized containers and preservation techniques that maintain sample integrity during transport, ensuring accurate analysis results that reflect true product conditions.
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