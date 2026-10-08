"use client"
import { PlagiarismCheckout } from "@/features/plagiarism/components/plagiarism-checkout"
import type { PlagiarismService } from "@/features/plagiarism/data/plagiarism"
import { useCheckoutPayment } from "@/features/payment/components/checkout-entry"
export function Checkout({ service }: { service: PlagiarismService }) {
  const onCheckout = useCheckoutPayment()
  return <PlagiarismCheckout service={service} onCheckout={onCheckout} />
}
