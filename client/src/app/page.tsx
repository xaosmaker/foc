import Companies from "@/components/Companies";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-[90dvh] w-screen">
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-8 bg-black/70 px-6">
          <h1 className="z-10 scale-200 bg-linear-to-r from-lime-400 to-green-500 bg-clip-text font-extrabold tracking-wider text-transparent">
            foc
          </h1>
          <p className="text-neutral-50">
            Στόχος μας είναι να φέρουμε αξιόπιστη, υψηλών προδιαγραφών οπτική
            ίνα σε κάθε σπίτι και επιχείρηση.
          </p>
        </div>
        <div className="absolute bottom-10 z-10 flex w-full items-center justify-around px-10">
          <Button
            asChild
            className="bg-linear-to-r from-lime-400 to-green-500 text-neutral-950 transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-lime-400"
          >
            <Link href="#">Contact Us</Link>
          </Button>
          <Button
            asChild
            className="bg-linear-to-r from-lime-400 to-green-500 text-neutral-950 transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-lime-400"
          >
            <Link href="/services">Services</Link>
          </Button>
        </div>

        <Image
          src={"/fiber_optic.jpg"}
          fill
          alt="fiber optic cables"
          className="h-full w-full object-cover"
        />
      </div>

      <Companies />
    </>
  );
}
