
import { Button } from "@/components/ui/button";
import { Flag, Users, FileCheck } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-indigo-900 text-white overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* This will be replaced with a video in a production environment */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1518784617403-e97d118a55be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            filter: "blur(2px)"
          }}
        ></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-indigo-900/70"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
            From whispers to reform: <span className="text-green-400">Where stories are born.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-indigo-100 mb-8 md:mb-12 max-w-2xl mx-auto">
            Civic Signal amplifies critical stories that might otherwise go untold, creating a pathway from local insight to verified investigation to lasting impact.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Flag className="mr-2 h-5 w-5" />
              Report a Lead
            </Button>
            <Button size="lg" className="bg-bronze-500 hover:bg-bronze-600 text-white">
              <Users className="mr-2 h-5 w-5" />
              Join a Signal Cell
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <FileCheck className="mr-2 h-5 w-5" />
              See Stories
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-lg mb-1">Live Regional Activity</h3>
            <p className="text-indigo-200 text-sm">Recent signals across Africa</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2 flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-sm">East Africa: 8 active</span>
            </div>
            
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2 flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-sm">West Africa: 12 active</span>
            </div>
            
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2 flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-sm">Southern Africa: 9 active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
