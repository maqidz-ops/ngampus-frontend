import Image from "next/image"

import { trustedBy } from "@/lib/content/home"

export function TrustedBy() {
  // The marquee shifts by -50%, so each half must be wider than the widest viewport.
  const logos = Array.from({ length: 4 }, () => trustedBy.logos).flat()

  return (
    <section className="flex flex-col items-center gap-6 overflow-hidden py-4">
      <p className="px-5 text-center tracking-[-0.02em] text-black">
        {trustedBy.title}
      </p>
      <div className="relative w-full mask-x-from-90% mask-x-to-100%">
        <ul className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {logos.map((logo, i) => (
            <li
              key={`${logo.id}-${i}`}
              aria-hidden={i >= trustedBy.logos.length}
              className="pr-10"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={1024}
                height={386}
                className="h-[45px] w-[120px] object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
