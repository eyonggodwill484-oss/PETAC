/// <reference types="vite/client" />
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// ─────────────────────────────────────────────────────────────────────────────
// WEB3FORMS SETUP
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = '0babe0b5-07fa-4328-8c73-eddefd5d342d';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  useSEO('Contact Us', 'Get in touch with PETAC Consulting SARL for technical and consulting needs in petroleum and environmental monitoring.');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "PETAC Consulting Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.message || 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1596980786765-775174984ec9?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=60&w=1400"
            alt="Industrial oil refinery complex under a clear blue sky"
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
            <h1 className="text-5xl md:text-6xl mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, quotes, or consultations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-border p-6 rounded-xl text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={28} />
              </div>
              <h3 className="mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">Call us directly</p>
              <a href="tel:+237" className="text-accent hover:underline">
                +237 XXX XXX XXX
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-6 rounded-xl text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent" size={28} />
              </div>
              <h3 className="mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">Send us an email</p>
              <a href="mailto:contact@petacconsulting.com" className="text-accent hover:underline">
                contact@petacconsulting.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-6 rounded-xl text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={28} />
              </div>
              <h3 className="mb-2">Location</h3>
              <p className="text-muted-foreground mb-2">Visit our office</p>
              <p className="text-accent">Douala - Ndogbong, Cameroon</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto bg-card border border-border/50 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl mb-4 font-bold">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible. Our team is ready to assist you with your technical and consulting needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 rounded-lg flex items-center gap-3">
                    <CheckCircle className="shrink-0" size={20} />
                    <p>Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg flex items-center gap-3">
                    <AlertCircle className="shrink-0" size={20} />
                    <p>{errorMsg}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block mb-2">Full Name <span className="text-destructive">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-2">Email Address <span className="text-destructive">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message <span className="text-destructive">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-accent text-accent-foreground text-lg font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 gap-3 disabled:opacity-70 disabled:hover:scale-100 shadow-xl hover:shadow-accent/25"
                  >
                    {status === 'loading' ? (
                      <>Sending <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need a quote, have questions about our services, or want to discuss a project, we're here to help. Contact us today and experience the PETAC difference.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
