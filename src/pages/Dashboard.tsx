
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-theme-blue mb-6">My Learning Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-theme-light-blue rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
              <p className="text-theme-text mb-4">AI Fundamentals for Product Managers</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-theme-teal h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="mt-2 text-sm text-gray-500">45% completed</div>
              <Button className="mt-4 bg-theme-teal hover:bg-opacity-90">Continue Course</Button>
            </div>
            
            <div className="bg-theme-light-blue rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Recommended</h2>
              <p className="text-theme-text mb-2">Data-Driven Decision Making with AI</p>
              <p className="text-sm text-gray-500 mb-6">Learn how to leverage AI for better product decisions</p>
              <Button className="mt-4 bg-theme-teal hover:bg-opacity-90">Start Learning</Button>
            </div>
            
            <div className="bg-theme-light-blue rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-theme-teal rounded-full flex items-center justify-center text-white">1</div>
                  <span className="ml-3 text-theme-text">Completed AI Basics Module</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">2</div>
                  <span className="ml-3 text-gray-500">Implement AI in Product Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
