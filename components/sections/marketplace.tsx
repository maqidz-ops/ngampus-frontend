import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { marketplace } from "@/lib/content/home"
import { marketplaceApps } from "@/lib/content/marketplace"
import { cn } from "@/lib/utils"

const previewSlugs = ["chatgpt", "claude", "gemini"]

export function Marketplace() {
  const items = previewSlugs
    .map((slug) => marketplaceApps.find((app) => app.slug === slug))
    .filter((app) => app !== undefined)

  return (
    <section
      id="marketplace"
      className="mx-auto flex w-full max-w-[1280px] scroll-mt-20 flex-col gap-10 px-5 py-16 text-black md:px-10 lg:gap-15 lg:p-20"
    >
      <SectionHeading
        title={marketplace.title}
        description={marketplace.description}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((app) => (
          <article
            key={app.slug}
            className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5"
          >
            <div className="flex items-center gap-3">
              <Image
                src={app.logo}
                alt=""
                width={56}
                height={56}
                className={cn(
                  "size-14 rounded-xl object-cover",
                  app.logoBordered && "border border-line"
                )}
              />
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  {app.name}
                </h3>
                <p className="flex items-center gap-1.5 text-sm tracking-[-0.02em] text-subtle">
                  <Star
                    className="size-4 fill-primary text-primary"
                    aria-hidden
                  />
                  <span className="text-black">5.0</span>
                  <span>· Telah Terjual 599</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm tracking-[-0.02em] text-subtle line-through">
                {app.comparePrice}
              </p>
              <p className="text-2xl font-semibold tracking-[-0.02em]">
                {app.price}
              </p>
              <div className="flex flex-wrap gap-2">
                {["Stok Tersedia", "Garansi"].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-line px-3 py-2 text-sm tracking-[-0.02em]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild className="h-11 w-full rounded-3xl text-sm">
              <Link href={`/marketplace/${app.slug}`}>{app.cta}</Link>
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
