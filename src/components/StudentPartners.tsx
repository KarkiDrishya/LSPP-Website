import Aakriti from '../assets/Students/Aakriti.jpg'
import Aditya from '../assets/Students/Aditya.jpg'
import Arekh from '../assets/Students/Arekh.jpg'
import Ashutosh from '../assets/Students/Ashutosh.jpg'
import Ayam from '../assets/Students/Ayam.png'
import Ayusha from '../assets/Students/Ayusha.jpg'
import Drishya from '../assets/Students/Drishya.png'
import Kriyesh from '../assets/Students/Kriyesh.jpg'
import Mashiha from '../assets/Students/Mashiha.jpg'
import Nirika from '../assets/Students/Nirika.png'
import Nozomi from '../assets/Students/Nozomi.jpg'
import Priyanka from '../assets/Students/Priyanka.jpg'
import Raksha from '../assets/Students/Raksha.jpg'
import Sashwat from '../assets/Students/Sashwat.jpg'
import Shreyam from '../assets/Students/Shreyam.jpg'
import Smriti from '../assets/Students/Smriti.png'
import Srijit from '../assets/Students/Srijit.png'
import Sworna from '../assets/Students/Sworn.jpg'
import Viraj from '../assets/Students/Viraj.jpg'
import Yojana from '../assets/Students/Yojana.jpg'


interface StudentPartner {
  id: number;
  name: string;
  college: string;
  image: string;
}

const StudentPartners = () => {
  const studentData: StudentPartner[] = [
    {
      id: 1,
      name: "Aakriti Pandey",
      college: "Kathmandu University",
      image: Aakriti
    },
    {
      id: 2,
      name: "Arekh Shrestha",
      college: "Kathmandu University School of Engineering",
      image: Arekh
    },
    {
      id: 3,
      name: "Nirika Lamichhane",
      college: "IOE, Thapathali Campus",
      image: Nirika
    },
    {
      id: 4,
      name: "Sworna Dhan Tuladhar",
      college: "Islington College",
      image: Sworna
    },
    {
      id: 5,
      name: "Ayam Kattel",
      college: "Pulchowk Campus",
      image: Ayam
    },
    {
      id: 6,
      name: "Nozomi Giri",
      college: "Khwopa Engineering College",
      image: Nozomi
    },
    {
      id: 7,
      name: "Priyanka Khatri",
      college: "Sunway College",
      image: Priyanka
    },
    {
      id: 8,
      name: "Yojana Ghimire",
      college: "IOE WRC",
      image: Yojana
    },
    {
      id: 9,
      name: "Shreyam Regmi",
      college: "Pulchowk Campus",
      image: Shreyam
    },
    {
      id: 10,
      name: "Smriti Adhikari",
      college: "Deerwalk Institure of Technology",
      image: Smriti
    },
    {
      id: 11,
      name: "Viraj Sawad",
      college: "Kantipur Engineering College",
      image: Viraj
    },
    {
      id: 12,
      name: "Shaswat Sharma",
      college: "IOE Thapathali Campus",
      image: Sashwat
    },
    {
      id: 13,
      name: "Srijit Gyawali",
      college: "Nepathya College",
      image: Srijit
    },
    {
      id: 14,
      name: "Aaditya Raj Uprety",
      college: "Pulchowk Campus",
      image: Aditya
    },
    {
      id: 15,
      name: "Drishya Karki",
      college: "Deerwalk Institute of Technology",
      image: Drishya
    },
    {
      id: 16,
      name: "Ashutosh Dhungana",
      college: "Khwopa Engineering College",
      image: Ashutosh
    },
    {
      id: 17,
      name: "Kriyesh Aryal",
      college: "Patan Multiple Campus",
      image: Kriyesh
    },
    {
      id: 18,
      name: "Ayusha Shrestha",
      college: "Khwopa Engineering College",
      image: Ayusha
    },
    {
      id: 19,
      name: "Mashiha Krishna Shrestha",
      college: "Sagarmatha Engineering College",
      image: Mashiha
    },
    {
      id: 20,
      name: "Raksha Karn",
      college: "Patan Multiple Campus",
      image: Raksha
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Titles */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15803D] tracking-tight">
            Meet the Student Partners
          </h2>
          <p className="mt-3 text-base font-semibold text-gray-700">
            Get to know our future leaders!
          </p>
        </div>

        {/* Profile Grid Cards Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentData.map((student) => (
            <div 
              key={student.id}
              className="bg-[#EBF5EE] rounded-[24px] p-5 flex flex-col space-y-4 shadow-sm border border-emerald-50/50"
            >
              {/* Profile Image Window Container with rounded corners */}
              <div className="w-full aspect-square bg-white rounded-[20px] overflow-hidden">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Meta Info Text */}
              <div className="flex flex-col min-h-[70px]">
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {student.name}
                </h3>
                <p className="text-xs font-medium text-gray-500 mt-1 leading-normal">
                  {student.college}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentPartners;