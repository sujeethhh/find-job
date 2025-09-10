import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, ArrowRight } from "lucide-react";


const Hero = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", jobTitle, "in", location);
    // Handle search logic here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-glow/20 rounded-full blur-xl animate-float" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Crack Your</span>
            <br />
            <span className="text-foreground">Dream Job Today</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Connect with top employers and unlock opportunities that match your skills. 
            Your next career breakthrough is just a search away.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up [animation-delay:400ms]">
            <div className="glass p-6 rounded-2xl shadow-glass">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Job Title Input */}
                <div className="md:col-span-5 relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 bg-background/80 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-medium text-foreground placeholder-muted-foreground transition-all"
                  />
                </div>

                {/* Location Input */}
                <div className="md:col-span-4 relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 bg-background/80 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-medium text-foreground placeholder-muted-foreground transition-all"
                  />
                </div>

                {/* Search Button */}
                <div className="md:col-span-3">
                  <Button 
                    onClick={handleSearch}
                    variant="hero" 
                    size="lg" 
                    className="w-full h-14 group"
                  >
                    <Search className="h-5 w-5" />
                    Search Jobs
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up [animation-delay:600ms]">
            
            
            
            
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;