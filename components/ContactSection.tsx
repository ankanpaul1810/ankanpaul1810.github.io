"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ankanpaul1810", label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ankan-paul-00144a24b/", label: "LinkedIn", color: "hover:text-barca-blue" },
  { icon: Twitter, href: "https://x.com/Ankanp1810", label: "Twitter", color: "hover:text-tech-cyan" },
  { icon: Mail, href: "mailto:ankanpaul577@gmail.com", label: "Email", color: "hover:text-barca-gold" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-barca-gradient">
                Let's Connect
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Open to opportunities, collaborations, and conversations about ML engineering and data systems
            </p>
          </motion.div>

          {/* Contact card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-background-card border border-white/10 p-8 lg:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-barca-blue/10 via-transparent to-barca-red/10" />

            {/* Content */}
            <div className="relative space-y-8">
              {/* Email */}
              <motion.div
                className="flex items-center justify-center space-x-3 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-6 h-6 text-barca-gold" />
                <a
                  href="mailto:ankanpaul577@gmail.com"
                  className="text-2xl lg:text-3xl font-semibold text-white hover:text-barca-gold transition-colors"
                >
                  ankanpaul577@gmail.com
                </a>
              </motion.div>

              {/* Location */}
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Open to remote and on-site opportunities</span>
                {/* <span className="text-barca-gold">⚽</span>
                <span>Barcelona timezone friendly</span> */}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Social links */}
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-background-secondary border border-white/10 text-gray-400 ${social.color} transition-all`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="text-center pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="mailto:ankanpaul577@gmail.com"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-barca-gradient rounded-xl text-white font-semibold shadow-lg shadow-barca-blue/30 hover:shadow-barca-blue/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Send me a message</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-barca-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-barca-blue/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          {/* <span>Built with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-barca-red"
          >
            ❤️
          </motion.span>
          <span>using Next.js & Framer Motion</span>
          <span className="text-barca-gold">⚽</span> */}
          <span className="text-barca-blue">Més que un portfolio</span>
        </div>
        {/* <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Ankan Paul</span>
          <span>•</span>
          <span>All rights reserved</span>
        </div> */}

        {/* Barcelona-inspired footer accent */}
        <motion.div
          className="mt-8 h-2 max-w-md mx-auto rounded-full overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="h-full flex">
            <div className="flex-1 bg-barca-blue" />
            <div className="flex-1 bg-barca-red" />
            <div className="flex-1 bg-barca-gold" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
