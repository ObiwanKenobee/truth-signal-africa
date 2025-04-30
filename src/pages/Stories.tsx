
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Stories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">Story Incubator</h1>
          <p className="mb-4">This page will display stories in cards with verification badges and filters by stage, region, and type.</p>
          <p>It will also show the "Lifecycle" UI that demonstrates how raw leads evolve into published impact.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
