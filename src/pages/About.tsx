import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Code2, Users, TrendingUp, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in React, Node.js, TypeScript, and modern tooling.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Building fast, scalable applications that handle growth.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "Working closely with teams and stakeholders to solve problems.",
    },
    {
      icon: TrendingUp,
      title: "Growth Oriented",
      description:
        "Passionate about learning and staying current with technology.",
    },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Full-stack developer specializing in SaaS and geospatial
              applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none mb-16"
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With 3 years of professional experience, I've specialized in
                building production-ready applications that solve complex
                problems. My expertise spans full-stack development with a
                particular focus on SaaS architectures and geospatial data
                visualization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and designing
                systems that can scale with business needs. Whether it's
                architecting a multi-tenant platform supporting hundreds of
                stores or building real-time mapping applications with thousands
                of data points, I approach each project with a focus on quality
                and performance.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-primary">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "TailwindCSS",
                    "Framer Motion",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-border px-3 py-1 rounded-md text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-primary">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Prisma",
                    "TypeScript",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-border px-3 py-1 rounded-md text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-primary">Geospatial</h3>
                <div className="flex flex-wrap gap-2">
                  {["Leaflet", "Mapbox", "PostGIS", "GeoJSON", "D3.js"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-border px-3 py-1 rounded-md text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-primary">Tools & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "GitHub Actions", "Vercel", "AWS", "Git"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-border px-3 py-1 rounded-md text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
