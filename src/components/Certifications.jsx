import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

/* ── Certifications data ─────────────────────────────────────── */
const certifications = [
  {
    title: 'Industry 4.0',
    issuer: 'NPTEL',
    desc: 'Comprehensive course on Industry 4.0 technologies, IoT, smart manufacturing, and digital transformation.',
    color: '#3B82F6',
  },
  {
    title: 'Affective Computing',
    issuer: 'NPTEL',
    desc: 'Study of emotional intelligence in computing, sentiment analysis, and human-computer interaction.',
    color: '#8B5CF6',
  },
  {
    title: 'Java Development',
    issuer: 'Certification',
    desc: 'Advanced Java programming, OOP principles, multithreading, and enterprise application development.',
    color: '#ED8B00',
  },
  {
    title: 'Web Development',
    issuer: 'Certification',
    desc: 'Modern web development with HTML, CSS, JavaScript, responsive design, and front-end frameworks.',
    color: '#10B981',
  },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-[#0B1120] font-['Poppins']">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="inline-block relative text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-transparent rounded-full" />
          </h2>
          <p className="text-[#CBD5E1] text-lg">Professional credentials & courses</p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card glass-card-hover rounded-2xl p-6 group cursor-default"
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
              >
                <FaCertificate className="text-2xl" />
              </div>

              {/* Issuer badge */}
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3"
                style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
              >
                {cert.issuer}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F97316] transition-colors">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
