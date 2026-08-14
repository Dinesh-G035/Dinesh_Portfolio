import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import resumePdf from '../assets/Dinesh_G_Resume.pdf';

/* ── Navigation links ────────────────────────────────────────── */
const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  /* Detect scroll to toggle backdrop blur */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/80 backdrop-blur-xl shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
        {/* ── Logo ── */}
        <Link
          to="hero"
          smooth
          duration={600}
          className="cursor-pointer select-none text-xl font-bold text-white"
          aria-label="Go to top"
        >
          &lt;<span className="gradient-text">Dinesh G</span> /&gt;
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={600}
                onSetActive={() => setActiveLink(link.to)}
                className="group relative cursor-pointer text-sm font-medium text-[#CBD5E1] transition-colors hover:text-white"
                aria-label={link.name}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#F97316] transition-all duration-300 ${
                    activeLink === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
          {/* ── Resume button ── */}
          <li>
            <a
              href={resumePdf}
              download="Dinesh_G_Resume.pdf"
              className="btn-secondary text-sm !py-2 !px-5"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#0B1120]/95 backdrop-blur-xl border-t border-[rgba(255,255,255,.08)] md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    offset={-80}
                    duration={600}
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer text-base font-medium text-[#CBD5E1] transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={resumePdf} download="Dinesh_G_Resume.pdf" className="btn-secondary text-sm !py-2 !px-5">
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
