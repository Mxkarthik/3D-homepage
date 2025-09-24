
import Header from './components/header';
import Hero from "./components/hero";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';



export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1500,
      once: true,
    })
  })
  return (
    <main>
      {/* Gradient image */}
      <img className="absolute top-0 right-0 opacity-60 -z-1" src="/gradient.png" alt="Gradient-img" />

      {/* Blur Effect */}
      <div className="h-[20rem] w-[40rem] absolute top-[20%] right-[-5%] 
      bg-[#e99b63] blur-[150px] opacity-70 -rotate-[30deg] -z-10"></div>

      <Header />
      <Hero />
    </main>
  )
}