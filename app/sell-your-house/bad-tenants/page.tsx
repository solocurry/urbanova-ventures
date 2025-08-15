import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Home, Users } from "lucide-react"
import SellerForm from "@/components/seller-form"

export default function BadTenantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900/95 backdrop-blur-sm">
        <div className="relative z-10 px-4 py-24 md:py-32 container">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Sell Your Rental Property with Problem Tenants
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Dealing with problem tenants? We can purchase your Cleveland rental property even with tenants in place,
              saving you from eviction hassles and legal costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Tenants In Place</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Quick Solution</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <DollarSign className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Fair Price</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8 text-gray-900">
              Problem Tenant Solutions for Cleveland Landlords
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Being a landlord in Cleveland can be rewarding, but problem tenants can turn your investment into a
                nightmare. Whether you're dealing with non-paying tenants, property damage, lease violations, or
                difficult evictions in Lakewood, Parma, Strongsville, or anywhere in Northeast Ohio, Urbanova Ventures
                offers a solution that gets you out of the landlord business quickly and fairly.
              </p>
              <p className="mb-6">
                We specialize in purchasing rental properties with tenant issues throughout Cuyahoga County and
                surrounding areas. Our team understands landlord-tenant law and can navigate complex situations
                involving problem tenants. We can often purchase your property with tenants still in place, handling all
                the legal requirements and tenant relations so you don't have to deal with lengthy eviction processes or
                costly legal battles.
              </p>
              <p>
                Don't let problem tenants drain your finances and peace of mind. We've helped many Cleveland area
                landlords sell their rental properties quickly, even with difficult tenant situations. Contact us today
                for a confidential consultation about your rental property challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Sell Your Problem Rental to Us</h2>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              We handle the tenant issues so you can move on with your life
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Handle Tenant Issues</h3>
                  <p className="text-gray-700">
                    We take over all tenant relations and handle any necessary legal processes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Clock className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Avoid Eviction Costs</h3>
                  <p className="text-gray-700">
                    Skip expensive and time-consuming eviction proceedings and legal fees.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Home className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Exit Landlord Business</h3>
                  <p className="text-gray-700">
                    Get out of the rental business quickly without ongoing tenant headaches.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-900/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Sell Your Problem Rental Property</h2>
              <p className="text-gray-100 mt-4">
                End your tenant troubles today. Fill out the form to get started with selling your rental property.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">We handle tenant issues</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">No eviction costs</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Confidential consultation</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Quick cash sale</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <SellerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
