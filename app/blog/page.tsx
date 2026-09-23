import type { Metadata } from "next"
import Link from "next/link"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { SectionHeading } from "@/components/sections/section-heading"
import { blogPosts } from "@/lib/content/blog"

export const metadata: Metadata = {
  title: "Blog & Berita",
  description: "Jawaban singkat soal Ngampus. Masih bingung? Chat admin kami.",
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Beranda", href: "/" }, { label: "Blog & Berita" }]}
      />
      <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-5 py-16 md:px-10 lg:gap-16 lg:py-20">
        <SectionHeading
          title="Blog & Berita Terbaru"
          description="Jawaban singkat soal Ngampus. Masih bingung? Chat admin kami."
          align="center"
          className="max-w-[720px]"
        />
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-primary"
            >
              <div className="h-40 rounded-xl bg-surface" aria-hidden />
              <div className="flex flex-col gap-1 px-1 pb-2">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">
                  {post.title}
                </h3>
                <p className="text-sm tracking-[-0.02em] text-black">
                  {post.date} - TIM NGAMPUS
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
