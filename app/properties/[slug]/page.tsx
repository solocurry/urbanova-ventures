import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, Square, MapPin, ArrowRight } from "lucide-react"

// This is a mock function to simulate fetching property data
// In a real application, this would fetch data from an API or database
function getPropertyData(slug: string) {
  // Mock data for demonstration purposes
  const properties = {
    "123-main-street": {
      id: "123-main-street",
      address: "123 Main Street",
      city: "Atlanta",
      state: "GA",
      description:
        "Great investment opportunity in an up-and-coming neighborhood. This property has excellent potential for renovation. The home features 3 bedrooms, 2 bathrooms, and is located in a high-demand area with strong rental potential. The property needs some cosmetic updates but has good bones and a solid foundation.",
      longDescription:
        "This property is located in a rapidly developing area of Atlanta with increasing property values. The neighborhood has seen significant investment in recent years, with new businesses and amenities being added regularly. The home was built in 1965 and has been well-maintained by the previous owner. It features a spacious backyard, detached garage, and is within walking distance to local shops and restaurants. The property would be ideal for a fix-and-flip investor or someone looking to add to their rental portfolio.",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      lotSize: "0.25 acres",
      yearBuilt: 1965,
      propertyType: "Single Family",
      status: "Hot Deal",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      features: [
        "Detached garage",
        "Large backyard",
        "Hardwood floors",
        "Updated electrical",
        "Central heating",
        "Close to schools and shopping",
      ],
      investmentPotential:
        "This property has excellent potential as a fix-and-flip opportunity or as a rental. Similar renovated properties in the area are selling for 30-40% more than the acquisition cost plus renovation expenses. The rental market in this area is strong, with potential monthly rents of $1,800-$2,000 after renovation.",
    },
    "456-oak-avenue": {
      id: "456-oak-avenue",
      address: "456 Oak Avenue",
      city: "Atlanta",
      state: "GA",
      description:
        "Spacious property with renovation potential. Located in a high-demand area with strong rental market.",
      longDescription:
        "This spacious 4-bedroom, 2-bathroom home offers tremendous potential for investors looking to renovate and either resell or hold as a rental property. Located in a desirable neighborhood with excellent schools and amenities nearby, this property features a large lot, mature trees, and a flexible floor plan that could be reconfigured to maximize value. The home needs updates throughout but has a solid structure and no major foundation issues.",
      bedrooms: 4,
      bathrooms: 2,
      sqft: 2200,
      lotSize: "0.3 acres",
      yearBuilt: 1972,
      propertyType: "Single Family",
      status: "New Opportunity",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      features: ["Large lot", "Mature trees", "Fireplace", "Basement", "Two-car garage", "Screened porch"],
      investmentPotential:
        "This property is located in a neighborhood where renovated homes are selling quickly. After renovations, the property could potentially sell for 35-45% more than the acquisition and renovation costs. As a rental, it could generate approximately $2,200-$2,400 per month in a strong rental market with low vacancy rates.",
    },
    "789-pine-road": {
      id: "789-pine-road",
      address: "789 Pine Road",
      city: "Marietta",
      state: "GA",
      description:
        "Excellent opportunity in established neighborhood. This property offers great value for investors looking to expand their portfolio.",
      longDescription:
        "This 3-bedroom, 1-bathroom ranch-style home is located in an established neighborhood in Marietta with stable property values and a strong rental market. The property needs moderate updates but is in overall good condition with no major structural issues. Features include a large fenced backyard, carport, and a versatile floor plan that appeals to a wide range of tenants or buyers.",
      bedrooms: 3,
      bathrooms: 1,
      sqft: 1600,
      lotSize: "0.2 acres",
      yearBuilt: 1968,
      propertyType: "Single Family",
      status: "Just Added",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      features: [
        "Fenced backyard",
        "Carport",
        "Updated roof (5 years old)",
        "Hardwood floors under carpet",
        "Large kitchen",
        "Quiet street",
      ],
      investmentPotential:
        "This property represents an excellent opportunity for a buy-and-hold investor. The Marietta rental market is strong, with potential monthly rents of $1,600-$1,800 after moderate updates. The neighborhood has a low vacancy rate and a history of long-term tenants, making this an ideal addition to an investment portfolio focused on steady cash flow.",
    },
  }

  return properties[slug as keyof typeof properties] || null
}

export default function PropertyDetail({ params }: { params: { slug: string } }) {
  const property = getPropertyData(params.slug)

  if (!property) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Link href="/properties">
          <Button>View All Properties</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Property Images */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`relative h-64 rounded-lg overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2 md:h-full" : ""}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.address} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/properties" className="hover:text-primary">
                  Properties
                </Link>
                <ArrowRight className="h-3 w-3" />
                <span>
                  {property.city}, {property.state}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold">{property.address}</h1>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {property.city}, {property.state}
                    </span>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {property.status}
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-1">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span>{property.bedrooms} bd</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span>{property.bathrooms} ba</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="h-5 w-5 text-muted-foreground" />
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">About This Property</h2>
                <p className="text-muted-foreground whitespace-pre-line">{property.longDescription}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Property Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Investment Potential</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{property.investmentPotential}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Property Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Property Type</span>
                    <span>{property.propertyType}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Year Built</span>
                    <span>{property.yearBuilt}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Lot Size</span>
                    <span>{property.lotSize}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Square Footage</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Legal Disclaimer</h2>
                <p className="text-sm text-muted-foreground">
                  Urbanova Ventures is not offering this property for sale. We connect investors with property owners
                  who may be interested in selling. All transactions are facilitated through proper legal channels.
                  Please consult with your attorney or real estate professional before making any investment decisions.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interested in this property?</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our investor network to get more information about this property and other investment
                    opportunities.
                  </p>
                  <div className="space-y-4">
                    <Link href="/buyers/register">
                      <Button className="w-full">Request Information</Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full bg-transparent">
                        Contact Us
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold mb-2">Property ID</h4>
                    <p className="text-muted-foreground text-sm mb-4">{property.id}</p>

                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground text-sm">{property.address}</p>
                    <p className="text-muted-foreground text-sm">
                      {property.city}, {property.state}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Similar Properties</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(getPropertyData("placeholder") || {})
              .filter((p) => p.id !== property.id)
              .slice(0, 3)
              .map((p: any) => (
                <Card key={p.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={p.images[0] || "/placeholder.svg"} alt={p.address} fill className="object-cover" />
                    <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {p.status}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg truncate text-gray-900">{p.address}</h3>
                    <p className="text-muted-foreground">
                      {p.city}, {p.state}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-gray-700">{p.bedrooms} bd</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-gray-700">{p.bathrooms} ba</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-gray-700">{p.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm line-clamp-3 text-gray-700">{p.description}</p>
                    <div className="mt-4 flex justify-between">
                      <Link href={`/properties/${p.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Link href="/buyers/register">
                        <Button size="sm">Request Info</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
