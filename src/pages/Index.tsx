import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  Globe,
  MapPin,
  ArrowRight,
  Zap,
  TrendingUp,
  TreeDeciduous,
} from "lucide-react";

const projects = [
  {
    id: "storeflex",
    title: "Boosta (in progress)",
    description:
      "Multi-tenant e-commerce SaaS platform with advanced subdomain management and database isolation.",
    category: "SaaS Architecture",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Prisma", "Express"],
    highlight: "Supports 100+ independent stores",
    icon: Globe,
    color: "from-primary to-purple-600",
  },
  {
    id: "oauchow",
    title: "OAU ChowFinder",
    description:
      "Campus-based food discovery app connecting students with local vendors and dining options.",
    category: "Community App",
    technologies: ["Next.js", "MongoDB", "Google Maps API", "leaflet"],
    highlight: "Used by OAU students",
    icon: MapPin,
    color: "from-secondary to-blue-400",
  },
  {
    id: "kilobytespot",
    title: "KilobyteSpot",
    description:
      "A tech blog and resource hub focused on web development, programming tutorials, and industry insights.",
    category: "Blog & Resources",
    technologies: ["React", "Express", "MongoDB", "Socket.io"],
    highlight: "Fully interactive blog with unique features",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "terraplie",
    title: "Terraplie",
    description:
      "A fitness app and non GMO food delivery service that connects health-conscious consumers with local farmers and producers.",
    category: "Geospatial Visualization",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Zod",
      "Resend API",
      "Tailwind CSS",
    ],
    highlight: "All-in-one fitness and food delivery platform",
    icon: TreeDeciduous,
    color: "from-emerald-500 to-cyan-600",
  },
];

const techStack = [
  {
    category: "Frontend",
    icon: Code2,
    technologies: ["React", "TypeScript", "TailwindCSS", "Next.js"],
    description: "Modern UI development with performance and accessibility",
  },
  {
    category: "Backend",
    icon: Database,
    technologies: ["Node.js", "Express", "MongoDB", "Prisma"],
    description: "Scalable server architecture with robust data management",
  },
  {
    category: "Geospatial",
    icon: MapPin,
    technologies: ["Leaflet", "Mapbox", "PostGIS", "GeoJSON"],
    description: "Advanced mapping and spatial data visualization",
  },
  {
    category: "DevOps",
    icon: Zap,
    technologies: ["Docker", "GitHub Actions", "Vercel", "PostgreSQL"],
    description: "Automated deployment and continuous integration",
  },
];

const experience = [
  {
    year: "2025 - Present",
    title: "Senior Full-Stack Developer",
    company: "Current Role",
    description:
      "Leading architecture decisions for multi-tenant SaaS platforms and geospatial applications.",
    highlight: "3 years shipping production-ready code",
  },
  {
    year: "2025",
    title: "SaaS Architecture Specialist",
    company: "Boosta (in progress)",
    description:
      "Designed database isolation strategies for independent tenant systems.",
  },
  {
    year: "2024",
    title: "Front End Developer",
    company: "Started Journey",
    description:
      "Built first production applications with focus on scalability and user experience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center gap-2 mb-4 flex-col sm:flex-row">
            Hi, I'm Elvis Ologeh
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Full-Stack Web Developer
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Specializing in scalable SaaS architectures and geospatial data
            visualization. 3 years of shipping production-ready applications
            that solve real-world problems.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/50 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my most impactful work across SaaS, marketplace,
              and geospatial domains.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 bg-gradient-to-br ${project.color} rounded-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 mb-6 text-sm text-secondary font-semibold">
                      <Zap className="w-4 h-4" />
                      {project.highlight}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-border px-3 py-1 rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technical Deep Dive Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Modern tech stack built for performance, scalability, and
              maintainability.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.category}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{item.category}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-border px-3 py-1 rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              3 years of shipping production-ready code
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform sm:-translate-x-1/2" />

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${
                    index % 2 === 0 ? "sm:pr-1/2 sm:text-right" : "sm:pl-1/2"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-9 h-9 bg-background border-4 border-primary rounded-full transform sm:left-1/2 sm:-translate-x-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-16 sm:ml-0 ${
                      index % 2 === 0
                        ? "sm:mr-1/2 sm:pr-12"
                        : "sm:ml-1/2 sm:pl-12"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-secondary font-semibold mb-2">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                      {item.highlight && (
                        <p className="text-sm text-primary font-semibold mt-3">
                          ✨ {item.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-8 sm:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to collaborate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm interested in building innovative solutions. Whether you have
              a complex SaaS challenge or geospatial requirements, let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
