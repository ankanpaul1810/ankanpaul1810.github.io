"use client";

import { motion } from "framer-motion";
import { Code, Database, TrendingUp, Zap } from "lucide-react";

export default function HeroSection() {
  const techStack = [
    { icon: Code, label: "ML Engineering", color: "text-barca-blue" },
    { icon: Database, label: "Data Systems", color: "text-barca-gold" },
    { icon: Zap, label: "AI SaaS", color: "text-tech-cyan" },
    { icon: TrendingUp, label: "Analytics", color: "text-barca-red" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-block">
                <motion.div
                  className="flex items-center space-x-2 text-sm font-mono text-barca-gold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="animate-pulse">●</span>
                  <span>System Status: Operational</span>
                </motion.div>
              </div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-barca-blue via-barca-gold to-barca-red">
                  Ankan Paul
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl lg:text-3xl text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                ML Engineer & Data Analyst
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I don't chase models — I design{" "}
                <span className="text-barca-gold font-semibold">systems</span> that make{" "}
                <span className="text-barca-blue font-semibold">reliable decisions</span>{" "}
                under real constraints.
              </motion.p>
            </motion.div>

            {/* Tech stack icons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-background-card border border-white/10 hover:border-barca-gold/50 transition-all">
                    <tech.icon className={`w-5 h-5 ${tech.color}`} />
                    <span className="text-sm text-gray-300">{tech.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-barca-gradient rounded-xl text-white font-semibold shadow-lg shadow-barca-blue/30 hover:shadow-barca-blue/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-background-card border-2 border-barca-gold rounded-xl text-barca-gold font-semibold hover:bg-barca-gold/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </div>

          {/* Visual element - Terminal styled instead of circular */}
          <motion.div
            className="relative hidden lg:block w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Terminal Window */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0D1117] border border-white/10 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 px-5 py-4 bg-[#161B22] border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-400 font-mono">ankan@system:~$</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-8 font-mono text-base space-y-6">
                {/* Command 1: whoami */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 text-lg">➜</span>
                    <span className="text-green-400">whoami</span>
                  </div>
                  <div className="mt-2 ml-2 text-white">Ankan Paul</div>
                </motion.div>

                {/* Command 2: cat role */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 text-lg">➜</span>
                    <span className="text-green-400">cat</span>
                    <span className="text-blue-400">role.txt</span>
                  </div>
                  <div className="mt-2 ml-2 text-white">
                    Machine Learning Engineer | Data Analyst
                  </div>
                </motion.div>

                {/* Command 3: grep expertise */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 text-lg">➜</span>
                    <span className="text-green-400">grep -i</span>
                    <span className="text-green-400">"focus"</span>
                    <span className="text-green-400">expertise.log</span>
                  </div>
                  <div className="mt-2 ml-2 text-white">
                    Applied ML • LLMs • Data Engineering • Systems Thinking
                  </div>
                </motion.div>

                {/* Command 4: initialize */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 text-lg">➜</span>
                    <span className="text-cyan-400">initialize_portfolio</span>
                    <motion.span
                      className="text-white"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Subtle Barcelona accent on bottom edge */}
              <div className="h-1 bg-gradient-to-r from-barca-blue via-barca-gold to-barca-red"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
