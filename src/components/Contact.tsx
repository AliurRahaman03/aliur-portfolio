import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/AliurRahaman03", label: "GitHub", color: "hover:text-[#333] dark:hover:text-white" },
  { icon: Linkedin, href: "https://linkedin.com/in/aliur-rahaman", label: "LinkedIn", color: "hover:text-[#0077b5]" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-[#1DA1F2]" },
  { icon: Mail, href: "mailto:aliur8991@gmail.com", label: "Email", color: "hover:text-accent" },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat about technology? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <Send className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold mb-4"
            >
              Get In Touch
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground mb-8"
            >
              Whether you have a question, a project proposal, or just want to say hello,
              I'll do my best to get back to you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white glow-primary mb-8 group"
                onClick={() => window.location.href = "mailto:aliur8991@gmail.com"}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Send Me an Email
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full glass flex items-center justify-center transition-colors ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          <p>© 2025 Aliur Rahaman. Crafted with passion and powered by innovation.</p>
        </motion.div>
      </div>
    </section>
  );
};
