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
    title: "Skill Mentor",
    description: "AI-Driven Skill Analysis & Learning Roadmap Web App integrating OpenAI API for personalized career roadmap generation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    tags: ["Python", "Flask", "OpenAI API", "SQLAlchemy", "Jinja2"],
    github: "https://github.com/AliurRahaman03/Skill_Mentor",
    demo: "https://skill-mentor-p1fa.onrender.com",
    longDescription: "Architected and developed a full-stack Flask application integrating OpenAI API for personalized career roadmap generation. Implemented modular architecture using Flask Blueprints, SQLAlchemy ORM for data management. Built secure user authentication system and database integration using Flask-SQLAlchemy and Flask-Migrate. Designed RESTful API endpoints for skill assessment and AI-driven learning recommendations. Deployed and maintained production environment on Render.com.",
  },
  {
    title: "Nutrition Tracker",
    description: "Full-stack MERN application to track meals and calories with JWT authentication and role-based access control.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    github: "https://github.com/aliurrahaman/nutrition-tracker",
    demo: "#",
    longDescription: "Built a full-stack app to track meals and calories using MongoDB, Express.js, React, and Node.js. Implemented JWT authentication and role-based access control for secure user management. Created RESTful APIs for dynamic data interaction and dashboard updates. Features include meal logging, calorie tracking, nutritional analysis, and personalized health insights.",
  },
  {
    title: "To-Do App",
    description: "Task management web application built with Flask and SQLite3 featuring CRUD operations and responsive design.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["Flask", "SQLite3", "Bootstrap", "Jinja2", "SQLAlchemy"],
    github: "https://github.com/AliurRahaman03/Flask-To-Do-App",
    demo: "#",
    longDescription: "Developed a task management web app using Flask and SQLite3 with full CRUD functionality. Implemented database operations via SQLAlchemy ORM and Flask routes for efficient task handling. Used Bootstrap and Jinja2 templating for responsive, mobile-friendly design. Managed the entire project workflow with Git in a Python virtual environment, demonstrating best practices in Flask development.",
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
            A showcase of my recent work in backend development, AI integration, and full-stack web applications.
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
