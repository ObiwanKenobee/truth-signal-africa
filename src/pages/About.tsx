
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">About Civic Signal</h1>
          <p className="mb-4">This page will contain information about Civic Signal's mission, method, values, timeline of milestones, and the "Signal Cell" model.</p>
          <p>It will also feature the leadership team and community partners.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
