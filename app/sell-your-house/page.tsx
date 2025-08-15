import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, Home, CheckCircle } from "lucide-react"
import SellerForm from "@/components/seller-form"

export const metadata: Metadata = {
  title: "Sell Your House Fast in Cleveland | Cash Offers in 24 Hours | Urbanova Ventures",
  description:
    "Need to sell your Cleveland house fast? Get a fair cash offer in 24 hours. We buy houses in any condition - foreclosure, inherited, divorce, repairs needed. No fees, no waiting.",
  keywords:
    "sell house fast Cleveland, cash for houses Cleveland, we buy houses Cleveland, sell house as is Cleveland, avoid foreclosure Cleveland, inherited property Cleveland, divorce house sale Cleveland, quick home sale Cleveland, cash home buyers Cleveland, sell house no repairs Cleveland",
}

export default function SellYourHousePage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section with solid navy blue background */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sell Your Cleveland House <span className="text-urbanova-tan">Fast for Cash</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a fair cash offer in 24 hours. We buy houses in any condition throughout Cleveland, Akron, and Northeast
            Ohio. No repairs, no fees, no waiting - just cash in your hands quickly.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Why Choose Urbanova Ventures?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We make selling your house simple, fast, and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Close Fast</h3>
                <p className="text-gray-700">
                  We can close in as little as 7 days, perfect for urgent situations like foreclosure or job relocation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Fair Cash Offers</h3>
                <p className="text-gray-700">
                  Get competitive cash offers based on current market conditions. No hidden fees or commissions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Any Condition</h3>
                <p className="text-gray-700">
                  We buy houses as-is. No need for repairs, cleaning, or staging. Save time and money.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* We Buy Houses Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              We Buy Houses in Any Condition - No Repairs, No Fees, No Hassle
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From minor repairs to major renovations needed - we buy them all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/cleveland-distressed-1.png"
                  alt="House needing repairs in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Houses Needing Repairs</h3>
                <p className="text-gray-700 text-sm">
                  Don't spend thousands on repairs. We buy houses that need work and handle all the renovations
                  ourselves.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/cleveland-distressed-2.png"
                  alt="Inherited property in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Inherited Properties</h3>
                <p className="text-gray-700 text-sm">
                  Inherited a property you can't maintain? We make the process simple and handle all the paperwork.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/cleveland-distressed-3.png"
                  alt="Foreclosure property in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Avoid Foreclosure</h3>
                <p className="text-gray-700 text-sm">
                  Facing foreclosure? We can close quickly and help you avoid the long-term credit damage.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/cleveland-distressed-4.png"
                  alt="Divorce property sale in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Divorce Situations</h3>
                <p className="text-gray-700 text-sm">
                  Need to sell quickly due to divorce? We provide fair offers and can close on your timeline.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/cleveland-distressed-5.png"
                  alt="Job relocation house sale in Cleveland"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Job Relocation</h3>
                <p className="text-gray-700 text-sm">
                  Moving for work? Don't let your house hold up your plans. We can close before you move.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Situations We Help With */}
      <section className="py-16 bg-white/95 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Situations We Help With</h2>
            <p className="text-gray-700 mt-2">No matter your situation, we have a solution</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-urbanova-tan">
              <h3 className="font-semibold text-gray-900 mb-2">Foreclosure</h3>
              <p className="text-gray-700 text-sm mb-3">Stop foreclosure and protect your credit</p>
              <Link href="/sell-your-house/foreclosure" className="text-urbanova-tan hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-urbanova-tan">
              <h3 className="font-semibold text-gray-900 mb-2">Inherited Property</h3>
              <p className="text-gray-700 text-sm mb-3">Turn inherited property into cash quickly</p>
              <Link href="/sell-your-house/inherited" className="text-urbanova-tan hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-urbanova-tan">
              <h3 className="font-semibold text-gray-900 mb-2">Divorce</h3>
              <p className="text-gray-700 text-sm mb-3">Simplify property division during divorce</p>
              <Link href="/sell-your-house/divorce" className="text-urbanova-tan hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-urbanova-tan">
              <h3 className="font-semibold text-gray-900 mb-2">Job Relocation</h3>
              <p className="text-gray-700 text-sm mb-3">Quick sale for work-related moves</p>
              <Link href="/sell-your-house/relocation" className="text-urbanova-tan hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-urbanova-tan">
              <h3 className="font-semibold text-gray-900 mb-2">Major Repairs Needed</h3>
              <p className="text-gray-700 text-sm mb-3">Sell without making expensive repairs</p>
              <Link href="/sell-your-house/repairs" className="text-urbanova-tan hover:underline text-sm">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-urbanova-tan">
              <h3 className="font-semibold text-gray-900 mb-2">Problem Tenants</h3>
              <p className="text-gray-700 text-sm mb-3">Sell rental properties with tenant issues</p>
              <Link href="/sell-your-house/bad-tenants" className="text-urbanova-tan hover:underline text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900">
              Cleveland's Premier Cash Home Buyers - Serving All of Northeast Ohio
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-left">
              <p className="mb-6">
                When you need to sell your house fast in Cleveland, Ohio, Urbanova Ventures is your trusted local cash
                buyer. We specialize in purchasing homes throughout Northeast Ohio, including Cleveland, Akron, Parma,
                Lakewood, Strongsville, Rocky River, Westlake, and Shaker Heights. Whether you're facing foreclosure,
                dealing with an inherited property, going through a divorce, or simply need to sell quickly, we provide
                fair cash offers and can close in as little as 7 days.
              </p>
              <p className="mb-6">
                Our Cleveland-based team understands the local real estate market and the unique challenges facing
                homeowners in Cuyahoga County and surrounding areas. We buy houses in any condition - from properties
                needing major repairs to homes that are move-in ready. You don't need to worry about cleaning, staging,
                or making costly repairs. We handle everything, allowing you to focus on your next chapter.
              </p>
              <p className="mb-6">
                Don't let a difficult situation force you into a lengthy traditional sale process. Whether your home
                needs a new roof, has foundation issues, or requires complete renovation, we can provide a fair cash
                offer within 24 hours. We've helped hundreds of Cleveland area homeowners sell their properties quickly
                and move forward with confidence.
              </p>
              <p>
                Contact Urbanova Ventures today at (216) 452-7381 for your free, no-obligation cash offer. We're here to
                help Cleveland homeowners solve their real estate challenges with honest, transparent service and fast
                closings that work on your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Match the screenshot layout */}
      <section className="py-16 bg-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left side - Benefits - Push to far left */}
            <div className="lg:col-span-2 lg:pr-8">
              <div className="max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Get Your Cash Offer Today</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Fill out the form to get started. We'll contact you within 24 hours with a fair, no-obligation cash
                  offer for your property.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-urbanova-tan p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-black" />
                    </div>
                    <p className="text-white font-medium">No obligation to accept</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-urbanova-tan p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-black" />
                    </div>
                    <p className="text-white font-medium">No repairs or cleaning needed</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-urbanova-tan p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-black" />
                    </div>
                    <p className="text-white font-medium">No realtor commissions or fees</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-urbanova-tan p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-black" />
                    </div>
                    <p className="text-white font-medium">Close on your timeline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
              <SellerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
