import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PandaLogoProps {
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PandaLogo({ className = "" }: PandaLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 group select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Panda Cafe Logo"
        width={160}
        height={40}
        priority
        className="h-7 sm:h-9 md:h-10 w-auto object-contain"
        style={{ width: "auto" }}
      />
    </Link>
  );
}
