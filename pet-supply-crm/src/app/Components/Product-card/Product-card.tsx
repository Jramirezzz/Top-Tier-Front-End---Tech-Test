import React from 'react'

interface ProductProps {
  name: string
  price: number
  description: string
  image: string
}

export const ProductCard: React.FC<ProductProps> = ({ name, price, description, image }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
    
      <img src={image} alt={name} className="w-full h-48 object-cover" />

     
      <div className="p-8">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center mt-4 space-x-6">
      
          <span className="text-lg font-semibold text-gray-800">${price}</span>
    
          <button className="bg-yellow-400 text-black py-1 px-3 rounded-full text-sm font-medium hover:bg-yellow-500">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

