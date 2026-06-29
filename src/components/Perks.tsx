import becomeALeaderIcon from '../assets/Perks/become-a-leader.svg?url';
import exquisiteRewardsIcon from '../assets/Perks/esquisite-rewards.svg?url';
import personalGrowthIcon from '../assets/Perks/personal-growth.svg?url';
import takeAStepIcon from '../assets/Perks/take-a-step.svg?url';



interface PerkItem {
    id: number;
    title: string;
    points: string[];
    icon: string;
}

const Perks = () => {
    const perksData: PerkItem[] = [
        {
            id: 1,
            title: "Become a leader and empower your peers",
            points: [
                "Mentorship from industry experts",
                "Empower your peers by facilitating knowledfge sharing sessions"],
            icon: becomeALeaderIcon
        },
        {
            id: 2,
            title: "Take a step into the professional world",
            points: [
                "Professional growth and exposure",
                "Opportunity to network with Leapfroggers"
            ],
            icon: takeAStepIcon
        },
        {
            id: 3,
            title: "Be eligible for exquisite rewards",
            points: [
                "Access to curated trainings, courses and resources",
                "Customized goodies, recommendation letters and certificates"
            ],
            icon: exquisiteRewardsIcon
        },
        {
            id: 4,
            title: "All-round learning and personal growth",
            points: [
                "Guidance and support for your projects",
                "Development of essential soft skills"
            ],
            icon: personalGrowthIcon
        }
    ];
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#E04F2A] tracking-tight mb-12">
          What are the perks?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {perksData.map((perk) => (
            <div 
              key={perk.id} 
              className="bg-[#FFF4F0] rounded-[32px] p-8 sm:p-10 flex flex-col items-start space-y-6"
            >
                {/* Circular Icon Container*/}
              <div className="w-16 h-16 rounded-full bg-[#E04F2A] flex items-center justify-center shadow-sm p-4">
                <img 
                  src={perk.icon} 
                  alt="" 
                  className="w-full h-full object-contain invert brightness-0" 
                />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {perk.title}
              </h3>

              <ul className="space-y-3 w-full">
                {perk.points.map((point, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base text-gray-700 font-medium">
                    <span className="text-[#E04F2A] mr-2 mt-1 flex-shrink-0 text-xs">◆</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Perks
