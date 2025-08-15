import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Home, MapPin } from "lucide-react"
import SellerForm from "@/components/seller-form"

export default function RelocationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900/95 backdrop-blur-sm">
        <div className="relative z-10 px-4 py-24 md:py-32 container">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Sell Your House for Relocation</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Moving for a job or other reasons? We can buy your Cleveland house quickly so you can focus on your move
              without the stress of a traditional sale.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Any Location</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Fast Timeline</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <DollarSign className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Quick Cash</span>
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
              Stress-Free Relocation Home Sales in Cleveland
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Relocating for work or personal reasons is exciting, but selling your Cleveland home shouldn't add
                stress to the process. At Urbanova Ventures, we specialize in helping homeowners throughout Northeast
                Ohio sell their properties quickly when they need to relocate. Whether you're moving across the country
                or just to a different state, we make the home selling process simple and fast.
              </p>
              <p className="mb-6">
                We understand that relocation timelines are often tight and non-negotiable. Whether your home is in
                Lakewood, Parma, Strongsville, or anywhere in Cuyahoga County, we can typically close within 7-14 days.
                This allows you to focus on your move, new job, or other important aspects of your relocation without
                worrying about showings, repairs, or lengthy closing processes.
              </p>
              <p>
                Don't let your Cleveland home hold up your relocation plans. We've helped many families sell their homes
                quickly for fair prices, allowing them to move forward with confidence. Contact us today for a free
                consultation about your relocation home sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Choose Us for Relocation Sales</h2>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              We understand the urgency of relocation and work within your timeline
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <Clock className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Meet Your Timeline</h3>
                  <p className="text-gray-700">
                    We work within your relocation schedule and can close when you need us to.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <MapPin className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Remote Friendly</h3>
                  <p className="text-gray-700">
                    Handle most of the process remotely if you've already moved to your new location.
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
                  <h3 className="text-xl font-bold text-gray-900">No Showings</h3>
                  <p className="text-gray-700">
                    No need to keep your home show-ready while you're trying to pack and move.
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
              <h2 className="text-3xl font-bold tracking-tight text-white">Sell Fast for Your Relocation</h2>
              <p className="text-gray-100 mt-4">
                Don't let your home sale delay your move. Fill out the form to get started with a quick relocation sale.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Work within your timeline</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Remote closing available</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">No repairs or staging needed</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Fast cash payment</p>
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
