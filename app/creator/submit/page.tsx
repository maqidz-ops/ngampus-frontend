import type { Metadata } from "next"

import { AuthShell } from "@/components/auth/auth-shell"
import { SubmitContentForm } from "@/components/creator/submit-content-form"

export const metadata: Metadata = {
  title: "Submit Konten",
  description: "Kirim konten kampanye Ngampus Creator untuk diverifikasi.",
}

export default async function CreatorSubmitPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string | string[] }>
}) {
  const { from } = await searchParams
  const fromDashboard = from === "dashboard"

  return (
    <AuthShell
      backHref={fromDashboard ? "/creator/dashboard" : "/creator"}
      backLabel={
        fromDashboard ? "Kembali ke Dashboard" : "Kembali ke Beranda"
      }
    >
      <SubmitContentForm />
    </AuthShell>
  )
}
