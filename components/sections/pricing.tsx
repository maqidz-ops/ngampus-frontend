import { Crown, Star, Zap, type LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { pricing } from "@/lib/content/home"

const planIcons: Record<string, LucideIcon> = {
  Starter: Zap,
  Standar: Star,
  Premium: Crown,
}

export function Pricing() {
  return (
    <section
      id="harga"
      className="mx-auto flex w-full max-w-[1280px] scroll-mt-20 flex-col items-center gap-10 px-5 py-16 text-black md:px-10 lg:gap-15 lg:py-25"
    >
      <SectionHeading
        title={pricing.title}
        description={pricing.description}
        align="center"
      />
      <div className="grid w-full gap-6 md:grid-cols-3">
        {pricing.plans.map((plan) => {
          const Icon = planIcons[plan.name]
          return (
            <Card
              key={plan.name}
              className="justify-between gap-10 rounded-2xl border border-line bg-white p-4 text-base ring-0 lg:h-[475px]"
            >
              <div className="flex flex-col gap-8">
                <div className="flex h-15 items-center justify-between">
                  <div
                    className="flex size-15 items-center justify-center rounded-xl bg-surface"
                    aria-hidden
                  >
                    <Icon className="size-7 text-primary" strokeWidth={1.75} />
                  </div>
                  <p className="text-[22px] font-semibold tracking-[-0.02em]">
                    {plan.price}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
                      {plan.name}
                    </h3>
                    <p className="tracking-[-0.02em]">{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Image
                          src="/icons/tick-circle.svg"
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden
                        />
                        <span className="tracking-[-0.02em]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button asChild size="pill-lg" className="w-full">
                <Link href="/#">{pricing.cta}</Link>
              </Button>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
