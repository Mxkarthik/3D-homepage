import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center px-6 lg:px-16">
        
        {/* Tag box */}
        <div className="relative inline-block w-auto px-6 py-2 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full text-sm font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <i className="bx bx-diamond text-[#e99b63]"></i> INTRODUCING
          </div>
        </div>

        {/* Modern Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight my-8 leading-tight">
          Study. <span className="bg-gradient-to-r from-[#e99b63] to-[#f7ce68] bg-clip-text text-transparent">Share.</span> 
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Succeed.
          </span>
        </h1>
        <div className="
          absolute 
          top-[600px] sm:bottom-[80px] md:bottom-[100px] 
          left-5 sm:left-10 md:left-20 
          w-40 sm:w-60 md:w-72 
          h-40 sm:h-60 md:h-72 
          bg-gradient-to-r from-purple-600 to-blue-500 
          rounded-full blur-3xl opacity-20
        "></div>
        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
          A space where students learn, grow, and support each other — sharing knowledge, 
          building confidence, and creating a strong community of learners.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            className="border border-gray-700 py-3 px-6 rounded-full text-sm sm:text-lg font-semibold tracking-wide transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            href="#features"
          >
            Explore <i className="bx bx-link-external align-middle"></i>
          </a>
          <a
            className="py-3 px-6 rounded-full text-sm sm:text-lg font-semibold tracking-wide bg-gradient-to-r from-[#e99b63] to-[#f7ce68] text-black hover:scale-105 hover:shadow-xl transition-transform"
            href="#features"
          >
            Get Started <i className="bx bx-right-arrow-alt align-middle"></i>
          </a>
        </div>

        
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-20 bg-black">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          Our <span className="bg-gradient-to-r from-[#e99b63] to-[#f7ce68] bg-clip-text text-transparent">Features</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Real-Time News Updates", icon: "bx bx-news" },
            { title: "Community-Curated Resources", icon: "bx bx-book" },
            { title: "Doubt Solving Together", icon: "bx bx-help-circle" },
            { title: "Student Well-being & Support", icon: "bx bx-heart" },
            { title: "Smart AI Chatbot", icon: "bx bx-bot" },
            { title: "Mentorship & Guidance", icon: "bx bx-user-voice" },
          ].map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-lg  bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8 text-center transition-transform hover:scale-105"
            >
              <i className={`${feature.icon} text-5xl text-[#e99b63] mb-4`}></i>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
