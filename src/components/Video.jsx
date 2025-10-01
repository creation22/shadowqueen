import { memo } from 'react';
import { HeroVideoDialog } from "./ui/hero-video-dialog"
import { AnimatedShinyText } from "./ui/animated-shiny-text.jsx"

const Video = memo(() => {
  return (
    <>
      <div className="text-center mb-8 sm:mb-10 mt-16 sm:mt-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          How to Play
        </h2>
        <AnimatedShinyText className="text-sm sm:text-base md:text-lg">
          Watch a quick walkthrough and start your first game in minutes.
        </AnimatedShinyText>
      </div>    

      {/* Wrapper keeps video centered */}
      <div className="relative max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6">
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <HeroVideoDialog
            className="block dark:hidden w-full h-full"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/WBQdnoOhGQw"
            thumbnailSrc="https://images.unsplash.com/photo-1741790009218-d0cc7440a3c2?w=800&auto=format&fit=crop&q=60"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block w-full h-full"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/WBQdnoOhGQw"
            thumbnailSrc="https://images.unsplash.com/photo-1741790009218-d0cc7440a3c2?w=800&auto=format&fit=crop&q=60"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </>
  )
})

export default Video;
