import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Shield } from "lucide-react"
import SellerForm from "@/components/seller-form"

export default function ForeclosurePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900/95 backdrop-blur-sm">
        <div className="relative z-10 px-4 py-24 md:py-32 container">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Stop Foreclosure - Sell Your House Fast
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Facing foreclosure in Cleveland? We can help you avoid it by purchasing your home quickly for cash. No
              waiting, no uncertainty - just a fast, fair solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Stop Foreclosure</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Close Fast</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <DollarSign className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Cash Offer</span>
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
              How We Help Cleveland Homeowners Avoid Foreclosure
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Foreclosure can be one of the most stressful experiences a homeowner faces. At Urbanova Ventures, we
                understand the urgency and emotional toll of facing foreclosure in Cleveland and surrounding areas. We
                specialize in helping homeowners in Cuyahoga County avoid foreclosure by providing fast, fair cash
                offers that can close before your foreclosure date.
              </p>
              <p className="mb-6">
                Our foreclosure prevention process is designed to work within tight timelines. Whether you're behind on
                payments in Lakewood, facing foreclosure in Parma, or dealing with mortgage issues in Strongsville, we
                can typically close within 7-14 days. This gives you the cash you need to pay off your mortgage and
                avoid the long-term credit damage that comes with foreclosure.
              </p>
              <p>
                Don't let foreclosure destroy your financial future. We've helped many Cleveland area families avoid
                foreclosure and move forward with dignity. Contact us today for a free, no-obligation consultation about
                your foreclosure situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Choose Us for Foreclosure Help</h2>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              We understand the urgency of foreclosure situations and work quickly to provide solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Clock className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fast Closing</h3>
                  <p className="text-gray-700">
                    We can close in as little as 7 days, often before your foreclosure date.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <DollarSign className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fair Cash Offers</h3>
                  <p className="text-gray-700">
                    Get enough cash to pay off your mortgage and avoid foreclosure completely.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Protect Your Credit</h3>
                  <p className="text-gray-700">
                    Avoid the long-term credit damage that comes with foreclosure on your record.
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
              <h2 className="text-3xl font-bold tracking-tight text-white">Stop Foreclosure Today</h2>
              <p className="text-gray-100 mt-4">
                Don't wait until it's too late. Fill out the form to get started and we'll contact you within hours with
                a solution to stop your foreclosure.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Fast response within hours</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Close before foreclosure date</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">No fees or commissions</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Confidential consultation</p>
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
