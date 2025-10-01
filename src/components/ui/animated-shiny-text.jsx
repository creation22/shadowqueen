import { memo } from 'react';

const cn = (...classes) => classes.filter(Boolean).join(" ")

export const AnimatedShinyText = memo(({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`
      }}
      className={cn(
        "block w-full text-center text-white",
        "animate-shiny-text [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_2s_ease-in-out_infinite]",
        "bg-gradient-to-r from-transparent via-white/60 via-50% to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});


