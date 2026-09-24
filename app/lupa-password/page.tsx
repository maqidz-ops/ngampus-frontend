import type { Metadata } from "next"

import { ForgotPasswordForm } from "@/components/auth/auth-forms"
import { AuthShell } from "@/components/auth/auth-shell"

export const metadata: Metadata = {
  title: "Lupa Password",
  description: "Kirim link reset password Ngampus.id.",
}

export default function ForgotPasswordPage() {
  return (
    <AuthShell>
      <ForgotPasswordForm />
    </AuthShell>
  )
}
