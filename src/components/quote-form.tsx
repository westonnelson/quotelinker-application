'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormInput } from './ui/form-input'
import { quoteFormSchema, defaultValues, coverageOptions, type QuoteFormData } from '@/lib/validations/quote-form'
import { submitQuoteForm } from '@/lib/actions/submit-form'

const steps = [
  {
    id: 'Personal',
    title: 'Get Your Free Quote',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'John' },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Doe' },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john.doe@example.com' },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567' },
    ],
  },
  {
    id: 'Health',
    title: 'Health Information',
    fields: [
      { name: 'age', label: 'Age', type: 'number', placeholder: '35' },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ],
      },
      {
        name: 'smoker',
        label: 'Do you use tobacco products?',
        type: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
    ],
  },
  {
    id: 'Coverage',
    title: 'Coverage Details',
    fields: [
      {
        name: 'coverageAmount',
        label: 'Coverage Amount',
        type: 'select',
        options: coverageOptions,
      },
      { name: 'zipCode', label: 'ZIP Code', type: 'text', placeholder: '12345' },
    ],
  },
  {
    id: 'Knowledge',
    title: 'Insurance Knowledge',
    fields: [
      {
        name: 'insuranceType',
        label: 'What type of life insurance are you looking for?',
        type: 'radio',
        options: [
          { value: 'term', label: 'Term Life Insurance' },
          { value: 'whole', label: 'Whole Life Insurance' },
          { value: 'universal', label: 'Universal Life Insurance' },
          { value: 'unsure', label: 'Not Sure' },
        ],
      },
    ],
  },
]

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const methods = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const onSubmit = async (data: QuoteFormData) => {
    try {
      setIsSubmitting(true)
      const result = await submitQuoteForm(data)
      
      if (result.success) {
        window.location.href = '/thank-you'
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="p-8">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index === currentStep
                    ? 'bg-[#2EE4D4] text-black'
                    : index < currentStep
                    ? 'bg-[#2EE4D4]/20 text-[#2EE4D4]'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-xs text-gray-500">{step.id}</span>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {steps[currentStep].title}
          </h2>

          <div className="space-y-4">
            {steps[currentStep].fields.map((field) => (
              <FormInput key={field.name} {...field} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between space-x-4">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep((step) => step - 1)}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((step) => step + 1)}
              className="ml-auto bg-[#2EE4D4] text-black font-semibold px-8 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto bg-[#2EE4D4] text-black font-semibold px-8 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(46,228,212,0.3)] hover:shadow-[0_0_30px_rgba(46,228,212,0.5)]"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
            </button>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Your information is secure and will never be shared without your permission.
        </p>
      </form>
    </FormProvider>
  )
} 