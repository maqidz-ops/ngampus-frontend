import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { Cta } from "@/components/sections/cta"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Marketplace } from "@/components/sections/marketplace"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { ToolCategories } from "@/components/sections/tool-categories"
import { TrustedBy } from "@/components/sections/trusted-by"
import { WhyNgampus } from "@/components/sections/why-ngampus"

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Hero />
      <TrustedBy />
      <ToolCategories />
      <WhyNgampus />
      <Marketplace />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  )
}
