'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to take your talent or team to the next level?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Whether you are building a dream career or a dream team—DePlug makes it effortless.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
            >
              Join as Talent
            </motion.button>
          </Link>

          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Hire Creatives & Developers
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
