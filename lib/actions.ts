"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject?: string
  message: string
  propertyAddress?: string
  sellingReason?: string
  timeframe?: string
  investmentBudget?: string
  investmentStrategy?: string
  locations?: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Urbanova Ventures <onboarding@resend.dev>",
      to: ["isaiahharrisw@gmail.com"],
      subject: `New Contact Form Submission - ${formData.subject || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ""}
        ${formData.propertyAddress ? `<p><strong>Property Address:</strong> ${formData.propertyAddress}</p>` : ""}
        ${formData.sellingReason ? `<p><strong>Selling Reason:</strong> ${formData.sellingReason}</p>` : ""}
        ${formData.timeframe ? `<p><strong>Timeframe:</strong> ${formData.timeframe}</p>` : ""}
        ${formData.investmentBudget ? `<p><strong>Investment Budget:</strong> ${formData.investmentBudget}</p>` : ""}
        ${formData.investmentStrategy ? `<p><strong>Investment Strategy:</strong> ${formData.investmentStrategy}</p>` : ""}
        ${formData.locations ? `<p><strong>Preferred Locations:</strong> ${formData.locations}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>Submitted from Urbanova Ventures website</em></p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

export async function submitSellerForm(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Urbanova Ventures <onboarding@resend.dev>",
      to: ["isaiahharrisw@gmail.com"],
      subject: `New Seller Inquiry - ${formData.address}, ${formData.city}, ${formData.state}`,
      html: `
        <h2>New Seller Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Property Address:</strong> ${formData.address}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>State:</strong> ${formData.state}</p>
        <p><strong>ZIP:</strong> ${formData.zip}</p>
        <p><strong>Property Type:</strong> ${formData.propertyType}</p>
        <p><strong>Bedrooms:</strong> ${formData.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${formData.bathrooms}</p>
        <p><strong>Selling Reason:</strong> ${formData.sellingReason}</p>
        <p><strong>Timeframe:</strong> ${formData.timeframe}</p>
        <p><strong>Additional Information:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>Submitted from Urbanova Ventures Sell Your House page</em></p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Seller form submission error:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

export async function submitBuyerForm(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Urbanova Ventures <onboarding@resend.dev>",
      to: ["isaiahharrisw@gmail.com"],
      subject: `New Investor Registration - ${formData.fullName}`,
      html: `
        <h2>New Investor Registration</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Investment Budget:</strong> ${formData.investmentBudget}</p>
        <p><strong>Investment Strategy:</strong> ${formData.investmentStrategy}</p>
        <p><strong>Preferred Locations:</strong> ${formData.locations}</p>
        <p><strong>Additional Information:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>Submitted from Urbanova Ventures Investor Network</em></p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Buyer form submission error:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

export async function submitGeneralContactForm(formData: ContactFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Urbanova Ventures <onboarding@resend.dev>",
      to: ["isaiahharrisw@gmail.com"],
      subject: `New General Contact - ${formData.name}`,
      html: `
        <h2>New General Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>Submitted from Urbanova Ventures Contact page</em></p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("General contact form submission error:", error)
    return { success: false, error: "Failed to submit form" }
  }
}
