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
    HeadphonesIcon,
    ShoppingCart,
    Video,
  } from "lucide-react"

  
  export default function Features() {
    const offerings = [
      {
        title: "Software Management",
        icon: <ChevronRight className="h-6 w-6" />,
        color: "bg-blue-100",
        textColor: "text-blue-600",
        path: "/all",
      },
      {
        title: "Cloud-Based School Management Software",
        icon: <Smartphone className="h-6 w-6" />,
        color: "bg-blue-100",
        path: "/cloud-management",
      },
      {
        title: "Software Solution Elements",
        icon: <Layers className="h-6 w-6" />,
        color: "bg-amber-300",
        path: "/software-solutions",
      },
      {
        title: "Learning Management Solution",
        icon: <BookOpen className="h-6 w-6" />,
        color: "bg-amber-100",
        path: "/learning-management",
      },
      {
        title: "Fee Finance for Students",
        icon: <CreditCard className="h-6 w-6" />,
        color: "bg-purple-400",
        textColor: "text-white",
        path: "/fee-finance",
      },
      {
        title: "Insurance: For Parent, Students and Assets",
        icon: <Shield className="h-6 w-6" />,
        color: "bg-purple-400",
        textColor: "text-white",
        path: "/insurance",
      },
      {
        title: "Digital Marketing and Branding Services",
        icon: <BarChart2 className="h-6 w-6" />,
        color: "bg-blue-100",
        path: "/digital-marketing",
      },
      {
        title: "Staffing Services",
        icon: <Users className="h-6 w-6" />,
        color: "bg-amber-300",
        path: "/staffing",
      },
      {
        title: "Capacity Building Programs for Teachers",
        icon: <Search className="h-6 w-6" />,
        color: "bg-blue-200",
        path: "/capacity-building",
      },
      {
        title: "Management Consultancy Services",
        icon: <HeadphonesIcon className="h-6 w-6" />,
        color: "bg-blue-100",
        path: "/consultancy",
      },
      {
        title: "E Commerce Platform",
        icon: <ShoppingCart className="h-6 w-6" />,
        color: "bg-blue-200",
        path: "/ecommerce",
      },
      {
        title: "Digital Content Recording and Live Lecture Delivery Studio",
        icon: <Video className="h-6 w-6" />,
        color: "bg-purple-400",
        textColor: "text-white",
        path: "/digital-content",
      },
    ]
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="inline-block px-6 py-3 text-2xl font-bold bg-amber-300 rounded-lg">Quick Campus Offerings</h1>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`${offering.color} ${offering.textColor || "text-gray-800"} p-6 rounded-lg flex flex-col h-40 relative overflow-hidden transition-transform hover:scale-105`}
            >
              <div className="z-10">
                <h2 className="font-medium text-lg mb-2">{offering.title}</h2>
              </div>
              <div className="absolute bottom-4 right-4 opacity-50">{offering.icon}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  