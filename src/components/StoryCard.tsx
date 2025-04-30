
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileCheck, UserCheck, Award, Clock } from "lucide-react";

interface StoryProps {
  title: string;
  location: string;
  image: string;
  description: string;
  status: "Lead" | "Verified" | "Published" | "Impact";
  date: string;
  progress: number;
  contributors: number;
  category: string;
}

const getStatusDetails = (status: StoryProps["status"]) => {
  switch (status) {
    case "Lead":
      return {
        color: "bg-gray-500",
        icon: <Clock className="h-4 w-4" />,
      };
    case "Verified":
      return {
        color: "bg-yellow-500",
        icon: <UserCheck className="h-4 w-4" />,
      };
    case "Published":
      return {
        color: "bg-indigo-500",
        icon: <FileCheck className="h-4 w-4" />,
      };
    case "Impact":
      return {
        color: "bg-green-500",
        icon: <Award className="h-4 w-4" />,
      };
    default:
      return {
        color: "bg-gray-500",
        icon: <Clock className="h-4 w-4" />,
      };
  }
};

const StoryCard = ({
  title,
  location,
  image,
  description,
  status,
  date,
  progress,
  contributors,
  category,
}: StoryProps) => {
  const statusDetails = getStatusDetails(status);

  return (
    <div className="civic-card group bg-white h-full flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <Badge
          className={`absolute top-3 right-3 ${statusDetails.color}`}
        >
          <span className="flex items-center gap-1">
            {statusDetails.icon}
            {status}
          </span>
        </Badge>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <Badge variant="outline" className="self-start mb-2">
          {category}
        </Badge>
        
        <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-indigo-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">{location}</p>
        
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Investigation progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-xs text-gray-500">{date}</div>
            <div className="flex items-center text-xs text-gray-500">
              <UserCheck className="h-3.5 w-3.5 mr-1" />
              <span>{contributors} contributors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
