import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative h-14 w-14">
      <Image
        fill
        src="/focLg.png"
        className="h-full w-full object-contain"
        alt="logo of the FOC company"
      />
    </div>
  );
}
