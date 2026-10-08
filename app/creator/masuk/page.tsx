import type { Metadata } from "next"

import { AuthShell } from "@/components/auth/auth-shell"
import { CreatorLoginForm } from "@/components/creator/creator-auth"

export const metadata: Metadata = {
  title: "Masuk Creator",
  description: "Masuk ke dashboard Ngampus Creator.",
}

export default function CreatorLoginPage() {
  return (
    <AuthShell backHref="/creator" backLabel="Kembali ke Ngampus Creator">
      <CreatorLoginForm />
    </AuthShell>
  )
}
