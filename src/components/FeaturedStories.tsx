
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StoryCard from "./StoryCard";

const FeaturedStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const stories = [
    {
      id: 1,
      title: "Water Resource Mismanagement in Lake Victoria Basin",
      location: "Kenya, Uganda, Tanzania",
      image: "https://images.unsplash.com/photo-1604859347368-c6e6b4cd4c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Local communities report systematic corruption in water management affecting millions around East Africa's largest lake.",
      status: "Published" as const,
      date: "Last updated: Apr 17, 2025",
      progress: 85,
      contributors: 24,
      category: "Environment"
    },
    {
      id: 2,
      title: "Healthcare Funding Discrepancies in Rural Districts",
      location: "Ghana, Togo",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      description: "Our investigation reveals millions in healthcare funds failing to reach intended rural communities across West African border regions.",
      status: "Verified" as const,
      date: "Last updated: Apr 23, 2025",
      progress: 60,
      contributors: 13,
      category: "Health"
    },
    {
      id: 3,
      title: "Mining Company Labor Violations Exposed",
      location: "Democratic Republic of Congo",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Workers from three provinces document consistent safety violations, wage theft, and child labor in critical mineral extraction.",
      status: "Impact" as const,
      date: "Last updated: Apr 5, 2025",
      progress: 100,
      contributors: 31,
      category: "Labor"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Featured Investigations</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile view: Single carousel */}
        <div className="block md:hidden">
          <div className="mb-6">
            <StoryCard {...stories[currentSlide]} />
          </div>
          <div className="flex justify-center gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentSlide === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop view: Show all stories */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            View All Investigations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStories;
