import { HeroVideoDialog } from "./ui/hero-video-dialog"
import { AnimatedShinyText } from "./ui/animated-shiny-text.jsx"

export default function Video() {
  return (
    <>
    <div className="text-center mb-10 mt-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-3">How to Play</h2>
      <AnimatedShinyText className="text-base md:text-lg">Watch a quick walkthrough and start your first game in minutes.</AnimatedShinyText>
    </div>    
    <div className="relative max-w-4xl mx-auto px-4 flex justify-center">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/WBQdnoOhGQw"
        thumbnailSrc="https://images.unsplash.com/photo-1741790009218-d0cc7440a3c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZXNzJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/WBQdnoOhGQw"
        thumbnailSrc="https://images.unsplash.com/photo-1741790009218-d0cc7440a3c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZXNzJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D"
        thumbnailAlt="Hero Video"
      />
    </div>
    </>
  )
}
