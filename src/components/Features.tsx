import { Brain, Zap, BarChart3, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Job Matching",
      description: "Our AI-powered algorithm analyzes your skills, experience, and preferences to find the perfect job matches tailored just for you.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Instant Applications",
      description: "Apply to multiple jobs with a single click. Our streamlined process saves you time and gets you noticed faster by employers.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Career Insights",
      description: "Get detailed analytics on your job search progress, market trends, and salary insights to make informed career decisions.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Employer Connect",
      description: "Direct access to hiring managers and recruiters. Build meaningful connections that lead to your next career opportunity.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">CrackThatJob?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover the features that make job searching smarter, faster, and more successful
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Feature Card */}
              <div className="glass p-8 rounded-2xl h-full hover:shadow-glow transition-all duration-500">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;