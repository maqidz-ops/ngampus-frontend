import type { Metadata } from "next"

import { CreatorDashboard } from "@/components/creator/creator-dashboard"

export const metadata: Metadata = {
  title: "Dashboard Creator",
  description: "Dashboard Ngampus Creator.",
}

export default function CreatorDashboardPage() {
  return <CreatorDashboard />
}
