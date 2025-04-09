'use server'

import { QuoteFormData } from '../validations/quote-form'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitQuoteForm(data: QuoteFormData) {
  try {
    // In development, save to local storage instead of file system
    if (process.env.NODE_ENV === 'development') {
      // Log the lead data to console for development
      console.log('New lead:', data)
      return { success: true }
    }

    // In production, submit to HubSpot
    if (process.env.HUBSPOT_API_KEY) {
      const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties: {
            firstname: data.firstName,
            lastname: data.lastName,
            email: data.email,
            phone: data.phone,
            age: data.age.toString(),
            gender: data.gender,
            smoker: data.smoker,
            coverage_amount: data.coverageAmount.toString(),
            zip_code: data.zipCode,
            insurance_type: data.insuranceType,
          },
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit to HubSpot')
      }
    }

    // Send notification emails
    if (process.env.RESEND_API_KEY) {
      // Email to agent
      await resend.emails.send({
        from: 'QuoteLinker <quotes@quotelinker.com>',
        to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL!,
        subject: 'New QuoteLinker Lead Submitted',
        html: `
          <h1>New Lead Details</h1>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Age:</strong> ${data.age}</p>
          <p><strong>Gender:</strong> ${data.gender}</p>
          <p><strong>Smoker:</strong> ${data.smoker}</p>
          <p><strong>Coverage Amount:</strong> $${data.coverageAmount.toLocaleString()}</p>
          <p><strong>ZIP Code:</strong> ${data.zipCode}</p>
          <p><strong>Insurance Type:</strong> ${data.insuranceType}</p>
        `,
      })

      // Email to prospect
      await resend.emails.send({
        from: 'QuoteLinker <quotes@quotelinker.com>',
        to: data.email,
        subject: 'Thank You for Your Quote Request',
        html: `
          <h1>Thank You for Choosing QuoteLinker</h1>
          <p>Dear ${data.firstName},</p>
          <p>Thank you for requesting a life insurance quote. A licensed agent will contact you soon to discuss your options.</p>
          <p>Your Quote Details:</p>
          <ul>
            <li>Coverage Amount: $${data.coverageAmount.toLocaleString()}</li>
            <li>Insurance Type: ${data.insuranceType}</li>
          </ul>
          <p>If you have any questions, please contact us at ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</p>
        `,
      })
    }

    return { success: true }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, error: 'Failed to submit form' }
  }
} 