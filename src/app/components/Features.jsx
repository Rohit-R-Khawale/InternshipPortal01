import {  CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";
const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="flex justify-center items-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Features() {
  return (
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
  );
}