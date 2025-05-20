
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, PlayCircle, BookOpen, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-theme-gray">
        <div className="bg-theme-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Explore our collection of articles, webinars, templates, and guides on AI product management.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="articles" className="w-full">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="articles" className="data-[state=active]:bg-theme-teal data-[state=active]:text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  Articles
                </TabsTrigger>
                <TabsTrigger value="webinars" className="data-[state=active]:bg-theme-teal data-[state=active]:text-white">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Webinars
                </TabsTrigger>
                <TabsTrigger value="guides" className="data-[state=active]:bg-theme-teal data-[state=active]:text-white">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Guides
                </TabsTrigger>
                <TabsTrigger value="templates" className="data-[state=active]:bg-theme-teal data-[state=active]:text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Templates
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Future of Product Management in the Age of AI",
                    excerpt: "Explore how artificial intelligence is transforming the role of product managers and what skills will be essential.",
                    date: "May 15, 2025",
                    readTime: "8 min read",
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop"
                  },
                  {
                    title: "Data-Driven Decision Making for Product Managers",
                    excerpt: "Learn how to leverage data and AI insights to make better product decisions and prioritize features.",
                    date: "May 10, 2025",
                    readTime: "6 min read",
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
                  },
                  {
                    title: "Ethical Considerations When Building AI Products",
                    excerpt: "A deep dive into the ethical implications of AI in product development and how to address them.",
                    date: "May 5, 2025",
                    readTime: "10 min read",
                    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop"
                  },
                  {
                    title: "Building Cross-Functional Collaboration for AI Products",
                    excerpt: "Strategies for effective collaboration between product, data science, and engineering teams.",
                    date: "April 28, 2025",
                    readTime: "7 min read",
                    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop"
                  },
                  {
                    title: "How to Create an AI Product Roadmap",
                    excerpt: "A step-by-step guide to creating product roadmaps for AI-powered features and products.",
                    date: "April 22, 2025",
                    readTime: "9 min read",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop"
                  },
                  {
                    title: "Measuring Success: KPIs for AI Products",
                    excerpt: "Learn which metrics matter most when evaluating the performance of AI features in your product.",
                    date: "April 18, 2025",
                    readTime: "8 min read",
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop"
                  }
                ].map((article, index) => (
                  <Card key={index} className="overflow-hidden card-hover">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-theme-blue">{article.title}</h3>
                      <p className="text-sm text-theme-text mb-4">{article.excerpt}</p>
                      <Button variant="link" className="p-0 text-theme-teal hover:text-theme-blue">
                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="webinars">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI Product Strategy Masterclass",
                    description: "Learn how to craft a winning product strategy that leverages AI capabilities.",
                    date: "May 25, 2025",
                    duration: "60 minutes",
                    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop",
                    speaker: "Emily Rodriguez, VP of Product at DataTech"
                  },
                  {
                    title: "The Future of Product Management",
                    description: "Explore how AI is changing the product management role and what skills you need for the future.",
                    date: "May 18, 2025",
                    duration: "45 minutes",
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
                    speaker: "David Chen, Director of Product at AICompany"
                  },
                  {
                    title: "AI Ethics for Product Teams",
                    description: "A practical guide to addressing ethical concerns in AI product development.",
                    date: "May 12, 2025",
                    duration: "50 minutes",
                    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop",
                    speaker: "Sarah Johnson, AI Ethics Lead at TechCorp"
                  }
                ].map((webinar, index) => (
                  <Card key={index} className="overflow-hidden card-hover">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={webinar.image} 
                        alt={webinar.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <PlayCircle className="h-16 w-16 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{webinar.date}</span>
                        <span className="mx-2">•</span>
                        <span>{webinar.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-theme-blue">{webinar.title}</h3>
                      <p className="text-sm text-theme-text mb-3">{webinar.description}</p>
                      <p className="text-xs text-gray-500 mb-4">Speaker: {webinar.speaker}</p>
                      <Button className="w-full bg-theme-teal hover:bg-opacity-90">
                        Watch Webinar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Complete Guide to AI Product Requirements",
                    description: "Learn how to write effective product requirements for AI features and products.",
                    pages: 45,
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop"
                  },
                  {
                    title: "AI Product Metrics Handbook",
                    description: "A comprehensive guide to measuring the success of AI-powered features.",
                    pages: 52,
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
                  },
                  {
                    title: "Ethical AI Product Development",
                    description: "A step-by-step guide to ensuring your AI products are ethical and responsible.",
                    pages: 68,
                    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop"
                  }
                ].map((guide, index) => (
                  <Card key={index} className="overflow-hidden card-hover">
                    <div className="h-48 overflow-hidden bg-theme-light-blue flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-theme-teal" />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>Guide</span>
                        <span className="mx-2">•</span>
                        <span>{guide.pages} pages</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-theme-blue">{guide.title}</h3>
                      <p className="text-sm text-theme-text mb-4">{guide.description}</p>
                      <Button className="w-full bg-theme-teal hover:bg-opacity-90">
                        Download Guide
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="templates">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI Product Requirements Template",
                    description: "A ready-to-use template for documenting AI product requirements and specifications.",
                    format: "Google Doc",
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop"
                  },
                  {
                    title: "AI Ethics Assessment Checklist",
                    description: "A comprehensive checklist to evaluate ethical considerations for AI features.",
                    format: "PDF",
                    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop"
                  },
                  {
                    title: "AI Product Roadmap Template",
                    description: "A strategic roadmap template designed specifically for AI product development.",
                    format: "Excel/Google Sheets",
                    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop"
                  },
                  {
                    title: "AI Feature Prioritization Framework",
                    description: "A framework to help product teams prioritize AI features based on impact and effort.",
                    format: "PDF + Excel",
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
                  },
                  {
                    title: "Data Requirements Specification Template",
                    description: "A template for documenting data needs for AI feature development.",
                    format: "Word/Google Doc",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop"
                  },
                  {
                    title: "AI Product Launch Checklist",
                    description: "A comprehensive checklist to ensure successful launches of AI-powered features.",
                    format: "PDF",
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop"
                  }
                ].map((template, index) => (
                  <Card key={index} className="overflow-hidden card-hover">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-center h-16 mb-4">
                        <Download className="h-10 w-10 text-theme-teal" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-theme-blue">{template.title}</h3>
                      <p className="text-sm text-theme-text mb-2">{template.description}</p>
                      <div className="text-sm text-gray-500 mb-4">Format: {template.format}</div>
                      <Button className="w-full bg-theme-teal hover:bg-opacity-90">
                        Download Template
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
