"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

const projects = [
  {
    title: "AI SaaS Platform",
    category: "Machine Learning",
    description: "Production-ready AI platform with NLP, computer vision, and automated workflows. Handles 10K+ requests/day with 99.9% uptime.",
    tech: ["PyTorch", "FastAPI", "React", "PostgreSQL", "Docker", "AWS"],
    highlights: [
      "Reduced API latency by 60% through optimization",
      "Implemented background job processing with retries",
      "Built comprehensive testing and monitoring systems",
    ],
    github: "#",
    demo: "#",
    color: "barca-blue",
  },
  {
    title: "Real-time Analytics Dashboard",
    category: "Data Engineering",
    description: "Scalable data pipeline processing millions of events daily with real-time visualization and alerting capabilities.",
    tech: ["Apache Kafka", "Redis", "TimescaleDB", "Next.js", "D3.js"],
    highlights: [
      "Processes 2M+ events/day with < 100ms latency",
      "Automated anomaly detection with ML models",
      "Custom visualization library for time-series data",
    ],
    github: "#",
    demo: "#",
    color: "barca-gold",
  },
  {
    title: "ML Model Optimization Suite",
    category: "Deep Learning",
    description: "Tools and frameworks for optimizing ML models for production deployment, reducing inference time and resource usage.",
    tech: ["TensorFlow", "ONNX", "Kubernetes", "Python", "MLflow"],
    highlights: [
      "Achieved 5x faster inference through quantization",
      "Reduced model size by 80% without accuracy loss",
      "Automated hyperparameter tuning pipeline",
    ],
    github: "#",
    demo: "#",
    color: "barca-red",
  },
];

export default function ProjectsSection() {
  const [inView, setInView] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-barca-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production systems showcasing reliability, performance, and engineering judgment
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-background-card border border-white/10 hover:border-barca-gold/50 transition-all duration-300">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-barca-blue/5 via-transparent to-barca-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Category badge */}
                      <div className="inline-block px-3 py-1 rounded-full bg-barca-gold/10 border border-barca-gold/20">
                        <span className="text-sm text-barca-gold font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-lg bg-background-secondary border border-white/5 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable highlights */}
                      <motion.div
                        initial={false}
                        animate={{ height: expandedProject === index ? "auto" : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-2 border-t border-white/10 mt-4">
                          {project.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                expandedProject === index
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="text-barca-gold mt-1">✓</span>
                              <span className="text-gray-400 text-sm">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Toggle button */}
                      <button
                        onClick={() =>
                          setExpandedProject(expandedProject === index ? null : index)
                        }
                        className="flex items-center space-x-2 text-barca-gold hover:text-barca-gold/80 transition-colors"
                      >
                        <span className="text-sm font-medium">
                          {expandedProject === index ? "Show less" : "View highlights"}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedProject === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="flex lg:flex-col gap-3">
                      <motion.a
                        href={project.github}
                        className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-background-secondary border border-white/10 hover:border-barca-gold/50 text-gray-300 hover:text-barca-gold transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-barca-gradient text-white hover:shadow-lg hover:shadow-barca-blue/30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Accent line */}
                <div className={`h-1 bg-${project.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl border-2 border-barca-gold text-barca-gold font-semibold hover:bg-barca-gold/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Resume Section */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-background-card border border-white/10 hover:border-barca-gold/50 transition-all duration-300 group">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-barca-blue/10 via-transparent to-barca-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative p-8">
              {/* Terminal header */}
              <div className="mb-6 font-mono text-sm text-barca-gold">
                <span className="text-gray-500">$</span> system.export --format=pdf --artifact=cv
              </div>

              {/* Resume info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-barca-gradient flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Ankan_Paul_CV.pdf</h3>
                        <p className="text-sm text-gray-400">Web Dev | ML Engineer | Data Analyst</p>
                      </div>
                    </div>
                    <div className="pl-15">
                      <span className="text-xs text-gray-500">Updated: Feb 2026</span>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <motion.a
                    href="/Ankan_Paul_CV.pdf"
                    download
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-barca-gradient text-white font-semibold hover:shadow-lg hover:shadow-barca-blue/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download</span>
                  </motion.a>
                  <motion.a
                    href="/Ankan_Paul_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-background-secondary border border-white/10 hover:border-barca-gold/50 text-gray-300 hover:text-barca-gold transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Preview</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Barcelona accent */}
            <div className="h-1 bg-barca-gradient" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
