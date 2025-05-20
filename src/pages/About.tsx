
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Briefcase, GraduationCap, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-theme-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PM.AI</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              We're on a mission to empower product managers with the AI skills they need to build the products of tomorrow.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-theme-blue">Our Story</h2>
                <p className="text-lg mb-6 text-theme-text">
                  PM.AI was founded in 2024 by a team of product leaders who saw a critical gap in the industry: while AI was transforming how products are built, most product managers weren't equipped with the knowledge to leverage these new capabilities.
                </p>
                <p className="text-lg mb-8 text-theme-text">
                  Our platform combines practical product management expertise with accessible AI education, creating a unique learning experience designed specifically for product professionals who want to stay ahead in an AI-driven world.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-theme-teal mb-1">15+</div>
                    <div className="text-sm text-gray-500">Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-theme-teal mb-1">10k+</div>
                    <div className="text-sm text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-theme-teal mb-1">50+</div>
                    <div className="text-sm text-gray-500">Resources</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-theme-teal mb-1">4.9</div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-theme-gray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-theme-blue">Our Core Values</h2>
              <p className="text-lg text-theme-text">
                These principles guide everything we do in our mission to create the best learning experience for product managers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Practical Learning",
                  description: "We focus on applicable skills and real-world scenarios that product managers can immediately use in their work."
                },
                {
                  icon: Users,
                  title: "Community First",
                  description: "We believe in the power of learning together and have built a supportive community of product professionals."
                },
                {
                  icon: Award,
                  title: "Excellence & Rigor",
                  description: "Our content is crafted by industry experts and constantly updated to reflect the latest best practices."
                },
                {
                  icon: Briefcase,
                  title: "Industry Relevance",
                  description: "Everything we teach is directly applicable to the challenges product managers face in today's AI landscape."
                },
                {
                  icon: GraduationCap,
                  title: "Continuous Improvement",
                  description: "We're constantly refining our curriculum based on student feedback and industry changes."
                },
                {
                  icon: MessageSquare,
                  title: "Accessible Learning",
                  description: "We make complex AI concepts understandable and relevant for product professionals of all technical levels."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="inline-flex p-3 rounded-lg bg-theme-light-blue mb-4">
                    <value.icon className="h-6 w-6 text-theme-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-theme-blue">{value.title}</h3>
                  <p className="text-theme-text">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-theme-blue">Our Team</h2>
              <p className="text-lg text-theme-text">
                Meet the product leaders, AI experts, and educators behind PM.AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Rodriguez",
                  role: "Founder & CEO",
                  bio: "Former VP of Product at TechCorp with 15+ years of product leadership experience.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  name: "Sarah Chen",
                  role: "Head of Curriculum",
                  bio: "AI product leader with experience at major tech companies and 10+ years in edtech.",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                  name: "Michael Johnson",
                  role: "AI Education Lead",
                  bio: "Former AI researcher and product manager specializing in making AI concepts accessible.",
                  image: "https://randomuser.me/api/portraits/men/22.jpg"
                },
                {
                  name: "Emily Wong",
                  role: "Community Director",
                  bio: "Community building expert with a background in product management and education.",
                  image: "https://randomuser.me/api/portraits/women/29.jpg"
                }
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-4 border-theme-light-blue">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-theme-blue">{person.name}</h3>
                  <p className="text-theme-teal font-medium mb-2">{person.role}</p>
                  <p className="text-sm text-theme-text max-w-xs mx-auto">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-theme-light-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-theme-blue">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 text-theme-text max-w-3xl mx-auto">
              Start your journey to becoming an AI-powered product manager today and join thousands of professionals already transforming their careers.
            </p>
            <Button size="lg" className="bg-theme-teal hover:bg-opacity-90 text-white px-8 text-lg">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
