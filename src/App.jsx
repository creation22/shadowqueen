import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import FeaturesSection from './components/FeaturesSection'
import Video from './components/Video'
import Testimonial from './components/Testimonial'
import Stats from './components/Stats'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Analytics/>
    <div className="min-h-screen w-full bg-black relative text-white font-poppins">
 
 <div
   className="absolute inset-0 z-0"
   style={{
     background: `
       radial-gradient(ellipse 140% 50% at 15% 60%, rgba(124, 58, 237, 0.11), transparent 48%),
       radial-gradient(ellipse 90% 80% at 85% 25%, rgba(245, 101, 101, 0.09), transparent 58%),
       radial-gradient(ellipse 120% 65% at 40% 90%, rgba(34, 197, 94, 0.13), transparent 52%),
       radial-gradient(ellipse 100% 45% at 70% 5%, rgba(251, 191, 36, 0.07), transparent 42%),
       radial-gradient(ellipse 80% 75% at 90% 80%, rgba(168, 85, 247, 0.10), transparent 55%),
       #000000
     `,
   }}
 />

   <div className="pt-24 relative z-10">
     <Home/>
     <Video/>
     <FeaturesSection/>
     <Stats/>
     <Testimonial/>
     <Footer/>
   </div>
</div>
    </>
  )
}

export default App
