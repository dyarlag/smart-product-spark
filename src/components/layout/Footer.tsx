
import { BookOpen, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-theme-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-theme-teal" />
              <span className="font-display font-semibold text-xl text-white">PM.AI</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Empowering Product Managers with AI skills for the future of product development.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-theme-teal transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Learning Paths</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-theme-teal transition-colors">AI Fundamentals</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-theme-teal transition-colors">Product Strategy</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-theme-teal transition-colors">Data-Driven Decisions</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-theme-teal transition-colors">AI Ethics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-300 hover:text-theme-teal transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-theme-teal transition-colors">Webinars</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-theme-teal transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-theme-teal transition-colors">Guides & Templates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-theme-teal transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-theme-teal transition-colors">Our Team</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-theme-teal transition-colors">Contact</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-theme-teal transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} PM.AI Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
