import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Ngampus.id - Tools kuliah, lengkap di satu tempat",
    template: "%s | Ngampus.id",
  },
  description:
    "Platform kuliah all-in-one: cek plagiasi, deteksi AI, akses AI premium, dan file tools untuk mahasiswa Indonesia.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
