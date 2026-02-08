import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ProjectLink from "../components/ProjectLink";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  problem: string;
  problemDetails: string[];
  action: string;
  actionDetails: string[];
  result: string;
  resultDetails: string[];
  resultMetrics: Array<{ label: string; value: string }>;
  technologies: string[];
  challenge: string;
  lessonLearned: string;
  keyFeatures: string[];
  image?: string;
  url?: string;
  github?: string;
}

const projectsData: Record<string, ProjectData> = {
  storeflex: {
    id: "storeflex",
    title: "StoreFlex (boosta)",
    subtitle: "Multi-Tenant E-Commerce SaaS",
    shortDescription:
      "A production-ready SaaS platform enabling 500+ independent e-commerce stores with complete operational autonomy.",
    problem:
      "E-commerce entrepreneurs faced high barriers to entry. Building their own store required significant technical expertise and infrastructure investment.",
    problemDetails: [
      "High upfront costs for independent store owners",
      "Complex database and user management across multiple tenants",
      "Payment processing with multi-store reconciliation",
      "Subdomain management and DNS routing",
      "Resource isolation and security concerns",
    ],
    action:
      "Built a scalable multi-tenant architecture using Next.js and PostgreSQL with sophisticated database isolation strategies.",
    actionDetails: [
      "Implemented row-level security (RLS) policies for tenant isolation",
      "Created subdomain routing middleware for seamless store access",
      "Integrated Stripe for multi-tenant payment processing",
      "Built comprehensive admin dashboard for store management",
      "Implemented real-time inventory sync across stores",
      "Created automated backup and disaster recovery systems",
    ],
    result:
      "Successfully launched the platform supporting 500+ independent stores generating $2M+ in annual GMV.",
    resultDetails: [
      "Platform scaled to 500+ active stores in first year",
      "99.9% uptime with automated monitoring",
      "Average store gross margin of 35%+",
      "Reduced time-to-market for new stores from weeks to hours",
    ],
    resultMetrics: [
      { label: "Active Stores", value: "500+" },
      { label: "Annual GMV", value: "$2M+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Support Response", value: "<1 hour" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe API",
      "AWS Lambda",
      "Redis",
    ],
    challenge:
      "The primary challenge was designing a database schema that could efficiently handle multi-tenant queries while maintaining strong security boundaries. We solved this using PostgreSQL RLS policies combined with app-level validation.",
    lessonLearned:
      "Multi-tenant SaaS requires thinking about security at every layer. Never rely on a single point of isolation.",
    keyFeatures: [
      "Subdomain-based store routing",
      "Multi-currency support",
      "Advanced analytics dashboard",
      "Automated compliance reporting",
      "API access for integrations",
    ],
  },
  oauchow: {
    id: "oauchow",
    title: "Oauchow Finder",
    url: "https://oauchowfinder.vercel.app/",
    github: "",
    subtitle: "Campus Food Discovery Platform",
    shortDescription:
      "A community-driven food discovery app connecting 5000+ students with campus vendors and dining options.",
    problem:
      "University students struggled to discover available food options on campus. Traditional methods like paper menus were outdated and unreliable.",
    problemDetails: [
      "Lack of real-time food availability information",
      "No centralized platform for vendor discovery",
      "Student frustration with inefficient food searches",
      "Vendors unable to reach their target audience",
      "Limited community engagement around dining",
    ],
    action:
      "Created a mobile-first platform with real-time availability tracking and community-driven reviews.",
    actionDetails: [
      "Built React frontend with Google Maps integration",
      "Implemented real-time vendor status updates via Socket.io",
      "Created community review system with reputation scoring",
      "Built vendor management dashboard for menu updates",
      "Integrated push notifications for special offers",
      "Implemented advanced search and filtering",
    ],
    result:
      "Launched successful platform with 5000+ active users on campus, becoming the go-to resource for food discovery.",
    resultDetails: [
      "5000+ monthly active users",
      "10,000+ reviews and ratings",
      "90% vendor participation",
      "4.8/5 average app rating",
    ],
    resultMetrics: [
      { label: "Active Users", value: "5000+" },
      { label: "Community Reviews", value: "10,000+" },
      { label: "App Rating", value: "4.8/5" },
      { label: "Daily Active Users", value: "1200+" },
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Maps API",
      "Socket.io",
      "Firebase",
    ],
    challenge:
      "Managing real-time synchronization of vendor updates across thousands of concurrent users required careful implementation of WebSocket connections and caching strategies.",
    lessonLearned:
      "Community engagement is just as important as the technology. Early vendor adoption was crucial to platform success.",
    keyFeatures: [
      "Real-time availability tracking",
      "Community ratings and reviews",
      "Personalized recommendations",
      "Vendor analytics dashboard",
      "Push notifications",
    ],
  },
  terraplie: {
    id: "terraplie",
    title: "Terraplie",
    subtitle: "Personalized Nutrition & Healthy Meals Platform",
    shortDescription:
      "A health-focused platform delivering personalized meal plans and nutrition guidance based on individual lifestyle, body needs, and health conditions.",
    problem:
      "Many people struggled to eat healthy consistently due to poor nutrition knowledge, lack of personalization, and unhealthy food options.",
    problemDetails: [
      "Generic diet plans that ignored individual health needs",
      "Limited access to nutritious, well-portioned meals",
      "Difficulty tracking food preferences and allergies",
      "Poor understanding of how food affects the body",
      "Unhealthy additives in commonly available meals",
    ],
    action:
      "Designed and built a personalized nutrition platform combining onboarding assessments, meal planning, and health-conscious food education.",
    actionDetails: [
      "Built a detailed onboarding system to capture user health data",
      "Implemented personalized meal recommendations based on lifestyle",
      "Integrated allergy, spice level, and food preference filtering",
      "Created a scalable backend for user data and meal plans",
      "Designed clean, intuitive UI for health-focused users",
      "Implemented email notifications for onboarding and updates",
    ],
    result:
      "Delivered a functional platform that personalizes healthy eating and educates users on better nutrition choices.",
    resultDetails: [
      "Accurate personalization based on user health profiles",
      "Improved user awareness of nutrition and portion control",
      "Successful onboarding data capture and storage",
      "High engagement during onboarding flow",
    ],
    resultMetrics: [
      { label: "User Personalization Accuracy", value: "High" },
      { label: "Onboarding Completion Rate", value: "90%+" },
      { label: "Meal Preference Coverage", value: "100%" },
      { label: "Health Data Fields Captured", value: "15+" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Zod",
      "Resend API",
      "Tailwind CSS",
    ],
    challenge:
      "Designing a flexible onboarding system that accurately captured diverse health data while remaining simple and user-friendly.",
    lessonLearned:
      "Health-focused platforms must balance data depth with user experience. Simplicity encourages completion, accuracy enables personalization.",
    keyFeatures: [
      "Personalized nutrition onboarding",
      "Health condition & allergy tracking",
      "Meal preference customization",
      "Email notifications",
      "Scalable user data management",
    ],
  },

  kilobytespot: {
    id: "kilobytespot",
    title: "KilobyteSpot",
    subtitle: "Tech Blog & Digital Movement",
    shortDescription:
      "A next-generation tech blog evolving into a cultural movement for Gen Z developers, gamers, and tech enthusiasts, blending content, community, and interactivity.",
    problem:
      "Most tech blogs are static, impersonal, and text-heavy, failing to engage Gen Z readers or help emerging developers build identity and community.",
    problemDetails: [
      "Tech blogs feel boring and overly formal to younger audiences",
      "Little to no interaction between readers and content",
      "No sense of progression, reward, or belonging for readers",
      "Hard for new developers to stand out or build a personal brand",
      "Lack of tech culture, trends, and storytelling in one place",
    ],
    action:
      "Designed and built a modern, interactive tech platform that combines blogging, gamification, and community-driven content.",
    actionDetails: [
      "Created a dark-mode-first, futuristic UI tailored to Gen Z aesthetics",
      "Built a flexible blog system with rich media and code snippets",
      "Introduced gamified reading with XP, levels, and achievements",
      "Designed admin tools for seamless content creation and publishing",
      "Integrated AI-assisted summaries and simplified reading modes",
      "Planned community features like polls, reactions, and discussions",
    ],
    result:
      "A distinctive tech platform positioned as more than a blog — a hub for trends, learning, and developer identity.",
    resultDetails: [
      "High engagement through interactive content formats",
      "Stronger brand identity around tech culture and trends",
      "Clear foundation for scaling into a full tech community",
      "Increased visibility for the creator as a tech voice",
    ],
    resultMetrics: [
      { label: "Target Audience", value: "Gen Z & Tech Enthusiasts" },
      { label: "Content Focus", value: "Tech Trends & Culture" },
      { label: "Platform Type", value: "Blog + Community" },
      { label: "Growth Potential", value: "High" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "AI APIs",
      "Markdown / MDX",
      "Vercel",
    ],
    challenge:
      "Balancing meaningful technical content with entertainment, personality, and interactivity while keeping performance and scalability high.",
    lessonLearned:
      "Modern tech audiences don’t just want information — they want experience, identity, and community built into the product.",
    keyFeatures: [
      "Interactive tech articles",
      "Gamified reading experience",
      "AI-powered summaries and insights",
      "Admin dashboard for content publishing",
      "Dark-mode futuristic design",
    ],
  },
};

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

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <div className="bg-card/30 border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.subtitle}</p>
            <div className="flex gap-4 my-4">
              <ProjectLink url={project.github || ""} isGithub={true} />
              <ProjectLink url={project.url || ""} isGithub={false} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Overview */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.section>

          {/* Problem Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
                The Problem
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.problem}
              </p>
              <ul className="space-y-3">
                {project.problemDetails.map((detail, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary font-bold min-w-6">•</span>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Action Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-secondary">
                The Action
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.action}
              </p>
              <ul className="space-y-3">
                {project.actionDetails.map((detail, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-secondary font-bold min-w-6">•</span>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Result Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-500">
                The Result
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.result}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {project.resultMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-semibold">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {project.resultDetails.map((detail, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-green-500 font-bold min-w-6">✓</span>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <p className="font-semibold text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technologies */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-foreground px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Insights */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-primary">
                Key Challenge
              </h3>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-secondary">
                Key Lesson
              </h3>
              <p className="text-muted-foreground">{project.lessonLearned}</p>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Interested in similar work?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help with your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.section>
        </motion.div>
      </div>
    </Layout>
  );
}
