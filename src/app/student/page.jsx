"use client";
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
    User, BarChart2, CheckCircle, Clock, Award, Bell, TrendingUp, Download, Briefcase, ExternalLink, Calendar, Star,
    LogOut, X, Menu
} from 'lucide-react';

// --- Dummy Data ---
const studentData = {
    name: "Prathamesh Jadhav",
    rollNumber: "E-009",
    department: "Computer Science",
    cgpa: 8.75,
    profileCompletion: 80,
};

const opportunities = [
    { id: 1, company: "Innovate Inc.", role: "AI/ML Intern", stipend: "High", tags: ["Deadline Soon", "Placement Conversion"], logo: "🤖" },
    { id: 2, company: "Web Weavers", role: "Frontend Developer", stipend: "Competitive", tags: ["Remote"], logo: "🌐" },
    { id: 3, company: "Data Driven Co.", role: "Data Analyst", stipend: "Good", tags: [], logo: "📊" },
];

const applications = [
    { id: 1, company: "Innovate Inc.", status: "Shortlisted" },
    { id: 2, company: "AlphaBeta Corp.", status: "Interview" },
    { id: 3, company: "Legacy Systems", status: "Applied" },
];

const interviews = [
    { id: 1, company: "AlphaBeta Corp.", role: "Backend Intern", date: "25 Sep 2025", time: "11:00 AM" },
    { id: 2, company: "Innovate Inc.", role: "AI/ML Intern", date: "28 Sep 2025", time: "02:30 PM" },
];

const notifications = [
    { id: 1, text: "Application deadline for Web Weavers is tomorrow.", type: "deadline" },
    { id: 2, text: "Placement cell has approved your resume.", type: "approval" },
    { id: 3, text: "New message from AlphaBeta Corp HR.", type: "message" },
];

const feedback = [
    { id: 1, internship: "Summer Intern at Tech Solutions", feedback: "Excellent problem-solving skills.", hasCertificate: true },
];

const analytics = {
    applications: 12,
    interviews: 4,
    offers: 1,
};

// --- REUSABLE MODAL COMPONENT ---
const Modal = ({ isOpen, onClose, onConfirm, title, children, confirmText = "Confirm", confirmColor = "indigo" }) => {
    if (!isOpen) return null;
    const colorClasses = { indigo: 'bg-indigo-600 hover:bg-indigo-700', red: 'bg-red-600 hover:bg-red-700' };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md m-4">
                <div className="p-6">
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <button onClick={onClose}><X size={24} /></button>
                    </div>
                    <div className="mt-2 text-gray-600">{children}</div>
                </div>
                <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3 rounded-b-lg">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                    <button type="button" onClick={onConfirm} className={`px-4 py-2 text-white rounded-md ${colorClasses[confirmColor]}`}>{confirmText}</button>
                </div>
            </div>
        </div>
    );
};

// --- REUSABLE NAVBAR COMPONENTS (UPDATED) ---

const Logo = () => (
    <a href="/" className="cursor-pointer">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span>CampusSage</span>
        </motion.div>
    </a>
);

const ProfileNavLinks = () => (
    <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <motion.a whileHover={{ y: -2 }} href="/student" className="hover:text-blue-600 transition-colors">Dashboard</motion.a>
        <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-blue-600 transition-colors">Job Listings</motion.a>
    </div>
);

// UPDATED: UserActions now shows a profile icon link
const UserActions = () => {
    return (
        <div className="hidden md:flex gap-4 items-center">
            <motion.a
                href="/student/profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                title="View Profile"
            >
                <User size={20} />
            </motion.a>
            Profile
        </div>
    );
};

// UPDATED: MobileMenu now includes a Profile link
const MobileMenu = ({ setMenuOpen, openModal }) => {
    const closeMenu = () => setMenuOpen(false);
    const handleLogout = () => {
        closeMenu();
        openModal({ title: "Confirm Logout", body: "Are you sure you want to log out?", onConfirm: () => alert("Logging out..."), confirmText: "Logout" });
    };
    return (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t px-6 py-4 space-y-2 shadow-lg">
            <a href="/student" className="block py-2 hover:text-blue-600" onClick={closeMenu}>Dashboard</a>
            <a href="#" className="block py-2 hover:text-blue-600" onClick={closeMenu}>Job Listings</a>
            <a href="/student/profile" className="block py-2 font-semibold text-blue-600 border-t mt-2 pt-2" onClick={closeMenu}>My Profile</a>
            <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 mt-2">
                <LogOut size={16} className="mr-2" /> Logout
            </button>
        </motion.div>
    );
};

const Navbar = ({ openModal }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <Logo />
                <ProfileNavLinks />
                <UserActions />
                <motion.button whileTap={{ scale: 0.9 }} className="md:hidden text-gray-700 p-2 rounded-lg bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </nav>
            {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} openModal={openModal} />}
        </header>
    );
};

// --- Dashboard Components ---

const DashboardCard = ({ title, icon, children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${className}`}
    >
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold text-gray-800 ml-3">{title}</h3>
        </div>
        <div>{children}</div>
    </motion.div>
);

const ProfileSnapshot = () => (
    <DashboardCard title="Profile Snapshot" icon={<User className="text-blue-500" />}>
        <div className="space-y-4">
            <div>
                <h4 className="text-2xl font-bold text-gray-900">{studentData.name}</h4>
                <p className="text-gray-500">{studentData.rollNumber} • {studentData.department}</p>
            </div>
            <div className="text-lg font-semibold text-gray-700">CGPA: {studentData.cgpa}</div>
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700">Profile Completion</span>
                    <span className="text-sm font-medium text-blue-700">{studentData.profileCompletion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${studentData.profileCompletion}%` }}></div>
                </div>
            </div>
            <a href="/student/profile" className="block w-full text-center mt-4 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
                Update Profile
            </a>
        </div>
    </DashboardCard>
);

const RecommendedOpportunities = () => (
    <DashboardCard title="Recommended Opportunities" icon={<Star className="text-yellow-500" />}>
        <div className="space-y-4">
            {opportunities.map(job => (
                <div key={job.id} className="p-4 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-4">
                    <div className="text-3xl">{job.logo}</div>
                    <div className="flex-grow">
                        <h5 className="font-bold text-gray-800">{job.role}</h5>
                        <p className="text-sm text-gray-500">{job.company}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {job.tags.map(tag => <span key={tag} className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">{tag}</span>)}
                        </div>
                    </div>
                    <button className="self-center px-3 py-1.5 rounded-md bg-blue-100 text-blue-700 text-sm font-semibold hover:bg-blue-200">Apply</button>
                </div>
            ))}
        </div>
    </DashboardCard>
);

const ApplicationTracker = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Shortlisted': return 'bg-yellow-100 text-yellow-800';
            case 'Interview': return 'bg-blue-100 text-blue-800';
            case 'Applied': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    return (
        <DashboardCard title="Application Tracker" icon={<Briefcase className="text-green-500" />}>
            <ul className="space-y-3">
                {applications.map(app => (
                    <li key={app.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">{app.company}</span>
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${getStatusColor(app.status)}`}>{app.status}</span>
                    </li>
                ))}
            </ul>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline mt-4 block text-right">View All Applications →</a>
        </DashboardCard>
    );
};

const InterviewSchedule = () => (
    <DashboardCard title="Interview Schedule" icon={<Calendar className="text-red-500" />}>
        <div className="space-y-3">
            {interviews.map(interview => (
                <div key={interview.id} className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="text-center border-r border-red-200 pr-3 mr-3">
                        <p className="font-bold text-red-700 text-lg">{interview.date.split(' ')[0]}</p>
                        <p className="text-xs text-red-600">{interview.date.split(' ')[1]}</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-800">{interview.company}</h5>
                        <p className="text-sm text-gray-500">{interview.role} at {interview.time}</p>
                    </div>
                </div>
            ))}
        </div>
    </DashboardCard>
);

const Notifications = () => (
    <DashboardCard title="Notifications & Alerts" icon={<Bell className="text-purple-500" />}>
        <ul className="space-y-2">
            {notifications.map(notif => (
                <li key={notif.id} className="flex items-start text-gray-700 p-2 rounded-md hover:bg-purple-50">
                    <CheckCircle size={18} className="text-purple-400 mr-3 mt-0.5 shrink-0" />
                    <span>{notif.text}</span>
                </li>
            ))}
        </ul>
    </DashboardCard>
);

const FeedbackAndCertificates = () => (
    <DashboardCard title="Feedback & Certificates" icon={<Award className="text-indigo-500" />}>
        {feedback.map(item => (
            <div key={item.id} className="p-4 bg-indigo-50 rounded-lg">
                <h5 className="font-bold text-gray-800">{item.internship}</h5>
                <p className="text-sm text-gray-600 my-2 italic">"{item.feedback}"</p>
                {item.hasCertificate && (
                    <a href="#" className="flex items-center text-sm font-semibold text-indigo-600 hover:underline">
                        <Download size={14} className="mr-1.5" /> Download Certificate
                    </a>
                )}
            </div>
        ))}
    </DashboardCard>
);

const AnalyticsReport = () => (
    <DashboardCard title="Analytics" icon={<BarChart2 className="text-pink-500" />}>
        <div className="grid grid-cols-3 gap-4 text-center">
            <div>
                <p className="text-3xl font-extrabold text-pink-600">{analytics.applications}</p>
                <p className="text-sm font-medium text-gray-500">Applied</p>
            </div>
            <div>
                <p className="text-3xl font-extrabold text-pink-600">{analytics.interviews}</p>
                <p className="text-sm font-medium text-gray-500">Interviews</p>
            </div>
            <div>
                <p className="text-3xl font-extrabold text-pink-600">{analytics.offers}</p>
                <p className="text-sm font-medium text-gray-500">Offers</p>
            </div>
        </div>
    </DashboardCard>
);


// --- Main Dashboard Page ---
export default function StudentDashboardPage() {
    const [modalState, setModalState] = useState({ isOpen: false });

    const openModal = ({ title, body, onConfirm, confirmText, confirmColor }) => setModalState({ isOpen: true, title, body, onConfirm, confirmText, confirmColor });
    const closeModal = () => setModalState({ isOpen: false });
    const handleConfirm = () => { if (modalState.onConfirm) modalState.onConfirm(); closeModal(); };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Navbar openModal={openModal} />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    <header className="mb-8">
                        <h1 className="text-4xl font-extrabold text-gray-900">🎓 Student Dashboard</h1>
                        <p className="text-lg text-gray-500 mt-1">Welcome back, {studentData.name}. Here's your progress.</p>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1 space-y-6">
                            <ProfileSnapshot />
                            <ApplicationTracker />
                            <AnalyticsReport />
                        </div>
                        <div className="lg:col-span-2 space-y-6">
                            <RecommendedOpportunities />
                            <InterviewSchedule />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Notifications />
                                <FeedbackAndCertificates />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalState.isOpen} onClose={closeModal} onConfirm={handleConfirm} title={modalState.title} confirmText={modalState.confirmText} confirmColor={modalState.confirmColor}>
                <p>{modalState.body}</p>
            </Modal>
            <Footer />
        </div>
    );
}
