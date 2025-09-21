;
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // Added a subtle gradient background pattern
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
          >
            Find Your Next Internship,
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Seamlessly.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our intelligent portal connects you with the best opportunities,
            recommended just for you. Stop searching, start applying.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-medium transition-all"
            >
              Get Started for Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl border border-gray-300 text-gray-700 text-lg font-medium hover:bg-gray-50 transition-all"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-30 blur-xl"></div>
      </section>
  );
}