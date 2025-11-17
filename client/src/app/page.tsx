import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-[50dvh] w-screen">
      <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black/70">
        <h1 className="z-10 bg-linear-to-r from-lime-400 to-green-500 bg-clip-text text-7xl font-extrabold tracking-wider text-transparent">
          foc
        </h1>
      </div>
      <Image
        src={"/fiberOptic.jpg"}
        fill
        alt="fiber optic cables"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
