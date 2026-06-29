interface ContributionCard {
  id: number;
  title: string;
  points: string[];
}

const Contributing = () => {
  const contributionData: ContributionCard[] = [
    {
      id: 1,
      title: "Learn, lead, grow with us",
      points: [
        "Build tech communities by bringing your peers together",
        "Host regular workshops and events focused on accelerating skill building",
        "Learn and develop design, technology, and business skills from industry professionals"
      ]
    },
    {
      id: 2,
      title: "Make a difference",
      points: [
        "Close the gap between industry and academia by taking charge of your learning",
        "Take new learnings to build solutions for real life problems",
        "Strengthen your own skill set while building future leaders"
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#0B4E68] tracking-tight mb-12">
          How will you be contributing?
        </h2>

        {/* Two-Column Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributionData.map((card) => (
            <div 
              key={card.id}
              className="bg-[#F4F9FA] rounded-[32px] p-8 sm:p-10 flex flex-col space-y-6 border border-gray-100"
            >
              {/* Header Box inside the card */}
              <div>
                
                <h3 className="text-2xl font-bold text-[#0B4E68] mt-1 leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* Bullet Points Container */}
              <ul className="space-y-4 flex-1">
                {card.points.map((point, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                    <span className="text-[#0B4E68] mr-3 mt-1.5 flex-shrink-0 text-xs">●</span>
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

export default Contributing;