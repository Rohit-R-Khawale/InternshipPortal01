// /app/dashboard/company/applicants/page.jsx
"use client";
import { useState } from 'react';
import Header from '../../components/dashboard/company/Header';
import ApplicantsList from '../../components/dashboard/company/ApplicantsList';
import { useDashboard } from '../layout';

export default function ApplicantsPage() {
  const { state } = useDashboard();
  const [selectedJob, setSelectedJob] = useState('all');

  // Get unique jobs for filter dropdown
  const jobOptions = [
    { id: 'all', title: 'All Jobs' },
    ...state.jobs.map(job => ({ id: job.id, title: job.title }))
  ];

  // Filter applicants by selected job
  const filteredApplicants = selectedJob === 'all' 
    ? state.applicants 
    : state.applicants.filter(applicant => applicant.jobId === parseInt(selectedJob));

  return (
    <div>
      <Header 
        title="Manage Applicants" 
        action="Review and manage candidate applications"
      />
      
      <div className="p-6">
        {/* Filter Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <label htmlFor="job-filter" className="text-sm font-medium text-gray-700">
              Filter by Job:
            </label>
            <select
              id="job-filter"
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {jobOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-sm text-gray-600">
            Showing {filteredApplicants.length} applicants
          </div>
        </div>

        {/* Applicants List */}
        <ApplicantsList applicants={filteredApplicants} />
      </div>
    </div>
  );
}