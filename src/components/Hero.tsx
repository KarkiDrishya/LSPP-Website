import studentpartnerlogo from "../assets/Student_partnership.jpg"
import groupphoto1 from "../assets/group_photo1.webp"


const Hero = () => {
    return (
        <section className = " items-center w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            {/* This div contains the left part */}
        <div className="flex flex-col space-y-6 max -w-xl">
            {/*This part contains the leapfrog student partnership image*/}
            <div className="flex items-center gap-4">
                <img src={studentpartnerlogo}
                alt = "Leapfrog Logo"
                className="h-30 w-auto"/>
            </div>
            <div className="flex items-center justify-between">
    <div>
        <h1 className="items-center font-Learn text-5xl  text-green-900 tracking-wider ">
            Learn, Lead and Grow
        </h1>

        <p className="text-lg text-gray-700  leading-relaxed py-5 max-w-sm font-semibold">
            Learn new and in-demand skills, grow your network, and build your future in a career that interests you the most.
        </p>
    </div>

    {/* This is the first group photo image */}
    <div className="bg-gray-150 rounded-3xl overflow-hidden shadow-sm">
        <img
            src={groupphoto1}
            alt="Group photo"
            className="h-64 w-124 object-cover"
        />
    </div>
</div>


            </div>
        </section>
    )
}
export default Hero