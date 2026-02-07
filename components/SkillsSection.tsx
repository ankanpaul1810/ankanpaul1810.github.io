"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Code2,
  Database,
  LineChart,
  Cloud,
  GitBranch,
  Zap,
  Shield,
} from "lucide-react";

const skills = [
  {
    category: "Machine Learning",
    icon: Brain,
    color: "barca-blue",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "Computer Vision", "NLP"],
  },
  {
    category: "Data Engineering",
    icon: Database,
    color: "barca-gold",
    items: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Airflow", "ETL Pipelines"],
  },
  {
    category: "Development",
    icon: Code2,
    color: "tech-cyan",
    items: ["Python", "TypeScript", "React", "Node.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "barca-red",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
  },
  {
    category: "Analytics",
    icon: LineChart,
    color: "tech-purple",
    items: ["Pandas", "NumPy", "Tableau", "Power BI", "Statistical Analysis", "A/B Testing"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    color: "tech-green",
    items: ["Git", "GitHub", "GitLab", "Code Review", "Branching Strategies"],
  },
];

export default function SkillsSection() {
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
    <section
      id="skills"
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
              Capabilities
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building production-ready ML systems
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-background-card border border-white/10 hover:border-barca-gold/50 transition-all duration-300 overflow-hidden">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-barca-blue/5 via-transparent to-barca-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="relative flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-xl bg-${skill.color}/10 border border-${skill.color}/20`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="relative flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background-secondary border border-white/5 text-gray-300 hover:border-barca-gold/30 hover:text-barca-gold transition-all"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* Subtle corner accent (Barcelona stripes inspired) */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-barca-blue via-barca-red to-transparent rounded-bl-full" />
                </div>
              </div>

              {/* Floating football emoji on some cards */}
              {index % 3 === 0 && (
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  ⚽
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom accent - pitch line */}
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
