// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Briefcase, Brain, CheckCircle, BarChart2, X, Menu } from "lucide-react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="font-sans text-gray-800 scroll-smooth bg-white">
//       {/* Navbar */}
//       <Header/>
//       {/* Hero Section */}
//       <Hero/>
//       {/* Features Section */}
//       <Features/>
//       {/* For Companies Section */}
//       <CTA/>
//       {/* Footer */}
//       <Footer/>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Brain, CheckCircle, BarChart2, X, Menu } from "lucide-react";
import Link from "next/link";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 scroll-smooth bg-white">
      {/* Navbar */}
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
            <Link href="/Signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all font-medium"
              >
                Sign In
              </motion.button>
            </Link>
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-white max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-blue-600">InternPortal?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our AI-powered platform revolutionizes how students find internships and companies discover talent.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "AI Recommendations",
              desc: "Our smart algorithm matches your skills to the perfect internship, saving you time and effort.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: CheckCircle,
              title: "One-Click Apply",
              desc: "Your profile acts as your resume. Apply to multiple relevant openings instantly.",
              color: "from-green-500 to-green-600"
            },
            {
              icon: BarChart2,
              title: "Transparent Tracking",
              desc: "Track your application status in real-time from a single, organized dashboard.",
              color: "from-purple-500 to-purple-600"
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group p-8 border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-white rounded-bl-2xl"></div>
              <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              <div className="h-1 w-0 group-hover:w-16 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 mt-4 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* For Companies Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-12 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4 md:mb-0">
              <Briefcase className="w-6 h-6 text-blue-400" />
              InternPortal
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <p className="mt-8">
            © {new Date().getFullYear()} InternPortal. All Rights Reserved.
          </p>
          <p className="mt-1">Pune, Maharashtra, India</p>
        </div>
      </footer>
    </div>
  );
}