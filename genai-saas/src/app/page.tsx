import { ModeToggle } from "@/components/theme-Toggle";
import { AnimatedHero } from "@/components/animated-hero";
import { AnimatedFeatures } from "@/components/animated-features";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <AnimatedHero />
      <AnimatedFeatures />
    </main>
  );
}