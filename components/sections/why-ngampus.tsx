import {
  BadgeCheck,
  Clock,
  FileText,
  FolderX,
  Lock,
  Timer,
  type LucideIcon,
} from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import { Card } from "@/components/ui/card"
import { whyNgampus } from "@/lib/content/home"

const benefitIcons: Record<string, LucideIcon> = {
  "Platform resmi": BadgeCheck,
  "Akses 24 jam": Clock,
  "Selesai dalam menit": Timer,
  "Privasi terjaga": Lock,
  "Tidak masuk repository": FolderX,
  "Laporan lengkap": FileText,
}

export function WhyNgampus() {
  return (
    <section className="bg-plum-700 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 py-16 md:px-10 lg:gap-[85px] lg:p-20">
        <SectionHeading
          title={whyNgampus.title}
          description={whyNgampus.description}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyNgampus.items.map((item) => {
            const Icon = benefitIcons[item.title]
            return (
              <Card
                key={item.title}
                className="min-h-[240px] justify-between gap-10 rounded-2xl bg-white p-6 text-base text-black ring-0 lg:min-h-[280px]"
              >
                <div
                  className="flex size-15 shrink-0 items-center justify-center rounded-xl bg-plum-700"
                  aria-hidden
                >
                  <Icon className="size-7 text-white" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="tracking-[-0.02em]">{item.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
