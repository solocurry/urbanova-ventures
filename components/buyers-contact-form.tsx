"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { submitContactForm } from "@/lib/actions"

const BuyersContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    lookingFor: "",
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Company: ${formData.company || "Not specified"}

What they're looking for in a property:
${formData.lookingFor}`,
      })

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          lookingFor: "",
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
          We've received your information and will be in touch with investment opportunities that match your criteria.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-urbanova-tan text-gray-900 hover:bg-urbanova-tan hover:text-black"
        >
          Join Another Profile
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">Join Our Buyers List</h3>

      {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-gray-700">
            Name
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

        <div>
          <Label htmlFor="phone" className="text-gray-700">
            Phone
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

        <div>
          <Label htmlFor="email" className="text-gray-700">
            Email
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
          <Label htmlFor="company" className="text-gray-700">
            Company
          </Label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan"
            placeholder="ABC Investments LLC"
            style={{ fontStyle: "italic" }}
          />
        </div>

        <div>
          <Label htmlFor="lookingFor" className="text-gray-700">
            What you're looking for in a property
          </Label>
          <Textarea
            id="lookingFor"
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleChange}
            className="border-gray-300 focus:border-urbanova-tan focus:ring-urbanova-tan min-h-[100px]"
            placeholder="Price range $100k-$200k, certain cities like Lakewood and Parma, light rehab properties, turnkey rentals, multi-family, etc."
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
          "Join Our Buyers List"
        )}
      </Button>

      <p className="text-xs text-gray-600 text-center mt-4">
        We respect your privacy and will never share your information.
      </p>
    </form>
  )
}

export default BuyersContactForm
