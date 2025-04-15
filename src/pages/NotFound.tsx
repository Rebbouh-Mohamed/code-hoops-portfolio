import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PurpleSection } from "@/components/purple-section";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PurpleSection variant="gradient" className="min-h-screen">
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Oops! Page not found</p>
      <a href="/" className="text-blue-200 hover:text-white underline">
        Return to Home
      </a>
    </div>
  </div>
</PurpleSection>

  );
};

export default NotFound;
