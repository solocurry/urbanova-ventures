import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, Home } from "lucide-react"
import SellerForm from "@/components/seller-form"

export const metadata = {
  title: "Sell Your House Fast in Cleveland | Cash Offers in 24 Hours | Urbanova Ventures",
  description:
    "Need to sell your Cleveland house fast? Get a fair cash offer in 24 hours. No repairs, no fees, no hassle. We buy houses in any condition throughout Northeast Ohio.",
  keywords:
    "sell house fast Cleveland, cash for houses Cleveland, we buy houses Cleveland, sell house as is Cleveland, avoid foreclosure Cleveland, inherited property Cleveland, divorce property sale Cleveland, relocating Cleveland, house needs repairs Cleveland",
}

export default function SellYourHousePage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 relative">
      {/* Background Property Image - More translucent */}
      <div
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('/beautiful-renovated-house.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Hero Section */}
      <section className="bg-black/60 backdrop-blur-sm py-16 md:py-24 text-white relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Sell Your Cleveland House <span className="text-urbanova-tan">Fast for Cash</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a fair cash offer in 24 hours. No repairs, no realtor fees, no lengthy closings. We buy houses in any
              condition throughout Cleveland, Akron, and all of Northeast Ohio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-urbanova-tan text-black px-8 py-4 rounded-lg font-semibold hover:bg-stone-300 transition-all text-center"
              >
                Get My Cash Offer Now
              </a>
              <a
                href="tel:(216) 452-7381"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all text-center"
              >
                Call (216) 452-7381
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Urbanova Ventures?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We make selling your Cleveland house simple, fast, and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Close Fast</h3>
                <p className="text-gray-700">
                  Get your cash offer in 24 hours and close in as little as 7 days. No waiting for bank approvals or
                  lengthy inspections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">No Fees or Commissions</h3>
                <p className="text-gray-700">
                  Keep more money in your pocket. No realtor commissions, no closing costs, no hidden fees. What we
                  offer is what you get.
                </p>
              </CardContent>
            </Card>

            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Sell As-Is</h3>
                <p className="text-gray-700">
                  No repairs, cleaning, or staging needed. We buy houses in any condition, saving you time, money, and
                  stress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* We Buy Houses in Any Condition Section */}
      <section className="py-16 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Buy Houses in Any Condition - No Repairs, No Fees, No Hassle
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              No matter what challenging situation you're facing, we can provide a solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image src="/cleveland-distressed-1.png" alt="Foreclosure Avoided" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Foreclosure Avoided</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm mb-3">
                  "Urbanova Ventures helped me sell my inherited property quickly when I needed to relocate for work.
                  The process was smooth and Isaiah was professional throughout. I didn't have to worry about repairs or
                  cleaning out the house - they handled everything."
                </p>
                <p className="text-xs text-gray-500">Property sold quickly</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image src="/cleveland-distressed-2.png" alt="No Repairs Needed" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">No Repairs Needed</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm mb-3">
                  "I was facing foreclosure and didn't know where to turn. Isaiah at Urbanova Ventures provided a
                  solution that helped me avoid foreclosure and move on with my life. They were compassionate and
                  understood my situation without judgment."
                </p>
                <p className="text-xs text-gray-500">Avoided foreclosure and closed fast</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image src="/cleveland-distressed-3.png" alt="Inherited Property" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Inherited Property</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm mb-3">
                  "After trying to sell my damaged rental property for months, Urbanova Ventures offered a fair price
                  and closed quickly. I couldn't be happier with the outcome. They took care of problem tenants and made
                  the whole process stress-free."
                </p>
                <p className="text-xs text-gray-500">Problem rental property sold quickly</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image src="/cleveland-distressed-4.png" alt="Divorce Settlement" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Divorce Settlement</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm mb-3">
                  "During our divorce, we needed to sell our house quickly and split the proceeds. Urbanova Ventures
                  made a fair offer and helped us close within our timeline. Their professionalism made a difficult
                  situation much easier to handle."
                </p>
                <p className="text-xs text-gray-500">Sold during divorce proceedings quickly</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/cleveland-distressed-5.png"
                  alt="Inherited Property Remote Sale"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Inherited Property Remote Sale</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm mb-3">
                  "When my father passed away, I inherited his home that needed significant repairs. Living out of
                  state, I couldn't manage the renovation process. Isaiah provided a fair cash offer and handled
                  everything remotely, making the inheritance process much easier."
                </p>
                <p className="text-xs text-gray-500">Inherited property sold remotely</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Cleveland's Premier Cash Home Buyers - Serving All of Northeast Ohio
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                When you need to sell your house fast in Cleveland, Ohio, Urbanova Ventures is your trusted local cash
                buyer. We specialize in helping homeowners throughout Northeast Ohio sell their properties quickly,
                fairly, and without the traditional hassles of the real estate market. Whether you're in downtown
                Cleveland, the suburbs of Lakewood, Parma, Strongsville, or communities like Akron, Medina, and Elyria,
                we provide fast cash offers that close on your timeline.
              </p>
              <p className="mb-6">
                Our Cleveland-based team understands the unique challenges facing Northeast Ohio homeowners. From
                foreclosure situations in Ohio City to inherited properties in Shaker Heights, from divorce settlements
                in Rocky River to job relocations from Westlake, we've helped hundreds of families transition from
                stress to sold. We buy houses in any condition - whether your property needs major repairs, has problem
                tenants, or you simply need to sell quickly for personal reasons.
              </p>
              <p className="mb-6">
                Don't let costly repairs, realtor fees, or lengthy closing processes delay your home sale. Contact
                Urbanova Ventures today at (216) 452-7381 for your free, no-obligation cash offer. We serve all of
                Cuyahoga County, Summit County, Medina County, and surrounding areas. Your fast, fair cash sale is just
                one phone call away.
              </p>
              <p>
                Ready to sell your Cleveland house fast? Fill out our quick form below or call Isaiah Harris-Ware
                directly. We're standing by to help you get cash for your house and move forward with confidence. Don't
                wait - take control of your home sale today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-black/60 backdrop-blur-sm text-white relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Get Your Cash Offer Today</h2>
              <p className="text-lg text-gray-100">
                Fill out the form below and we'll contact you within 24 hours with a fair, no-obligation cash offer for
                your Cleveland property.{" "}
                <strong className="text-white">Don't wait - take control of your sale and get cash fast!</strong>
              </p>
            </div>
            <SellerForm />
          </div>
        </div>
      </section>
    </div>
  )
}
