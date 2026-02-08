import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 dark:bg-dark-bg">
      <div className="absolute inset-4 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 sm:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Contact me</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal">Let's work together on your next project</p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="subject" className="mb-2 block text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="mb-2 block text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 px-6 py-2.5 font-medium text-sm text-white shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
