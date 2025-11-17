import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="relative h-14 w-14" href="/">
      <Image
        fill
        src="/focLg.png"
        className="h-full w-full object-contain"
        alt="logo of the FOC company"
      />
    </Link>
  );
}
