
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SignalMapPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">Signal Map</h1>
          <p className="mb-4">This page will contain the full interactive civic map showing story locations, severity index, impact outcomes, and sector filters.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignalMapPage;
