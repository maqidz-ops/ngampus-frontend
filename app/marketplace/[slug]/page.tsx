import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { MarketplaceCheckout } from "@/features/marketplace/components/marketplace-checkout"
import { getMarketplaceCheckout } from "@/features/marketplace/services/catalog"
import { marketplaceApps } from "@/features/marketplace/data/marketplace"

export function generateStaticParams() {
  return marketplaceApps.map((app) => ({ slug: app.slug }))
}

type MarketplaceProductProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: MarketplaceProductProps): Promise<Metadata> {
  const { slug } = await params
  const product = getMarketplaceCheckout(slug)
  if (!product) return { title: "Produk tidak ditemukan" }
  return {
    title: product.name,
    description: `Checkout ${product.name} di marketplace Ngampus.`,
  }
}

export default async function MarketplaceProductPage({
  params,
}: MarketplaceProductProps) {
  const { slug } = await params
  const product = getMarketplaceCheckout(slug)
  if (!product) notFound()

  return <MarketplaceCheckout product={product} />
}
