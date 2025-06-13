'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center  px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
    Connect. Collaborate. Create with <span className="text-blue-600"> DePlug 
      
      {/* <lord-icon
  src="https://cdn.lordicon.com/pbamwmcj.json"
  trigger="loop"
  style={{ width: "60px", height: "60px", display: "inline-block", marginLeft: "8px" }}
/> */}

</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          A platform where developers, creatives, and hiring managers come together to build the future. Start your journey today.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mt-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
             whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl font-medium hover:bg-blue-50 transition"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
