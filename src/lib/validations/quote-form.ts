import { z } from 'zod'

export const quoteFormSchema = z.object({
  // Step 1: Personal Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),

  // Step 2: Basic Details
  age: z.number().min(18, 'Must be at least 18 years old').max(85, 'Must be under 85 years old'),
  gender: z.enum(['male', 'female']),
  smoker: z.enum(['yes', 'no']),

  // Step 3: Coverage Details
  coverageAmount: z.number().min(25000, 'Minimum coverage is $25,000').max(10000000, 'Maximum coverage is $10,000,000'),
  zipCode: z.string().regex(/^\d{5}$/, 'Please enter a valid 5-digit ZIP code'),

  // Step 4: Insurance Type
  insuranceType: z.enum(['term', 'whole', 'universal', 'unsure']),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>

export const defaultValues: Partial<QuoteFormData> = {
  gender: 'male',
  smoker: 'no',
  insuranceType: 'unsure',
}

export const coverageOptions = [
  { value: 100000, label: '$100,000' },
  { value: 250000, label: '$250,000' },
  { value: 500000, label: '$500,000' },
  { value: 1000000, label: '$1,000,000' },
  { value: 2000000, label: '$2,000,000' },
] 