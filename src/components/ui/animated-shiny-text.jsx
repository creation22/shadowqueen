const cn = (...classes) => classes.filter(Boolean).join(" ")

export const AnimatedShinyText = ({
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
        "animate-shiny-text [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}


