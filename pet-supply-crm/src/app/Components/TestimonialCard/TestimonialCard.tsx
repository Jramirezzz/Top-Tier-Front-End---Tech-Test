// src/components/TestimonialCard.tsx
import React from 'react'

interface TestimonialProps {
  name: string
  role: string
  avatar: string
  testimonial: string
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  avatar,
  testimonial,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        {/* Texto del testimonio */}
        <p className="text-gray-700 italic mb-4">“{testimonial}”</p>
        {/* Perfil del usuario */}
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}