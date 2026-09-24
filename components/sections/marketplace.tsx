import Image from "next/image"
import Link from "next/link"

import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { marketplace } from "@/lib/content/home"
import { cn } from "@/lib/utils"

export function Marketplace() {
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
        {marketplace.items.map((item) => (
          <Card
            key={item.name}
            className="min-h-[300px] justify-between gap-10 rounded-2xl border border-line bg-white p-5 ring-0 lg:h-[360px]"
          >
            <div className="flex h-12 items-center justify-between">
              <Image
                src={item.logo}
                alt={`Logo ${item.name}`}
                width={48}
                height={48}
                className={cn(
                  "size-12 rounded-xl object-cover",
                  item.logoBordered && "border border-line"
                )}
              />
              <p className="text-lg font-semibold text-plum-700">
                {item.price}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-subtle">{item.description}</p>
              </div>
              <Button
                asChild
                className="h-11 w-full rounded-3xl px-4 text-sm font-medium"
              >
                <Link href={`/marketplace/${item.name.toLowerCase()}`}>
                  {item.cta}
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
