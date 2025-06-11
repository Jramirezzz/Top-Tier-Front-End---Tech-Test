// src/components/Footer.tsx
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de enlaces */}
        <div>
          <h4 className="text-white font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/products" className="hover:text-white" >Productos</Link></li>
            <li><Link href="/about" className="hover:text-white">Sobre Nosotros</Link></li>
            <li><Link href="/contact"className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        {/* Sección de contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contáctanos</h4>
          <p className="mb-2">📍 Ciudad Mascota</p>
          <p className="mb-2">📞 +57 300 123 4567</p>
          <p>✉️ info@petsupplystore.com</p>
        </div>

        {/* Sección social y suscripción */}
        <div>
          <h4 className="text-white font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
          <h4 className="text-white font-semibold mb-2">Suscríbete</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full px-3 py-2 rounded-l bg-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 rounded-r hover:bg-yellow-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Pet Supply Store. Todos los derechos reservados.
      </div>
    </footer>
  )
}