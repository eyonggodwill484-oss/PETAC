import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export function Activities() {
  useSEO('Our Activities', 'Discover the key activities and operations conducted by PETAC Consulting SARL in Cameroon.');

  const activities = [
    {
      title: 'Petroleum Storage Tank Inspection',
      date: 'March 2026',
      location: 'Douala Port, Cameroon',
      image: 'https://images.unsplash.com/photo-1772376920749-afdc99c517f7?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800',
      description: 'Comprehensive inspection and sampling of petroleum storage facilities at Douala Port.',
      category: 'Petroleum',
    },
    {
      title: 'Water Quality Assessment Project',
      date: 'February 2026',
      location: 'Ndogbong, Douala',
      image: 'https://images.unsplash.com/photo-1586018455896-ba31e793edd5?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800',
      description: 'Complete water quality testing for industrial clients including chemical and microbiological analysis.',
      category: 'Environmental',
    },
    {
      title: 'Laboratory Equipment Calibration',
      date: 'February 2026',
      location: 'PETAC Laboratory, Douala',
      image: 'https://images.unsplash.com/photo-1758573466865-e0a3e20204e0?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800',
      description: 'Regular calibration and maintenance of laboratory testing equipment to ensure accuracy.',
      category: 'Laboratory',
    },
    {
      title: 'Industrial Site Environmental Monitoring',
      date: 'January 2026',
      location: 'Industrial Zone, Douala',
      image: 'https://images.unsplash.com/photo-1730584474428-83f3cfc20a73?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800',
      description: 'Air quality and noise level monitoring for industrial facilities to ensure compliance.',
      category: 'Environmental',
    },
    {
      title: 'Fuel Quality Control Testing',
      date: 'January 2026',
      location: 'Multiple Locations',
      image: 'https://images.unsplash.com/photo-1721554146444-379243d27942?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800',
      description: 'On-site fuel quality testing for diesel and gasoline at various distribution points.',
      category: 'Petroleum',
    },
    {
      title: 'Team Training Workshop',
      date: 'January 2026',
      location: 'PETAC HQ, Douala',
      image: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=800',
      description: 'Internal training on latest ISO standards and testing methodologies for our technical team.',
      category: 'Training',
    },
  ];

  const categories = ['All', 'Petroleum', 'Environmental', 'Laboratory', 'Training'];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1737874960921-d1205a4f55da?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400"
            alt="Two men wearing safety vests and hard hats"
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
            <h1 className="text-5xl md:text-6xl mb-4">Our Activities</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Recent projects and operations showcasing our expertise and commitment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img loading="lazy"
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                      {activity.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Committed to Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every project we undertake demonstrates our dedication to quality, precision, and client satisfaction. Our experienced team ensures that all work meets or exceeds international standards.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
