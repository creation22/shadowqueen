/* eslint-disable @next/next/no-img-element */
import { cn } from "../lib/utils"
import { Marquee } from "./ui/marquee"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/10 bg-white/5 hover:bg-white/10",
        "backdrop-blur-sm transition-colors duration-200"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-white/80">{body}</blockquote>
    </figure>
  )
}

export default function Testimonial(){
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-bold">What players say</h3>
          <p className="text-white/60 mt-2">Real impressions from early playtesters.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-6">
          <Marquee className="[--gap:1.25rem] [--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse className="[--gap:1.25rem] [--duration:35s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}