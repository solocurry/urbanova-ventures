"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - this would be connected to a server action or API route
    console.log("Email submitted:", email)
    // Reset form
    setEmail("")
  }

  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-real-estate-skyline.png"
          alt="Real Estate Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 py-24 md:py-32 lg:py-48 container">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Urbanova Ventures</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Creating win-win solutions for property owners and investors in the Atlanta area. We specialize in helping
            homeowners in difficult situations and connecting investors with valuable opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/sell-your-house">
              <Button size="lg" className="gap-2">
                Sell Your House Fast
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/buyers">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Investment Opportunities
              </Button>
            </Link>
          </div>

          {/* Quick Contact Form */}
          <div className="mt-8 p-6 bg-white/90 backdrop-blur rounded-lg max-w-md">
            <h3 className="text-lg font-semibold mb-3">Get a Free, No-Obligation Offer</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="w-full">
                Get Started
              </Button>
            </form>
            <p className="text-xs mt-2 text-gray-600">We respect your privacy and will never share your information.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
