const AboutProgram = () => {
    return (
        <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Backroung Rectangle*/}
      <div className="font-Learn max-w-7xl mx-auto bg-[#FFFBF0] rounded-[40px] py-16 px-6 sm:px-12 md:px-20 text-center flex flex-col items-center justify-center">
        
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0A4E68] tracking-tight max-w-3xl leading-tight">
          What is Leapfrog Student Partnership Program?
        </h2>

        {/* Paragraph text*/}
        <p className="mt-8 text-base sm:text-lg text-gray-800 leading-relaxed max-w-4xl text-center">
          Leapfrog Student Partnership Program is a future-oriented program aiming to help IT and engineering students build 
          their career paths and create an impact in the tech community. As a Leapfrog Student Partner, you will serve as 
          an opinion leader and an influencer to engage and connect with.
        </p>

      </div>
    </section>
    )
}

export default AboutProgram