import Image from "next/image"
import { brand } from "@/lib/brand"
import { cn } from "@/lib/utils"
import { BrandWordmark } from "@/components/landing/brand-wordmark"

type BrandLogoProps = {
  href?: string
  className?: string
  size?: number
  showWordmark?: boolean
  wordmarkSize?: "sm" | "md" | "lg"
}

export function BrandLogo({
  href = "#",
  className,
  size = 40,
  showWordmark = true,
  wordmarkSize = "md",
}: BrandLogoProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-2.5 hover:opacity-90 transition-opacity min-w-0",
        className
      )}
      aria-label={`${brand.name} (${brand.shortName}), naar boven`}
    >
      <Image
        src="/logo-zpc.png"
        alt=""
        width={size}
        height={size}
        className="rounded-full shrink-0"
        priority
      />
      {showWordmark ? (
        <span className="hidden min-[400px]:flex flex-col min-w-0">
          <BrandWordmark size={wordmarkSize} />
        </span>
      ) : null}
      {showWordmark ? (
        <span className="min-[400px]:hidden text-sm font-semibold text-brand-secondary">
          {brand.shortName}
        </span>
      ) : null}
    </a>
  )
}
