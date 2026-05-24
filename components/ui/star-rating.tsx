import { Star } from "lucide-react"

interface StarRatingProps {
  rating?: number
  maxRating?: number
  className?: string
}

export function StarRating({
  rating = 5,
  maxRating = 5,
  className = "",
}: StarRatingProps) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} van ${maxRating} sterren`}
    >
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}
