import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { heroArt, heroDash } from "@/assets/images";

export default function Home() {
  return (
    <main className="font-sans">
      <section className="p-5 w-full max-w-[1280px] mx-auto grid md:grid-cols-2 items-center">
        <div className="flex flex-col gap-10 items-start">
          <Button variant="link">
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
            <Button variant="ghost">Join Waitlist</Button>
            <Button variant="link">
              Request a Demo <ChevronRight />
            </Button>
          </div>
        </div>

        <div>
          <Image src={heroArt} alt="Hero Art" />
        </div>
      </section>
      <section>
        <Image src={heroDash} alt="Hero Dashboard" />
      </section>
    </main>
  );
}
