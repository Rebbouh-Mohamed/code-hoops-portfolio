
import * as React from "react"
import { cn } from "@/lib/utils"

interface PurpleSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "gradient"
}

export const PurpleSection = React.forwardRef<HTMLDivElement, PurpleSectionProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden py-24",
          variant === "gradient" && "bg-gradient-to-br from-purple-600/20 via-background to-background",
          variant === "default" && "bg-background",
          className
        )}
        {...props}
      >
        <div className="container relative z-10">
          {children}
        </div>
        {variant === "gradient" && (
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
        )}
      </section>
    )
  }
)
PurpleSection.displayName = "PurpleSection"

