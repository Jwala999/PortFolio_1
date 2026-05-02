import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Database, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

/**
 * Design Philosophy: Modern Minimalist with Tech Accent + 3D Animations
 * - High-tech 3D backgrounds with holographic elements
 * - Electric cyan (#00d9ff / oklch(0.623 0.214 259.815)) accent color
 * - Immersive 3D animations on all interactive elements
 * - Particle effects and advanced visual effects throughout
 * - Typography: IBM Plex Mono for headings, Inter for body
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C"],
    "Web Development": ["React.js", "Node.js", "HTML5", "CSS3", "RESTful API", "JWT/bcrypt"],
    "AI & Machine Learning": ["NLP", "CNN", "DistilBERT", "PyTorch", "Torchvision", "Deep Learning"],
    "Database Management": ["MongoDB", "SQLite", "MySQL"],
    "Tools & Technologies": ["GitHub", "VS Code", "Hugging Face Transformers", "Streamlit"]
  };

  const projects = [
    {
      title: "DeepVeritas",
      subtitle: "Multimodal Misinformation Detection",
      description: "Engineered an advanced multimodal AI system integrating NLP (DistilBERT) and Computer Vision (ResNet-18) with a custom late fusion algorithm for enhanced accuracy.",
      technologies: ["Python", "PyTorch", "Streamlit", "DistilBERT", "ResNet-18"],
      highlights: [
        "Custom late fusion algorithm for text-image predictions",
        "End-to-end ML pipeline from data processing to inference",
        "Optimized inference achieving ~3-5 seconds response time"
      ],
      image: "/projects/deepveritas.png",
      link: "https://huggingface.co/spaces/jwala01/deepveritas",
      category: "AI/ML"
    },
    {
      title: "InvenFlow",
      subtitle: "Inventory Management System",
      description: "Engineered a comprehensive full-stack application to manage staff, products, and live data with secure authentication and optimized performance.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "RESTful API"],
      highlights: [
        "RESTful API design and implementation",
        "Secure authentication and authorization",
        "Efficient data handling and system performance"
      ],
      image: "/projects/invenflow.png",
      link: "https://inven-flow-mu.vercel.app",
      category: "Full-Stack"
    },
    {
      title: "NeuralChat",
      subtitle: "Multimodal AI Chat System",
      description: "Developed a conversational AI system using NLP techniques and LLaMA model for natural language understanding and response generation.",
      technologies: ["Python", "LLaMA", "NLP", "llama-cpp-python"],
      highlights: [
        "NLP-based conversational system",
        "User interaction flow implementation",
        "Response generation logic"
      ],
      image: "/projects/neuralchat.png",
      link: "https://neuralchat-qp27.onrender.com",
      category: "AI"
    }
  ];

  const experience = [
    {
      role: "AI & Full-Stack Developer",
      company: "Academic Projects",
      period: "2025 – 2026",
      responsibilities: [
        "Architected and engineered Fake News Detection (DeepVeritas), a multimodal AI system",
        "Engineered scalable backend systems and integrated ML models with web interfaces",
        "Developed secure applications with authentication, API development, and database management",
        "Optimized system performance and improved response time for real-time applications",
        "Applied modular architecture and version control (Git) for maintainability"
      ]
    }
  ];

  const education = [
    {
      degree: "MCA",
      school: "Galgotias University",
      cgpa: "7.0",
      year: "Expected 2026"
    },
    {
      degree: "BCA",
      school: "University of Lucknow",
      percentage: "57.7%",
      year: "2022"
    },
    {
      degree: "12th",
      school: "Shaheed Inter College",
      percentage: "55%",
      year: "2019"
    },
    {
      degree: "10th",
      school: "Shaheed Inter College",
      percentage: "73.3%",
      year: "2017"
    }
  ];

  const certifications = [
    "Artificial Intelligence – Udemy (Mar 2025)",
    "Web Development – Ediglobe / Kshitij IIT Kharagpur (Feb 2025)",
    "Web Development – Internshala (Aug 2021)"
  ];

  return (
    <AnimatedBackground className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-dark border-b border-white/10 shadow-lg smooth-transition">
        <div className="container flex items-center justify-between h-16">
          <div className="font-mono font-bold text-xl text-foreground">JK</div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground smooth-transition hover:tech-accent">About</a>
            <a href="#projects" className="text-sm font-medium text-foreground smooth-transition hover:tech-accent">Projects</a>
            <a href="#skills" className="text-sm font-medium text-foreground smooth-transition hover:tech-accent">Skills</a>
            <a href="#experience" className="text-sm font-medium text-foreground smooth-transition hover:tech-accent">Experience</a>
            <a href="#contact" className="text-sm font-medium text-foreground smooth-transition hover:tech-accent">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full glass-dark border border-primary/20"
            >
              <span className="text-sm font-mono text-primary font-bold tracking-widest uppercase">
                Full-Stack Developer & ML Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-mono font-black mb-8 leading-tight tracking-tighter text-shadow-lg"
            >
              Jwala <span className="text-primary">Kumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed text-shadow-sm font-medium"
            >
              Architecting intelligent, scalable systems. Specializing in multimodal AI solutions and high-performance full-stack applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-6 justify-center flex-wrap"
            >
              <Button className="h-14 px-8 text-lg font-bold smooth-transition hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,217,255,0.3)]" size="lg">
                Explore Projects
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold smooth-transition hover:bg-white/5 glow-border">
                Get Resume
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-mono font-bold mb-16 text-center text-shadow-sm"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-lg text-foreground/90 leading-relaxed"
            >
              <p>
                I'm an MCA student with a passion for building intelligent systems that solve real-world problems. My expertise spans full-stack development and machine learning, with a focus on creating secure, scalable applications.
              </p>
              <p>
                I've engineered <span className="text-primary font-bold">DeepVeritas</span>, an advanced multimodal misinformation detection platform that combines transformer-based NLP with CNN-based computer vision.
              </p>
              <p>
                Beyond technical skills, I'm committed to writing clean, maintainable code and applying modular architecture principles. I believe in continuous learning and staying updated with emerging technologies.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Code2, title: "Full-Stack", desc: "React, Node.js, REST APIs" },
                { icon: Brain, title: "AI/ML", desc: "NLP, CNN, PyTorch" },
                { icon: Database, title: "Databases", desc: "MongoDB, MySQL, SQLite" },
                { icon: Zap, title: "Performance", desc: "Optimization & Scaling" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="p-8 glass-dark glow-border smooth-transition hover:-translate-y-2 group">
                    <item.icon className="w-10 h-10 text-primary mb-6 smooth-transition group-hover:scale-110 group-hover:tech-accent" />
                    <h3 className="text-xl font-mono font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-mono font-bold mb-6 text-shadow-sm"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto"
            >
              Showcasing my work in AI, full-stack development, and system design.
            </motion.p>
          </div>

          <div className="grid gap-16">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden glass-dark glow-border border-white/5 group flex flex-col lg:flex-row lg:h-[500px]">
                  <div className="lg:w-1/2 relative h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover smooth-transition group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-white/5 backdrop-blur-md relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-[10px] font-mono font-black uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 rounded">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-mono font-bold mb-3 text-shadow-sm group-hover:tech-accent smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-primary/80 font-mono text-sm mb-6 font-bold">{project.subtitle}</p>
                    <p className="text-foreground/80 mb-8 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 text-foreground/70 text-[11px] font-mono border border-white/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button asChild className="rounded-full px-8 shadow-lg shadow-primary/20 cursor-pointer">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full border border-white/10" asChild>
                        <a href="https://github.com/jwala999" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative overflow-hidden bg-white/5">
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-mono font-bold mb-16 text-center text-shadow-sm"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-8 glass-dark glow-border h-full">
                  <h3 className="text-xl font-mono font-bold mb-6 text-primary tracking-tight">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-white/5 text-foreground/80 text-xs font-mono border border-white/10 rounded-full smooth-transition hover:bg-primary/20 hover:text-primary hover:border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-mono font-bold mb-16 text-center text-shadow-sm"
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-10 glass-dark glow-border relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 smooth-transition">
                    <Zap className="w-24 h-24 text-primary" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl font-mono font-bold text-foreground group-hover:tech-accent smooth-transition">{exp.role}</h3>
                      <p className="text-primary font-mono font-bold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-foreground/60">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-foreground/80 flex items-start gap-4">
                        <span className="text-primary font-black mt-1">»</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education & Certs Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mt-32">
            <div>
              <h3 className="text-2xl font-mono font-bold mb-10 text-shadow-sm">Education</h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 glass-dark border-white/5 hover:bg-white/5 smooth-transition">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-mono font-bold text-lg text-primary">{edu.degree}</h4>
                        <span className="text-xs font-mono opacity-50">{edu.year}</span>
                      </div>
                      <p className="text-sm text-foreground/70 mb-2">{edu.school}</p>
                      <div className="text-xs font-mono text-primary/80">Result: {edu.cgpa || edu.percentage}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-mono font-bold mb-10 text-shadow-sm">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-xl glass-dark border-white/5 hover:border-primary/30 smooth-transition group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black smooth-transition">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="text-foreground/90 font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark glow-border p-16 rounded-[2rem] border-white/10"
          >
            <h2 className="text-5xl font-mono font-bold mb-8 text-shadow-sm">
              Ready to <span className="text-primary underline decoration-primary/30 underline-offset-8">Collaborate?</span>
            </h2>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing innovative projects and development opportunities.
            </p>

            <div className="flex justify-center gap-8 mb-12">
              {[
                { icon: Mail, href: "mailto:jwalakumar961645@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/jwala999", label: "Github" },
                { icon: Linkedin, href: "https://linkedin.com/in/jwala-kumar", label: "LinkedIn" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 rounded-2xl glass-dark border-white/10 flex items-center justify-center text-foreground/60 group-hover:text-primary group-hover:border-primary/50 group-hover:-translate-y-2 smooth-transition shadow-xl">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono font-bold opacity-0 group-hover:opacity-100 smooth-transition text-primary">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 smooth-transition">
                <Mail className="w-5 h-5 mr-3" />
                Send a Message
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg font-bold border-white/10 hover:bg-white/5 smooth-transition">
                <ExternalLink className="w-5 h-5 mr-3" />
                Explore GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground/40">
          <p className="font-mono">© 2026 Jwala Kumar. Crafted with passion.</p>
          <div className="flex items-center gap-8 font-mono">
            <span>React 19</span>
            <span>Tailwind 4</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </footer>
    </AnimatedBackground>
  );
}
