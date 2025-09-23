"use client";
import React from 'react';
import { Briefcase, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { icon: <Github size={20} />, href: '#', name: 'GitHub' },
        { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    ];

    const footerLinks = [
        { href: '#', name: 'Privacy Policy' },
        { href: '#', name: 'Terms of Service' },
        { href: '#', name: 'Contact Us' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Logo and Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                         <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <span>InternPortal</span>
                        </div>
                        <p className="max-w-xs text-sm">
                            Your one-stop platform to connect talented students with top-tier internship opportunities.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center">
                         <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                         <ul className="space-y-2">
                             {footerLinks.map(link => (
                                 <li key={link.name}>
                                     <a href={link.href} className="hover:text-white transition-colors duration-300">{link.name}</a>
                                 </li>
                             ))}
                         </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div className="flex flex-col items-center md:items-end">
                         <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                         <div className="flex gap-4">
                             {socialLinks.map(social => (
                                 <a key={social.name} href={social.href} className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300" title={social.name}>
                                     {social.icon}
                                 </a>
                             ))}
                         </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} InternPortal. All Rights Reserved.</p>
                    <p className="mt-1">Pune, Maharashtra, India</p>
                </div>
            </div>
        </footer>
    );
}