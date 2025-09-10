import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Handle newsletter signup
  };

  const footerSections = [
    {
      title: "For Job Seekers",
      links: [
        { name: "Browse Jobs", href: "#" },
        { name: "Career Advice", href: "#" },
        { name: "Resume Builder", href: "#" },
        { name: "Salary Guide", href: "#" },
        { name: "Interview Tips", href: "#" }
      ]
    },
    {
      title: "For Employers",
      links: [
        { name: "Post a Job", href: "#" },
        { name: "Find Candidates", href: "#" },
        { name: "Pricing Plans", href: "#" },
        { name: "Recruitment Solutions", href: "#" },
        { name: "Company Profiles", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Site Map", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-background/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated with Latest Jobs
            </h2>
            <p className="text-xl text-background/70 mb-8">
              Get the best job opportunities delivered directly to your inbox
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-background/10 border border-background/20 text-background placeholder-background/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none backdrop-blur-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="default"
                  className="h-12 px-6"
                >
                  <Mail className="h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  CrackThatJob
                </div>
                <p className="text-background/70 leading-relaxed mb-6">
                  Connecting talented professionals with amazing career opportunities. 
                  Your dream job is just a click away.
                </p>
              </div>

              
              
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-lg mb-6 text-background">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;