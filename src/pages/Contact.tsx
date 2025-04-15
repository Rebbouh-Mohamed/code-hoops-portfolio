
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail,Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PurpleSection } from "@/components/purple-section";

const Contact = () => {
  return (
    <PurpleSection variant="gradient" className="min-h-screen">
    <motion.div 
      className="container max-w-4xl py-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="grid gap-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just connecting with fellow developers and basketball enthusiasts.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:info.moh.2003@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Rebbouh-Mohamed" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/Mohamed-Rebbouh" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/insta" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.kaggle.com/mohamedrebbouh" target="_blank" rel="noopener noreferrer">
              <Globe className="w-5 h-5 mr-2" />
              Kaggel
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://discord.com/users/mohamed#5599" target="_blank" rel="noopener noreferrer">
              <Globe className="w-5 h-5 mr-2" />
              Discord
            </a>
          </Button>

        </div>
      </div>
    </motion.div>
    </PurpleSection>
  );
};

export default Contact;
