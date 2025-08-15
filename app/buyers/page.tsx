import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BuyersContactForm from "@/components/buyers-contact-form"

export const metadata = {
  title: "Investment Opportunities - Cleveland Real Estate | Urbanova Ventures",
  description:
    "Discover exclusive real estate investment opportunities in Cleveland. Properties under contract with potential for investors and homebuyers. Contact us for details.",
}

const properties = [
  {
    id: 1,
    image: "/distressed-house.png",
    type: "Fixer-Upper",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,850",
    region: "Lakewood",
    status: "Under Contract",
  },
  {
    id: 2,
    image: "/fixer-upper-house.png",
    type: "Rehab Opportunity",
    bedrooms: 2,
    bathrooms: 1,
    sqft: "1,200",
    region: "Parma",
  },
  {
    id: 3,
    image: "/shaker-heights-vacant-house.png",
    type: "Vacant Property",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "2,400",
    region: "Shaker Heights",
    status: "Under Contract",
  },
  {
    id: 4,
    image: "/distressed-house.png",
    type: "Foreclosure",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,600",
    region: "Rocky River",
  },
  {
    id: 5,
    image: "/estate-sale-house.png",
    type: "Estate Sale",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,750",
    region: "Tremont",
    status: "Under Contract",
  },
  {
    id: 6,
    image: "/vacant-property-house.png",
    type: "Vacant Property",
    bedrooms: 2,
    bathrooms: 1,
    sqft: "1,400",
    region: "Ohio City",
  },
]

export default function InvestmentOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Investment <span className="text-urbanova-tan">Opportunities</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover exclusive off-market real estate investment opportunities throughout Cleveland, Akron, and
            Northeast Ohio. We specialize in finding undervalued properties in high-demand areas including Lakewood,
            Parma, Strongsville, Rocky River, Westlake, and Shaker Heights. Perfect for fix-and-flip investors,
            buy-and-hold strategies, and first-time homebuyers looking for value in Cleveland's growing neighborhoods.
          </p>
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-white text-sm">
              <strong>Disclaimer:</strong> Properties shown are exclusive opportunities that may have limited
              availability. Contact us for current status and qualification requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Buyers List Form Section - Moved to top */}
      <section id="buyers-form" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Join Our Buyers List</h2>
            <BuyersContactForm />
          </div>
        </div>
      </section>

      {/* Properties Grid - Updated to match screenshot style */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="relative h-48">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={`${property.type} home in ${property.region}, Cleveland`}
                    fill
                    className="object-cover"
                  />
                  {property.status && (
                    <Badge className="absolute top-2 right-2 bg-slate-800 text-white" variant="secondary">
                      {property.status}
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900">{property.type}</CardTitle>
                  <p className="text-gray-600 font-medium">{property.region}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Market Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Cleveland Real Estate Investment Market - Prime Opportunities in Northeast Ohio
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Cleveland's real estate market offers exceptional opportunities for savvy investors. With median home
              prices significantly below national averages and strong rental demand from major employers like Cleveland
              Clinic, University Hospitals, and Case Western Reserve University, Northeast Ohio provides excellent cash
              flow potential. Our investment properties span from downtown Cleveland's revitalizing neighborhoods to
              established suburbs like Strongsville, Westlake, and Rocky River.
            </p>
            <p className="mb-6">
              We focus on properties in Cleveland's most promising areas: Ohio City and Tremont for urban investors,
              Lakewood and Cleveland Heights for rental properties, and Parma and Strongsville for family-friendly
              fix-and-flip opportunities. Our team identifies distressed properties, estate sales, and motivated seller
              situations throughout Cuyahoga County, Medina County, and Summit County (Akron area), providing investors
              with exclusive access to deals before they hit the public market.
            </p>
            <p>
              Whether you're a seasoned investor expanding your Northeast Ohio portfolio or a first-time buyer looking
              for value, our Cleveland-based team provides the local market knowledge and deal flow you need to succeed.
              Join our exclusive investor network and gain access to off-market properties with built-in equity and
              strong rental potential throughout the Cleveland metropolitan area.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Investment Process Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-urbanova-tan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">We Find Deals</h3>
              <p className="text-gray-300">
                We identify undervalued properties and negotiate favorable contracts with motivated sellers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-urbanova-tan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">You Get Access</h3>
              <p className="text-gray-300">
                Qualified investors and homebuyers get exclusive access to these off-market opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-urbanova-tan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Win-Win Results</h3>
              <p className="text-gray-300">
                Everyone benefits: sellers get quick sales, buyers get great deals, and we facilitate the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
