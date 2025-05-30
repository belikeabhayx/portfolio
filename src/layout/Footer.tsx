import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 bg-background-subtle">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-semibold text-white">P</span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                Portfolio
              </span>
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-md text-sm text-foreground-subtle"
            >
              Showcasing my journey through code and design. Every project tells
              a story of problem-solving, creativity, and technical growth.
            </motion.p>
          </div>

          <div>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 font-semibold text-foreground"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <li>
                <a
                  href="/#about"
                  className="text-sm text-foreground-subtle transition-colors hover:text-foreground"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="text-sm text-foreground-subtle transition-colors hover:text-foreground"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-foreground-subtle transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 font-semibold text-foreground"
            >
              Connect
            </motion.h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-subtle transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-subtle transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-foreground-subtle transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-foreground/10 pt-8 text-center text-sm text-foreground-subtle"
        >
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
