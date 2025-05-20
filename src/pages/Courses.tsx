
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const allCourses = [
  {
    id: 1,
    title: "AI Fundamentals for Product Managers",
    description: "Learn the core concepts of AI and how they apply to product management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
    level: "Beginner",
    duration: "4 weeks",
    students: 2345,
    modules: 6,
    category: "fundamentals",
    isPopular: true,
  },
  {
    id: 2,
    title: "AI for Product Strategy & Roadmapping",
    description: "Discover how to use AI to create more effective product strategies and roadmaps.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop",
    level: "Intermediate",
    duration: "6 weeks",
    students: 1876,
    modules: 8,
    category: "strategy",
    isPopular: false,
  },
  {
    id: 3,
    title: "Data-Driven Product Decisions",
    description: "Learn to make better product decisions with data analysis and AI insights.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    level: "Intermediate",
    duration: "5 weeks",
    students: 1543,
    modules: 7,
    category: "data",
    isPopular: true,
  },
  {
    id: 4,
    title: "AI Ethics for Product Leaders",
    description: "Understand the ethical implications of AI in your products and how to address them.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop",
    level: "Advanced",
    duration: "4 weeks",
    students: 978,
    modules: 5,
    category: "ethics",
    isPopular: false,
  },
  {
    id: 5,
    title: "User Research with AI",
    description: "Master modern user research techniques enhanced with AI tools and methodologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
    level: "Intermediate",
    duration: "4 weeks",
    students: 1250,
    modules: 6,
    category: "research",
    isPopular: false,
  },
  {
    id: 6,
    title: "AI Product Metrics & Analytics",
    description: "Learn how to measure success for AI-powered products and features.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop",
    level: "Intermediate",
    duration: "5 weeks",
    students: 1089,
    modules: 7,
    category: "data",
    isPopular: false,
  },
  {
    id: 7,
    title: "Emerging AI Technologies for PMs",
    description: "Stay ahead with knowledge of cutting-edge AI technologies relevant to product management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
    level: "Advanced",
    duration: "6 weeks",
    students: 875,
    modules: 8,
    category: "fundamentals",
    isPopular: false,
  },
  {
    id: 8,
    title: "AI Communication for Product Leaders",
    description: "Learn to effectively explain and advocate for AI features to stakeholders and customers.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop",
    level: "Intermediate",
    duration: "3 weeks",
    students: 980,
    modules: 5,
    category: "leadership",
    isPopular: false,
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  
  const filteredCourses = allCourses.filter(course => {
    // Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    
    // Level filter
    const matchesLevel = levelFilter === "all" || course.level.toLowerCase() === levelFilter.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-theme-gray">
        <div className="bg-theme-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Courses</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Explore our comprehensive curriculum designed to help product managers master AI skills and concepts.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Search and filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  className="px-4 py-2 border rounded-md"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="fundamentals">AI Fundamentals</option>
                  <option value="strategy">Product Strategy</option>
                  <option value="data">Data & Analytics</option>
                  <option value="research">User Research</option>
                  <option value="ethics">Ethics</option>
                  <option value="leadership">Leadership</option>
                </select>
                
                <select
                  className="px-4 py-2 border rounded-md"
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  {course.isPopular && (
                    <Badge className="absolute top-3 right-3 bg-theme-teal">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs font-normal">
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 leading-tight text-theme-blue">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-theme-text mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {course.modules} modules
                    </div>
                  </div>
                  
                  <Button className="w-full bg-theme-teal hover:bg-opacity-90">
                    <Link to={`/courses/${course.id}`}>View Course</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-theme-text">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
