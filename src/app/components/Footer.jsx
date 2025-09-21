export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
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
  );
}