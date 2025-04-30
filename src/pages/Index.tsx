
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignalMap from "@/components/SignalMap";
import FeaturedStories from "@/components/FeaturedStories";
import Footer from "@/components/Footer";
import { Gavel, Shield, Users, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">How Civic Signal Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Our model transforms anonymous tips into verified investigations with real-world impact, while protecting all participants.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">1. Submit a Lead</h3>
                <p className="text-gray-600">Local insights and tips are submitted securely through encrypted channels.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">2. Verify Information</h3>
                <p className="text-gray-600">Our trained Signal Cell members verify facts and gather supporting evidence.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">3. Build the Case</h3>
                <p className="text-gray-600">A community of contributors develops the investigation collaboratively.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">4. Create Impact</h3>
                <p className="text-gray-600">Verified stories drive accountability and reform where it matters most.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Signal Map Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Active Signals Across Africa</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Track ongoing investigations and recent signals across the continent.</p>
            </div>
            
            <SignalMap />
          </div>
        </section>
        
        {/* Featured Stories Section */}
        <FeaturedStories />
        
        {/* Join the Movement Section */}
        <section className="py-12 md:py-16 bg-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Join the Movement</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-8">Be part of a continent-wide network of truth-seekers and change-makers.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-indigo-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Become a Contributor</h3>
                <p className="text-indigo-200 mb-4">Share your expertise, verify facts, or support investigations remotely.</p>
                <a href="/join" className="text-green-400 hover:text-green-300 font-medium inline-block mt-2">Learn more →</a>
              </div>
              
              <div className="bg-indigo-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Join a Signal Cell</h3>
                <p className="text-indigo-200 mb-4">Become part of a local team working together to investigate critical issues.</p>
                <a href="/join" className="text-green-400 hover:text-green-300 font-medium inline-block mt-2">Learn more →</a>
              </div>
              
              <div className="bg-indigo-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Partner With Us</h3>
                <p className="text-indigo-200 mb-4">Organizations can support our work through funding, resources, or collaboration.</p>
                <a href="/join" className="text-green-400 hover:text-green-300 font-medium inline-block mt-2">Learn more →</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
