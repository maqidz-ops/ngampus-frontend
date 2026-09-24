import type { Metadata } from "next"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import {
  campaignContentRules,
  campaignFeeNote,
  campaignFees,
  campaignPlatforms,
  campaignSections,
} from "@/lib/content/campaign"

function PlatformIcon({
  icon,
}: {
  icon: (typeof campaignPlatforms)[number]["icon"]
}) {
  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (icon === "tiktok") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        fill="currentColor"
        aria-hidden
      >
        <path d="M14.2 3c.4 2.4 1.8 4.1 4.1 4.4v2.8a7 7 0 0 1-4.1-1.3v6.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 1.9 2.7V3z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="M14.7 3h3.1l-6.8 7.8L18.6 21h-3.2l-5-6.6L6.2 21H3.1l7.3-8.3L3.4 3h3.3l4.5 6z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "UGC Campaign",
  description:
    "Syarat social media, fee, dan cara submit untuk campaign UGC Ngampus.",
}

export default function UgcCampaignPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Beranda", href: "/" }, { label: "UGC Campaign" }]}
      />
      <article className="mx-auto flex w-full max-w-[1100px] flex-col gap-4 px-5 py-10 md:px-10 lg:py-14">
        <h1 className="sr-only">UGC Campaign</h1>
        <section className="flex flex-col gap-4 rounded-2xl border border-line p-5 md:p-6">
          <h2 className="text-base font-semibold tracking-[-0.02em]">
            Syarat Social Media
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {campaignPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col gap-4 rounded-[12px] border border-line p-4"
              >
                <span className="flex size-12 items-center justify-center rounded-[12px] bg-primary text-white">
                  <PlatformIcon icon={platform.icon} />
                </span>
                <h3 className="text-base font-semibold tracking-[-0.02em]">
                  {platform.name}
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-6 tracking-[-0.02em]">
                  {platform.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-line p-5 md:p-6">
          <h2 className="text-base font-semibold tracking-[-0.02em]">
            Fee & Bonus
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {campaignFees.map((fee) => (
              <div
                key={fee.name}
                className="flex flex-col gap-2 rounded-[12px] border border-line p-4"
              >
                <h3 className="text-sm font-semibold tracking-[-0.02em]">
                  {fee.name}
                </h3>
                <p className="text-sm leading-6 tracking-[-0.02em]">
                  {fee.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-6 tracking-[-0.02em] text-subtle">
            {campaignFeeNote}
          </p>
          <h3 className="text-sm font-semibold tracking-[-0.02em]">
            Ketentuan Konten
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 tracking-[-0.02em]">
            {campaignContentRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {campaignSections.map((section) => (
          <section
            key={section.title}
            className="flex flex-col gap-3 rounded-2xl border border-line p-5 md:p-6"
          >
            <h2 className="text-base font-semibold tracking-[-0.02em]">
              {section.title}
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-6 tracking-[-0.02em]">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    </>
  )
}
