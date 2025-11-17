import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="mx-auto mt-10 max-w-2xl text-center">
      <h3>
        Η σελίδα θα σας ανακατευθύνει στην επίσημη κυβερνητική εφαρμογή
        (broadband-assist.gov.gr) για προβολή της κάλυψης δικτύων.
      </h3>
      <Button asChild className="mt-20">
        <a
          href="https://www.broadband-assist.gov.gr/public"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105"
        >
          Μετάβαση στην επίσημη κυβερνητική εφαρμογή <ArrowRight />
        </a>
      </Button>
    </div>
  );
}
