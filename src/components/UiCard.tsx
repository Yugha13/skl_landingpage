import { ArrowRight } from "lucide-react";

const UiCard = () => {
  return (
    <section className="py-24 md:m-10 lg:m-20 rounded-3xl bg-[#4A148C]">
        <div className="container max-w-8xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            School Management Hub
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="lg:col-span-1 bg-white rounded-3xl p-8 relative reveal">
              <span className="text-gray-600 mb-4 block">Students Dashboard</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Learn, Grow, Succeed.
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Your academic journey made simpler.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Access timetables, assignments, and grades.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  View announcements, events, and school updates.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Personalize your learning experience with ease.
                </li>
              </ul>
              <div className="mt-8">
                <img 
                  src="/uploads/833561fe-1c33-44bf-94a3-742984577e40.png" 
                  alt="School Management Dashboard" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
            </div>
            
            <div className="bg-[#1E1F25] rounded-3xl p-8 text-white relative reveal">
            <span className="text-white-600 mb-4 block">Teachers Dashboard</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Empower, Educate, Excel.
              </h3>
              <p className="text-lg text-white-600 mb-6">
              Efficient tools for effective teaching.
              </p>
              <ul className="space-y-3 text-white-600">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Manage classes, attendance, and schedules.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Upload assignments, track progress, and provide feedback.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Collaborate and communicate with students and parents.
                </li>
              </ul>
              <div className="mt-8">
                <img 
                  src="/uploads/833561fe-1c33-44bf-94a3-742984577e40.png" 
                  alt="School Management Dashboard" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>


            <div className="lg:col-span-2 bg-white rounded-3xl p-8 relative reveal">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <span className="text-gray-600 mb-4 block">Admin Dashboard</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Streamline, Organize, Control.
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                  The backbone of seamless school management.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Monitor and manage students, teachers, and resources.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Generate reports and analytics for insightful decisions.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Secure and centralized management system.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Automated attendance tracking and reporting.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Send notifications, circulars, and announcements.
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/uploads/833561fe-1c33-44bf-94a3-742984577e40.png" 
                    alt="School Management Dashboard" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default UiCard