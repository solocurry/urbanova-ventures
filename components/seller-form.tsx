"use client"

import { submitSellerForm } from "@/lib/actions"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function SellerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    sqft: "",
    bedrooms: "",
    bathrooms: "",
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

  const handleSqftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "")
    setFormData((prev) => ({ ...prev, sqft: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitSellerForm({
        ...formData,
        propertyType: "Not specified",
        timeframe: "Not specified",
        sellingReason: "See additional information",
      })

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          sqft: "",
          bedrooms: "",
          bathrooms: "",
          message: "",
        })
      } else {
        setError("Failed to send your information. Please try again or call us directly at (216) 452-7381.")
        console.error("Form submission failed:", result.error)
      }
    } catch (error) {
      setError("Failed to send your information. Please try again or call us directly at (216) 452-7381.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="mb-6 text-white">
          We've received your information and will contact you within 24 hours with a cash offer for your property.
        </p>
        <p className="text-xs text-gray-300 mb-4">
          By submitting this form, you agree to be contacted about your property and understand our Privacy Policy.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
        >
          Submit Another Property
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Tell Us About Your Property</h3>

      {error && <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-white">
            Full Name *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            className="text-white bg-transparent border-white placeholder:text-gray-300"
            style={{ fontStyle: "italic" }}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="email" className="text-white">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="text-white bg-transparent border-white placeholder:text-gray-300"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white">
              Phone *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="(216) 555-1234"
              className="text-white bg-transparent border-white placeholder:text-gray-300"
              style={{ fontStyle: "italic" }}
              maxLength={14}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address" className="text-white">
            Property Address *
          </Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main Street"
            className="text-white bg-transparent border-white placeholder:text-gray-300"
            style={{ fontStyle: "italic" }}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <Label htmlFor="city" className="text-white">
              City *
            </Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Cleveland"
              className="text-white bg-transparent border-white placeholder:text-gray-300"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-white">
              State *
            </Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="OH"
              className="text-white bg-transparent border-white placeholder:text-gray-300"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="zip" className="text-white">
              ZIP Code *
            </Label>
            <Input
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="44101"
              className="text-white bg-transparent border-white placeholder:text-gray-300"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <Label htmlFor="sqft" className="text-white">
              Square Feet *
            </Label>
            <Input
              id="sqft"
              name="sqft"
              value={formData.sqft}
              onChange={handleSqftChange}
              placeholder="1800"
              className="text-white bg-transparent border-white placeholder:text-gray-300"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="bedrooms" className="text-white">
              Bedrooms *
            </Label>
            <Select onValueChange={(value) => handleSelectChange("bedrooms", value)} value={formData.bedrooms}>
              <SelectTrigger id="bedrooms" className="text-white bg-transparent border-white">
                <SelectValue placeholder="Select beds" className="text-gray-300" style={{ fontStyle: "italic" }} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5+">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="bathrooms" className="text-white">
              Bathrooms *
            </Label>
            <Select onValueChange={(value) => handleSelectChange("bathrooms", value)} value={formData.bathrooms}>
              <SelectTrigger id="bathrooms" className="text-white bg-transparent border-white">
                <SelectValue placeholder="Select baths" className="text-gray-300" style={{ fontStyle: "italic" }} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="1.5">1.5</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="2.5">2.5</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="3+">3+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-white">
            Additional Information *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your situation, property condition, foreclosure, inheritance, divorce, relocation, major repairs needed, problem tenants, etc."
            className="min-h-[100px] text-white bg-transparent border-white placeholder:text-gray-300"
            style={{ fontStyle: "italic" }}
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-urbanova-tan text-black hover:bg-stone-300" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Get Your Cash Offer"
        )}
      </Button>

      <p className="text-xs text-gray-300 text-center">
        By submitting this form, you agree to be contacted about your property and understand our Privacy Policy.
      </p>
    </form>
  )
}
