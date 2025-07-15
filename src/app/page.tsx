import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  brands,
  crossPlatform,
  heroArt,
  heroDash,
  smartFlow,
  solanaCode,
} from "@/assets/images";

export default function Home() {
  const smartFlowFeatures = [
    {
      title: "Research Paper",
      desc: "Submit and tokenize your paper to prove authorship and control distribution.",
    },
    {
      title: "Peer Review NFT",
      desc: "Provide expert feedback and mint it on-chain as a verifiable review asset.",
    },
    {
      title: "Reputation Layer",
      desc: "Earn public reputation points by contributing quality review.",
    },
    {
      title: "Authorship NFT",
      desc: "Mint your scientific work as an NFT to earn, trade, and track provenance.",
    },
    {
      title: "Open Access Tools",
      desc: "Enable others to cite, remix, or build on your work transparently with open licensing.",
    },
    {
      title: "Auction & Bids",
      desc: "Auction your research or reviews let readers and institutions bid for early access.",
    },
    {
      title: "Sync Your Socials",
      desc: "Connect X, LinkedIn, to auto share your data.",
    },
  ];

  return (
    <main className="font-sans flex flex-col gap-20">
      {/* Hero Top */}
      <section className="w-full max-w-[1200px] mx-auto grid md:grid-cols-2 items-center">
        <div className="px-5 pt-40 flex flex-col gap-10 items-start">
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

        <div>{/* <Image src={heroArt} alt="Hero Art" /> */}</div>
      </section>

      {/* Hero Bottom */}
      <section className="relative w-full max-w-[1200px] mx-auto p-5">
        <Image src={heroDash} alt="Hero Dashboard" />
      </section>

      {/* Partners */}
      <section className="w-full max-w-[1200px] mx-auto p-5 flex flex-col gap-10">
        <h2 className="text-center">
          Blockchain technology, DAOs and many other DeSci Platforms trust our
          vision
        </h2>

        <div className="flex gap-5 items-center justify-center">
          {/* Array of partner logos */}
          {brands.map((brand) => (
            <Image
              key={brands.indexOf(brand)}
              src={brand}
              alt="brand"
              height={20}
            />
          ))}
        </div>
      </section>

      {/* Feature: Smart Flow */}
      <section className="w-full max-w-[1200px] mx-auto p-5 flex flex-col gap-5">
        <h2 className="text-center text-5xl">
          Smart <span className="text-primary">Flow</span>
        </h2>
        <p className="text-center">
          A seamless, step-by-step flow built to guide you from first click to
          final result.
        </p>

        <div className="w-full max-w-[1200px] mx-auto p-5 bg-[#1D1D20] rounded-2xl grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <h3 className="text-primary text-xs">Start Publishing</h3>

            <div className="flex flex-col gap-5">
              <h4 className="text-3xl font-semibold">What You Can Do</h4>
              <p className="dark:text-[#B9BABF] text-sm">
                Here is where researchers, peer reviewers, and readers
                collaborate, publish, and earn in an open, trustless system
              </p>
            </div>

            <Button variant="ghost" className="w-max">
              Request Demo <ChevronRight />
            </Button>
          </div>

          <div>
            {smartFlowFeatures.map((x) => (
              <div key={x.title}>
                <h5>{x.title}</h5>
                <p>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Platform Publishing */}
      <section>
        <div className="relative w-full aspect-video max-w-[1200px] mx-auto p-5">
          <Image
            src={crossPlatform}
            alt="Cross-Platform Publishing"
            fill
            className="object-contain w-full"
          />
        </div>

        <div>
          <p>One post. Every platform, All trustless.</p>
          <h2>
            OpenQuanta pairs you with your ideal audience fast and trustlessly
          </h2>
          <p>
            With SocialFi on Solana, our platform integrates seamlessly with
            your favorite social channels — like X and LinkedIn — automatically
            sharing your research or DAO updates across platforms as soon as
            they go live
          </p>
          <Button variant="link">
            Become a founding contributor <ChevronRight />
          </Button>
        </div>
      </section>

      {/* Onchain Verification */}
      <section className="w-full max-w-[1200px] mx-auto p-5 bg-[#1D1D20] rounded-2xl grid gap-5 md:grid-cols-2">
        <div>
          <h2>On-Chain Journal Verification</h2>
          <h3>Immutable Proof on Solana Blockchain</h3>
          <p>
            Every research journal on OpenQuanta is securely recorded on the
            Solana blockchain. This means your authorship, timestamp, and data
            are cryptographically stored tamper-proof and transparent. When you
            connect your wallet, our platform fetches your journal's on-chain
            record in real-time, proving ownership and authenticity without any
            centralized gatekeeper.
          </p>
        </div>
        <div>
          <Image src={solanaCode} alt="On-Chain Journal Verification" />
        </div>
      </section>

      {/* Feedback and Testimonials */}
      <section>
        <h2 className="text-center text-5xl">
          Meet DeSci &mdash;{" "}
          <span className="text-primary">Real Feedbacks</span>
        </h2>

        <div>
          <h3>Love from DeSci Builders</h3>

          <p>
            Each card below carries a unique voice from different vibrant
            community — researchers, developers, dreamers, and doers — all
            united by a deep love for open science. From labs to ledgers, this
            is love from DeSci builders, to the world.
          </p>

          {/* Review carousel */}
          <div></div>
        </div>
      </section>

      {/* Featured research */}
      <section>
        <div>
          <h2>Featured Research</h2>
          <h3>Punchy research focus/title</h3>
          <p>
            Explore groundbreaking work from scientists, DAOs, All research is
            peer-reviewed, minted on-chain, and shareable across your connected
            socials through SocialFi.
          </p>
          <Button variant="link">
            Explore Research <ChevronRight />
          </Button>
        </div>

        {/* Research previews */}
        <div></div>
      </section>

      <section>
        {/* Search bar */}
        <div>
          <form>
            <input type="text" name="search" id="search" />
          </form>
        </div>

        <div>
          <h2>Start Publishing on openQuanta</h2>
          <p>
            All you need is your research. We handle the rest from on-chain
            proof to peer discovery.
          </p>
          <Button>Join Waitlist</Button>
        </div>
      </section>
    </main>
  );
}
