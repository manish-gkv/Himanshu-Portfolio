import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";
import MiddleSection from "@/components/MiddleSection";
import ImageSection from "@/components/ImageSection";
import SocialMediaSection from "@/components/SocialMediaSection";

export default function Home() {
  return (
    <div className="px-75 pb-20 text-xl">
      <Hero />
      <ProjectSection />
      <MiddleSection />
      <ImageSection />
      <SocialMediaSection />
    </div>
  );
}
