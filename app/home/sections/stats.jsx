import React from "react";
import { Trophy, Users, Briefcase, Award } from "lucide-react";

const StatisticsDisplay = ({ data }) => {
  if (!data) return null;

  // Map of icons for different statistics
  const iconMap = {
    "Highest CTC": Trophy,
    "Average CTC": Award,
    "Individual Placements": Users,
    "No. of Offers": Briefcase
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(data).map(([key, value]) => {
          const IconComponent = iconMap[key] || Trophy;
          
          return (
            <div 
              key={key} 
              className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#4edc48] bg-opacity-20 rounded-full flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-[#4edc48]" />
              </div>
              <div className="flex-grow">
                <div className="text-xl font-bold text-gray-800">
                  {value} {key.includes("CTC") ? "LPA" : ""}
                </div>
                <div className="text-sm text-gray-500">{key}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatisticsDisplay;