'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amaka Okafor',
    role: 'Frontend Developer',
    quote: 'DePlug helped me land 2 freelance gigs in just 3 weeks. It’s intuitive and powerful.',
  },
  {
    name: 'Chidi Nwosu',
    role: 'Creative Director',
    quote: 'I finally have a platform that understands how to showcase creative work the right way.',
  },
  {
    name: 'Sarah Williams',
    role: 'Hiring Manager at TechLift',
    quote: 'Our hiring process got faster and better. DePlug gives us access to real, verified talent.',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Trusted by Creatives, Developers, and Hiring Teams
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hear what our users are saying about how DePlug helped them grow, hire, and collaborate.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md text-left transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
