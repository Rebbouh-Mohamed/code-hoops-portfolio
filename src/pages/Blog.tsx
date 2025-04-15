
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div 
      className="container max-w-4xl py-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {/* Add blog posts here */}
        <motion.article 
          className="border rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground">
            Blog posts will be added here soon. Stay tuned!
          </p>
        </motion.article>
      </div>
    </motion.div>
  );
};

export default Blog;
