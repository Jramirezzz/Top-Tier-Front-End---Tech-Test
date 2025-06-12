// pages/products/index.tsx
'use client'

import React, { useState } from 'react'
import { ProductCard } from '../Components/index'
import products from '../data/products.json'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  inStock: boolean
}

export default function ProductsPage() {
  const all = products as Product[]
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState<'all' | string>('all')
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(1000)
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false)
  const limit = 6

  // 1. Filtrar
  let filtered = all
  if (category !== 'all') filtered = filtered.filter(p => p.category === category)
  filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice)
  if (onlyInStock) filtered = filtered.filter(p => p.inStock)

  // 2. Paginar
  const totalPages = Math.ceil(filtered.length / limit)
  const start = (page - 1) * limit
  const end = start + limit
  const items = filtered.slice(start, end)

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Catálogo de Productos</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select
          value={category}
          onChange={e => { setCategory(e.target.value); setPage(1) }}
          className="border rounded px-3 py-2"
        >
          <option value="all">Todas las categorías</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Juguetes">Juguetes</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Higiene">Higiene</option>
          <option value="Ropa">Ropa</option>
        </select>
        <input
          type="number"
          value={minPrice}
          onChange={e => { setMinPrice(Number(e.target.value)); setPage(1) }}
          className="border rounded px-3 py-2 w-24"
          placeholder="Min $"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={e => { setMaxPrice(Number(e.target.value)); setPage(1) }}
          className="border rounded px-3 py-2 w-24"
          placeholder="Max $"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={e => { setOnlyInStock(e.target.checked); setPage(1) }}
            className="form-checkbox"
          />
          <span>Solo en stock</span>
        </label>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(p => (
          <Link key={p.id} href={`/products/${p.id}`}>
      <ProductCard
        name={p.name}
        price={p.price}
        description={p.description}
        image={p.image}
      />
    </Link>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>Página {page} de {totalPages}</span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </main>
  )
}
