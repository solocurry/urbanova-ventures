import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, Square } from "lucide-react"

export default function Properties() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Investment Opportunities</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Exclusive investment opportunities throughout Cleveland, Akron, and Northeast Ohio. Off-market properties
              in high-demand neighborhoods including Lakewood, Parma, Strongsville, Rocky River, Westlake, Shaker
              Heights, and Cleveland Heights. Perfect for fix-and-flip investors, rental property portfolios, and
              first-time homebuyers seeking value in Cleveland's growing real estate market.
            </p>
            <div className="mt-6">
              <Link href="/buyers/register">
                <Button size="lg">Join Our Investor Network</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="container px-4 md:px-6">
          <div className="text-sm text-gray-700">
            <p className="font-medium text-gray-900">Important Legal Disclaimer:</p>
            <p>
              Urbanova Ventures is not offering these properties for sale. We connect investors with property owners who
              may be interested in selling. All transactions are facilitated through proper legal channels. Please
              consult with your attorney or real estate professional before making any investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Cleveland Investment Properties - Northeast Ohio Real Estate Opportunities
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Cleveland's real estate investment market offers exceptional value for investors seeking cash flow and
                appreciation potential. Our exclusive network provides access to off-market properties throughout
                Cuyahoga County, including distressed properties, estate sales, and motivated seller situations in
                Cleveland's most desirable neighborhoods. From urban revitalization projects in Ohio City and Tremont to
                suburban rental properties in Parma, Strongsville, and Westlake, we connect serious investors with
                profitable opportunities.
              </p>
              <p className="mb-6">
                Northeast Ohio's strong rental market, driven by major employers like Cleveland Clinic, University
                Hospitals, Case Western Reserve University, and growing tech companies, provides excellent cash flow
                potential for buy-and-hold investors. Our properties span from downtown Cleveland condos perfect for
                young professionals to single-family homes in family-friendly suburbs like Rocky River, Lakewood, and
                Cleveland Heights that attract long-term tenants.
              </p>
              <p>
                Whether you're looking for fix-and-flip opportunities in up-and-coming neighborhoods or turnkey rental
                properties with established cash flow, our Cleveland-based team provides the local market knowledge and
                exclusive deal flow you need to build wealth through Northeast Ohio real estate. Join our investor
                network today and gain access to properties with built-in equity and strong rental potential throughout
                the Cleveland metropolitan area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/fixer-upper-house.png" alt="Investment Property" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  New Opportunity
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg truncate text-gray-900">456 Oak Avenue</h3>
                <p className="text-gray-600">Atlanta, GA</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">4 bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">2 ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">2,200 sqft</span>
                  </div>
                </div>
                <p className="mt-3 text-sm line-clamp-3 text-gray-700">
                  Spacious property with renovation potential. Located in a high-demand area with strong rental market.
                </p>
                <div className="mt-4 flex justify-between">
                  <Link href="/properties/456-oak-avenue">
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

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/distressed-house.png" alt="Investment Property" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Hot Deal
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg truncate text-gray-900">123 Main Street</h3>
                <p className="text-gray-600">Atlanta, GA</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">3 bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">2 ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">1,800 sqft</span>
                  </div>
                </div>
                <p className="mt-3 text-sm line-clamp-3 text-gray-700">
                  Great investment opportunity in an up-and-coming neighborhood. This property has excellent potential
                  for renovation.
                </p>
                <div className="mt-4 flex justify-between">
                  <Link href="/properties/123-main-street">
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

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/investment-property-house.png" alt="Investment Property" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Just Added
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg truncate text-gray-900">789 Pine Road</h3>
                <p className="text-gray-600">Marietta, GA</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">3 bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">1 ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">1,600 sqft</span>
                  </div>
                </div>
                <p className="mt-3 text-sm line-clamp-3 text-gray-700">
                  Excellent opportunity in established neighborhood. This property offers great value for investors
                  looking to expand their portfolio.
                </p>
                <div className="mt-4 flex justify-between">
                  <Link href="/properties/789-pine-road">
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

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Investment Property"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Multi-Family
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg truncate text-gray-900">567 Maple Court</h3>
                <p className="text-gray-600">Decatur, GA</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">6 bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">4 ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">3,200 sqft</span>
                  </div>
                </div>
                <p className="mt-3 text-sm line-clamp-3 text-gray-700">
                  Duplex with strong rental history. Both units currently rented with long-term tenants. Great cash flow
                  opportunity.
                </p>
                <div className="mt-4 flex justify-between">
                  <Link href="/properties/567-maple-court">
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

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Investment Property"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Land
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg truncate text-gray-900">321 Hillside Drive</h3>
                <p className="text-gray-600">Roswell, GA</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">0.75 acres</span>
                  </div>
                </div>
                <p className="mt-3 text-sm line-clamp-3 text-gray-700">
                  Vacant land in developing area. Zoned for residential construction with utilities available at the
                  street.
                </p>
                <div className="mt-4 flex justify-between">
                  <Link href="/properties/321-hillside-drive">
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

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Investment Property"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Commercial
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg truncate text-gray-900">987 Commerce Way</h3>
                <p className="text-gray-600">Alpharetta, GA</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">2,500 sqft</span>
                  </div>
                </div>
                <p className="mt-3 text-sm line-clamp-3 text-gray-700">
                  Small commercial building with potential for retail or office space. Located in high-traffic area with
                  ample parking.
                </p>
                <div className="mt-4 flex justify-between">
                  <Link href="/properties/987-commerce-way">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Don't See What You're Looking For?</h2>
          <p className="mt-4 text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join our investor network to get notified about new properties before they're listed publicly.
          </p>
          <div className="mt-8">
            <Link href="/buyers/register">
              <Button variant="secondary" size="lg">
                Join Investor Network
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
