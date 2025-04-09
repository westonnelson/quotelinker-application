'use client'

import { useFormContext } from 'react-hook-form'
import { QuoteFormData } from '@/lib/validations/quote-form'

type FieldType = 'text' | 'email' | 'tel' | 'number' | 'select' | 'radio'

interface BaseFieldProps {
  name: keyof QuoteFormData
  label: string
  type: FieldType
  placeholder?: string
}

interface SelectFieldProps extends BaseFieldProps {
  type: 'select'
  options: { value: string | number; label: string }[]
}

interface RadioFieldProps extends BaseFieldProps {
  type: 'radio'
  options: { value: string; label: string }[]
}

interface TextFieldProps extends BaseFieldProps {
  type: 'text' | 'email' | 'tel' | 'number'
  placeholder?: string
}

type FormInputProps = SelectFieldProps | RadioFieldProps | TextFieldProps

export function FormInput(props: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<QuoteFormData>()

  const error = errors[props.name]?.message

  if (props.type === 'select' && 'options' in props) {
    return (
      <div className="space-y-1">
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
          {props.label}
        </label>
        <select
          id={props.name}
          {...register(props.name)}
          className="mt-1 block w-full rounded-lg border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#2EE4D4] focus:ring-[#2EE4D4] sm:text-sm"
        >
          <option value="">Select an option</option>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error.toString()}</p>}
      </div>
    )
  }

  if (props.type === 'radio' && 'options' in props) {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">{props.label}</label>
        <div className="space-y-2">
          {props.options.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                {...register(props.name)}
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
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        {...register(props.name)}
        className="mt-1 block w-full rounded-lg border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#2EE4D4] focus:ring-[#2EE4D4] sm:text-sm"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.toString()}</p>}
    </div>
  )
} 