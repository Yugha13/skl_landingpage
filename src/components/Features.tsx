import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronRight,
  Smartphone,
  Layers,
  BookOpen,
  CreditCard,
  Shield,
  BarChart2,
  Users,
  Search,
  Headphones,
  ShoppingCart,
  Video,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const offerings = [
  { 
    title: 'Student Management',
    details: 'Manage student profiles, admissions, and records.',
    icon: <Users className="h-6 w-6" />
  },
  {
    title: 'Fees Management', 
    details: 'Monitor and process school fee collections.',
    icon: <CreditCard className="h-6 w-6" />
  },
  {
    title: 'Teacher Management',
    details: 'Add, remove, and manage teacher details.',
    icon: <Users className="h-6 w-6" />
  },
  {
    title: 'Data Analytics',
    details: 'Analyze school performance metrics and trends.',
    icon: <BarChart2 className="h-6 w-6" />
  },
  {
    title: 'Push Notifications',
    details: 'Send instant updates and announcements.',
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: 'Timetable',
    details: 'Create and manage class and exam schedules.',
    icon: <Layers className="h-6 w-6" />
  },
  {
    title: 'Salary Management',
    details: 'Manage teacher salaries and disbursements.',
    icon: <CreditCard className="h-6 w-6" />
  },
  {
    title: 'Inventory',
    details: 'Track and manage school assets and supplies.',
    icon: <ShoppingCart className="h-6 w-6" />
  },
  {
    title: 'Admin Panel',
    details: 'Management of all school activities.',
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: 'Teacher App',
    details: 'Manage attendance, results, and timetables and more.',
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: 'Parent/Student App',
    details: 'Stay updated with attendance, results, and schedules.',
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: 'Teacher Portal',
    details: 'Manage student records, attendance, and salaries.',
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: 'Parent Portal',
    details: 'Monitor student performance and receive notifications.',
    icon: <Search className="h-6 w-6" />
  },
  {
    title: 'Transport Management',
    details: 'Manage school bus routes and student transport.',
    icon: <ChevronRight className="h-6 w-6" />
  },
  {
    title: 'Disciplinary Tracking',
    details: 'Monitor and manage student disciplinary actions.',
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: 'Online Admission',
    details: 'Handle new student admissions and applications.',
    icon: <Video className="h-6 w-6" />
  }
];

const FilteredCampusOfferings = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedOfferings = showAll ? offerings : offerings.slice(0, 8);

  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="inline-block px-6 py-3 text-2xl font-bold bg-white text-gray-800 rounded-lg">
          Kiudtech Offerings
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedOfferings.map((offering, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg flex flex-col h-40 relative overflow-hidden transition-transform hover:scale-105 shadow-md"
          >
            <div className="z-10">
              <h2 className="font-medium text-lg mb-2 text-gray-900">{offering.title}</h2>
              <p className="text-gray-700">{offering.details}</p>
            </div>
            <div className="absolute bottom-4 right-4 opacity-50 text-gray-600">{offering.icon}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleToggleView}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          {showAll ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View More <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default FilteredCampusOfferings;
