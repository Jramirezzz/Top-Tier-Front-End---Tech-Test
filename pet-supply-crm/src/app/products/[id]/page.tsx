'use client'
import { useParams } from 'next/navigation'
import { ProductCard } from '../../Components'
import products from '../../data/products.json'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  inStock: boolean
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = (products as Product[]).find(p => p.id === id)

  if (!product) {
    return (
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <ProductCard {...product} />
    </main>
  )
}
