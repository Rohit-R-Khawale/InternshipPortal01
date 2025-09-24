// /components/dashboard/company/Sidebar.jsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, LayoutDashboard, FileText, Users } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/cta', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/cta/jobs', icon: FileText, label: 'Job Postings' },
    { href: '/cta/applicants', icon: Users, label: 'Applicants' },
  ];

  const isActive = (href) => {
    if (href === '/cta') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Briefcase className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold">InternPortal</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">Company Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="font-semibold">C</span>
          </div>
          <div>
            <p className="text-sm font-medium">Company Admin</p>
            <p className="text-xs text-gray-400">admin@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}