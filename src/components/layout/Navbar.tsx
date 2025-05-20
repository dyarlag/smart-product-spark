
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          
          <Button className="bg-theme-teal hover:bg-opacity-90 transition-colors">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
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
            <Button 
              className="bg-theme-teal hover:bg-opacity-90 transition-colors flex justify-center items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
