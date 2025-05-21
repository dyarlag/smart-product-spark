
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-theme-teal" />
          <span className="font-display font-semibold text-xl text-theme-blue">PM.AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/courses" className="text-theme-text hover:text-theme-teal transition-colors">
              Courses
            </Link>
            <Link to="/resources" className="text-theme-text hover:text-theme-teal transition-colors">
              Resources
            </Link>
            <Link to="/about" className="text-theme-text hover:text-theme-teal transition-colors">
              About
            </Link>
          </div>
          
          {user ? (
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="flex items-center text-theme-text hover:text-theme-teal"
                onClick={() => navigate('/dashboard')}
              >
                <User className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button 
                className="bg-theme-teal hover:bg-opacity-90 transition-colors"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className="border-theme-teal text-theme-teal hover:bg-theme-teal hover:text-white"
                onClick={() => navigate('/login')}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button 
                className="bg-theme-teal hover:bg-opacity-90 transition-colors"
                onClick={() => navigate('/signup')}
              >
                <User className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </div>
          )}
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link 
              to="/courses" 
              className="px-4 py-2 text-theme-text hover:bg-theme-light-blue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/resources" 
              className="px-4 py-2 text-theme-text hover:bg-theme-light-blue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-theme-text hover:bg-theme-light-blue rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-theme-text hover:bg-theme-light-blue rounded-md flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
                <Button 
                  className="bg-theme-teal hover:bg-opacity-90 transition-colors w-full justify-center"
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-theme-text hover:bg-theme-light-blue rounded-md flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    className="bg-theme-teal hover:bg-opacity-90 transition-colors w-full justify-center"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
