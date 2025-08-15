import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Home, Wrench } from "lucide-react"
import SellerForm from "@/components/seller-form"

export default function RepairsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900/95 backdrop-blur-sm">
        <div className="relative z-10 px-4 py-24 md:py-32 container">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Sell Your House That Needs Repairs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Don't want to deal with expensive repairs? Sell your house as-is to us. We buy homes in any condition
              throughout Cleveland and Northeast Ohio.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Wrench className="h-5 w-5 text-white" />
                <span className="text-white font-medium">No Repairs</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Home className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Any Condition</span>
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
              We Buy Houses Needing Repairs Throughout Cleveland
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Major repairs can be overwhelming and expensive. Whether your Cleveland home needs a new roof, HVAC
                system, plumbing updates, or complete renovation, Urbanova Ventures buys houses in any condition
                throughout Northeast Ohio. We specialize in purchasing properties that need work, saving you the time,
                money, and stress of making repairs before selling.
              </p>
              <p className="mb-6">
                From minor cosmetic updates to major structural issues, we've seen it all in Cleveland, Lakewood, Parma,
                Strongsville, and surrounding areas. Our team evaluates properties based on their potential, not their
                current condition. Whether your home has foundation issues, outdated electrical, water damage, or just
                needs a complete makeover, we can provide a fair cash offer that reflects the property's value.
              </p>
              <p>
                Don't let repair costs eat into your profits or delay your sale. We've helped many Cleveland area
                homeowners sell properties that needed significant work, allowing them to move on without the burden of
                expensive renovations. Contact us today for a free evaluation of your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Sell Your Fixer-Upper to Us</h2>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              Save time and money by selling as-is instead of making costly repairs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Wrench className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">No Repairs Needed</h3>
                  <p className="text-gray-700">
                    Save thousands on repairs and renovations. We buy your house exactly as it is.
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
                  <h3 className="text-xl font-bold text-gray-900">Fast Sale</h3>
                  <p className="text-gray-700">Close quickly without waiting months for repairs to be completed.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <DollarSign className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fair Cash Offer</h3>
                  <p className="text-gray-700">Get a fair price that accounts for the property's potential value.</p>
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
              <h2 className="text-3xl font-bold tracking-tight text-white">Sell Your Fixer-Upper Today</h2>
              <p className="text-gray-100 mt-4">
                Skip the repairs and get cash for your house as-is. Fill out the form to get started with your property
                evaluation.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">No repair costs</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Any condition accepted</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Fair market evaluation</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Quick cash closing</p>
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
