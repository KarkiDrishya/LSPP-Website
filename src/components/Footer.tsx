const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="w-full bg-[#1E252B] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">

       {/*Top section news letter subscribe and all */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-gray-700/50">
          
          {/* Left Text Box */}
          <div className="max-w-sm">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Join our newsletter
            </h3>
            <p className="mt-2 text-sm text-gray-400 font-medium leading-relaxed">
              Sign up to stay updated with the latest insights, news, and more.
            </p>
          </div>

          {/* Right Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 text-sm bg-[#2D363E] border border-transparent rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-bold bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E252B] focus:ring-[#22C55E]"
            >
              Subscribe
            </button>
          </form>

        </div>

        {/*Copyright and all Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 text-xs sm:text-sm text-gray-400">
          
          {/* Legal / Copyright Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span>
              Copyright 2022 Leapfrog Technology Inc. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#22C55E] hover:underline font-semibold">
                Privacy Policy
              </a>
              <a href="#" className="text-[#22C55E] hover:underline font-semibold">
                Data Subject Policy
              </a>
            </div>
          </div>

          {/* Leapfrog logo section */}
          <div className="flex items-center">
            <div className="flex items-center space-x-1 cursor-pointer select-none">
              <span className="text-xl font-extrabold tracking-tighter text-white">
                leapfrog
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;