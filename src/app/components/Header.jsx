

import { motion } from "framer-motion";
import { Briefcase } from 'lucide-react'; // Icon import

export default function Header() {
  return (
    // Added a subtle border and backdrop blur for a modern effect
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          >
            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span>InternPortal</span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <motion.a 
              whileHover={{ y: -2 }}
              href="#features" 
              className="hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Features
            </motion.a>
            <motion.a 
              whileHover={{ y: -2 }}
              href="#companies" 
              className="hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              For Companies
            </motion.a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all font-medium"
            >
              Sign In
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-200/60 transition-all font-medium"
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-700 text-2xl p-1 rounded-lg bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 shadow-lg"
          >
            <a 
              href="#features" 
              className="block py-2 hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#companies" 
              className="block py-2 hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              For Companies
            </a>
            <button className="w-full px-4 py-2.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all mt-4">
              Sign In
            </button>
            <button className="w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
              Sign Up
            </button>
          </motion.div>
        )}
      </header>
  );
}