"use client"

import { RefreshCw } from "lucide-react"
import { useState } from "react"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"

export function OrderHistory() {
  const [query, setQuery] = useState("")
  const [submitted, setSubmitted] = useState<string | null>(null)

  function reload() {
    setQuery("")
    setSubmitted(null)
  }

  return (
    <>
      <Breadcrumb
        items={[{ label: "Beranda", href: "/" }, { label: "Riwayat Pesanan" }]}
      />
      <section className="mx-auto flex w-full max-w-[960px] flex-col gap-8 px-5 py-12 md:px-10 lg:py-16">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-[-0.02em] text-black">
            Riwayat Pesanan
          </h1>
          <Button
            type="button"
            variant="outline"
            size="pill"
            onClick={reload}
          >
            <RefreshCw aria-hidden />
            Muat ulang
          </Button>
        </div>

        <form
          className="flex flex-col gap-4 rounded-3xl border border-line p-5 md:p-6"
          onSubmit={(event) => {
            event.preventDefault()
            const value = query.trim()
            if (!value) return
            setSubmitted(value)
          }}
        >
          <p className="text-sm tracking-[-0.02em] text-subtle">
            Masukkan nomor WhatsApp atau kode order.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              name="order"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nomor WhatsApp atau kode order"
              autoComplete="tel"
              className="h-12 min-w-0 flex-1 rounded-xl border border-transparent bg-surface px-4 text-sm tracking-[-0.02em] outline-none placeholder:text-subtle focus-visible:border-primary"
            />
            <Button type="submit" className="h-12 rounded-xl px-6">
              Cari
            </Button>
          </div>
        </form>

        {submitted && (
          <p className="text-sm tracking-[-0.02em] text-subtle">
            Tidak ada pesanan untuk “{submitted}”.
          </p>
        )}
      </section>
    </>
  )
}
