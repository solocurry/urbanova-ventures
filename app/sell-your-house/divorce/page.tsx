import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Home, Users } from "lucide-react"
import SellerForm from "@/components/seller-form"

export default function DivorcePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900/95 backdrop-blur-sm">
        <div className="relative z-10 px-4 py-24 md:py-32 container">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Sell Your House During Divorce</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Simplify your divorce process with a quick cash sale of your shared property. We provide fair, fast
              solutions during difficult times.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Fair Division</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Quick Sale</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <DollarSign className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Cash Payment</span>
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
              Divorce Property Sales Made Simple in Cleveland
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Divorce is already emotionally and financially challenging without having to worry about selling your
                shared home. At Urbanova Ventures, we understand the unique pressures facing divorcing couples in
                Cleveland and throughout Northeast Ohio. We specialize in helping couples sell their properties quickly
                and fairly, allowing both parties to move forward with their lives.
              </p>
              <p className="mb-6">
                Our divorce property sales process is designed to be simple and stress-free. Whether your home is in
                Lakewood, Parma, Strongsville, or anywhere in Cuyahoga County, we can provide a fair cash offer that
                allows for equitable division of assets. We work with both parties and their attorneys to ensure a
                smooth transaction that meets everyone's needs and timeline requirements.
              </p>
              <p>
                Don't let property division complicate your divorce proceedings. We've helped many Cleveland area
                couples resolve their real estate issues quickly and fairly. Contact us today for a confidential
                consultation about selling your shared property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Choose Us for Divorce Property Sales
            </h2>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              We understand the sensitivity of divorce situations and work to make the process as smooth as possible
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fair for Both Parties</h3>
                  <p className="text-gray-700">
                    We provide fair market value offers that allow for equitable asset division.
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
                  <h3 className="text-xl font-bold text-gray-900">Quick Resolution</h3>
                  <p className="text-gray-700">
                    Close quickly to avoid prolonging the divorce process over property issues.
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
                  <h3 className="text-xl font-bold text-gray-900">No Preparation Needed</h3>
                  <p className="text-gray-700">
                    Sell as-is without repairs, staging, or showing the home to strangers.
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
              <h2 className="text-3xl font-bold tracking-tight text-white">Simplify Your Divorce Property Sale</h2>
              <p className="text-gray-100 mt-4">
                Get a fair cash offer that works for both parties. Fill out the form to get started with your divorce
                property sale.
              </p>

              <div className="mt-8 space-y-6">
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
                  <p className="text-white">Fair market value offers</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Work with attorneys</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Quick closing process</p>
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
