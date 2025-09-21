import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
        id="companies"
        className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-white" style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}></div>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-white" style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white" style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-white" style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10 text-blue-100 text-lg"
          >
            Are you a company looking to hire the best student talent? Post your
            openings and reach thousands of skilled candidates ready to
            contribute.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl bg-white text-blue-900 font-semibold hover:bg-gray-100 transition-all"
          >
            Post an Opening
          </motion.button>
        </div>
      </section>

  );
}