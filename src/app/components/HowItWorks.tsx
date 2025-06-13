'use client';

import { motion } from 'framer-motion';
import { FaUserCircle, FaBriefcase, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserCircle className="text-blue-600 text-4xl mb-4" />,
    title: 'Create Your Profile',
    description: 'Tell us who you are—your skills, background, and what you’re passionate about.',
  },
  {
    icon: <FaBriefcase className="text-blue-600 text-4xl mb-4" />,
    title: 'Showcase Your Work',
    description: 'Add projects, upload your CV, and let your work speak for itself.',
  },
  {
    icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
    title: 'Connect and Collaborate',
    description: 'Match with opportunities or talent. Start building your next big thing.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How DePlug Works
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Whether you are a creative, developer, or hiring manager, getting started is easy.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
