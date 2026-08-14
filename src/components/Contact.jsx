import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle,
} from 'react-icons/fa';

/* ── Contact info items ──────────────────────────────────────── */
const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'dinesh@example.com', href: 'mailto:dinesh@example.com' },
  { icon: FaPhone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Tamil Nadu, India', href: null },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/dinesh', href: 'https://github.com' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/dinesh', href: 'https://linkedin.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const inputClasses = (field) =>
    `w-full rounded-xl bg-[#0B1120] border ${
      errors[field] ? 'border-red-500' : 'border-[rgba(255,255,255,.08)]'
    } px-4 py-3 text-sm text-white placeholder-[#94A3B8] outline-none transition-all focus:border-[#F97316] focus:shadow-[0_0_15px_rgba(249,115,22,.15)]`;

  return (
    <section id="contact" className="pt-10 pb-20 bg-[#0B1120] font-['Poppins']">
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
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-transparent rounded-full" />
          </h2>
          <p className="text-[#CBD5E1] text-lg">Have a project in mind? Let's talk.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* ═══════════════ LEFT – Info ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing Together</span>
            </h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-8">
              I'm always interested in collaborating on exciting projects, internships, 
              freelance work, or software development opportunities. Feel free to reach out 
              anytime.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316]">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8]">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white hover:text-[#F97316] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-white">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════ RIGHT – Form ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <FaCheckCircle className="text-5xl text-[#10B981] mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-[#94A3B8]">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses('name')}
                      aria-label="Your Name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses('email')}
                      aria-label="Your Email"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses('subject')}
                      aria-label="Subject"
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses('message')} resize-none`}
                      aria-label="Your Message"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="btn-primary w-full"
                  >
                    <FaPaperPlane className="text-sm" /> Send Message
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
