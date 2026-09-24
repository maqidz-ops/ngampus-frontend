import type { Metadata } from "next"

import { LoginForm } from "@/components/auth/auth-forms"
import { AuthShell } from "@/components/auth/auth-shell"

export const metadata: Metadata = {
  title: "Masuk",
  description: "Masuk ke akun Ngampus.id.",
}

export default function LoginPage() {
  return (
    <AuthShell>
      <LoginForm />
    </AuthShell>
  )
}
