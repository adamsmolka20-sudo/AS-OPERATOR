import { HeroSceneLoader } from "@/components/three/HeroSceneLoader";

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background">
      <HeroSceneLoader />
      <h1 className="absolute bottom-10 left-6 text-xs font-medium tracking-[0.3em] text-muted-foreground sm:bottom-12 sm:left-10">
        AS OPERATOR
      </h1>
    </main>
  );
}
