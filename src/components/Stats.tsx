import studentsIcon from '../assets/Perks/become-a-leader.svg';
import bookIcon from '../assets/Perks/brand-evangelist.svg';
import Column_1 from '../assets/Pixel-Perfect Highlights/2025_1.webp'
import Column_2 from '../assets/Pixel-Perfect Highlights/2025_2.webp'
import Column_3 from '../assets/Pixel-Perfect Highlights/2025_3.webp'
import Column_4 from '../assets/Pixel-Perfect Highlights/2025_4.webp'
import Column_5 from '../assets/Pixel-Perfect Highlights/2025_5.webp'
import Column_6 from '../assets/Pixel-Perfect Highlights/FBN_NEW.webp'

interface StatItem {
  id: number;
  number: string;
  label: string;
  icon: string;
}

interface GalleryImage {
  id: number;
  alt: string;
  gridClasses: string;
  bgColor: string;
  image : string;
}

const Stats = () => {
  // 1. Data for the Metrics Banner
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

  // Images for the Pixel-Perfect section
  const galleryItems: GalleryImage[] = [ //basically what this does is creates a variable called galleryItems whose data type is a user defined data type called GalleryImage[] whose value is array of interface
    { id: 1, alt: "MemoREEL 1", gridClasses: "md:col-span-1 md:row-span-1", bgColor: "bg-teal-700/5", image:Column_1 },
    { id: 2, alt: "MemoREEL 2", gridClasses: "md:col-span-1 md:row-span-2", bgColor: "bg-orange-600/5",image:Column_2 }, // Tall card
    { id: 3, alt: "MemoREEL 3", gridClasses: "md:col-span-2 md:row-span-1", bgColor: "bg-emerald-800/5",image:Column_3 }, // Wide card
    { id: 4, alt: "MemoREEL 4", gridClasses: "md:col-span-1 md:row-span-1", bgColor: "bg-amber-500/5",image:Column_4 },
    { id: 5, alt: "MemoREEL 5", gridClasses: "md:col-span-2 md:row-span-1", bgColor: "bg-blue-900/5",image:Column_5 },   // Wide card
    { id: 6, alt: "MemoREEL 6", gridClasses: "md:col-span-1 md:row-span-1", bgColor: "bg-slate-800/5",image:Column_6 }
  ];

  return (
    <div className="w-full bg-white flex flex-col space-y-16">
      
      {/* ========================================================= */}
      {/* SECTION A: METRICS COUNTERS BANNER                        */}
      {/* ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-7xl mx-auto bg-[#042834] rounded-[40px] py-12 px-6 sm:px-12">
          
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#E2F1F5] tracking-tight mb-12">
            Building it, bit by bit
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y divide-gray-700/30 sm:divide-y-0">
            {statsData.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center pt-6 sm:pt-0">
                <div className="w-12 h-12 mb-4 flex items-center justify-center opacity-90">
                  <img src={stat.icon} alt="" className="w-full h-full object-contain" />
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

      {/* ========================================================= */}
      {/* SECTION B: PIXEL-PERFECT HIGHLIGHTS MASONRY GALLERY        */}
      {/* ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B4E68] tracking-tight">
              Pixel-Perfect Highlights
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 font-medium">
              Some nostalgic memoREELs from the Student Partnership Program.
            </p>
          </div>

          {/* Staggered Grid Container Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`${item.gridClasses} ${item.bgColor} rounded-[24px] overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center group relative cursor-pointer`}
              >
                {/* Actual images replacement done from here */}
                <span className="text-sm font-semibold text-gray-400 group-hover:scale-105 transition-transform duration-300">
                  <img
                  src = {item.image}
                  alt = {item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </span>
                  </div>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Stats;