import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  image: string
  name: string
  location: string
  quote: string
}

export default function TestimonialCard({ image, name, location, quote }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={`${name} from ${location}`} fill className="object-cover" />
      </div>
      <CardContent className="p-6 relative">
        <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
        <p className="italic text-muted-foreground mb-4">"{quote}"</p>
        <div className="flex items-center gap-2">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
