import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
export default function Partners({
  className,
}: {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <div className={cn("flex gap-10 p-10", className)}>
      <Image src="/OTE_Logo.svg" width={100} height={100} alt="ote logo" />
      <Image src="/Vodafone_Logo.svg" width={100} height={100} alt="ote logo" />
    </div>
  );
}
