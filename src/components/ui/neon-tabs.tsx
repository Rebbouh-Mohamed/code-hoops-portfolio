
import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion } from "framer-motion"

interface NeonTabsProps extends React.ComponentProps<typeof Tabs> {
  tabs: {
    value: string
    label: string
    content: React.ReactNode
  }[]
  glowColor?: string
}

export const NeonTabs = React.forwardRef<
  React.ElementRef<typeof Tabs>,
  NeonTabsProps
>((
  { 
    className, 
    tabs, 
    glowColor = "rgba(147, 51, 234, 0.5)", 
    ...props 
  }, 
  ref
) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.value || "")

  return (
    <Tabs
      ref={ref}
      value={activeTab}
      onValueChange={setActiveTab}
      className={cn("relative w-full", className)}
      {...props}
    >
      <div className="relative">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "relative px-6 py-3 text-sm font-medium",
                "data-[state=active]:text-primary data-[state=active]:shadow-none",
                "border-b-2 border-transparent transition-colors",
                "hover:text-primary/80"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <motion.div
          className="absolute bottom-0 h-0.5 rounded-full"
          style={{ backgroundColor: glowColor, boxShadow: `0 0 10px ${glowColor}` }}
          animate={{
            width: "var(--tab-width)",
            x: "var(--tab-x)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          onAnimationStart={(e) => {
            const activeTabElement = document.querySelector(`[data-state="active"][role="tab"]`)
            if (activeTabElement) {
              const rect = activeTabElement.getBoundingClientRect()
              document.documentElement.style.setProperty('--tab-width', `${rect.width}px`)
              document.documentElement.style.setProperty('--tab-x', `${rect.left - activeTabElement.parentElement!.getBoundingClientRect().left}px`)
            }
          }}
        />
      </div>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
})
NeonTabs.displayName = "NeonTabs"
