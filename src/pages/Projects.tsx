import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Database,
  Globe,
  MapPin,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    id: "storeflex",
    title: "Boosta (in progress)",
    description:
      "Multi-tenant e-commerce SaaS platform with advanced subdomain management and database isolation. Supports independent stores with complete operational control.",
    category: "SaaS Architecture",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Prisma", "Stripe"],
    highlight: "Supports 100+ independent stores",
    icon: Globe,
    color: "from-primary to-purple-600",
    shortSummary: "Multi-tenant e-commerce SaaS supporting 100+ stores",
  },
  {
    id: "oauchow",

    title: "OAU ChowFinder",
    description:
      "Campus-based food discovery app connecting students with local vendors and dining options. Features real-time availability and community reviews.",
    category: "Community App",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Maps API",
      "Socket.io",
    ],
    highlight: "Used by OAU students",
    icon: MapPin,
    color: "from-secondary to-blue-400",
    shortSummary: "Food discovery app serving OAU students",
  },
  {
    id: "kilobytespot",
    title: "KilobyteSpot",
    description:
      "A tech blog and resource hub focused on web development, programming tutorials, and industry insights.",
    category: "Blog & Resources",
    technologies: ["React", "Express", "MongoDB", "Socket.io"],
    highlight: "Fully interactive blog with unique featuress",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-600",
    shortSummary: "Fully interactive blog with unique features",
  },
  {
    id: "terraplie",
    title: "Terraplie",
    description:
      "A fitness app and non GMO food delivery service that connects health-conscious consumers with local farmers and producers. Users can track their fitness goals, order fresh produce, and support sustainable agriculture in their community.",
    category: "Data Visualization",
    technologies: ["Leaflet", "React", "D3.js", "PostGIS", "TurfJS"],
    highlight: "All-in-one fitness and food delivery platform",
    icon: Database,
    color: "from-emerald-500 to-cyan-600",
    shortSummary: "All-in-one fitness and food delivery platform",
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

export default function Projects() {
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
              Featured Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of my most impactful work across various
              domains and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:auto-cols-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 bg-gradient-to-br ${project.color} rounded-lg`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 mb-6 text-secondary font-semibold">
                      <Zap className="w-5 h-5" />
                      {project.highlight}
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm bg-border px-4 py-2 rounded-md text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Image/Visual */}
                  <div
                    className={`relative h-80 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-lg opacity-20`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-lg" />
                    <div className="relative h-full flex items-center justify-center">
                      <div className="p-8 text-center">
                        <Icon className="w-24 h-24 mx-auto text-primary/60 mb-4" />
                        <p className="text-muted-foreground">
                          {project.shortSummary}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Interested in collaboration?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help with your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
