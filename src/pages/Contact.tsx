import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Twitter, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree endpoint - you can replace with your own endpoint
      const response = await fetch("https://formspree.io/f/mgolebrb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "An error occurred. Please try again later." +
          (error instanceof Error ? error.message : ""),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Let's discuss your next project. Whether you have a complex SaaS
              challenge or innovative idea, I'd love to collaborate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-3 font-semibold mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email
                  </h3>
                  <a
                    href="mailto:ologehelvis@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ologehelvis@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="flex items-center gap-3 font-semibold mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone Number
                  </h3>
                  <p className="text-muted-foreground">+234 9078599647</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-3 font-semibold mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Available for remote work worldwide
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/ElvistheDuke"
                      className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                    >
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/elvis-ologeh-73bb0336a/"
                      className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://x.com/elvis_ologeh"
                      className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Quick Response Guaranteed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I typically respond to inquiries within 24 hours. Let's discuss
              how we can work together on your next project.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
