import type { Metadata } from "next"

import { AuthShell } from "@/components/auth/auth-shell"
import { WithdrawForm } from "@/components/creator/withdraw-form"

export const metadata: Metadata = {
  title: "Penarikan Saldo",
  description: "Tarik saldo reward Ngampus Creator.",
}

export default function CreatorWithdrawPage() {
  return (
    <AuthShell backHref="/creator/dashboard" backLabel="Kembali ke Dashboard">
      <WithdrawForm />
    </AuthShell>
  )
}
