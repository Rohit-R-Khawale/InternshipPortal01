// /app/dashboard/company/page.jsx
"use client";
import { useState } from 'react';
import Header from '../components/dashboard/company/Header';
import KpiCard from '../components/dashboard/company/KpiCard';
import QuickActions from '../components/dashboard/company/QuickActions';
import JobsTable from '../components/dashboard/company/JobsTable';
import JobFormModal from '../components/dashboard/company/JobFormModal';
import { useDashboard } from './layout';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const { state } = useDashboard();
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  // Calculate KPIs
  const activeJobs = state.jobs.filter(job => job.status === 'Live').length;
  const totalApplicants = state.applicants.length;
  const newApplicants = state.applicants.filter(app => app.status === 'New').length;

  const kpis = [
    {
      title: 'Active Jobs',
      value: activeJobs,
      change: 12,
      icon: Briefcase,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Applicants',
      value: totalApplicants,
      change: 8,
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'New Applicants',
      value: newApplicants,
      change: -3,
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const recentJobs = state.jobs
    .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
    .slice(0, 5);

  return (
    <div>
      <Header title="Dashboard" action="Welcome back! Here's your hiring overview" />
      
      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => (
            <KpiCard key={index} {...kpi} />
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <QuickActions onNewJob={() => setIsJobModalOpen(true)} />
        </div>

        {/* Recent Jobs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Recent Job Postings</h2>
            <button 
              onClick={() => setIsJobModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              + Post New Job
            </button>
          </div>
          <JobsTable jobs={recentJobs} showActions={false} limit={5} />
        </div>
      </div>

      {/* Job Form Modal */}
      <JobFormModal 
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
      />
    </div>
  );
}