// 1. Only import the exact two files that actually exist in your folder!
import studentsIcon from '../assets/Perks/become-a-leader.svg?url';
import bookIcon from '../assets/Perks/brand-evangelist.svg';

interface StatItem {
  id: number;
  number: string;
  label: string;
  icon: string;
}

const Stats = () => {
  // 2. Map your data array using ONLY those two available files
  const statsData: StatItem[] = [
    {
      id: 1,
      number: "56",
      label: "Student Partners enrolled",
      icon: studentsIcon
    },
    {
      id: 2,
      number: "56 +",
      label: "Knowledge sharing sessions delivered",
      icon: bookIcon
    },
    {
      id: 3,
      number: "5",
      label: "Student Partners hired",
      icon: studentsIcon 
    },
    {
      id: 4,
      number: "56 +",
      label: "Students impacted by LSPs",
      icon: bookIcon 
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#042834] rounded-[40px] py-12 px-6 sm:px-12">
        
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#E2F1F5] tracking-tight mb-12">
          Building it, bit by bit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y divide-gray-700/30 sm:divide-y-0">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center text-center pt-6 sm:pt-0"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center opacity-90">
                <img 
                  src={stat.icon} 
                  alt="" 
                  className="w-full h-full object-contain" 
                />
              </div>

              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {stat.number}
              </span>

              <p className="mt-2 text-sm sm:text-base text-gray-300 font-medium max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats