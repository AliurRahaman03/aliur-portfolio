import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React / TypeScript", level: 95 },
      { name: "TailwindCSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python / Flask", level: 90 },
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      { name: "Prompt Engineering", level: 95 },
      { name: "OpenAI API", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 85 },
      { name: "UI/UX Design", level: 88 },
      { name: "Figma", level: 82 },
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
