import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Brain, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Python, Flask, Node.js, Express.js, REST APIs",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "OpenAI API, AI-powered Applications, Prompt Engineering",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Database & ORM",
    description: "SQLite3, MongoDB, SQLAlchemy, Data Management",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Modern Web Stack",
    description: "React.js, MERN Stack, JWT Authentication, Workflow Automation",
    color: "from-green-500 to-teal-500",
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
            <skill.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
          <p className="text-sm text-muted-foreground">Hover to learn more</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-foreground/90">{skill.description}</p>
          <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${skill.color} rounded-full`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Motivated Backend Developer with strong expertise in Python, Flask, and AI integration.
            Experienced in building REST APIs, managing databases, and developing AI-powered web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
