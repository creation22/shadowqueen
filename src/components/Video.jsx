import { HeroVideoDialog } from "./ui/hero-video-dialog"
import { AnimatedShinyText } from "./ui/animated-shiny-text.jsx"

export default function Video() {
  return (
    <>
    <div className="text-center mb-10 mt-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-3">How to Play</h2>
      <AnimatedShinyText className="text-base md:text-lg">Watch a quick walkthrough and start your first game in minutes.</AnimatedShinyText>
    </div>    
    <div className="relative max-w-4xl mx-auto px-4">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
    </>
  )
}
