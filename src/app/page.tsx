import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { heroArt, heroDash, smartFlow } from "@/assets/images";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Top */}
      <section className="w-full max-w-[1280px] mx-auto grid md:grid-cols-2 items-center">
        <div className="px-5 py-20 flex flex-col gap-10 items-start">
          <Button variant="link" className="text-primary">
            Road to DeSci Revolution <ChevronRight />
          </Button>

          <div className="flex flex-col gap-10">
            <h1 className="text-6xl">Here's a new equation for science</h1>
            <p>
              A decentralized platform where researchers can publish openly,
              mint authorship NFTs, receive bids from readers and institutions,
              and get reviewed in public by reputation-weighted peers.
            </p>
          </div>

          <div>
            <Button variant="outline">Join Waitlist</Button>
            <Button variant="link">
              Request a Demo <ChevronRight />
            </Button>
          </div>
        </div>

        <div>
          <Image src={heroArt} alt="Hero Art" />
        </div>
      </section>

      {/* Hero Bottom */}
      <section>
        <Image src={heroDash} alt="Hero Dashboard" />
      </section>

      {/* Partners */}
      <section>
        <h2 className="text-center">
          Blockchain technology, DAOs and many other DeSci Platforms trust our
          vision
        </h2>

        <div>{/* Array of partner logos */}</div>
      </section>

      {/* Feature: Smart Flow */}
      <section>
        <h2 className="text-center text-5xl">
          Smart <span className="text-primary">Flow</span>
        </h2>
        <p className="text-center">
          A seamless, step-by-step flow built to guide you from first click to
          final result.
        </p>

        <Image src={smartFlow} alt="Smart Flow" />
      </section>
    </main>
  );
}
