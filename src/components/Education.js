import { motion } from "framer-motion";
import { educationData } from "../data/resumeData";

const Education = () => {
  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 dark:bg-dark-bg">
      <div className="absolute inset-4 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Education</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal">My academic background</p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500" />
          <div className="space-y-4 sm:space-y-6 sm:pl-20">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="hidden sm:flex absolute -left-20 top-4 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 border-4 border-white dark:border-dark-bg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 sm:p-5 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 sm:hidden w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2.5 py-0.5 text-xs bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 font-medium rounded-full mb-2">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{edu.period}</span>
                      </span>
                      <h3 className="mt-1 text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium break-words">
                        {edu.institution}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed break-words font-normal">
                        {edu.description}
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

export default Education;
