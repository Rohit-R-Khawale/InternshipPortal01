// /components/dashboard/company/ApplicantsList.jsx
"use client";
import { useDashboard } from '../../../cta/layout';

export default function ApplicantsList({ applicants, onStatusChange }) {
  const { dispatch } = useDashboard();

  const handleStatusChange = (applicantId, newStatus) => {
    dispatch({
      type: 'UPDATE_APPLICANT_STATUS',
      payload: {
        applicantId,
        status: newStatus
      }
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800',
      'Shortlisted': 'bg-purple-100 text-purple-800',
      'Interviewing': 'bg-yellow-100 text-yellow-800',
      'Hired': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getMatchScoreColor = (score) => {
    if (score >= 0.9) return 'text-green-600';
    if (score >= 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-4">
      {applicants.map((applicant) => (
        <div key={applicant.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {applicant.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{applicant.name}</h3>
                <p className="text-sm text-gray-600">{applicant.university}</p>
                <div className="flex items-center mt-1 space-x-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(applicant.status)}`}>
                    {applicant.status}
                  </span>
                  <span className={`text-sm font-semibold ${getMatchScoreColor(applicant.matchScore)}`}>
                    Match: {Math.round(applicant.matchScore * 100)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Applied on {new Date(applicant.appliedDate).toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-1 mt-2 max-w-xs justify-end">
                  {applicant.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                  {applicant.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{applicant.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <select
                value={applicant.status}
                onChange={(e) => handleStatusChange(applicant.id, e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="New">New</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                View Resume
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}