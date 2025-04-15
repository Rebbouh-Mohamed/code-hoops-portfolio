
import { Link } from "react-router-dom"
import { ThemeToggle } from "./theme-toggle"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-border/40 bg-background/80">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2 font-bold">
            Code & Hoops
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link to="/projects" className="transition-colors hover:text-foreground/80">Projects</Link>
            <Link to="/blog" className="transition-colors hover:text-foreground/80">Blog</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
