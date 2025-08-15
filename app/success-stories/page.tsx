import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "From Stress to Sold - Fast Home Sales in Cleveland | Urbanova Ventures",
  description:
    "Turn your stressful home situation into a quick, fair sale. We help Cleveland homeowners sell fast, avoid foreclosure, and move on with their lives. No repairs, no fees, no hassle.",
  keywords:
    "sell house fast Cleveland, avoid foreclosure, distressed property buyers, quick home sale, cash for houses Cleveland, we buy houses, sell inherited property Cleveland, foreclosure help Cleveland, quick cash home sale, sell as-is homes",
}

export default function FromStressToSoldPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            From Stress to <span className="text-urbanova-tan">Sold</span> - Quick, Fair Cash Home Sales in Cleveland
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Life happens. When it does, we're here to help you turn your most stressful situation - foreclosure,
            inherited property, job loss, or costly repairs - into a fresh start with a fast cash sale.
            <strong className="text-white">
              {" "}
              Sell your Cleveland home as-is, skip repairs, and get cash in your hands faster than you thought possible.
            </strong>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Your Story Matters to Us - We Buy Houses in Any Condition
          </h2>
          <div className="text-lg leading-relaxed space-y-4 text-gray-700">
            <p>
              At Urbanova Ventures, we understand that behind every distressed property is a real person facing real
              challenges. Whether you're dealing with foreclosure, inherited property you can't maintain, job loss,
              divorce, or simply tired of a house that's become a burden, we've helped many Cleveland homeowners
              transition from stress to sold with fast, fair cash offers, no matter the condition of the property.
            </p>
            <p>
              We've worked with families who thought they had no options left: the single mother facing foreclosure who
              got a fresh start; the elderly couple who inherited a property they couldn't afford to repair; the family
              relocating for work who needed to sell quickly. Each situation is unique, but our commitment remains the
              same: to provide a fair, fast, and hassle-free solution that puts cash in your pocket and peace of mind in
              your heart.
              <strong> Don't wait - get your no-obligation cash offer today and move forward on your terms.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Distressed Homes Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            We Buy Houses in Any Condition - No Repairs, No Fees, No Hassle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/cleveland-distressed-1.png"
                  alt="Lightly distressed house in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Foreclosure Avoided</h3>
                <p className="text-gray-700 text-sm mb-3">
                  "Urbanova Ventures helped me sell my inherited property quickly when I needed to relocate for work.
                  The process was smooth and Isaiah was professional throughout. I didn't have to worry about repairs or
                  cleaning out the house - they handled everything."
                </p>
                <p className="text-xs text-gray-500">Property sold quickly</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/cleveland-distressed-2.png"
                  alt="House needing minor repairs in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">No Repairs Needed</h3>
                <p className="text-gray-700 text-sm mb-3">
                  "I was facing foreclosure and didn't know where to turn. Isaiah at Urbanova Ventures provided a
                  solution that helped me avoid foreclosure and move on with my life. They were compassionate and
                  understood my situation without judgment."
                </p>
                <p className="text-xs text-gray-500">Avoided foreclosure and closed fast</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/cleveland-distressed-3.png"
                  alt="Inherited property in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Inherited Property</h3>
                <p className="text-gray-700 text-sm mb-3">
                  "After trying to sell my damaged rental property for months, Urbanova Ventures offered a fair price
                  and closed quickly. I couldn't be happier with the outcome. They took care of problem tenants and made
                  the whole process stress-free."
                </p>
                <p className="text-xs text-gray-500">Problem rental property sold quickly</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/cleveland-distressed-4.png"
                  alt="Cleveland house that needed work"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Divorce Settlement</h3>
                <p className="text-gray-700 text-sm mb-3">
                  "During our divorce, we needed to sell our house quickly and split the proceeds. Urbanova Ventures
                  made a fair offer and helped us close within our timeline. Their professionalism made a difficult
                  situation much easier to handle."
                </p>
                <p className="text-xs text-gray-500">Sold during divorce proceedings quickly</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/cleveland-distressed-5.png"
                  alt="Older house needing updates in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Inherited Property Remote Sale</h3>
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

      {/* Professional Contact CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Go From Stress to Sold?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get your fair, no-obligation cash offer within 24 hours. Our experienced team is standing by to help you
            move forward with confidence and peace of mind.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            {/* Phone CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gray-900 rounded-full p-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call for Immediate Help</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our team for urgent situations or quick questions about your property.
              </p>
              <a
                href="tel:+12164527381"
                className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-lg"
              >
                <Phone className="h-5 w-5 mr-3" />
                (216) 452-7381
              </a>
              <p className="text-sm text-gray-500 mt-3">Available 7 days a week</p>
            </div>

            {/* Email CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-urbanova-tan rounded-full p-4">
                  <Mail className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us Your Details</h3>
              <p className="text-gray-600 mb-6">
                Send us your property information and we'll respond with a cash offer within 24 hours.
              </p>
              <a
                href="mailto:isaiahharrisw@gmail.com"
                className="inline-flex items-center justify-center w-full bg-urbanova-tan hover:bg-stone-300 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-lg"
              >
                <Mail className="h-5 w-5 mr-3" />
                isaiahharrisw@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-3">Fast response guaranteed</p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <p className="text-gray-300 text-lg">
              <strong className="text-white">
                No pressure, no fees, just a straightforward sale on your timeline.
              </strong>
              <br />
              Don't wait - take control of your home sale today and move forward with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
