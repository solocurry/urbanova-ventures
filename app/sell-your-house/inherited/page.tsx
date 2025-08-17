import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Home, FileText } from "lucide-react"
import SellerForm from "@/components/seller-form"

export default function InheritedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900/95 backdrop-blur-sm">
        <div className="relative z-10 px-4 py-24 md:py-32 container">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Sell Your Inherited Property Fast
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Turn your inherited Cleveland property into cash without the hassle of repairs, cleaning, or lengthy
              listing processes. We handle everything for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <FileText className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Handle Paperwork</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <Home className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Any Condition</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <DollarSign className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Fast Cash</span>
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
              Simplify Your Inherited Property Sale in Cleveland
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Inheriting property in Cleveland can be both a blessing and a burden. Whether you've inherited a home in
                Lakewood, Parma, Strongsville, or anywhere in Northeast Ohio, you're likely dealing with emotional
                stress, financial responsibilities, and complex decisions. Urbanova Ventures specializes in helping
                Cleveland families turn inherited properties into cash quickly and easily.
              </p>
              <p className="mb-6">
                We understand that inherited properties often come with challenges: outdated systems, needed repairs,
                personal belongings to sort through, and sometimes even problem tenants. Our team handles all of these
                issues for you. We buy inherited properties in any condition throughout Cuyahoga County, Summit County,
                and surrounding areas, allowing you to focus on what matters most during this difficult time.
              </p>
              <p>
                Don't let an inherited property become a financial burden. We've helped many Cleveland area families
                convert inherited real estate into cash that can be used for more important things. Contact us today for
                a free consultation about your inherited property situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Sell Your Inherited Property to Us</h2>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              We make the process simple and stress-free during an already difficult time
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm border-urbanova-tan">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-urbanova-tan">
                    <FileText className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Handle All Paperwork</h3>
                  <p className="text-gray-700">
                    We navigate the legal requirements and handle all the paperwork for you.
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
                  <h3 className="text-xl font-bold text-gray-900">Buy As-Is</h3>
                  <p className="text-gray-700">
                    No need to clean out, repair, or update anything. We buy in any condition.
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
                  <h3 className="text-xl font-bold text-gray-900">Quick Process</h3>
                  <p className="text-gray-700">Close quickly and get cash in hand without months of waiting.</p>
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
              <h2 className="text-3xl font-bold tracking-tight text-white">Get Cash for Your Inherited Property</h2>
              <p className="text-gray-100 mt-4">
                Let us handle the complexities while you focus on what matters. Fill out the form to get started with
                your inherited property sale.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">No cleaning or repairs needed</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">We handle all legal paperwork</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Fast cash payment</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-urbanova-tan p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <p className="text-white">Compassionate service</p>
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
