import type { Metadata } from "next"

import { RegisterForm } from "@/components/auth/auth-forms"
import { AuthShell } from "@/components/auth/auth-shell"

export const metadata: Metadata = {
  title: "Daftar",
  description: "Buat akun Ngampus.id.",
}

export default function RegisterPage() {
  return (
    <AuthShell>
      <RegisterForm />
    </AuthShell>
  )
}
