import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Programming & Core",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "C++", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Flask", level: 92 },
      { name: "Node.js / Express.js", level: 85 },
      { name: "React.js", level: 82 },
      { name: "JWT Authentication", level: 86 },
    ],
  },
  {
    category: "Database & ORM",
    skills: [
      { name: "SQLite3 / SQLAlchemy", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Database Design", level: 85 },
      { name: "CRUD Operations", level: 90 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "OpenAI API Integration", level: 88 },
      { name: "Postman / VS Code", level: 85 },
      { name: "Salesforce Administration", level: 78 },
    ],
  },
];

const SkillBar = ({ skill, index, categoryIndex }: { skill: typeof skillCategories[0]['skills'][0]; index: number; categoryIndex: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              {category.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  categoryIndex={categoryIndex}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
