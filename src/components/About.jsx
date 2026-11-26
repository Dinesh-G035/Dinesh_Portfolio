import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaLaptopCode, FaLayerGroup, FaServer, FaPaintBrush,
} from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';

/* ── Smooth 60fps Animated Counter ──────────────────────────── */
const AnimatedNumber = ({ value, suffix, duration = 2.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out quad formula for natural deceleration
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

/* ── Services data ───────────────────────────────────────────── */
const services = [
  {
    icon: FaLayerGroup,
    title: 'Full Stack Development',
    desc: 'Building scalable applications using the MERN stack with clean architecture and RESTful APIs.',
  },
  {
    icon: FaLaptopCode,
    title: 'Website Development',
    desc: 'Building responsive, performant websites using React and Tailwind CSS with modern design patterns.',
  },
  {
    icon: FaJava,
    title: 'Java Development',
    desc: 'Developing object-oriented Java applications and backend services with Spring Boot, REST APIs, and relational databases.',
  },
  {
    icon: FaServer,
    title: 'Backend API Development',
    desc: 'Creating secure REST APIs with JWT authentication, middleware, and robust error handling.',
  },

  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    desc: 'Crafting wireframes, responsive layouts, and polished prototypes that delight users.',
  },
];

const About = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="pt-22 bg-[#0B1120] font-['Poppins']">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* ═══════════════ ABOUT ME ═══════════════ */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center mb-20">
          {/* Left – illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[#F97316]/5 blur-[60px]" />
              <div className="relative glass-card rounded-2xl p-8 md:p-10 w-100">
                {/* Coding illustration placeholder */}
                <div className="flex flex-col items-center justify-center gap-4 text-[#94A3B8]">
                  <div className="text-6xl">💻</div>
                  <div className="font-mono text-[#F97316]/70 text-center leading-relaxed">
                    <span className="text-[#94A3B8]">{'const '}</span>
                    <span className="text-[#61DAFB]">developer</span>
                    <span className="text-[#94A3B8]">{' = {'}</span>
                    <br />
                    <span className="ml-4 text-[#98C379]">&nbsp;&nbsp;name</span>
                    <span className="text-[#94A3B8]">: </span>
                    <span className="text-[#CE9178]">"Dinesh G"</span>,
                    <br />
                    <span className="ml-4 text-[#98C379]">&nbsp;&nbsp;role</span>
                    <span className="text-[#94A3B8]">: </span>
                    <span className="text-[#CE9178]">"Full Stack Developer"</span>,
                    <br />
                    <span className="ml-4 text-[#98C379]">&nbsp;&nbsp;interest</span>
                    <span className="text-[#94A3B8]">: </span>
                    <span className="text-[#CE9178]">"Problem Solving"</span>,
                    <br />
                    <span className="text-[#94A3B8]">{'};'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="inline-block relative text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-transparent rounded-full" />
            </h2>
            <p className="text-[#CBD5E1] leading-relaxed mb-4 text-justify">
              I am currently pursuing a Bachelor of Engineering in Computer Science and 
              Engineering. I enjoy developing modern full-stack web applications, solving 
              algorithmic problems, and continuously improving my technical skills.
            </p>
            <p className="text-[#CBD5E1] leading-relaxed text-justify">
              My interests include Web development and UI/UX design. I love learning new technologies and transforming 
              ideas into real world software that makes a difference.
            </p>
          </motion.div>
        </div>

        {/* ═══════════════ SERVICES ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-5">
            What I <span className="gradient-text">Do</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card glass-card-hover rounded-2xl p-6 group cursor-default"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] transition-colors group-hover:bg-[#F97316] group-hover:text-white">
                  <service.icon className="text-2xl" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-white">{service.title}</h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
