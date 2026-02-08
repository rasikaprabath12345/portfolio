import { motion } from "framer-motion";
import { experienceData } from "../data/resumeData";

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 dark:bg-dark-bg">
      <div className="absolute inset-4 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Experience</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal">My professional journey</p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500" />
          <div className="space-y-4 sm:space-y-6 sm:pl-20">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="hidden sm:flex absolute -left-20 top-4 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 border-4 border-gray-50 dark:border-gray-900">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 sm:hidden w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2.5 py-0.5 text-xs bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 font-medium rounded-full mb-2">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{exp.period}</span>
                      </span>
                      <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words tracking-tight">
                        {exp.position}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium break-words">
                        {exp.company}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed break-words font-normal">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
