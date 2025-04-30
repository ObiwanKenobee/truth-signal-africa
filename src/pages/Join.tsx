
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Join = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">Get Involved</h1>
          <p className="mb-4">This page will allow users to join as a Contributor, Signal Cell member, or Partner.</p>
          <p>It will include an encrypted, mobile-first submission form and resources such as a verification handbook and safety guide.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Join;
