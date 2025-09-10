import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import JobCategories from "@/components/JobCategories";
import Statistics from "@/components/Statistics";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <JobCategories />
      <Statistics />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
