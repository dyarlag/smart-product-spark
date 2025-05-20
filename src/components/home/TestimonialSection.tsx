
import { Card } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Product Manager at TechCorp",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    quote: "The AI for Product Strategy course completely transformed my approach to roadmapping. I've implemented several key concepts that have significantly improved our product planning process."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Lead at InnovateTech",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    quote: "As a PM transitioning into an AI-focused role, this platform gave me exactly what I needed. The interactive learning modules helped me understand complex AI concepts without needing a technical background."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager at DataSense",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 4,
    quote: "The course on Data-Driven Product Decisions was eye-opening. I've completely revamped how we use data in our decision-making process, and our team is seeing much better outcomes."
  },
  {
    id: 4,
    name: "David Williams",
    role: "VP of Product at AIStartup",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    quote: "The community aspect of PM.AI is what sets it apart. Being able to connect with other product managers facing similar AI integration challenges has been invaluable for my professional growth."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-theme-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theme-blue">
            Success Stories
          </h2>
          <p className="text-lg text-theme-text">
            Hear from product managers who have transformed their careers with our AI-focused courses.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-theme-blue">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="italic text-theme-text flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative inline-flex" />
            <CarouselNext className="relative inline-flex" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
