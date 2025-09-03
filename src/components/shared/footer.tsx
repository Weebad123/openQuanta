import Image from "next/image";
import logo from "@/assets/brand/logoWordOrangeWhite.svg";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="p-5">
      <section className="bg-[#181615]/40 rounded-2xl px-5 py-10">
        <div className="w-full max-w-[1200px] mx-auto grid gap-5 md:grid-cols-2">
          <div>
            <Link href="/">
              <Image src={logo} alt="Open Quanta" className="w-[200px]" />
            </Link>
            <p>
              Publish your research on-chain with authorship Nft, earn
              recognition without gatekeepers, and join a global community
              redefining scientific collaboration.
            </p>

            {/* Social Icons */}
          </div>

          <div className="grid md:grid-cols-3 text-sm">
            <div className="flex flex-col gap-4">
              <h4 className="text-[#4B4848] font-semibold">Documentation</h4>
              <Link href="#">About</Link>
              <Link href="#">Team</Link>
              <Link href="#">Partners</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#4B4848] font-semibold">Links</h4>
              <Link href="#">Discover Research</Link>
              <Link href="#">Whitepaper</Link>
              <Link href="#">Explore Research</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#4B4848] font-semibold">Resources</h4>
              <Link href="#">Demo</Link>
              <Link href="#">Support Center</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto py-10 flex gap-5 justify-between">
        <div>All browser support</div>
        <div>
          <ChevronUp />
        </div>
      </section>
    </footer>
  );
}
