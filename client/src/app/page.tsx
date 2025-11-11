import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src={"/fiberOptic.jpg"}
        fill
        alt="fiber optic cables"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
