import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import projectsData from "../data/projectsData";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="work" className="relative py-16 sm:py-20 lg:py-24 dark:bg-dark-bg">
      <div className="absolute inset-4 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">My work</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal">Featured projects and case studies</p>
        </motion.div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md transition-all hover:shadow-xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex h-24 sm:h-28 items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-600/20 dark:to-indigo-600/20">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">Project Preview</span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 line-clamp-3 font-normal leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 px-2 py-0.5 text-xs font-medium"
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{tech}</span>
                    </span>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-400 dark:hover:to-indigo-400 transition-all">
                  View Project
                  <svg className="ml-1 h-4 w-4 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
        {!showAll && projectsData.length > 3 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 px-6 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Show More
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white dark:bg-dark-card p-8 shadow-2xl"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setActiveProject(null)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-primary">Case Study</p>
                  <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{activeProject.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{activeProject.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Overview</h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{activeProject.overview}</p>
                  </div>
                  <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Problem</h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{activeProject.problem}</p>
                  </div>
                  <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Solution</h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{activeProject.solution}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Technologies Used</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.techStack.map(tech => (
                      <span key={tech} className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 px-3 py-1 text-sm font-medium">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
