const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourname" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourname" },
  { name: "Twitter", url: "https://twitter.com/yourname" },
  { name: "Instagram", url: "https://instagram.com/yourname" }
];

const Footer = () => {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header with Name and Email */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Rasika Prabath<span className="text-blue-600">.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span>rasika.prabath@gmail.com</span>
          </div>
        </div>

        {/* Divider */}

        
        <div className="border-t border-gray-200 dark:border-gray-700 mb-8"></div>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              © 2026 Rasika Prabath. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <a href="#" className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms of Services
            </a>
            <a href="#" className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Connect with me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
