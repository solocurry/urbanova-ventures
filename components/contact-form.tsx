"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { submitContactForm } from "@/lib/actions"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    sellingReason: "",
    timeframe: "",
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        propertyAddress: formData.address,
        sellingReason: formData.sellingReason,
        timeframe: formData.timeframe,
        message: `Property Details:
- Bedrooms: ${formData.bedrooms || "Not specified"}
- Bathrooms: ${formData.bathrooms || "Not specified"}
- Square Feet: ${formData.sqft || "Not specified"}

Additional Information:
${formData.message}`,
      })

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          bedrooms: "",
          bathrooms: "",
          sqft: "",
          sellingReason: "",
          timeframe: "",
          message: "",
        })
      } else {
        setError("Failed to send message. Please try again or call us directly.")
        console.error("Form submission failed:", result.error)
      }
    } catch (error) {
      setError("Failed to send message. Please try again or call us directly.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="mb-6 text-gray-700">
          We've received your information and will contact you within 24 hours with a cash offer.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-urbanova-tan text-gray-900 hover:bg-urbanova-tan hover:text-black"
        >
          Submit Another Property
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">Tell Us About Your Property</h3>

      {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-gray-700">
            Full Name *
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
            placeholder="John Smith"
            style={{ fontStyle: "italic" }}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="email" className="text-gray-700">
              Email *
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              placeholder="john@example.com"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-gray-700">
              Phone *
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              placeholder="(216) 555-1234"
              style={{ fontStyle: "italic" }}
              maxLength={14}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address" className="text-gray-700">
            Property Address *
          </Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
            placeholder="123 Main Street"
            style={{ fontStyle: "italic" }}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <Label htmlFor="city" className="text-gray-700">
              City *
            </Label>
            <Input
              id="city"
              name="city"
              value={formData.city || ""}
              onChange={handleChange}
              placeholder="Cleveland"
              className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-gray-700">
              State *
            </Label>
            <Input
              id="state"
              name="state"
              value={formData.state || ""}
              onChange={handleChange}
              placeholder="OH"
              className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="zip" className="text-gray-700">
              ZIP Code *
            </Label>
            <Input
              id="zip"
              name="zip"
              value={formData.zip || ""}
              onChange={handleChange}
              placeholder="44101"
              className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <Label htmlFor="sqft" className="text-gray-700">
              Square Feet *
            </Label>
            <Input
              type="text"
              id="sqft"
              name="sqft"
              value={formData.sqft}
              onChange={handleSqftChange}
              className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              placeholder="1800"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="bedrooms" className="text-gray-700">
              Bedrooms *
            </Label>
            <Select onValueChange={(value) => handleSelectChange("bedrooms", value)} value={formData.bedrooms}>
              <SelectTrigger
                id="bedrooms"
                className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              >
                <SelectValue placeholder="Select beds" style={{ fontStyle: "italic" }} />
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
            <Label htmlFor="bathrooms" className="text-gray-700">
              Bathrooms *
            </Label>
            <Select onValueChange={(value) => handleSelectChange("bathrooms", value)} value={formData.bathrooms}>
              <SelectTrigger
                id="bathrooms"
                className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
              >
                <SelectValue placeholder="Select baths" style={{ fontStyle: "italic" }} />
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
          <Label htmlFor="message" className="text-gray-700">
            Additional Information *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan min-h-[100px]"
            placeholder="Tell us more about your situation, property condition, foreclosure, inheritance, divorce, relocation, major repairs needed, problem tenants, etc."
            style={{ fontStyle: "italic" }}
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Get Your Cash Offer"
        )}
      </Button>

      <p className="text-xs text-gray-600 text-center mt-4">
        We respect your privacy and will never share your information.
      </p>
    </form>
  )
}

export default ContactForm
