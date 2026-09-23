import type { Metadata } from "next"

import { LegalPage } from "@/components/layout/legal-page"
import { legalIntro, privacySections } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: legalIntro,
}

export default function PrivacyPage() {
  return <LegalPage title="Kebijakan Privasi" sections={privacySections} />
}
