"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Engineer",
    company: "MindEdge Solutions",
    duration: "Nov 2025 – Present",
    location: "On-site • Kolkata",
    type: "Current",
    description:
      "Focused on applied machine learning, developing LLM-powered solutions, OCR systems, and production-grade ML pipelines. Working with TensorFlow, backend integration, and data engineering.",
    tech: ["Machine Learning", "LLMs", "OCR", "TensorFlow", "Data Engineering", "Backend Integration"],
    highlights: [
      "Production ML pipeline deployment",
      "LLM integration and optimization",
      "OCR accuracy improvements",
    ],
    color: "barca-blue",
  },
  {
    title: "Data Analyst",
    company: "Deloitte",
    duration: "Apr 2025 – Jul 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Enterprise-scale data analysis, visualization, and business intelligence. Delivered actionable insights through comprehensive data analysis and strategic reporting.",
    tech: ["Data Analysis", "Visualization", "Business Intelligence", "SQL", "Python"],
    highlights: [
      "Enterprise data visualization dashboards",
      "Business insights and reporting",
    ],
    color: "barca-gold",
  },
  {
    title: "Data Analytics & Generative AI Intern",
    company: "IBM (CSRBOX)",
    duration: "Jan 2024 – Mar 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Foundation in AI and ML concepts. Worked with IBM Watson for model training, NLP applications, and understanding enterprise AI workflows.",
    tech: ["IBM Watson", "AI/ML Fundamentals", "NLP", "Model Training"],
    highlights: [
      "AI/ML foundation building",
      "NLP and model experimentation",
    ],
    color: "barca-red",
  },
];

export default function ExperienceSection() {
  const [inView, setInView] = useState(false);
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
    <section id="experience" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-barca-gold font-mono text-sm">// TIMELINE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-barca-gradient">
              Professional Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building, learning, and shipping at scale
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-barca-blue via-barca-gold to-barca-red opacity-30 transform lg:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline marker */}
                <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4">
                  <div className={`w-4 h-4 rounded-full bg-${exp.color} border-4 border-background shadow-lg shadow-${exp.color}/50`} />
                  {exp.type === "Current" && (
                    <motion.div
                      className={`absolute inset-0 w-4 h-4 rounded-full bg-${exp.color}`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-8 lg:ml-0 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl bg-background-card border border-white/10 hover:border-barca-gold/50 transition-all duration-300 p-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-barca-blue/5 via-transparent to-barca-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Header */}
                    <div className="relative mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-barca-gold font-semibold text-lg">
                            {exp.company}
                          </p>
                        </div>
                        {exp.type === "Current" && (
                          <span className="px-3 py-1 rounded-full bg-tech-green/10 border border-tech-green/20 text-tech-green text-xs font-semibold">
                            Current
                          </span>
                        )}
                        {exp.type === "Internship" && (
                          <span className="px-3 py-1 rounded-full bg-barca-blue/10 border border-barca-blue/20 text-barca-blue text-xs font-semibold">
                            Internship
                          </span>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech stack */}
                    <div className="relative flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-lg bg-background-secondary border border-white/5 text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="relative space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="text-barca-gold mt-0.5">⚡</span>
                          <span className="text-sm text-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-${exp.color}/10 rounded-bl-full opacity-50`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-barca-gold to-transparent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </div>
    </section>
  );
}
