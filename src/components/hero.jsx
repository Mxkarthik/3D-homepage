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

        {/* Glow orb in hero */}
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
            { title: "Real-Time News Updates", icon: "bx bx-news", desc: "Stay ahead with instant student-focused news and alerts." },
            { title: "Community-Curated Resources", icon: "bx bx-book", desc: "Access trusted notes, guides, and materials from peers." },
            { title: "Doubt Solving Together", icon: "bx bx-help-circle", desc: "Collaborate and clear doubts quickly with the community." },
            { title: "Student Well-being & Support", icon: "bx bx-heart", desc: "Resources and discussions for mental health & balance." },
            { title: "Smart AI Chatbot", icon: "bx bx-bot", desc: "Instant answers and guidance powered by intelligent AI." },
            { title: "Mentorship & Guidance", icon: "bx bx-user-voice", desc: "Learn from experienced mentors to grow academically." },
          ].map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 text-center 
              transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(233,155,99,0.4)] hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#e99b63] to-[#f7ce68] shadow-md mb-6">
                <i className={`${feature.icon} text-3xl text-black`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-black/80 backdrop-blur-xl border-t border-white/10 text-gray-400 px-6 lg:px-20 py-16 overflow-hidden">

        {/* Floating gradient orb */}

        <div className="relative max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#e99b63] to-[#f7ce68] bg-clip-text text-transparent">
              VIDHYARTHI
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A space where students learn, grow, and support each other — building 
              confidence and creating a strong community of learners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Features","About Us","Contact","FAQ"].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} 
                     className="flex items-center gap-2 hover:text-[#e99b63] hover:pl-2 transition-all duration-300">
                    <i className="bx bx-chevron-right text-[#e99b63]"></i>{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {["Blog","Guides","Support","Privacy Policy"].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} 
                     className="flex items-center gap-2 hover:text-[#e99b63] hover:pl-2 transition-all duration-300">
                    <i className="bx bx-chevron-right text-[#e99b63]"></i>{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-5 text-2xl">
              <a href="https://facebook.com" className="hover:text-[#e99b63] hover:scale-110 transition"><i className="bx bxl-facebook-circle"></i></a>
              <a href="https://twitter.com" className="hover:text-[#e99b63] hover:scale-110 transition"><i className="bx bxl-twitter"></i></a>
              <a href="https://linkedin.com" className="hover:text-[#e99b63] hover:scale-110 transition"><i className="bx bxl-linkedin"></i></a>
              <a href="https://instagram.com" className="hover:text-[#e99b63] hover:scale-110 transition"><i className="bx bxl-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-[#e99b63] font-semibold">VIDHYARTHI</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Hero;
