'use client'

import { useFormContext } from 'react-hook-form'
import { QuoteFormData } from '@/lib/validations/quote-form'

interface FormInputProps {
  name: keyof QuoteFormData
  label: string
  type?: string
  placeholder?: string
  options?: { value: string | number; label: string }[]
}

export function FormInput({
  name,
  label,
  type = 'text',
  placeholder,
  options,
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<QuoteFormData>()

  const error = errors[name]?.message

  if (type === 'select' && options) {
    return (
      <div className="space-y-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <select
          id={name}
          {...register(name)}
          className="mt-1 block w-full rounded-lg border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#2EE4D4] focus:ring-[#2EE4D4] sm:text-sm"
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error.toString()}</p>}
      </div>
    )
  }

  if (type === 'radio' && options) {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="space-y-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                {...register(name)}
                className="h-4 w-4 text-[#2EE4D4] border-gray-300 focus:ring-[#2EE4D4]"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error.toString()}</p>}
      </div>
    )
  }

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="mt-1 block w-full rounded-lg border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#2EE4D4] focus:ring-[#2EE4D4] sm:text-sm"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.toString()}</p>}
    </div>
  )
} 