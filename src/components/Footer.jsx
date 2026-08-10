import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] border-t border-[rgba(255,255,255,.08)] py-12 font-['Poppins']">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer select-none text-2xl font-bold text-white"
          >
            &lt;<span className="gradient-text">Dinesh G</span> /&gt;
          </Link>

          {/* Quick Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#CBD5E1]">
            {[
              { name: 'Home', to: 'hero' },
              { name: 'About', to: 'about' },
              { name: 'Projects', to: 'projects' },
              { name: 'Contact', to: 'contact' },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  offset={-80}
                  duration={600}
                  className="cursor-pointer transition-colors hover:text-[#F97316]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: SiLeetcode, href: 'https://leetcode.com', label: 'LeetCode' },
              { Icon: FaEnvelope, href: 'mailto:dinesh@example.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,.08)] text-[#94A3B8] transition-all hover:border-[#F97316] hover:text-[#F97316]"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(255,255,255,.08)] mb-8" />

        {/* Copyright */}
        <div className="text-center text-xs text-[#94A3B8]">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026 Dinesh G. Designed and Developed with{' '}
            <FaHeart className="text-red-500 inline text-xs mx-0.5" /> using React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
