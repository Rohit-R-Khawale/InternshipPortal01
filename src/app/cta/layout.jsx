// /app/dashboard/company/layout.jsx
"use client";
import { createContext, useContext, useReducer } from 'react';
import Sidebar from '../components/dashboard/company/Sidebar';
import { initialApplicants, initialJobs } from '@/lib/dummy-data';

// Create Context
const DashboardContext = createContext();

// Reducer function
function dashboardReducer(state, action) {
  switch (action.type) {
    case 'ADD_JOB':
      const newJob = {
        ...action.payload,
        id: Math.max(...state.jobs.map(j => j.id)) + 1,
        applicants: [],
        postedDate: new Date().toISOString().split('T')[0],
        status: 'Pending Approval'
      };
      return {
        ...state,
        jobs: [...state.jobs, newJob]
      };

    case 'UPDATE_JOB':
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.id === action.payload.id ? { ...job, ...action.payload.updates } : job
        )
      };

    case 'UPDATE_APPLICANT_STATUS':
      return {
        ...state,
        applicants: state.applicants.map(applicant =>
          applicant.id === action.payload.applicantId
            ? { ...applicant, status: action.payload.status }
            : applicant
        )
      };

    case 'ARCHIVE_JOB':
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.id === action.payload ? { ...job, status: 'Archived' } : job
        )
      };

    case 'UNARCHIVE_JOB':
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.id === action.payload ? { ...job, status: 'Pending Approval' } : job
        )
      };

    default:
      return state;
  }
}

const initialState = {
  jobs: initialJobs,
  applicants: initialApplicants
};

export default function CompanyLayout({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};