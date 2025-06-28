import Image from "next/image";
import ModeToggle from "@/components/shared/mode-toggle";

export default function Home() {
  return (
    <main className="font-sans">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ModeToggle />
    </main>
  );
}
