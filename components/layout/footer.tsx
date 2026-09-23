import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { footer } from "@/lib/content/home"
import { footerColumns, type NavLink } from "@/lib/content/navigation"

function ContactIcon({ icon }: { icon: NavLink["icon"] }) {
  if (icon === "phone") {
    return <Phone className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
  }

  if (icon === "email") {
    return <Mail className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
  }

  if (icon === "tiktok") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-5 shrink-0"
        fill="currentColor"
        aria-hidden
      >
        <path d="M14.2 3c.4 2.4 1.8 4.1 4.1 4.4v2.8a7 7 0 0 1-4.1-1.3v6.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 1.9 2.7V3z" />
      </svg>
    )
  }

  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  return null
}

export function Footer() {
  return (
    <footer id="kontak" className="bg-surface-footer">
      <div className="mx-auto flex max-w-[1280px] flex-col px-5 py-15 md:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex max-w-[400px] flex-col gap-10">
            <Link href="/" aria-label="Ngampus.id beranda">
              <Image
                src="/images/logo-text-orange.png"
                alt="ngampus.id"
                width={1068}
                height={225}
                className="h-[38px] w-[180px]"
              />
            </Link>
            <p className="tracking-[-0.02em] text-black">
              {footer.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-15">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="flex w-max min-w-[136px] flex-col gap-4"
              >
                <p className="tracking-[-0.02em] text-black">{column.title}</p>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link, i) => {
                    const external = link.href.startsWith("http")
                    const [name, domain] = link.label.split("@")
                    const email = link.icon === "email" && domain
                    return (
                      <li key={i} className={email ? "w-0 min-w-full" : undefined}>
                        <Link
                          href={link.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className={`inline-flex max-w-full gap-2 tracking-[-0.02em] whitespace-nowrap text-black hover:text-primary ${email ? "items-start" : "items-center"}`}
                        >
                          <ContactIcon icon={link.icon} />
                          {email ? (
                            <span className="min-w-0 whitespace-normal">
                              {name}@<wbr />
                              {domain}
                            </span>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
