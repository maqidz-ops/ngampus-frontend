import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { Cta } from "@/components/sections/cta"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Testimonials } from "@/components/sections/testimonials"
import { ToolCategories } from "@/components/sections/tool-categories"
import { WhyNgampus } from "@/components/sections/why-ngampus"

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Hero />
      <ToolCategories />
      <WhyNgampus />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  )
}
