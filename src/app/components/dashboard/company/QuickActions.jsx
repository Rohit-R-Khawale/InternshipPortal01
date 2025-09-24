// /components/dashboard/company/QuickActions.jsx
"use client";
import { Plus, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function QuickActions({ onNewJob }) {
  const router = useRouter();

  const actions = [
    {
      icon: Plus,
      title: 'Post a New Job',
      description: 'Create a new internship opening',
      onClick: onNewJob,
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    {
      icon: Users,
      title: 'View All Applicants',
      description: 'Manage all candidate applications',
      onClick: () => router.push('/cta/applicants'),
      color: 'bg-green-50 border-green-200 text-green-700'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <button
            key={index}
            onClick={action.onClick}
            className={`p-6 rounded-xl border-2 border-dashed text-left transition-all hover:scale-105 hover:shadow-md ${action.color}`}
          >
            <Icon className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
            <p className="text-sm opacity-75">{action.description}</p>
          </button>
        );
      })}
    </div>
  );
}