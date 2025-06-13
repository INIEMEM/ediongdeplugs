'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const talents = [
  {
    name: 'Ada Okafor',
    role: 'Frontend Developer',
    skills: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/in1.jpg',
  },
  {
    name: 'James Arinze',
    role: 'Creative Designer',
    skills: ['Figma', 'Illustrator', 'UX/UI'],
    image: '/images/in.jpg',
  },
  {
    name: 'Fatima Bello',
    role: 'Full Stack Dev',
    skills: ['Node.js', 'Next.js', 'MongoDB'],
    image: '/images/in2.jpg',
  },
];

export default function TopTalent() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Meet Top Talent on DePlug</h2>
        <p className="text-gray-600 mb-10">Explore standout creatives and developers ready to elevate your project.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={talent.image}
                  alt={talent.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{talent.name}</h3>
                  <p className="text-sm text-blue-600">{talent.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {talent.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <Link href="/register">
              
              <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition text-sm">
                View Profile
              </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
