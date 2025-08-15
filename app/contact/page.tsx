"use client"

import type React from "react"
import { submitGeneralContactForm } from "@/lib/actions"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, MessageSquare, User, Loader2 } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, "")
    const phoneNumberLength = phoneNumber.length
    if (phoneNumberLength < 4) return phoneNumber
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formattedPhoneNumber }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitGeneralContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setError("Failed to send message. Please try again or call us directly at (216) 452-7381.")
        console.error("Form submission failed:", result.error)
      }
    } catch (error) {
      setError("Failed to send message. Please try again or call us directly at (216) 452-7381.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Contact Urbanova Ventures</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to sell your Cleveland house fast for cash? Get your free, no-obligation offer today. Isaiah
              Harris-Ware and the Urbanova Ventures team are standing by to help.
            </p>
            <a
              href="/sell-your-house"
              className="inline-block bg-urbanova-tan text-black py-3 px-6 rounded-md font-semibold hover:bg-stone-300 transition-colors"
            >
              Sell Your House Fast
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Cash Offer - No Obligation</h2>
              <p className="text-gray-600 mb-6">
                Fill out our quick form below and Isaiah Harris-Ware will personally contact you within 24 hours with a
                fair cash offer for your Cleveland area property.
              </p>

              {isSubmitted ? (
                <div className="bg-urbanova-tan/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-urbanova-tan mb-2">Thank You!</h3>
                  <p className="mb-4">
                    We've received your message and Isaiah will get back to you within 24 hours with your cash offer.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

                  <div>
                    <Label htmlFor="name" className="text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        style={{ fontStyle: "italic" }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        maxLength={14}
                        placeholder="(216) 555-1234"
                        style={{ fontStyle: "italic" }}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      Tell Us About Your Situation *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px]"
                      placeholder="Describe your property, timeline, any challenges you're facing, or questions you have..."
                      style={{ fontStyle: "italic" }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get My Free Cash Offer Now"
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Speak With Isaiah Harris-Ware</h2>
              <p className="text-gray-600 mb-8">
                Get immediate assistance from Cleveland's most trusted home buyer. Isaiah personally handles every
                inquiry to ensure you receive the best possible service and cash offer.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-urbanova-tan/20 p-3 h-fit rounded-full">
                    <User className="h-6 w-6 text-urbanova-tan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Your Personal Consultant</h3>
                    <p className="text-gray-600 mt-1 font-medium">Isaiah Harris-Ware</p>
                    <p className="text-gray-600">Founder & Owner</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-urbanova-tan/20 p-3 h-fit rounded-full">
                    <MapPin className="h-6 w-6 text-urbanova-tan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600 mt-1">Cleveland, OH & Surrounding Areas</p>
                    <p className="text-gray-600">Serving All of Northeast Ohio</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-urbanova-tan/20 p-3 h-fit rounded-full">
                    <Phone className="h-6 w-6 text-urbanova-tan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call or Text</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+12164527381" className="hover:text-urbanova-tan font-medium text-lg">
                        (216) 452-7381
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Available 7 days a week for urgent situations</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-urbanova-tan/20 p-3 h-fit rounded-full">
                    <Mail className="h-6 w-6 text-urbanova-tan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:isaiahharrisw@gmail.com" className="hover:text-urbanova-tan font-medium">
                        isaiahharrisw@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Detailed inquiries and property information</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Need Cash for Your House Today?</h3>
                <p className="text-gray-700 mb-4">
                  Don't wait - foreclosure, job loss, and financial emergencies won't wait. Get your cash offer in 24
                  hours or less.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+12164527381" className="flex-1">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">Call Now: (216) 452-7381</Button>
                  </a>
                  <a href="sms:+12164527381" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full bg-gray-200 text-gray-900 border-gray-300 hover:bg-gray-300"
                    >
                      Text Isaiah
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900">
              Cleveland's Premier Property Solution Specialists - Contact Us Today
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                When you need to sell your house fast in Cleveland, Ohio, Urbanova Ventures is your trusted local
                partner. Founded and led by Isaiah Harris-Ware, we've built our reputation on providing honest,
                transparent, and lightning-fast cash offers to homeowners throughout Northeast Ohio. Whether you're
                facing foreclosure in Lakewood, dealing with an inherited property in Shaker Heights, or need to
                relocate quickly from Parma, we're here to help you turn your property into cash in as little as 7 days.
              </p>
              <p className="mb-6">
                Don't wait another day to get the cash you need. Contact Isaiah Harris-Ware directly at (216) 452-7381
                or email isaiahharrisw@gmail.com for immediate assistance. We buy houses in any condition throughout
                Cleveland, Akron, and all surrounding communities. No repairs needed, no realtor fees, no lengthy
                closing processes - just fast, fair cash offers that put money in your pocket quickly.
              </p>
              <p className="mb-6">
                Our Cleveland-based team understands the local real estate market inside and out. From downtown
                Cleveland to the suburbs of Strongsville, Rocky River, and beyond, we've helped hundreds of homeowners
                solve their property challenges. Contact us now for your free consultation and discover why Urbanova
                Ventures is Northeast Ohio's #1 choice for fast home sales.
              </p>
              <p>
                Ready to get started? Call, text, or email us today. Isaiah Harris-Ware personally reviews every inquiry
                and ensures you receive the attention and respect you deserve. Your cash offer is just one phone call
                away - don't let another day pass without taking action on your home sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
            Ready to Sell Your Cleveland House Fast?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied Cleveland homeowners who chose Urbanova Ventures for their fast cash home sale.
            No repairs, no fees, no waiting - just cash in your hands quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href="tel:+12164527381" className="flex-1">
              <Button size="lg" className="w-full bg-urbanova-tan text-black hover:bg-stone-300">
                <Phone className="h-5 w-5 mr-2" />
                Call (216) 452-7381
              </Button>
            </a>
            <a href="sms:+12164527381" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Text Isaiah
              </Button>
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">Available 7 days a week • Free consultation • No obligation</p>
        </div>
      </section>
    </div>
  )
}
