import { Files, GraduationCap, Sparkles, type LucideIcon } from "lucide-react"
import Link from "next/link"

import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toolCategories } from "@/lib/content/home"

const categoryIcons: Record<string, LucideIcon> = {
  "Akses AI populer": Sparkles,
  "Cek Plagiarisme": GraduationCap,
  "File tools": Files,
}

export function ToolCategories() {
  return (
    <section
      id="tools"
      className="mx-auto flex w-full max-w-[1280px] scroll-mt-20 flex-col gap-10 px-5 py-16 text-black md:px-10 lg:gap-15 lg:p-20"
    >
      <SectionHeading
        title={toolCategories.title}
        description={toolCategories.description}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {toolCategories.items.map((item) => {
          const Icon = categoryIcons[item.title]
          return (
            <Card
              key={item.title}
              className="min-h-[300px] justify-between gap-10 rounded-2xl bg-surface p-6 text-base ring-0 lg:h-[360px]"
            >
              <div
                className="flex size-15 items-center justify-center rounded-xl bg-white"
                aria-hidden
              >
                <Icon className="size-7 text-primary" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-start gap-[21px]">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="tracking-[-0.02em]">{item.description}</p>
                </div>
                <Button asChild size="pill">
                  <Link href={item.href}>{item.cta ?? "Lihat tools"}</Link>
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
