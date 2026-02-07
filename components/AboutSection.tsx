"use client";

import { motion } from "framer-motion";
import { Eye, Target, Zap, RefreshCw } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Vision",
    description: "See the full system, understand the context",
    color: "text-barca-blue",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Execute with clarity and intention",
    color: "text-barca-gold",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Move fast, iterate, improve continuously",
    color: "text-tech-cyan",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "Learn, adjust, optimize in real-time",
    color: "text-barca-red",
  },
];

const decisionFramework = [
  { label: "Impact", level: "high" },
  { label: "Scalability", level: "high" },
  { label: "Innovation", level: "medium" },
  { label: "Reliability", level: "high" },
  { label: "Speed", level: "medium" },
  { label: "Clarity", level: "high" },
];

const visualThinkingImages = [
  {
    src: "/assets/photos/photo1.png",
    alt: "Visual thinking - Framing under constraint",
    title: "Framing under constraint",
    context: "Structural boundaries • Limited visibility",
  },
  {
    src: "/assets/photos/photo2.png",
    alt: "Visual thinking - Anticipation over action",
    title: "Anticipation over action",
    context: "Stillness • Context • Timing",
  },
  {
    src: "/assets/photos/photo3.jpeg",
    alt: "Visual thinking - Flow through constraints",
    title: "Flow through constraints",
    context: "Light • Direction • Bottlenecks",
  },
  {
    src: "/assets/photos/photo4.png",
    alt: "Visual thinking - Signal vs noise",
    title: "Signal vs noise",
    context: "Layered inputs • Context awareness",
  },
  {
    src: "/assets/photos/photo5.png",
    alt: "Visual thinking - Multi-scale perspective",
    title: "Multi-scale perspective",
    context: "Local context • Distant systems",
  },
  {
    src: "/assets/photos/photo6.png",
    alt: "Visual thinking - Pattern recognition",
    title: "Pattern recognition",
    context: "Repetition • Variation • Structure",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-barca-gold font-mono text-sm">// PROFILE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-barca-gradient">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Anchor quote */}
              <div className="relative p-6 rounded-2xl bg-background-card border border-barca-gold/30">
                <div className="absolute top-0 left-0 w-1 h-full bg-barca-gradient rounded-l-2xl" />
                <p className="text-xl lg:text-2xl font-semibold text-white leading-relaxed pl-4">
                  I don't chase models — I design systems that make reliable decisions under real constraints.
                </p>
              </div>

              {/* Introduction */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I think like a playmaker: see the field, understand the system, execute with precision. 
                  My approach is rooted in clarity — identify the problem, design the solution, ship it, iterate.
                </p>
                <p>
                  From training CNNs for fire detection to building LLM-powered applications at MindEdge, 
                  I focus on solutions that work reliably at scale. I've shipped production ML systems, 
                  worked with enterprise teams at Deloitte, and learned AI fundamentals at IBM.
                </p>
                <p className="text-barca-gold font-medium">
                  I'm looking for opportunities to contribute to high-impact ML projects, 
                  work with exceptional teams, and build systems that matter.
                </p>
              </div>
            </motion.div>

            {/* Visual elements */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Core Principles */}
              <div className="relative overflow-hidden rounded-2xl bg-background-card border border-white/10 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-barca-blue/5 via-transparent to-barca-red/5" />
                
                <h3 className="relative text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <span className="text-2xl">⚽</span>
                  <span>Core Principles</span>
                </h3>

                <div className="relative space-y-4">
                  {principles.map((principle, index) => (
                    <motion.div
                      key={principle.title}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-2 rounded-lg bg-background-secondary ${principle.color} transition-colors`}>
                        <principle.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{principle.title}</h4>
                        <p className="text-sm text-gray-400">{principle.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decision-Making Framework */}
              <div className="relative overflow-hidden rounded-2xl bg-background-card border border-white/10 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-barca-gold/5 via-transparent to-barca-blue/5" />
                
                <h3 className="relative text-xl font-bold text-white mb-6">
                  Decision-Making Framework
                </h3>

                <div className="relative grid grid-cols-2 gap-3">
                  {decisionFramework.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className={`p-4 rounded-xl text-center font-semibold transition-all ${
                        item.level === "high"
                          ? "bg-barca-blue/20 border-2 border-barca-blue/40 text-barca-gold"
                          : "bg-background-secondary border border-white/5 text-gray-400"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="relative flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded bg-barca-blue/20 border border-barca-blue/40" />
                    <span>High Priority</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded bg-background-secondary border border-white/5" />
                    <span>Balanced</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Visual Thinking Section */}
        <motion.div
          className="max-w-6xl mx-auto mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-barca-gold font-mono text-sm">// VISUAL THINKING</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-barca-gradient">
                Seeing the System
              </span>
            </h3>
            
            {/* Intro text */}
            <div className="max-w-3xl mx-auto space-y-3 text-gray-300">
              <p className="text-xl font-semibold text-white">
                Before building systems, I train how I see them.
              </p>
              <p>
                Photography is where I practice attention, framing, and timing — the same skills I apply when 
                designing machine learning pipelines and decision systems.
              </p>
              <p>
                I look for patterns, constraints, and moments where complexity resolves into clarity.
              </p>
              <p className="text-sm text-barca-gold italic">
                A curated selection — not a gallery.
              </p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualThinkingImages.map((image, index) => (
              <motion.div
                key={image.title}
                className="group relative overflow-hidden rounded-2xl bg-background-card border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      image.src.includes('photo5') ? 'object-[center_30%]' : ''
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-bold mb-2 text-barca-gold">
                        {image.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {image.context}
                      </p>
                    </div>
                  </div>
                  
                  {/* Barcelona accent corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-barca-gradient opacity-20 blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background decoration - subtle football */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-barca-gold/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-barca-blue/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
