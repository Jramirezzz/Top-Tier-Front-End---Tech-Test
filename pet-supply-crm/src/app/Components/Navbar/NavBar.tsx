// src/components/Navbar.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">
            Pet Supply
          </Link>
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-4">
         <Link href="/" className="text-white hover:text-gray-300">Inicio</Link>
          <Link href="/products" className='text-white hover:text-gray-300'>Productos</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contacto</Link>
        </div>

        {/* Icono de menú para pantallas pequeñas */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="space-y-4 p-4">
          <Link href="/" className="block text-white hover:text-gray-300">
            Inicio
          </Link>
          <Link href="/products" className="block text-white hover:text-gray-300">
            Productos
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-300">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar