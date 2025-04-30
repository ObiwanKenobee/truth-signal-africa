
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Toolkit = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">Civic Toolkit</h1>
          <p className="mb-4">This page will provide downloadable resources, case studies, and partner links.</p>
          <p>It will include templates for community storytelling.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Toolkit;
