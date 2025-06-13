'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen px-6 md:px-20 py-20 text-gray-800">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About DePlug</h1>
        <p className="text-lg text-gray-600">
          DePlug is where top talents and visionary companies connect, collaborate, and grow together.
        </p>
      </motion.section>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is simple: empower individuals by giving them a platform to showcase their work,
          connect with opportunities, and thrive in an ever-evolving digital economy.
        </p>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Core Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Transparency and trust in every interaction.</li>
          <li>Innovation that drives results.</li>
          <li>Celebrating individuality and creativity.</li>
          <li>Building communities through collaboration.</li>
        </ul>
      </motion.section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Meet the Team</h2>
        <p className="text-gray-700 mb-6">
          DePlug was built by a diverse team of technologists, creatives, and dreamers who believe in unlocking
          opportunities for all. (You can add real team profiles here later.)
        </p>
        {/* Optional team grid in future */}
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-blue-50 p-10 rounded-xl shadow-md mt-20 py-8 text-center"
      >
        <h3 className="text-xl font-semibold mb-2 text-blue-600">Ready to make your mark?</h3>
        <p className="text-gray-700 mb-4">Join DePlug today and start building your future.</p>
        <a
          href="/register"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </motion.section>
    </main>
  );
};

export default AboutPage;
