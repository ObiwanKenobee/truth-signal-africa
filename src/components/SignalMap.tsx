
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle,
  FileCheck, 
  Award
} from "lucide-react";

const SignalMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  // For the MVP, we'll create a simplified map with placeholder signals
  const regions = [
    { id: "west", name: "West Africa", signals: 12, x: 22, y: 40, active: true },
    { id: "east", name: "East Africa", signals: 8, x: 53, y: 42, active: true },
    { id: "north", name: "North Africa", signals: 5, x: 40, y: 20, active: false },
    { id: "central", name: "Central Africa", signals: 7, x: 40, y: 40, active: true },
    { id: "south", name: "Southern Africa", signals: 9, x: 45, y: 70, active: true }
  ];

  const recentSignals = [
    {
      id: 1,
      region: "east",
      title: "Healthcare Funding Misappropriation",
      location: "Nairobi County, Kenya",
      type: "Governance",
      severity: "High",
      status: "Verified",
      icon: <Shield className="h-4 w-4" />
    },
    {
      id: 2,
      region: "west",
      title: "Mining Pollution Claims",
      location: "Accra, Ghana",
      type: "Environment",
      severity: "Medium",
      status: "Lead",
      icon: <AlertTriangle className="h-4 w-4" />
    },
    {
      id: 3,
      region: "central",
      title: "Education Fund Transparency",
      location: "Kinshasa, DRC",
      type: "Education",
      severity: "Medium",
      status: "Published",
      icon: <FileCheck className="h-4 w-4" />
    },
    {
      id: 4,
      region: "south",
      title: "Water Infrastructure Investigation",
      location: "Cape Town, South Africa",
      type: "Infrastructure",
      severity: "High",
      status: "Impact",
      icon: <Award className="h-4 w-4" />
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Map visualization */}
          <div className="w-full md:w-2/3 aspect-[4/3] bg-indigo-50 rounded-lg relative">
            {/* Placeholder for Africa map outline */}
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" 
                 style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/800px-Africa_%28orthographic_projection%29.svg.png')" }}>
              
              {/* Signal dots on the map */}
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                    region.active ? "bg-green-500" : "bg-gray-400"
                  } rounded-full p-1 ${
                    activeRegion === region.id || !activeRegion ? "" : "opacity-50"
                  }`}
                  style={{ left: `${region.x}%`, top: `${region.y}%` }}
                  onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
                >
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      region.active ? "bg-green-400" : "bg-gray-300"
                    } opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${
                      region.active ? "bg-green-500" : "bg-gray-400"
                    }`}></span>
                  </span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-medium bg-white px-2 py-1 rounded shadow whitespace-nowrap">
                    {region.name} ({region.signals})
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent signals panel */}
          <div className="w-full md:w-1/3 bg-white">
            <h3 className="font-serif text-xl font-bold mb-4">Recent Signals</h3>
            <div className="space-y-3">
              {recentSignals
                .filter(signal => !activeRegion || signal.region === activeRegion)
                .map(signal => (
                  <div key={signal.id} className="p-3 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-900">{signal.title}</h4>
                      <Badge 
                        className={`
                          ${signal.status === 'Verified' ? 'bg-yellow-500' : ''}
                          ${signal.status === 'Lead' ? 'bg-gray-500' : ''}
                          ${signal.status === 'Published' ? 'bg-indigo-500' : ''}
                          ${signal.status === 'Impact' ? 'bg-green-500' : ''}
                        `}
                      >
                        <span className="flex items-center gap-1">
                          {signal.icon}
                          {signal.status}
                        </span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{signal.location}</p>
                    <div className="flex items-center mt-2 gap-2">
                      <Badge variant="outline" className="text-xs">{signal.type}</Badge>
                      <Badge 
                        variant="outline" 
                        className={`
                          text-xs
                          ${signal.severity === 'High' ? 'border-red-400 text-red-600' : ''}
                          ${signal.severity === 'Medium' ? 'border-yellow-400 text-yellow-600' : ''}
                          ${signal.severity === 'Low' ? 'border-green-400 text-green-600' : ''}
                        `}
                      >
                        {signal.severity} Severity
                      </Badge>
                    </div>
                  </div>
                ))}
              
              {activeRegion && recentSignals.filter(s => s.region === activeRegion).length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No recent signals in this region
                </div>
              )}
              
              <div className="text-center pt-2">
                <a href="/map" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center">
                  View full signal map
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalMap;
