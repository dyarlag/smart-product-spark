
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "AI Fundamentals for Product Managers",
    description: "Learn the core concepts of AI and how they apply to product management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
    level: "Beginner",
    duration: "4 weeks",
    students: 2345,
    modules: 6,
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
    isPopular: false,
  }
];

const CoursePreview = () => {
  const [activeTab, setActiveTab] = useState("popular");
  
  const filteredCourses = activeTab === "all" 
    ? courses 
    : activeTab === "popular" 
      ? courses.filter(course => course.isPopular)
      : courses.filter(course => course.level.toLowerCase() === activeTab);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theme-blue">
              Featured Courses
            </h2>
            <p className="text-lg text-theme-text max-w-2xl">
              Master the skills needed to excel as a product manager in the age of AI with our expert-crafted courses.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeTab === "popular" ? "default" : "outline"} 
              onClick={() => setActiveTab("popular")}
              className={activeTab === "popular" ? "bg-theme-teal" : ""}
            >
              Popular
            </Button>
            <Button 
              variant={activeTab === "beginner" ? "default" : "outline"} 
              onClick={() => setActiveTab("beginner")}
              className={activeTab === "beginner" ? "bg-theme-teal" : ""}
            >
              Beginner
            </Button>
            <Button 
              variant={activeTab === "intermediate" ? "default" : "outline"} 
              onClick={() => setActiveTab("intermediate")}
              className={activeTab === "intermediate" ? "bg-theme-teal" : ""}
            >
              Intermediate
            </Button>
            <Button 
              variant={activeTab === "all" ? "default" : "outline"} 
              onClick={() => setActiveTab("all")}
              className={activeTab === "all" ? "bg-theme-teal" : ""}
            >
              View All
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" className="border-theme-teal text-theme-teal hover:bg-theme-light-blue">
            <Link to="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
