'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const features = [
  {
    title: 'Built-in Talent Showcase',
    deplug: true,
    jobBoard: false,
    portfolio: false,
  },
  {
    title: 'Easy Profile Management',
    deplug: true,
    jobBoard: false,
    portfolio: false,
  },
  {
    title: 'Real-Time Chat & Collaboration',
    deplug: true,
    jobBoard: false,
    portfolio: false,
  },
  {
    title: 'Verified Work History',
    deplug: true,
    jobBoard: true,
    portfolio: false,
  },
  {
    title: 'One Link Portfolio',
    deplug: true,
    jobBoard: false,
    portfolio: true,
  },
  {
    title: 'Community & Growth Tasks',
    deplug: true,
    jobBoard: false,
    portfolio: false,
  },
];

export default function FeatureComparison() {
  return (
    <section className="bg-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800">
          Why Choose DePlug?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          See how we stack up against traditional platforms.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 font-semibold text-gray-700">Features</th>
                <th className="py-3 px-4 font-semibold text-blue-600">DePlug</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Job Boards</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Personal Portfolio</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className={`border-t ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="py-3 px-4">{feature.title}</td>
                  <td className="py-3 px-4">
                    {feature.deplug ? (
                      <CheckCircle2 className="text-green-500" />
                    ) : (
                      <XCircle className="text-red-400" />
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {feature.jobBoard ? (
                      <CheckCircle2 className="text-green-500" />
                    ) : (
                      <XCircle className="text-red-400" />
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {feature.portfolio ? (
                      <CheckCircle2 className="text-green-500" />
                    ) : (
                      <XCircle className="text-red-400" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
