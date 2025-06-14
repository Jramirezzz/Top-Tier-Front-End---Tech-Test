import React from 'react'

export const Banner = () => {
  return (
    <div className="bg-blue-500 text-white py-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold">Pet Shop</h1>
          <p className="mt-4 text-lg">Compra los mejores productos para tu mascota. ¡Haz tu pedido ahora!</p>
          <div className="mt-6">
            <button className="bg-yellow-400 text-black py-2 px-6 rounded-full text-xl font-bold hover:bg-yellow-500">
              ¡Compra Ahora!
            </button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img src="https://placekitten.com/500/500" alt="Pet food" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}

