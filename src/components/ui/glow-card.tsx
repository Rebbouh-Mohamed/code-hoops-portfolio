
import * as React from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  glowColor?: string
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, children, glowColor = "rgba(147, 51, 234, 0.3)", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl border bg-background p-6",
          "before:absolute before:-left-80 before:top-0 before:h-full before:w-40",
          "before:rotate-12 before:transform before:bg-gradient-to-r",
          "before:from-transparent before:via-primary/10 before:to-transparent",
          "before:transition-all before:duration-1000 before:ease-in-out",
          "hover:before:translate-x-96",
          className
        )}
        style={{
          boxShadow: `0 0 30px ${glowColor}`
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlowCard.displayName = "GlowCard"

