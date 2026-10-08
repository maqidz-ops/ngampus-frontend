import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PlagiarismCheckout } from "@/components/sections/plagiarism-checkout"
import {
  getPlagiarismService,
  plagiarismServices,
} from "@/lib/content/plagiarism"

export function generateStaticParams() {
  return plagiarismServices.map((service) => ({ slug: service.slug }))
}

type PlagiarismServicePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PlagiarismServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getPlagiarismService(slug)
  if (!service) return { title: "Layanan tidak ditemukan" }
  return {
    title: service.title,
    description: service.description,
  }
}

export default async function PlagiarismServicePage({
  params,
}: PlagiarismServicePageProps) {
  const { slug } = await params
  const service = getPlagiarismService(slug)
  if (!service) notFound()

  return <PlagiarismCheckout service={service} />
}
