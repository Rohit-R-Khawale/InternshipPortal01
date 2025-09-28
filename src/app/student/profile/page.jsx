"use client";
import React, { useState, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { motion } from "framer-motion";
import {
    User, Mail, Phone, Book, GraduationCap, Briefcase, FileText, PlusCircle,
    Trash2, Shield, Settings, AlertTriangle, BadgeCheck, Edit, Link as LinkIcon,
    Building2, Bot, Award, Dumbbell, KeyRound, LogOut, X, Menu
} from 'lucide-react';

// --- (Data and Reusable Components from previous steps) ---
const DEPARTMENTS = ["Computer Science", "Information Technology", "Electronics & Comm.", "Mechanical Engineering", "Civil Engineering"];
const YEARS = ["First", "Second", "Third", "Fourth"];
const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];
const initialProfileData = { name: "Prathamesh Jadhav", email: "alex.doe@university.edu", phone: "123-456-7890", education: { rollNumber: "E-21001", department: "Computer Science", year: "Fourth", cgpa: 8.75, currentSemester: 7, }, resumeFileName: "Alex_Doe_Resume.pdf", skills: ["React", "Node.js", "Python", "SQL"], badges: ["Python Certified", "AI Workshop"], workExperience: [{ title: 'Frontend Intern', company: 'Tech Solutions Inc.', startDate: '2024-06', endDate: '2024-08', description: 'Developed UIs using React.' }], projects: [{ title: 'Campus Placement Portal', link: 'https://github.com/alex-doe/portal', description: 'A full-stack application.' }], trainings: [{ name: 'Machine Learning Specialization', organization: 'Coursera', description: 'Completed a 5-course specialization.' }], extracurricular: [{ role: 'Coordinator', organization: 'Coding Club', description: 'Organized weekly coding competitions.' }], portfolioLinks: [{ title: 'GitHub', url: 'https://github.com/alex-doe' }], privacy_company_view: true, privacy_share_contact: false, };
const IconInput = React.forwardRef(({ icon, ...props }, ref) => (<div className="relative flex items-center"><div className="absolute left-3 text-gray-400">{icon}</div><input {...props} ref={ref} className="w-full pl-10 pr-4 py-2 border rounded-lg" /></div>));
IconInput.displayName = 'IconInput';
const SectionCard = ({ title, icon, children }) => (<div className="bg-white rounded-xl shadow-md overflow-hidden w-full"><div className="p-6 md:p-8"><div className="flex items-center mb-6">{icon}<h2 className="text-2xl font-bold text-gray-800 ml-3">{title}</h2></div><div className="space-y-8">{children}</div></div></div>);
const Modal = ({ isOpen, onClose, onConfirm, title, children, confirmText = "Confirm", confirmColor = "indigo" }) => { if (!isOpen) return null; const colorClasses = { indigo: 'bg-indigo-600 hover:bg-indigo-700', red: 'bg-red-600 hover:bg-red-700' }; return (<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"><div className="bg-white rounded-lg shadow-xl w-full max-w-md m-4"><div className="p-6"><div className="flex justify-between items-center pb-3"><h3 className="text-xl font-bold">{title}</h3><button onClick={onClose}><X size={24} /></button></div><div className="mt-2 text-gray-600">{children}</div></div><div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3 rounded-b-lg"><button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button><button type="button" onClick={onConfirm} className={`px-4 py-2 text-white rounded-md ${colorClasses[confirmColor]}`}>{confirmText}</button></div></div></div>); };

// --- NEWLY ADDED: Dynamic Field Array Component ---
const DynamicFieldArray = ({ control, register, name, fieldsConfig, sectionTitle, sectionIcon, emptyItem }) => {
    const { fields, append, remove } = useFieldArray({ control, name });

    return (
        <fieldset className="border-t pt-6">
            <legend className="text-lg font-semibold text-gray-700 flex items-center mb-4">
                {sectionIcon} <span className="ml-2">{sectionTitle}</span>
            </legend>
            <div className="space-y-6">
                {fields.map((item, index) => (
                    <div key={item.id} className="p-4 border rounded-lg bg-gray-50 relative">
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {fieldsConfig.map(field => (
                                <div key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
                                    <label className="font-medium text-sm mb-1 block">{field.label}</label>
                                    {field.type === 'textarea' ? (
                                        <textarea
                                            {...register(`${name}.${index}.${field.name}`)}
                                            placeholder={field.placeholder}
                                            rows={3}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                        />
                                    ) : (
                                        <input
                                            {...register(`${name}.${index}.${field.name}`)}
                                            type={field.type || 'text'}
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={() => append(emptyItem)}
                className="mt-4 flex items-center bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-200 transition duration-200"
            >
                <PlusCircle size={18} className="mr-2" /> Add {sectionTitle.slice(0, -1)}
            </button>
        </fieldset>
    );
};

// --- REUSABLE NAVBAR COMPONENTS ---

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

const UserActions = ({ openModal }) => {
    const handleLogout = () => openModal({ title: "Confirm Logout", body: "Are you sure you want to log out?", onConfirm: () => alert("Logging out..."), confirmText: "Logout" });
    return (
        <div className="hidden md:flex gap-4">
            <motion.button onClick={handleLogout} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium">
                <LogOut size={16} className="mr-2" /> Logout
            </motion.button>
        </div>
    );
};

const MobileMenu = ({ setMenuOpen, openModal }) => {
    const closeMenu = () => setMenuOpen(false);
    const handleLogout = () => {
        closeMenu();
        openModal({ title: "Confirm Logout", body: "Are you sure you want to log out?", onConfirm: () => alert("Logging out..."), confirmText: "Logout" });
    };
    return (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t px-6 py-4 space-y-4 shadow-lg">
            <a href="#" className="block py-2 hover:text-blue-600" onClick={closeMenu}>Dashboard</a>
            <a href="#" className="block py-2 hover:text-blue-600" onClick={closeMenu}>Job Listings</a>
            <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 mt-4">
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
                <UserActions openModal={openModal} />
                <motion.button whileTap={{ scale: 0.9 }} className="md:hidden text-gray-700 p-2 rounded-lg bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </nav>
            {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} openModal={openModal} />}
        </header>
    );
};


// --- FORM SECTION COMPONENTS ---

const PersonalEducationForm = ({ register, control, errors }) => (
    <SectionCard title="Personal & Education Info" icon={<User className="text-indigo-500" size={28} />}>
        <fieldset>
            <legend className="text-lg font-semibold text-gray-700 mb-4">Personal Details</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="font-medium mb-1 block">Full Name</label>
                    <IconInput icon={<User size={18} />} type="text" {...register("name", { required: "Name is required" })} placeholder="Your full name" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="font-medium mb-1 block">Email Address</label>
                    <IconInput icon={<Mail size={18} />} type="email" {...register("email", { required: "Email is required" })} placeholder="your.email@university.edu" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="font-medium mb-1 block">Phone Number</label>
                    <IconInput icon={<Phone size={18} />} type="tel" {...register("phone")} placeholder="123-456-7890" />
                </div>
            </div>
        </fieldset>
        <fieldset className="border-t pt-6">
            <legend className="text-lg font-semibold text-gray-700 mb-4">Education</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="font-medium mb-1 block">Roll Number</label>
                    <IconInput icon={<GraduationCap size={18} />} type="text" {...register("education.rollNumber", { required: "Roll number is required" })} placeholder="e.g., E-21001" />
                </div>
                <div>
                    <label className="font-medium mb-1 block">Department</label>
                    <Controller name="education.department" control={control} render={({ field }) => (
                        <select {...field} className="w-full p-2 border border-gray-300 rounded-lg">{DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}</select>
                    )} />
                </div>
                <div>
                    <label className="font-medium mb-1 block">Year</label>
                    <Controller name="education.year" control={control} render={({ field }) => (
                        <select {...field} className="w-full p-2 border border-gray-300 rounded-lg">{YEARS.map(y => <option key={y} value={y}>{y}</option>)}</select>
                    )} />
                </div>
                <div>
                    <label className="font-medium mb-1 block">CGPA</label>
                    <IconInput icon={<Book size={18} />} type="number" step="0.01" {...register("education.cgpa", { min: 0, max: 10 })} placeholder="e.g., 8.5" />
                </div>
                <div>
                    <label className="font-medium mb-1 block">Current Semester</label>
                    <Controller name="education.currentSemester" control={control} render={({ field }) => (
                        <select {...field} className="w-full p-2 border border-gray-300 rounded-lg">{SEMESTERS.map(s => <option key={s} value={s}>{s}</option>)}</select>
                    )} />
                </div>
            </div>
        </fieldset>
    </SectionCard>
);


const ProfessionalDetailsForm = ({ control, register, skills, setSkills, newSkill, setNewSkill, handleResumeChange, resumeFile }) => {
    const handleAddSkill = () => { if (newSkill && !skills.includes(newSkill)) { setSkills([...skills, newSkill]); setNewSkill(''); } };
    const handleRemoveSkill = (skillToRemove) => { setSkills(skills.filter(skill => skill !== skillToRemove)); };
    return (
        <SectionCard title="Professional Details" icon={<Briefcase className="text-indigo-500" size={28} />}>
            <DynamicFieldArray control={control} register={register} name="workExperience" sectionTitle="Work Experiences" sectionIcon={<Briefcase size={20} />} fieldsConfig={[{ name: 'title', label: 'Job Title', placeholder: 'e.g., Software Engineer Intern' }, { name: 'company', label: 'Company', placeholder: 'e.g., Google' }, { name: 'startDate', label: 'Start Date', type: 'month' }, { name: 'endDate', label: 'End Date', type: 'month' }, { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Your key responsibilities...', fullWidth: true },]} emptyItem={{ title: '', company: '', startDate: '', endDate: '', description: '' }} />
            <DynamicFieldArray control={control} register={register} name="projects" sectionTitle="Academics/Personal Projects" sectionIcon={<Bot size={20} />} fieldsConfig={[{ name: 'title', label: 'Project Title', placeholder: 'e.g., AI-Powered Chatbot' }, { name: 'link', label: 'Project Link', placeholder: 'https://github.com/user/repo' }, { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your project...', fullWidth: true },]} emptyItem={{ title: '', link: '', description: '' }} />
            <DynamicFieldArray control={control} register={register} name="trainings" sectionTitle="Trainings/Courses" sectionIcon={<Award size={20} />} fieldsConfig={[{ name: 'name', label: 'Training/Course Name', placeholder: 'e.g., Web Dev Bootcamp' }, { name: 'organization', label: 'Organization', placeholder: 'e.g., Udemy' }, { name: 'description', label: 'Description', type: 'textarea', placeholder: 'What did you learn?', fullWidth: true },]} emptyItem={{ name: '', organization: '', description: '' }} />
            <DynamicFieldArray control={control} register={register} name="extracurricular" sectionTitle="Extracurricular Activities" sectionIcon={<Dumbbell size={20} />} fieldsConfig={[{ name: 'role', label: 'Role/Position', placeholder: 'e.g., Event Head' }, { name: 'organization', label: 'Club/Organization', placeholder: 'e.g., Tech Club' }, { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your responsibilities.', fullWidth: true },]} emptyItem={{ role: '', organization: '', description: '' }} />
            <DynamicFieldArray control={control} register={register} name="portfolioLinks" sectionTitle="Portfolio/Links" sectionIcon={<LinkIcon size={20} />} fieldsConfig={[{ name: 'title', label: 'Website Name', placeholder: 'e.g., GitHub' }, { name: 'url', label: 'URL', placeholder: 'https://...' },]} emptyItem={{ title: '', url: '' }} />
            <fieldset className="border-t pt-6">
                <legend className="text-lg font-semibold text-gray-700 mb-4">Skills</legend>
                <div className="flex space-x-2">
                    <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="e.g., JavaScript" className="w-full px-4 py-2 border rounded-lg" />
                    <button type="button" onClick={handleAddSkill} className="flex items-center bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-600 shrink-0"><PlusCircle size={18} className="mr-2" /> Add</button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">{skills.map(skill => (<span key={skill} className="flex items-center bg-gray-200 text-sm px-3 py-1 rounded-full">{skill}<button type="button" onClick={() => handleRemoveSkill(skill)} className="ml-2 text-gray-500 hover:text-red-500"><Trash2 size={14} /></button></span>))}</div>
            </fieldset>
            <fieldset className="border-t pt-6">
                <legend className="text-lg font-semibold text-gray-700 mb-4">Master Resume</legend>
                <div className="flex flex-col sm:flex-row items-center p-4 border-2 border-dashed rounded-lg">
                    <FileText size={24} className="text-gray-500" />
                    <span className="text-gray-600 flex-grow mx-4">{resumeFile ? resumeFile.name : initialProfileData.resumeFileName}</span>
                    <label htmlFor="resume-upload" className="cursor-pointer bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-200">Upload New</label>
                    <input id="resume-upload" type="file" className="hidden" onChange={handleResumeChange} accept=".pdf,.doc,.docx" />
                </div>
            </fieldset>
        </SectionCard>
    );
};

const SettingsPrivacyForm = ({ control, openModal }) => {
    const [deleteConfirmText, setDeleteConfirmText] = useState('');
    const handleDeleteClick = () => { openModal({ title: "Confirm Account Deletion", body: "This action is irreversible. All your data will be permanently lost. Are you absolutely sure?", onConfirm: () => { console.log("Account Deletion Confirmed!"); alert("Account would be deleted."); }, confirmText: "Yes, Delete My Account", confirmColor: "red" }); };
    const handleLogoutClick = () => { openModal({ title: "Confirm Logout", body: "Are you sure you want to log out?", onConfirm: () => { console.log("Logout Confirmed!"); alert("Logging out..."); }, confirmText: "Logout" }); };
    return (
        <SectionCard title="Settings & Privacy" icon={<Settings className="text-indigo-500" size={28} />}>
            <fieldset>
                <legend className="text-lg font-semibold text-gray-700 mb-4">Privacy Settings</legend>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"><label htmlFor="privacy_company_view" className="pr-4">Allow companies to view my full profile</label><Controller name="privacy_company_view" control={control} render={({ field }) => (<input type="checkbox" id="privacy_company_view" className="form-checkbox h-5 w-5 text-indigo-600 rounded" checked={field.value} {...field} />)} /></div>
                    <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"><label htmlFor="privacy_share_contact" className="pr-4">Share contact details with recruiters</label><Controller name="privacy_share_contact" control={control} render={({ field }) => (<input type="checkbox" id="privacy_share_contact" className="form-checkbox h-5 w-5 text-indigo-600 rounded" checked={field.value} {...field} />)} /></div>
                </div>
                <button type="submit" className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700">Save Privacy Settings</button>
            </fieldset>
            <fieldset className="border-t pt-6">
                <legend className="text-lg font-semibold text-gray-700 mb-4">Change Password</legend>
                <div className="space-y-4"><IconInput icon={<KeyRound size={18} />} type="password" placeholder="Current Password" /><IconInput icon={<KeyRound size={18} />} type="password" placeholder="New Password" /><IconInput icon={<KeyRound size={18} />} type="password" placeholder="Confirm New Password" /></div>
                <button type="button" onClick={() => alert("Password change logic would go here.")} className="w-full mt-6 bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800">Update Password</button>
            </fieldset>
            <fieldset className="border-t pt-6">
                <legend className="text-lg font-semibold text-gray-700 mb-4">Change Email Address</legend>
                <div className="space-y-4"><IconInput icon={<Mail size={18} />} type="email" placeholder="New Email Address" /><IconInput icon={<Mail size={18} />} type="email" placeholder="Confirm New Email Address" /></div>
                <button type="button" onClick={() => alert("Email change logic would go here.")} className="w-full mt-6 bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800">Update Email</button>
            </fieldset>
            <fieldset className="border-t pt-6 border-red-300">
                <legend className="text-lg font-semibold text-red-600 mb-4">Danger Zone</legend>
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 space-y-6">
                    <div>
                        <h4 className="font-bold text-gray-800">Delete My Account</h4><p className="text-sm text-gray-600 mt-1">Once you delete your account, there is no going back.</p>
                        <div className="my-2"><label htmlFor="delete-confirm" className="text-sm font-medium">To confirm, type <strong className="text-red-700">DELETE MY ACCOUNT</strong> below:</label><input id="delete-confirm" type="text" value={deleteConfirmText} onChange={(e) => setDeleteConfirmText(e.target.value)} className="w-full mt-1 p-2 border rounded-lg" /></div>
                        <button type="button" onClick={handleDeleteClick} disabled={deleteConfirmText !== 'DELETE MY ACCOUNT'} className="w-full mt-2 bg-red-600 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-red-700">Delete My Account</button>
                    </div>
                    <div className="border-t pt-4">
                        <h4 className="font-bold text-gray-800">Logout</h4><p className="text-sm text-gray-600 mt-1">You will be returned to the login screen.</p>
                        <button type="button" onClick={handleLogoutClick} className="w-full mt-2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300"><LogOut className="inline-block mr-2" size={16} /> Logout</button>
                    </div>
                </div>
            </fieldset>
        </SectionCard>
    );
};


const Sidebar = ({ activeView, setActiveView }) => {
    const navItems = [
        { id: 'personal', label: 'Personal & Education', icon: <User size={20} /> },
        { id: 'professional', label: 'Professional Details', icon: <Briefcase size={20} /> },
        { id: 'settings', label: 'Settings & Privacy', icon: <Settings size={20} /> },
    ];
    return (<aside className="w-64 bg-white shadow-md h-full p-4 shrink-0"><div className="mb-8 text-center"><h1 className="text-2xl font-bold text-indigo-600">My Profile</h1></div><nav className="space-y-2">{navItems.map(item => (<button key={item.id} onClick={() => setActiveView(item.id)} className={`w-full flex items-center px-4 py-3 text-left font-medium rounded-lg ${activeView === item.id ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}>{item.icon}<span className="ml-3">{item.label}</span></button>))}</nav></aside>);
};

// --- Main Student Profile Page Component ---
export default function StudentProfilePage() {
    const [activeView, setActiveView] = useState('personal');
    const [skills, setSkills] = useState(initialProfileData.skills);
    const [newSkill, setNewSkill] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [modalState, setModalState] = useState({ isOpen: false });

    const { register, handleSubmit, control, formState: { errors } } = useForm({ defaultValues: initialProfileData });

    const openModal = ({ title, body, onConfirm, confirmText, confirmColor }) => setModalState({ isOpen: true, title, body, onConfirm, confirmText, confirmColor });
    const closeModal = () => setModalState({ isOpen: false });
    const handleConfirm = () => { if (modalState.onConfirm) modalState.onConfirm(); closeModal(); };

    const onSubmit = (data) => {
        const finalData = { ...data, skills, resume: resumeFile ? resumeFile.name : initialProfileData.resumeFileName };
        console.log("Saving Data:", finalData);
        alert("Profile settings saved!");
    };

    const handleResumeChange = (e) => { if (e.target.files[0]) { setResumeFile(e.target.files[0]); } };

    const renderContent = () => {
        switch (activeView) {
            case 'personal': return <PersonalEducationForm register={register} control={control} errors={errors} />;
            case 'professional': return <ProfessionalDetailsForm {...{ control, register, skills, setSkills, newSkill, setNewSkill, handleResumeChange, resumeFile }} />;
            case 'settings': return <SettingsPrivacyForm control={control} openModal={openModal} />;
            default: return <PersonalEducationForm register={register} control={control} errors={errors} />;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-700">
            <Navbar openModal={openModal} />
            <div className="flex pt-20 h-screen"> {/* pt-20 to offset navbar height */}
                <Sidebar activeView={activeView} setActiveView={setActiveView} />
                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    <div className="max-w-4xl mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            {renderContent()}
                        </form>
                    </div>
                </main>
            </div>
            <Modal isOpen={modalState.isOpen} onClose={closeModal} onConfirm={handleConfirm} title={modalState.title} confirmText={modalState.confirmText} confirmColor={modalState.confirmColor}>
                <p>{modalState.body}</p>
            </Modal>
        </div>
    );
}