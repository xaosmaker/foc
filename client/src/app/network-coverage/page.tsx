import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Network Coverage",
};
export default function Page() {
  return (
    <div className="flex h-[70dvh] w-full items-center justify-center-safe text-center">
      <div className="max-w-2xl px-4">
        <h3>
          Η σελίδα θα σας ανακατευθύνει στην επίσημη κυβερνητική εφαρμογή
          (broadband-assist.gov.gr) για προβολή της κάλυψης δικτύων.
        </h3>
        <Button
          asChild
          className="mt-20 bg-linear-to-r from-lime-400 to-green-500 text-neutral-950 transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-lime-400"
        >
          <a
            href="https://www.broadband-assist.gov.gr/public"
            target="_blank"
            rel="noopener noreferrer"
          >
            Μετάβαση στην επίσημη εφαρμογή <ArrowRight />
          </a>
        </Button>
      </div>
    </div>
  );
}
