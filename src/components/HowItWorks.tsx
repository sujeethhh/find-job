import { Search, FileText, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Search & Discover",
      description: "Use our intelligent search to find jobs that match your skills, experience, and career goals. Filter by location, salary, and company.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      icon: FileText,
      title: "Apply Instantly",
      description: "Submit applications with just one click using your profile. Our system automatically tailors your application to each position.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Get Hired",
      description: "Connect directly with hiring managers, track your application status, and prepare for interviews with our comprehensive resources.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to land your dream job
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-12 xl:w-20 h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-8">
                    <ArrowRight className="absolute right-0 top-1/2 transform translate-y-[-50%] translate-x-2 text-border w-4 h-4" />
                  </div>
                )}

                {/* Step Card */}
                <div className="glass p-8 rounded-2xl hover:shadow-glow hover-lift transition-all duration-500 text-center relative overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 left-4 text-6xl font-bold text-primary/10 select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} p-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>

                {/* Mobile Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-border to-transparent relative">
                      <ArrowRight className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-90 text-border w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of job seekers who have already found their dream careers through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                Start Job Search
              </button>
              <button className="glass px-8 py-4 rounded-xl font-semibold text-foreground hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;