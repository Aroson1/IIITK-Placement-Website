import Image from "next/image";
import "../../styles/stats.css";

const StatisticsDisplay = () => {
  return (
    <div className="pt-4 sm:pt-8">
      <div className="space-y-4 sm:space-y-6">
        {/* Linear progress bars */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {[
            {
              title: "Placement Percentage",
              value: 100,
              max: 100,
              subtitle: "100%",
              icon: "📊",
            },
            {
              title: "No. of Startups",
              value: 20,
              max: 22,
              subtitle: "20",
              icon: "🚀",
            },
            {
              title: "Companies",
              value: 76,
              max: 86,
              subtitle: "76",
              icon: "🏢",
            },
            {
              title: "Median Package",
              value: 11,
              max: 10.5,
              subtitle: "11",
              icon: "💼",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#4edc48] rounded-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-4 sm:h-5 md:h-6 mb-1">
                  <div
                    className="bg-[#4edc48] h-4 sm:h-5 md:h-6 rounded-full text-xs flex items-center justify-center text-white"
                    style={{ width: `${(item.value / item.max) * 100}%` }}
                  >
                    {item.subtitle}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Semi-circular progress bars */}
        <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-8 space-y-4 sm:space-y-0">
          {[
            {
              title: "Highest Domestic Package",
              value: 58.33,
              max: 100,
              suffix: "LPA",
            },
            {
              title: "Highest International Package",
              value: 23,
              max: 44,
              suffix: "LPA",
            },
            { title: "Average Package", value: 14.32, max: 32, suffix: "LPA" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex items-center justify-center overflow-hidden w-32 sm:w-36 md:w-40 h-20 sm:h-22 md:h-24">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <path
                    d="M 10,50 A 40,40 0 1,1 90,50"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10,50 A 40,40 0 1,1 90,50"
                    fill="none"
                    stroke="#4edc48"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(item.value / item.max + 0.2) * 126} 126`}
                  />
                </svg>
                <span className="absolute text-sm sm:text-base md:text-xl font-bold pt-8 sm:pt-10 md:pt-12">{`${item.value} ${item.suffix}`}</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm text-gray-600">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsDisplay;