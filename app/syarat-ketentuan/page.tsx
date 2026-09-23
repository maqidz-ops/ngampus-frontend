import type { Metadata } from "next"

import { LegalPage } from "@/components/layout/legal-page"
import { legalIntro, termsSections } from "@/lib/content/legal"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: legalIntro,
}

export default function TermsPage() {
  return <LegalPage title="Syarat & Ketentuan" sections={termsSections} />
}
