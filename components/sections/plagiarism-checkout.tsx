"use client"

import {
  FileText,
  MessageCircle,
  Phone,
  QrCode,
  TicketPercent,
  Upload,
} from "lucide-react"
import { useId, useState } from "react"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import {
  plagiarismCheckout,
  plagiarismFilters,
  plagiarismSteps,
} from "@/lib/content/plagiarism"

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(bytes / 1024, 0.1).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const stepIcons = {
  upload: Upload,
  qris: QrCode,
  whatsapp: MessageCircle,
}

export function PlagiarismCheckout() {
  const uploadId = useId()
  const [phone, setPhone] = useState("")
  const [promo, setPromo] = useState("")
  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      plagiarismFilters.map((filter) => [filter.id, filter.defaultChecked])
    )
  )
  const [file, setFile] = useState<File | null>(null)
  const [excludeAmount, setExcludeAmount] = useState("20")
  const [excludeUnit, setExcludeUnit] = useState<"kata" | "persentase">(
    "persentase"
  )

  return (
    <>
      <Breadcrumb
        items={[{ label: "Beranda", href: "/" }, { label: "Cek Plagiarisme" }]}
      />
      <section className="mx-auto grid w-full max-w-[1100px] items-start gap-6 px-5 py-12 md:px-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.85fr)] lg:py-16">
        <form
          className="flex flex-col gap-6 rounded-2xl border border-line p-5 md:p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium tracking-[-0.02em]">
              No. Telepon
              <span className="relative">
                <Phone
                  className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle"
                  aria-hidden
                />
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Nomor Telepon"
                  autoComplete="tel"
                  className="h-12 w-full rounded-full border border-line bg-white pr-4 pl-11 text-sm tracking-[-0.02em] outline-none placeholder:text-subtle focus-visible:border-primary"
                />
              </span>
            </label>
            <div className="flex flex-col gap-2 text-sm font-medium tracking-[-0.02em]">
              <label htmlFor="promo">Kode Promo</label>
              <span className="relative">
                <TicketPercent
                  className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle"
                  aria-hidden
                />
                <input
                  id="promo"
                  type="text"
                  name="promo"
                  value={promo}
                  onChange={(event) => setPromo(event.target.value)}
                  placeholder="Kode promo"
                  className="h-12 w-full rounded-full border border-line bg-white pr-28 pl-11 text-sm tracking-[-0.02em] outline-none placeholder:text-subtle focus-visible:border-primary"
                />
                <Button
                  type="button"
                  size="pill"
                  className="absolute top-1/2 right-1.5 h-9 -translate-y-1/2 px-3.5 text-sm"
                >
                  Gunakan
                </Button>
              </span>
            </div>
          </div>

          <fieldset className="flex flex-col gap-3">
            <legend className="mb-3 text-sm font-medium tracking-[-0.02em]">
              Filter
            </legend>
            <div className="grid gap-3 sm:grid-cols-3">
              {plagiarismFilters.map((filter) => {
                const isChecked = checked[filter.id]
                return (
                  <label
                    key={filter.id}
                    className="flex cursor-pointer gap-2.5 rounded-xl border border-line p-3"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() =>
                        setChecked((current) => ({
                          ...current,
                          [filter.id]: !current[filter.id],
                        }))
                      }
                      className="mt-0.5 size-4 shrink-0 accent-primary"
                    />
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold tracking-[-0.02em]">
                        {filter.title}
                      </span>
                      <span className="text-xs leading-4 tracking-[-0.02em] text-subtle">
                        {filter.description}
                      </span>
                    </span>
                  </label>
                )
              })}
            </div>
            {checked["exclude-matches"] && (
              <div className="flex flex-col gap-3 rounded-xl border border-line p-4">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold tracking-[-0.02em]">
                    Kecualikan Sumber yang Kurang Dari
                  </p>
                  <p className="text-xs leading-4 tracking-[-0.02em] text-subtle">
                    Abaikan kecocokan di bawah batas minimum
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <input
                    type="number"
                    min={0}
                    inputMode="numeric"
                    value={excludeAmount}
                    onChange={(event) => setExcludeAmount(event.target.value)}
                    aria-label="Batas minimum"
                    className="h-12 w-20 rounded-xl border border-line text-center text-base tracking-[-0.02em] outline-none focus-visible:border-primary"
                  />
                  <label className="flex items-center gap-2 text-sm tracking-[-0.02em]">
                    <input
                      type="radio"
                      name="exclude-unit"
                      value="kata"
                      checked={excludeUnit === "kata"}
                      onChange={() => setExcludeUnit("kata")}
                      className="size-4 accent-primary"
                    />
                    Kata
                  </label>
                  <label className="flex items-center gap-2 text-sm tracking-[-0.02em]">
                    <input
                      type="radio"
                      name="exclude-unit"
                      value="persentase"
                      checked={excludeUnit === "persentase"}
                      onChange={() => setExcludeUnit("persentase")}
                      className="size-4 accent-primary"
                    />
                    Persentase (%)
                  </label>
                </div>
              </div>
            )}
          </fieldset>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium tracking-[-0.02em]">
              Upload Dokumen
            </p>
            <label
              htmlFor={uploadId}
              className="flex min-h-52 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl bg-surface px-6 py-8 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-white">
                <FileText className="size-5" aria-hidden />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-base font-semibold tracking-[-0.02em]">
                  {plagiarismCheckout.uploadTitle}
                </span>
                <span className="text-sm tracking-[-0.02em] text-subtle">
                  {file?.name ?? plagiarismCheckout.uploadDescription}
                </span>
              </span>
            </label>
            <input
              id={uploadId}
              type="file"
              accept=".pdf,.doc,.docx,.txt,application/pdf"
              className="sr-only"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            />
          </div>
        </form>

        <aside className="flex flex-col gap-6 rounded-2xl border border-line p-5 md:p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold tracking-[-0.02em]">
              {plagiarismCheckout.summaryTitle}
            </h2>
            <p className="text-sm tracking-[-0.02em] text-subtle">
              {plagiarismCheckout.summaryDescription}
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-surface p-3">
            <FileText className="size-5 shrink-0" aria-hidden />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[-0.02em]">
                {file?.name ?? plagiarismCheckout.emptyFile}
              </span>
              <span className="block text-xs tracking-[-0.02em] text-subtle">
                {file ? formatSize(file.size) : "—"}
              </span>
            </span>
          </div>
          <dl className="flex flex-col gap-3 text-sm tracking-[-0.02em]">
            <div className="flex items-center justify-between">
              <dt>Subtotal</dt>
              <dd>{plagiarismCheckout.priceLabel}</dd>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <dt>Total Pembayaran</dt>
              <dd>{plagiarismCheckout.priceLabel}</dd>
            </div>
          </dl>
          <Button type="button" size="pill-lg" className="w-full">
            {plagiarismCheckout.payLabel}
          </Button>
        </aside>
      </section>

      <section className="bg-surface">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-12 px-5 py-16 md:px-10 lg:py-20">
          <SectionHeading
            title={plagiarismCheckout.howTo.title}
            description={plagiarismCheckout.howTo.description}
            align="center"
            className="max-w-[640px]"
          />
          <div className="grid w-full gap-4 md:grid-cols-3">
            {plagiarismSteps.map((step) => {
              const Icon = stepIcons[step.icon]
              return (
                <article
                  key={step.title}
                  className="flex min-h-[280px] flex-col justify-between rounded-2xl border border-line bg-white p-6"
                >
                  <span
                    className="flex size-14 items-center justify-center rounded-xl bg-plum-900 text-white"
                    aria-hidden
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 tracking-[-0.02em]">
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
