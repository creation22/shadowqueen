import { cn } from "@/lib/utils";
import {
  IconChess,
  IconClock,
  IconUserCheck,
  IconShield,
  IconBolt,
  IconEye,
  IconStar,
  IconRobot,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Secret Queen Mechanic",
      description:
        "Pick a pawn secretly as your hidden queen. Your opponent won't know which one it is until it moves or is captured.",
      icon: <IconChess />,
    },
    {
      title: "Time-Controlled Matches",
      description:
        "Every game has a timer for both players, adding excitement and pressure to your moves.",
      icon: <IconClock />,
    },
    {
      title: "One-Time Guess Button",
      description:
        "Use your one chance per game to guess your opponent's hidden queen and capture it instantly if correct.",
      icon: <IconEye />,
    },
    {
      title: "Play vs Bot",
      description:
        "Can't find an opponent? Play against our AI bot anytime and practice your strategy.",
        icon: <IconRobot />,
    },
    {
      title: "Multiplayer Rooms",
      description:
        "Create private rooms to play with friends or share a unique link to challenge others online.",
      icon: <IconUserCheck />,
    },
    {
      title: "Strategic Bluffing",
      description:
        "Bluff, plan, and deceive. Every move counts, and every pawn might be hiding a secret.",
      icon: <IconBolt />,
    },
    {
      title: "Reveal Animations",
      description:
        "See your secret queen reveal with smooth animations when captured or moves like a queen.",
      icon: <IconStar />,
    },
    {
      title: "Safe and Fun Gameplay",
      description:
        "Enjoy a unique chess experience with easy-to-use interface and fun mechanics for all skill levels.",
      icon: <IconShield />,
    },
  ];

  return (
    <>
    <div className="text-4xl font-bold text-center mb-10 mt-20 text-white">Features</div>
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto text-white">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-white/80"
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 text-white">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/30 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"
        />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white"
        >
          {title}
        </span>
      </div>
      <p
        className="text-sm text-white/80 max-w-xs relative z-10 px-10"
      >
        {description}
      </p>
    </div>
  );
};
