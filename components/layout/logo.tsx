import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Ngampus.id beranda" className="shrink-0">
      <Image
        src="/images/logo-text-orange.png"
        alt="ngampus.id"
        width={1068}
        height={225}
        priority
        className={cn("h-[29px] w-[140px]", className)}
      />
    </Link>
  )
}
