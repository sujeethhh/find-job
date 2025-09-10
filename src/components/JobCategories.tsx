import { 
  Code, 
  Stethoscope, 
  TrendingUp, 
  Megaphone, 
  ShoppingBag, 
  Palette,
  Building,
  GraduationCap,
  Wrench,
  Car,
  Camera,
  Coffee
} from "lucide-react";

const JobCategories = () => {
  const categories = [
    { name: "Technology", icon: Code, jobs: "2,847", color: "from-blue-500 to-cyan-500" },
    { name: "Healthcare", icon: Stethoscope, jobs: "1,923", color: "from-green-500 to-emerald-500" },
    { name: "Finance", icon: TrendingUp, jobs: "1,456", color: "from-purple-500 to-violet-500" },
    { name: "Marketing", icon: Megaphone, jobs: "1,234", color: "from-pink-500 to-rose-500" },
    { name: "Sales", icon: ShoppingBag, jobs: "987", color: "from-orange-500 to-amber-500" },
    { name: "Design", icon: Palette, jobs: "823", color: "from-indigo-500 to-purple-500" },
    { name: "Business", icon: Building, jobs: "756", color: "from-gray-500 to-slate-500" },
    { name: "Education", icon: GraduationCap, jobs: "643", color: "from-teal-500 to-cyan-500" },
    { name: "Engineering", icon: Wrench, jobs: "534", color: "from-red-500 to-pink-500" },
    { name: "Transportation", icon: Car, jobs: "423", color: "from-yellow-500 to-orange-500" },
    { name: "Media", icon: Camera, jobs: "345", color: "from-violet-500 to-purple-500" },
    { name: "Hospitality", icon: Coffee, jobs: "267", color: "from-emerald-500 to-teal-500" }
  ];

  return (
    <section id="categories" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Browse Jobs by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore opportunities across diverse industries and find your perfect career match
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group cursor-pointer animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="glass p-6 rounded-2xl text-center hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.jobs} jobs available
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="glass px-8 py-4 rounded-xl font-semibold text-primary hover:shadow-glow hover:-translate-y-1 transition-all duration-300 border border-primary/20">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;