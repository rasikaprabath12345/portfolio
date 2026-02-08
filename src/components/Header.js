import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "My work", href: "#work" },
  { label: "Contact me", href: "#contact" }
];

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNavClick = (item) => (event) => {
    setMobileMenuOpen(false);
    
    // Handle Home button click to scroll to top
    if (item.label === "Home") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        className="sticky top-0 left-0 right-0 z-50"
        style={{ 
          backgroundColor: isDark ? 'rgba(11, 15, 26, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          opacity: headerOpacity
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5">
          <motion.div
            className="text-xl sm:text-2xl font-bold flex items-baseline text-gray-800 dark:text-white tracking-tight"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Rasika
            <span className="rounded-full bg-red-500 ml-1 mb-0.5" style={{ width: '4px', height: '4px' }} />
          </motion.div>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              item.label === "Contact me" ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 rounded-full font-medium text-xs lg:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all overflow-hidden group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavClick(item)}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  onClick={handleNavClick(item)}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-600 to-accent rounded-full"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-dark-card text-gray-800 dark:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-card dark:to-dark-hover text-gray-800 dark:text-white shadow-lg hover:shadow-premium transition-all"
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
            {isDark ? (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md"
          >
            <nav className="flex flex-col px-4 py-4 space-y-3">
              {navItems.map((item) => (
                item.label === "Contact me" ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className="relative text-sm sm:text-base font-semibold text-white py-2.5 px-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md transition-all flex items-center gap-2 justify-center"
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

    </>
  );
};

export default Header;
