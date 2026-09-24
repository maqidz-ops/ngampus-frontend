"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  marketplaceApps,
  marketplaceCategories,
  type MarketplaceCategory,
} from "@/lib/content/marketplace"
import { cn } from "@/lib/utils"

export function MarketplaceCatalog() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<MarketplaceCategory>("semua")

  const apps = useMemo(() => {
    const term = query.trim().toLowerCase()
    return marketplaceApps.filter((app) => {
      const matchesCategory = category === "semua" || app.category === category
      const matchesQuery =
        term.length === 0 ||
        app.name.toLowerCase().includes(term) ||
        app.description.toLowerCase().includes(term)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <>
      <Breadcrumb
        items={[{ label: "Beranda", href: "/" }, { label: "Marketplace" }]}
      />
      <section className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-5 py-12 md:px-10 lg:py-16">
        <label className="sr-only" htmlFor="marketplace-search">
          Cari aplikasi
        </label>
        <input
          id="marketplace-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari ChatGPT, Canva, CapCut..."
          className="h-12 w-full rounded-full border border-line bg-white px-5 text-sm tracking-[-0.02em] outline-none placeholder:text-subtle focus-visible:border-primary"
        />
        <div className="flex flex-wrap gap-2">
          {marketplaceCategories.map((item) => {
            const selected = item.id === category
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(item.id)}
                className={cn(
                  "h-9 rounded-full px-4 text-sm tracking-[-0.02em]",
                  selected
                    ? "bg-primary text-white"
                    : "border border-line bg-white text-black"
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
        {apps.length === 0 ? (
          <p className="py-16 text-center text-sm tracking-[-0.02em] text-subtle">
            Tidak ada aplikasi untuk pencarian ini.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <article
                key={app.name}
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
                    <h2 className="text-base font-semibold tracking-[-0.02em]">
                      {app.name}
                    </h2>
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
        )}
      </section>
    </>
  )
}
