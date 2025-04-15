
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PurpleSection } from "@/components/purple-section";

const projects = [
  {
    title: "Compitive programing Platform(like hackerrank)",
    description: "Compitive coding platform for problem solving",
    tech: ["Python", "Django", "React","docker"],
    github: "https://github.com/yourusername/project1",
    demo: "https://itcp.com",
    image: "/pic/itcp.png"
  },
  {
    title: "Club Manager",
    description: "Club manager ",
    tech: ["C#", ".Net", "Sql"],
    github: "https://github.com/Mohamed-Rebbouh/club-manager_desktop",
    demo: "https://itcp.com",
    image: "/pic/itcm.jpg"
  },
  {
    title: "Nuerel Style Transfer",
    description: "EXP:Turning a photo of a city into a painting that looks like it was made by Van Gogh or Picasso",
    tech: ["python", "torch", "CNN","streamlit"],
    github: "https://github.com/Mohamed-Rebbouh/nuerel-style-transfer",
    demo: "https://itcp.com",
    image: "/pic/NST.png"
  },
  {
    title: "Windows Manager(windows)",
    description: "A lightweight window manager for better control and customization of desktop environments",
    tech: ["C", "Gcc-x85", "win32-Api","Cmak"],
    github: "https://github.com/Mohamed-Rebbouh/wm_windows",
    demo: "https://itcp.com",
    image: "/pic/wm.png"
  },
  {
    title: "Face Recognition System",
    description: "A real-time face recognition system using deep learning techniques for identification and verification tasks.",
    tech: ["Python", "OpenCV", "Dlib", "FaceNet"],
    github: "https://github.com/Mohamed-Rebbouh/face-recognition",
    demo: "https://itcp.com",
    image: "/pic/face_detected_unknown.jpg"
  },
  {
    title: "Face Detection System",
    description: "A fast and accurate face detection system that identifies human faces in images or video streams in real-time.",
    tech: ["Python", "OpenCV", "Haar Cascades", "DNN", "MediaPipe"],
    github: "https://github.com/Mohamed-Rebbouh/face-detection",
    demo: "https://itcp.com",
    image: "/pic/face.jpg"
  },
  {
    "title": "API for Code Execution",
    "description": "A secure and scalable API service that allows real-time execution of code snippets in multiple programming languages, ideal for competitive platforms, online judges, and educational tools.",
    "tech": ["Bun", "Docker", "express"],
    "github": "https://github.com/Rebbouh-Mohamed/API_Code_Excution",
    "demo": "https://itcp.com",
    "image": "/pic/code.png"
  }
  
  
  
  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <PurpleSection variant="gradient" className="min-h-screen">
    <motion.div 
      className="container py-24 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-12">Projects Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-30 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </PurpleSection>
  );
};

export default Projects;
