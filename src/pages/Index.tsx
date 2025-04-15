
import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/glow-card"
import { PurpleSection } from "@/components/purple-section"
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <PurpleSection variant="gradient" className="min-h-screen flex items-center justify-center">
      <div className="space-y-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Code & Hoops
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Software Engineer & Basketball Player passionate about creating amazing experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <GlowCard className="p-6">
            <h3 className="text-xl font-semibold mb-2">Software Development</h3>
            <p className="text-muted-foreground">
              Passionate about building elegant solutions with modern technologies
            </p>
          </GlowCard>

          <GlowCard className="p-6" glowColor="rgba(168, 85, 247, 0.3)">
            <h3 className="text-xl font-semibold mb-2">Basketball</h3>
            <p className="text-muted-foreground">
              Bringing the same dedication and teamwork from the court to code
            </p>
          </GlowCard>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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

