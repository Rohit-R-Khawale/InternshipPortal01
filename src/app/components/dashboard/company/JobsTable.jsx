// /components/dashboard/company/JobsTable.jsx
"use client";
import { useState } from 'react';
import { Edit2, Archive, Users, MoreVertical, RotateCcw } from 'lucide-react';
import { useDashboard } from '../../../cta/layout';

export default function JobsTable({ jobs, showActions = true, onEdit, limit }) {
  const { dispatch } = useDashboard();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const displayedJobs = limit ? jobs.slice(0, limit) : jobs;

  const getStatusColor = (status) => {
    const colors = {
      'Live': 'bg-green-100 text-green-800',
      'Pending Approval': 'bg-yellow-100 text-yellow-800',
      'Archived': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleArchive = (jobId) => {
    dispatch({ type: 'ARCHIVE_JOB', payload: jobId });
    setActiveDropdown(null);
  };

  const handleUnarchive = (jobId) => {
    dispatch({ type: 'UNARCHIVE_JOB', payload: jobId });
    setActiveDropdown(null);
  };

  const toggleDropdown = (jobId) => {
    setActiveDropdown(activeDropdown === jobId ? null : jobId);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Posted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applicants
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              {showActions && (
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.location}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {new Date(job.postedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm font-medium">{job.applicants.length}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                    {job.status}
                  </span>
                </td>
                {showActions && (
                  <td className="px-6 py-4 text-right text-sm font-medium relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(job.id);
                      }}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === job.id && (
                      <div 
                        className="absolute right-6 top-12 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="py-1">
                          <button
                            onClick={() => {
                              onEdit(job);
                              setActiveDropdown(null);
                            }}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <Edit2 className="w-4 h-4 mr-2" />
                            Edit Job
                          </button>
                          
                          {job.status === 'Archived' ? (
                            <button
                              onClick={() => handleUnarchive(job.id)}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              <RotateCcw className="w-4 h-4 mr-2" />
                              Unarchive Job
                            </button>
                          ) : (
                            <button
                              onClick={() => handleArchive(job.id)}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              <Archive className="w-4 h-4 mr-2" />
                              Archive Job
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Overlay to close dropdown when clicking outside */}
        {activeDropdown && (
          <div 
            className="fixed inset-0 z-0" 
            onClick={handleClickOutside}
          />
        )}
      </div>
    </div>
  );
}