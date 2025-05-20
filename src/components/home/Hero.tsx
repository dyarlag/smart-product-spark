
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-theme-blue to-theme-blue/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Become an AI-Powered <span className="text-theme-teal">Product Manager</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Master the intersection of product management and artificial intelligence with interactive courses designed for the future of product development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-theme-teal hover:bg-opacity-90 transition-all text-white px-8">
                <Link to="/courses" className="flex items-center">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full max-w-md animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
              <div className="bg-theme-teal/20 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-lg mb-2">Most Popular Course</h3>
                <h4 className="text-xl font-bold mb-3">AI for Product Strategy</h4>
                <p className="text-gray-200 mb-4">Learn how to leverage AI to create winning product strategies and roadmaps.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-theme-light-blue border-2 border-white flex items-center justify-center text-theme-blue text-xs font-bold">
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="ml-3 text-sm">+2,540 enrolled</span>
                  </div>
                  <Button size="sm" className="bg-white text-theme-blue hover:bg-theme-light-blue">
                    View
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <h4 className="font-medium">AI Fundamentals for PMs</h4>
                </div>
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <h4 className="font-medium">Data-Driven Product Decisions</h4>
                </div>
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <h4 className="font-medium">AI Ethics & Responsibility</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
