import type { Metadata } from "next"

import { LegalPage } from "@/components/layout/legal-page"
import { privacyIntro, privacySections } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: privacyIntro,
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      description={privacyIntro}
      sections={privacySections}
    />
  )
}
