import type { Metadata } from "next"

import { LegalPage } from "@/components/layout/legal-page"
import { termsIntro, termsSections } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: termsIntro,
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Syarat & Ketentuan"
      description={termsIntro}
      sections={termsSections}
    />
  )
}
