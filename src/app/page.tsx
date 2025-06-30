import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="font-sans">
      <section className="p-5 w-full max-w-[1280px] mx-auto">
        <div>
          <Button>
            Road to DeSci Revolution <ChevronRight />
          </Button>
        </div>
      </section>
    </main>
  );
}
