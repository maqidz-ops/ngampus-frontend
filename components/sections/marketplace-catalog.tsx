"use client"

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
      <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-5 py-12 md:px-10 lg:py-16">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <article
                key={app.name}
                className="flex min-h-[280px] flex-col justify-between rounded-2xl border border-line bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <Image
                    src={app.logo}
                    alt=""
                    width={48}
                    height={48}
                    className={cn(
                      "size-12 rounded-xl object-cover",
                      app.logoBordered && "border border-line"
                    )}
                  />
                  <p className="text-base font-semibold tracking-[-0.02em] text-plum-700">
                    {app.price}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold tracking-[-0.02em]">
                      {app.name}
                    </h2>
                    <p className="text-sm tracking-[-0.02em] text-subtle">
                      {app.description}
                    </p>
                  </div>
                  <Button asChild size="pill" className="w-full">
                    <Link href="/#harga">{app.cta}</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
