'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function RoleSelection() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-screen flex flex-col md:flex-row"
    >
      {/* Creative Side */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1 h-[50vh] md:h-auto bg-gradient-to-br from-pink-500 to-purple-600 text-white flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:brightness-110"
        onClick={() => router.push('/register/creative')}
      >
        <SparklesIcon className="h-16 w-16 mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">I'm a Creative</h2>
        <p className="text-base md:text-lg max-w-xs text-center px-4">
          Showcase your portfolio, get discovered by hiring managers, and grow your career.
        </p>
      </motion.div>

      {/* Hiring Manager Side */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1 h-[50vh] md:h-auto bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:brightness-110"
        onClick={() => router.push('/register/hiring-manager')}
      >
        <BriefcaseIcon className="h-16 w-16 mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">I'm an  Employeer</h2>
        <p className="text-base md:text-lg max-w-xs text-center px-4">
          Discover top talents, manage hiring, and build your dream team easily.
        </p>
      </motion.div>
    </motion.div>
  );
}
