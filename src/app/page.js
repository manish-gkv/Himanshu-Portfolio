import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";
import MiddleSection from "@/components/MiddleSection";
import ImageSection from "@/components/ImageSection";
import SocialMediaSection from "@/components/SocialMediaSection";

// This is the main entry point for the home page of the application.
export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-50 lg:px-50 xl:px-100 2xl:px-100 pb-20 text-base sm:text-lg">
      <Hero />
      <ProjectSection />
      <MiddleSection />
      <SocialMediaSection />
    </div>
  );
}
