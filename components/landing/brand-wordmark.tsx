import { brand } from "@/lib/brand"
import { cn } from "@/lib/utils"

type BrandWordmarkProps = {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "text-base",
  md: "text-lg sm:text-xl",
  lg: "text-xl sm:text-2xl",
}

/** Zorg + Connect (#006AA5), punt (#759940); only Z and C capitalized */
export function BrandWordmark({ className, size = "md" }: BrandWordmarkProps) {
  return (
    <span
      className={cn(
        "font-semibold tracking-tight leading-none whitespace-nowrap",
        sizeClasses[size],
        className
      )}
    >
      <span style={{ color: brand.colors.wordmarkBlue }}>Zorg</span>
      <span style={{ color: brand.colors.wordmarkGreen }}>punt</span>
      <span style={{ color: brand.colors.wordmarkBlue }}>Connect</span>
    </span>
  )
}
