import type { Metadata } from "next"

import { PlagiarismCheckout } from "@/components/sections/plagiarism-checkout"

export const metadata: Metadata = {
  title: "Cek Plagiarisme",
  description:
    "Unggah dokumen, bayar, dan terima laporan cek plagiasi di WhatsApp.",
}

export default function PlagiarismPage() {
  return <PlagiarismCheckout />
}
