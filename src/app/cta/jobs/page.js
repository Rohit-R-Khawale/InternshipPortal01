// /app/dashboard/company/jobs/page.jsx
"use client";
import { useState } from 'react';
import Header from '../../components/dashboard/company/Header';
import JobsTable from '../../components/dashboard/company/JobsTable';
import JobFormModal from '../../components/dashboard/company/JobFormModal';
import { useDashboard } from '../layout';

export default function JobsPage() {
  const { state } = useDashboard();
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [activeTab, setActiveTab] = useState('Active');

  const tabs = [
    { id: 'Active', label: 'Active Jobs', count: state.jobs.filter(job => job.status === 'Live').length },
    { id: 'Pending Approval', label: 'Pending Approval', count: state.jobs.filter(job => job.status === 'Pending Approval').length },
    { id: 'Archived', label: 'Archived', count: state.jobs.filter(job => job.status === 'Archived').length },
  ];

  const filteredJobs = state.jobs.filter(job => {
    if (activeTab === 'Active') {
      return job.status === 'Live';
    }
    return job.status === activeTab;
  });

  const handleEdit = (job) => {
    setEditingJob(job);
    setIsJobModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsJobModalOpen(false);
    setEditingJob(null);
  };

  const handleNewJob = () => {
    setEditingJob(null);
    setIsJobModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Manage Job Postings" 
        action="Create and manage your internship openings"
      />
      
      <div className="p-6">
        {/* Header with Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label} 
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
          
          <button
            onClick={handleNewJob}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2 w-fit"
          >
            <span>+</span>
            <span>Post a New Job</span>
          </button>
        </div>

        {/* Jobs Table */}
        {filteredJobs.length > 0 ? (
          <JobsTable 
            jobs={filteredJobs} 
            showActions={true}
            onEdit={handleEdit}
          />
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <div className="text-gray-400 text-lg mb-2">No jobs found</div>
            <div className="text-gray-500 mb-4">
              {activeTab === 'Active' 
                ? 'Get started by posting your first job!' 
                : `No ${activeTab.toLowerCase()} jobs.`
              }
            </div>
            {activeTab === 'Active' && (
              <button
                onClick={handleNewJob}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Post Your First Job
              </button>
            )}
          </div>
        )}
      </div>

      {/* Job Form Modal */}
      <JobFormModal 
        isOpen={isJobModalOpen}
        onClose={handleCloseModal}
        jobToEdit={editingJob}
      />
    </div>
  );
}