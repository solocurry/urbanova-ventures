import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, Home } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen font-mono relative overflow-hidden pt-24 md:pt-28">
      {/* Background Property Image - Much more translucent */}
      <div
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/beautiful-renovated-house.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Hero Section */}
      <section className="bg-black/60 backdrop-blur-sm text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-shadow-lg">
                Turn Your Cleveland Property Into <span className="text-urbanova-tan">Cash Today</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed text-shadow">
                Serving Cleveland, Akron, Parma, Lakewood, Strongsville, and all Northeast Ohio communities. We buy
                houses fast for cash in any condition - foreclosure, inherited properties, divorce situations, job
                relocation, or major repairs needed. No realtor fees, no lengthy closings, no repairs required. Get your
                fair cash offer in 24 hours and close in as little as 7 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-urbanova-tan text-black px-8 py-4 rounded-lg font-semibold hover:bg-stone-300 transition-all text-center shadow-lg"
                >
                  Get Your Cash Offer Now
                </a>
                <a
                  href="tel:(216) 452-7381"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all text-center shadow-lg"
                >
                  Call (216) 452-7381 - Talk to an Expert Today
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[432px] h-[324px] lg:w-[518px] lg:h-[389px]">
                <Image
                  src="/cleveland-sold-house.png"
                  alt="Cleveland house sold"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white/95 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-8">
              Cleveland's Trusted Cash Home Buyers - We Buy Houses Fast in Northeast Ohio
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-left">
              <p className="mb-6">
                When you need to sell your house fast in Cleveland, Ohio, Urbanova Ventures is your trusted local cash
                buyer. Having called Cleveland home for over 20 years, I've witnessed firsthand the incredible
                transformation of our neighborhoods from the revitalization of Ohio City and Tremont to the steady
                growth in suburbs like Lakewood, Parma, and Strongsville. This deep connection to Northeast Ohio drives
                my passion for helping homeowners navigate challenging situations while contributing to our community's
                continued growth.
              </p>
              <p className="mb-6">
                Over the past few years, I've dedicated myself to not only helping homeowners sell their properties
                quickly and fairly, but also to being part of Cleveland's ongoing revitalization story. Whether you're
                facing foreclosure, dealing with an inherited property, going through a divorce, or need to relocate for
                work, we provide fast, fair cash offers that close on your timeline. Our mission extends beyond real
                estate. We're committed to supporting local families and contributing to food security initiatives in
                our community.
              </p>
              <p>
                Don't let property taxes, costly repairs, or market uncertainty hold you back. We serve all of Northeast
                Ohio including Akron, Canton, Elyria, and surrounding communities. Contact Urbanova Ventures today for
                your free, no-obligation cash offer and discover why we're Cleveland's preferred home buying solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-16 bg-gray-50/95 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Fast, Fair, and Hassle-Free Home Sales
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Skip the traditional real estate process. Get a cash offer in 24 hours and close in as little as 7 days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Close in 7 Days</h3>
                <p className="text-gray-700">
                  No waiting for bank approvals or lengthy inspections. We handle everything to get you cash fast.
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
                  Competitive offers based on current market conditions. No hidden fees, no commissions, no surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-urbanova-tan border-2 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Buy As-Is</h3>
                <p className="text-gray-700">
                  No repairs, cleaning, or staging needed. We buy properties in any condition, saving you time and
                  money.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Plain dark navy blue background */}
      <section id="contact" className="py-16 bg-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">Get Your Cash Offer Today</h2>
            <p className="text-lg text-gray-100">
              Fill out the form below and we'll contact you within 24 hours with a fair, no-obligation cash offer for
              your Cleveland property.
              <strong className="text-white"> Don't wait - take control of your sale and get cash fast!</strong>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
