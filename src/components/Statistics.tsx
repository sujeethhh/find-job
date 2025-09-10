import { useEffect, useState, useRef } from "react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    jobs: 0,
    companies: 0,
    placements: 0,
    users: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    jobs: 15847,
    companies: 2340,
    placements: 12567,
    users: 89234,
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        jobs: Math.floor(finalCounts.jobs * easeOutQuart),
        companies: Math.floor(finalCounts.companies * easeOutQuart),
        placements: Math.floor(finalCounts.placements * easeOutQuart),
        users: Math.floor(finalCounts.users * easeOutQuart),
      });

      if (step >= steps) {
        clearInterval(interval);
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const statistics = [
    {
      count: counts.jobs,
      label: "Jobs Posted",
      description: "Active opportunities waiting for you",
      icon: "💼"
    },
    {
      count: counts.companies,
      label: "Companies",
      description: "Top employers hiring now",
      icon: "🏢"
    },
    {
      count: counts.placements,
      label: "Successful Placements",
      description: "Dreams turned into careers",
      icon: "🎯"
    },
    {
      count: counts.users,
      label: "Active Users",
      description: "Professionals trust our platform",
      icon: "👥"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 0%, transparent 50%)`
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the growing community of professionals who have found success through our platform
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
            
              
                
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-muted-foreground mb-6">
              Start your journey today and become part of our success story
            </p>
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;