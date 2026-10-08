import type { Metadata } from "next"

import { AuthShell } from "@/components/auth/auth-shell"
import { CreatorRegisterForm } from "@/components/creator/creator-auth"

export const metadata: Metadata = {
  title: "Daftar Creator",
  description: "Buat akun Ngampus Creator.",
}

export default function CreatorRegisterPage() {
  return (
    <AuthShell backHref="/creator" backLabel="Kembali ke Ngampus Creator">
      <CreatorRegisterForm />
    </AuthShell>
  )
}
