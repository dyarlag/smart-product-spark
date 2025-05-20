
import { 
  BookOpen, 
  BrainCircuit, 
  LineChart, 
  Users, 
  FileCheck, 
  MessageSquare 
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Curriculum",
    description: "Engage with hands-on exercises and real-world scenarios designed for product managers."
  },
  {
    icon: BrainCircuit,
    title: "AI Fundamentals",
    description: "Learn the core concepts of AI and machine learning without needing to code."
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description: "Master the art of making informed product decisions with AI-powered analytics."
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Connect with other product managers and share insights in our community forums."
  },
  {
    icon: FileCheck,
    title: "Practical Exercises",
    description: "Apply your knowledge with real-world exercises and projects evaluated by AI."
  },
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Get personalized guidance and feedback from our AI product mentor."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-theme-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theme-blue">
            The Complete Learning Experience
          </h2>
          <p className="text-lg text-theme-text">
            Our curriculum combines product management best practices with cutting-edge AI skills to prepare you for the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="inline-flex p-3 rounded-lg bg-theme-light-blue mb-4">
                <feature.icon className="h-6 w-6 text-theme-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-theme-blue">{feature.title}</h3>
              <p className="text-theme-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
