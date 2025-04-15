
import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/glow-card"
import { PurpleSection } from "@/components/purple-section"
import { Button } from "@/components/ui/button"
import { NeonTabs } from "@/components/ui/neon-tabs"
import { Code2, Star, Trophy } from "lucide-react"

const Index = () => {
  const tabs = [
    {
      value: "tech",
      label: "Tech Stack",
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Specializations</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              web dev,desktop,IA(ML,DL,DS),Software Engineer,
              ,embaded sys,"Mainlly backend dev" ,..
            </p>
          </GlowCard>
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Languages</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Python,C# ,TypeScript ,C++,Java ,..
            </p>
          </GlowCard>
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Frameworks</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              React, Django, Express, torch,flask,.net,...
            </p>
          </GlowCard>
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">IA</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Computer Vision ,ML,DS
            </p>
          </GlowCard>
        </div>
      ),
    },
    {
      value: "achievements",
      label: "Achievements",
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Compitive Event</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Be a part +17 compitive programing event 
            </p>
          </GlowCard>
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Hackathons</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Won 2 major hackathons 
            </p>
          </GlowCard>
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Datathons</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Won 1 major Datathons 
            </p>
          </GlowCard>
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Open Source</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              +20 GitHub contributions
            </p>
          </GlowCard>
          <GlowCard className="p-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-purple-500" />
              <h3 className="font-semibold">Projects</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              a Lot between small,meduim and large 
            </p>
          </GlowCard>
        </div>
      ),
    },
  ]

  return (
    <PurpleSection variant="gradient" className="min-h-screen">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Code & Hoops
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Software Engineer & Basketball Player passionate about creating amazing experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NeonTabs tabs={tabs} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
          >
            Explore My Work
          </Button>
        </motion.div>
      </div>
    </PurpleSection>
  )
}

export default Index
