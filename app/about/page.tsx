import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">About Urbanova Ventures</h1>
              <p className="mt-4 text-xl text-gray-300">
                Founded by Isaiah Harris-Ware, Urbanova Ventures is dedicated to creating win-win solutions for property
                owners and investors in the Cleveland area.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-urbanova-tan text-black hover:bg-stone-300 hover:text-black">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/urbanova-logo-house.png" alt="Urbanova Ventures" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Simple 3-Step Process to Get Cash for Your Cleveland Home
            </h2>
            <p className="text-gray-700 mt-2">
              Get your cash offer in just 3 easy steps designed to save you time and hassle.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Contact Us - Tell Us About Your Property and Situation
              </h3>
              <p className="text-gray-700">
                Call or fill out our quick, no-obligation form. Whether you're selling due to foreclosure, relocation,
                divorce, or any other reason, we're ready to help and keep your info confidential.{" "}
                <strong>Don't wait - take the first step toward a fast cash sale today.</strong>
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Property Assessment - Quick, Professional, Respectful
              </h3>
              <p className="text-gray-700">
                We'll schedule a convenient time to view your property, no matter the condition. Our team is experienced
                with distressed homes, inherited properties, and everything in between. We provide honest assessments to
                ensure you get the best cash offer possible.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Get Your Fair Cash Offer - Close When It Works for You
              </h3>
              <p className="text-gray-700">
                Receive a no-obligation, competitive cash offer within 24 hours. Accept it, and we can close quickly to
                get you cash fast. <strong>Your fast cash sale starts here - don't wait!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Meet Our Founder</h2>
              <h3 className="text-xl font-medium mt-2 text-urbanova-tan">Isaiah Harris-Ware</h3>
              <p className="mt-4 text-gray-700">
                Isaiah Harris-Ware founded Urbanova Ventures with a vision to transform the real estate investment
                landscape in Cleveland and Northeast Ohio. Born and raised in the Cleveland area, Isaiah has deep roots
                in the community and understands the unique challenges facing homeowners in Cuyahoga County and
                surrounding areas. With experience in finance and real estate, he recognized the need for a company that
                could provide ethical, fast solutions for homeowners in difficult situations while creating value for
                local investors.
              </p>
              <p className="mt-4 text-gray-700">
                Isaiah's approach focuses on understanding each Cleveland homeowner's unique situation and creating
                customized solutions that meet their specific needs. Whether you're in downtown Cleveland, the suburbs
                of Parma and Strongsville, or communities like Akron and Medina, Isaiah personally reviews every inquiry
                to ensure you receive fair treatment and a competitive cash offer. He's passionate about real estate
                education and helping Northeast Ohio residents build wealth through strategic property investments.
              </p>
              <p className="mt-4 text-gray-700">
                Under Isaiah's leadership, Urbanova Ventures has helped Cleveland area homeowners solve their property
                challenges from foreclosure prevention in Lakewood to inherited property sales in Shaker Heights. We've
                connected local investors with valuable opportunities throughout Northeast Ohio, contributing to
                neighborhood revitalization and community growth. Isaiah's commitment to transparency, respect, and
                community impact has made Urbanova Ventures Cleveland's trusted name in fast home sales.
              </p>
              <p className="mt-4 text-gray-700">
                When you work with Urbanova Ventures, you're working directly with Isaiah Harris-Ware, a Cleveland
                native who cares about your success and the future of Northeast Ohio communities. Contact Isaiah today
                at (216) 452-7381 to discuss your property situation and discover how we can help you achieve your real
                estate goals.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/cleveland-house-sold.png"
                alt="Isaiah Harris-Ware, Founder"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              The principles that guide everything we do at Urbanova Ventures
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="bg-urbanova-tan/20 p-2 h-fit rounded-full">
                <CheckCircle className="h-6 w-6 text-urbanova-tan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Transparency</h3>
                <p className="text-gray-700 mt-2">
                  We believe in complete transparency in all our dealings. We explain our process clearly and ensure you
                  understand every step of the transaction.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-urbanova-tan/20 p-2 h-fit rounded-full">
                <CheckCircle className="h-6 w-6 text-urbanova-tan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Respect</h3>
                <p className="text-gray-700 mt-2">
                  We treat every client with respect and dignity, regardless of their situation. We listen to your needs
                  and work to find the best solution for you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-urbanova-tan/20 p-2 h-fit rounded-full">
                <CheckCircle className="h-6 w-6 text-urbanova-tan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                <p className="text-gray-700 mt-2">
                  We're constantly looking for innovative ways to solve real estate challenges and create value for our
                  clients and investors.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-urbanova-tan/20 p-2 h-fit rounded-full">
                <CheckCircle className="h-6 w-6 text-urbanova-tan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Community Impact</h3>
                <p className="text-gray-700 mt-2">
                  We're committed to making a positive impact in the communities we serve, helping to revitalize
                  neighborhoods and create housing opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Work With Us?</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you're looking to sell a property quickly in Cleveland and surrounding areas or find your next
            investment opportunity, Urbanova Ventures is here to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell-your-house">
              <Button size="lg" className="bg-urbanova-tan text-black hover:bg-stone-300 hover:text-black">
                Sell Your House
              </Button>
            </Link>
            <Link href="/buyers">
              <Button size="lg" className="bg-urbanova-tan text-black hover:bg-stone-300 hover:text-black">
                Investment Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
