import { motion } from "framer-motion";

const Skills = () => {
  const codingSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 60 },
    { name: "Bootstrap", level: 60 },
    { name: "JAVA", level: 80 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 90 }
  ];

  const professionalSkills = [
    { name: "Frontend Development", level: 90 },
    { name: "Quality Testing", level: 80 },
    { name: "Marketing", level: 80 },
    { name: "Business analysis", level: 70 },
    { name: "Project Management", level: 70 },
    { name: "Content Creation", level: 95 }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-300 dark:bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 rounded-full shadow-sm"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="absolute inset-4 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-wide mb-2 text-blue-600 dark:text-blue-400">My Expertise</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            My Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Coding Skills */}
          <motion.div
            className="bg-white dark:bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">Coding Skills</h3>
            {codingSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            className="bg-white dark:bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">Professional Skills</h3>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
