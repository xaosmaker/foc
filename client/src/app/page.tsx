import Achievements from "@/components/Achievements";
import Partners from "@/components/Partners";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="arrow relative h-[50dvh] w-screen">
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-8 bg-black/70 px-6">
          <h1 className="comp-color z-10 scale-150 bg-clip-text text-7xl font-extrabold tracking-wider text-transparent">
            foc
          </h1>
          <p className="text-neutral-50">
            Στόχος μας είναι να φέρουμε αξιόπιστη, υψηλών προδιαγραφών οπτική
            ίνα σε κάθε σπίτι και επιχείρηση.
          </p>
        </div>
        <div className="absolute bottom-20 z-10 flex w-full items-center justify-around px-10">
          <Button
            asChild
            className="comp-color text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-linear-to-l"
          >
            <Link href="/contact">Επικοινωνήστε</Link>
          </Button>

          <Button
            asChild
            className="comp-color text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-linear-to-l"
          >
            <Link href="/about">Εταιρεία</Link>
          </Button>
          <Button
            asChild
            className="comp-color text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-linear-to-l"
          >
            <Link href="/services">Υπηρεσίες</Link>
          </Button>
        </div>

        <Image
          src={"/fiber_optic.jpg"}
          fill
          alt="fiber optic cables"
          className="h-full w-full object-cover"
        />
      </div>

      <Partners />
      <Achievements />
    </>
  );
}
