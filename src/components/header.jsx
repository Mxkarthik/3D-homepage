import 'boxicons/css/boxicons.min.css';
const Header = () => {

   // simple function to toggle mobile menu 
   const toggleMobileMenu = () => {
    const mobileMenu  = document.getElementById('mobileMenu')

    // if it has the 'hidden' class, remove it. otherwise , add it
    if(mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.remove('hidden')
    }else{
        mobileMenu.classList.add('hidden')
    }
   }

    return (
      <header
  className="fixed top-6 left-6 right-6 z-50 
    flex justify-between items-center 
    py-4 px-6 lg:px-12 
    bg-white/10 backdrop-blur-md 
    border border-white/20 
    shadow-xl rounded-2xl"
>
  {/* Logo / Title */}
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-white">
    VIDHYARTHI
  </h1>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex items-center gap-10 text-white">
    <a className="text-base tracking-wide transition-colors hover:text-gray-200" href="#">
      FEATURES
    </a>
    <a className="text-base tracking-wide transition-colors hover:text-gray-200" href="#">
      PRODUCT
    </a>
    <a className="text-base tracking-wide transition-colors hover:text-gray-200" href="#">
      ABOUT
    </a>
  </nav>

  {/* Action Buttons */}
  <div className="hidden md:flex items-center gap-4">
    <button className="bg-white/20 border border-white/30 text-white py-2 px-6 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-white/30 shadow-md">
      Sign Up
    </button>
    <button className="bg-gradient-to-r from-[#e99b63] to-[#656565] text-white py-2 px-6 rounded-full font-medium tracking-wide transition-all duration-300 hover:opacity-90 shadow-md">
      Sign In
    </button>
  </div>

  {/* Mobile Menu Button */}
  <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 text-white">
    <i className="bx bx-menu"></i>
  </button>

  {/* Mobile Menu */}
  <div
    id="mobileMenu"
    className="hidden fixed top-24 right-6 left-6 p-6 md:hidden z-40 
      bg-black/40 backdrop-blur-md border border-white/20 rounded-xl shadow-lg"
  >
    <nav className="flex flex-col gap-6 items-center text-white">
      <a className="text-lg tracking-wide hover:text-gray-300" href="#">
        FEATURES
      </a>
      <a className="text-lg tracking-wide hover:text-gray-300" href="#">
        PRODUCT
      </a>
      <a className="text-lg tracking-wide hover:text-gray-300" href="#">
        ABOUT
      </a>
      <div className="flex gap-4 mt-4">
        <button className="bg-white/20 border border-white/30 text-white py-2 px-6 rounded-full font-medium hover:bg-white/30">
          Sign Up
        </button>
        <button className="bg-gradient-to-r from-[#e99b63] to-[#656565] text-white py-2 px-6 rounded-full font-medium hover:opacity-90">
          Sign In
        </button>
      </div>
    </nav>
  </div>
</header>

    )
}

export default Header