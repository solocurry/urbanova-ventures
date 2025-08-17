import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square } from "lucide-react"

interface PropertyCardProps {
  image: string
  address: string
  city: string
  state: string
  description: string
  bedrooms: number
  bathrooms: number
  sqft: number
}

export default function PropertyCard({
  image,
  address,
  city,
  state,
  description,
  bedrooms,
  bathrooms,
  sqft,
}: PropertyCardProps) {
  // Generate a unique ID for each property based on its address
  const propertyId = address.toLowerCase().replace(/\s+/g, "-")

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={`${address}, ${city}, ${state}`} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
          Investment Opportunity
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg truncate">{address}</h3>
        <p className="text-muted-foreground">
          {city}, {state}
        </p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{bedrooms} bd</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{bathrooms} ba</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        <p className="mt-3 text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={`/properties/${propertyId}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
        <Link href="/buyers/register">
          <Button size="sm">Request Info</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
