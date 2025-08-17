"use client"

import Link from "next/link"
import { submitBuyerForm } from "@/lib/actions"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function BuyerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentBudget: "",
    propertyTypes: [],
    locations: "",
    investmentStrategy: "",
    message: "",
    agreeToTerms: false,
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitBuyerForm(formData)

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          investmentBudget: "",
          propertyTypes: [],
          locations: "",
          investmentStrategy: "",
          message: "",
          agreeToTerms: false,
        })
      } else {
        setError("Failed to submit registration. Please try again or call us directly at (216) 452-7381.")
        console.error("Form submission failed:", result.error)
      }
    } catch (error) {
      setError("Failed to submit registration. Please try again or call us directly at (216) 452-7381.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
        <p className="mb-6">
          You've successfully joined our investor network. We'll be in touch with investment opportunities that match
          your criteria.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Register Another Profile
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold">Investor Registration</h3>

      {error && <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            style={{ fontStyle: "italic" }}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              style={{ fontStyle: "italic" }}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="(216) 555-1234"
              style={{ fontStyle: "italic" }}
              maxLength={14}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="investmentBudget">Investment Budget *</Label>
          <Select
            onValueChange={(value) => handleSelectChange("investmentBudget", value)}
            value={formData.investmentBudget}
            required
          >
            <SelectTrigger id="investmentBudget">
              <SelectValue placeholder="Under $100k, $100k-$200k, etc." style={{ fontStyle: "italic" }} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under100k">Under $100,000</SelectItem>
              <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
              <SelectItem value="200k-300k">$200,000 - $300,000</SelectItem>
              <SelectItem value="300k-500k">$300,000 - $500,000</SelectItem>
              <SelectItem value="over500k">Over $500,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="investmentStrategy">Investment Strategy *</Label>
          <Select
            onValueChange={(value) => handleSelectChange("investmentStrategy", value)}
            value={formData.investmentStrategy}
            required
          >
            <SelectTrigger id="investmentStrategy">
              <SelectValue placeholder="Fix & flip, buy & hold, etc." style={{ fontStyle: "italic" }} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fix-flip">Fix and Flip</SelectItem>
              <SelectItem value="buy-hold">Buy and Hold</SelectItem>
              <SelectItem value="brrrr">BRRRR Strategy</SelectItem>
              <SelectItem value="wholesale">Wholesale</SelectItem>
              <SelectItem value="multi-family">Multi-Family</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="locations">Preferred Locations *</Label>
          <Input
            id="locations"
            name="locations"
            value={formData.locations}
            onChange={handleChange}
            placeholder="Cleveland, Lakewood, Parma, Strongsville, etc."
            style={{ fontStyle: "italic" }}
            required
          />
        </div>

        <div>
          <Label htmlFor="message">Additional Information *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="150k+ ARV properties, prefer certain neighborhoods, looking for turnkey rentals, interested in distressed properties, etc."
            className="min-h-[100px]"
            style={{ fontStyle: "italic" }}
            required
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="agreeToTerms" checked={formData.agreeToTerms} onCheckedChange={handleCheckboxChange} required />
          <Label htmlFor="agreeToTerms" className="text-sm leading-none pt-1">
            I agree to be contacted about investment opportunities and understand the{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Join Investor Network"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy and will never share your information with third parties.
      </p>
    </form>
  )
}
