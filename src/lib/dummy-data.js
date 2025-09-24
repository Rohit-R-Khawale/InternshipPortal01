// /lib/dummy-data.js
export const initialApplicants = [
  { 
    id: 1, 
    name: 'Rohan Sharma', 
    university: 'Pune University', 
    matchScore: 0.92, 
    status: 'Shortlisted', 
    resumeUrl: '#', 
    jobId: 101,
    email: 'rohan.sharma@email.com',
    phone: '+91 9876543210',
    appliedDate: '2024-01-15',
    skills: ['React', 'JavaScript', 'Next.js', 'TypeScript']
  },
  { 
    id: 2, 
    name: 'Priya Patel', 
    university: 'IIT Bombay', 
    matchScore: 0.88, 
    status: 'New', 
    resumeUrl: '#', 
    jobId: 101,
    email: 'priya.patel@email.com',
    phone: '+91 9876543211',
    appliedDate: '2024-01-16',
    skills: ['React', 'CSS', 'HTML5', 'UI/UX']
  },
  { 
    id: 3, 
    name: 'Aditya Singh', 
    university: 'COEP Pune', 
    matchScore: 0.85, 
    status: 'Interviewing', 
    resumeUrl: '#', 
    jobId: 102,
    email: 'aditya.singh@email.com',
    phone: '+91 9876543212',
    appliedDate: '2024-01-14',
    skills: ['Node.js', 'MongoDB', 'Express', 'REST APIs']
  },
  { 
    id: 4, 
    name: 'Ananya Gupta', 
    university: 'VIT Pune', 
    matchScore: 0.78, 
    status: 'New', 
    resumeUrl: '#', 
    jobId: 103,
    email: 'ananya.gupta@email.com',
    phone: '+91 9876543213',
    appliedDate: '2024-01-17',
    skills: ['Python', 'PyTorch', 'Data Analysis', 'Machine Learning']
  },
];

export const initialJobs = [
  { 
    id: 101, 
    title: 'Frontend Developer Intern', 
    status: 'Live', 
    skills: ['React', 'Next.js', 'TypeScript'], 
    applicants: [1, 2],
    postedDate: '2024-01-10',
    location: 'Remote',
    stipend: '₹25,000/month',
    description: 'We are looking for a passionate Frontend Developer Intern to join our team...'
  },
  { 
    id: 102, 
    title: 'Backend Engineer Intern', 
    status: 'Live', 
    skills: ['Node.js', 'PostgreSQL', 'Python'], 
    applicants: [3],
    postedDate: '2024-01-12',
    location: 'Pune, Maharashtra',
    stipend: '₹30,000/month',
    description: 'Join our backend team to build scalable APIs and database solutions...'
  },
  { 
    id: 103, 
    title: 'AI/ML Research Intern', 
    status: 'Pending Approval', 
    skills: ['PyTorch', 'Data Analysis'], 
    applicants: [4],
    postedDate: '2024-01-13',
    location: 'Bangalore, Karnataka',
    stipend: '₹35,000/month',
    description: 'Work on cutting-edge AI research projects with our data science team...'
  },
  { 
    id: 104, 
    title: 'Data Analyst', 
    status: 'Archived', 
    skills: ['SQL', 'Tableau'], 
    applicants: [],
    postedDate: '2023-12-15',
    location: 'Hyderabad, Telangana',
    stipend: '₹28,000/month',
    description: 'Analyze business data and create insightful reports for stakeholders...'
  },
];

export const predefinedSkills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'PyTorch', 'Data Analysis', 'SQL', 'Tableau', 'JavaScript', 'HTML5', 'CSS', 'MongoDB', 'Express', 'REST APIs', 'Machine Learning', 'UI/UX'];