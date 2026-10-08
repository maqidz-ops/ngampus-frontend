"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { readCreatorSession } from "@/lib/creator-session"

function submitHref() {
  return readCreatorSession()
    ? "/creator/submit?from=beranda"
    : "/creator/daftar"
}

export function CreatorBannerSubmit() {
  const router = useRouter()
  const [href, setHref] = useState("/creator/daftar")

  useEffect(() => {
    setHref(submitHref())
  }, [])

  return (
    <Button asChild size="pill" variant="white">
      <Link
        href={href}
        onClick={(event) => {
          event.preventDefault()
          router.push(submitHref())
        }}
      >
        Submit Konten
      </Link>
    </Button>
  )
}
