import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./project/SectionHeading";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? Feel free to reach out."
          align="center"
        />

        <div className="mx-auto max-w-lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <p className="mb-8 text-center text-foreground-subtle">
              I'm currently open for freelance opportunities and interesting
              projects. If you have a project that you want to get started or
              think you need my help with something, get in touch.
            </p>

            <div className="mb-8 flex justify-center">
              <a href="mailto:your.email@example.com" className="btn-primary">
                Say Hello
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground-subtle transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground-subtle transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 text-foreground-subtle transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
