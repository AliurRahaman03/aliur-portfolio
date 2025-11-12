import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "AI Content Generator",
    description: "Full-stack application leveraging GPT-4 for automated content creation with custom prompts and style templates.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["React", "Python", "OpenAI", "Flask"],
    github: "#",
    demo: "#",
    longDescription: "A sophisticated AI-powered content generation platform that helps businesses and creators produce high-quality written content. Features include customizable tone, style templates, SEO optimization, and multi-language support.",
  },
  {
    title: "Smart Dashboard Analytics",
    description: "Real-time analytics dashboard with AI-powered insights and predictive visualizations for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["TypeScript", "D3.js", "Machine Learning", "React"],
    github: "#",
    demo: "#",
    longDescription: "An intelligent analytics platform that transforms raw data into actionable insights. Uses machine learning to predict trends, identify anomalies, and provide automated recommendations for business optimization.",
  },
  {
    title: "Creative Portfolio Builder",
    description: "Interactive portfolio creation tool with drag-and-drop interface and animated transitions for designers and developers.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    tags: ["React", "Framer Motion", "TailwindCSS", "Firebase"],
    github: "#",
    demo: "#",
    longDescription: "A no-code platform that empowers creatives to build stunning portfolio websites. Features real-time collaboration, custom animations, responsive templates, and seamless deployment.",
  },
  {
    title: "Voice-Controlled Assistant",
    description: "AI assistant with natural language processing and voice recognition for hands-free task automation.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    tags: ["Python", "NLP", "Speech Recognition", "FastAPI"],
    github: "#",
    demo: "#",
    longDescription: "An intelligent voice assistant that understands context, learns from user interactions, and integrates with multiple services. Supports multi-language commands and offers personalized automation workflows.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group relative overflow-hidden rounded-2xl glass cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, "_blank");
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.demo, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>

        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-accent/90 backdrop-blur-sm rounded-full p-2">
            <ExternalLink className="w-5 h-5 text-accent-foreground" />
          </div>
        </motion.div>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
            <DialogDescription className="text-base pt-4">
              {project.longDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Button
                className="flex-1"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
              <Button
                className="flex-1 bg-accent hover:bg-accent/90"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, combining artificial intelligence, creative design, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
