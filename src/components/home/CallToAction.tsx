
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-theme-blue text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-theme-teal"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-theme-teal"></div>
        <div className="absolute top-40 right-60 w-40 h-40 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Product Management Career?
          </h2>
          
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of product managers who are already leveraging AI to create better products and advance their careers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-theme-teal hover:bg-opacity-90 text-white px-8">
              <Link to="/courses" className="flex items-center">
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-300">
            30-day money-back guarantee. No risk, cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
