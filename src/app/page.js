import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";
import MiddleSection from "@/components/MiddleSection";
import ImageSection from "@/components/ImageSection";
import SocialMediaSection from "@/components/SocialMediaSection";

// This is the main entry point for the home page of the application.
export default function Home() {
  return (
    <div className="px-100 pb-20 text-md">
      <Hero />
      <ProjectSection />
      <MiddleSection />
      <SocialMediaSection />
    </div>
  );
}
