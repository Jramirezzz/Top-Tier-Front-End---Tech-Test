import {Banner,ProductCard, TestimonialCard} from "./Components/index";

const products = [
  { name: 'Pet Food', price: 12.99, description: 'Alimento nutritivo…', image: 'https://placekitten.com/300/300' },
  { name: 'Pet Toy',  price: 5.49,  description: 'Juguete interactivo…', image: 'https://placekitten.com/301/300' },
  { name: 'Pet Bed',  price: 25.99, description: 'Cama cómoda…',      image: 'https://placekitten.com/302/300' },
  { name: 'Pet Bed',  price: 25.99, description: 'Cama cómoda…',      image: 'https://placekitten.com/302/300' },
  { name: 'Pet Bed',  price: 25.99, description: 'Cama cómoda…',      image: 'https://placekitten.com/302/300' },
  { name: 'Pet Food', price: 12.99, description: 'Alimento nutritivo…', image: 'https://placekitten.com/300/300' },
  { name: 'Pet Toy',  price: 5.49,  description: 'Juguete interactivo…', image: 'https://placekitten.com/301/300' },
  { name: 'Pet Bed',  price: 25.99, description: 'Cama cómoda…',      image: 'https://placekitten.com/302/300' },
  { name: 'Pet Bed',  price: 25.99, description: 'Cama cómoda…',      image: 'https://placekitten.com/302/300' },
  { name: 'Pet Bed',  price: 25.99, description: 'Cama cómoda…',      image: 'https://placekitten.com/302/300' },
]

const testimonials = [
  {
    name: 'María López',
    role: 'Cliente habitual',
    avatar: 'https://i.pravatar.cc/150?img=32',
    testimonial:
      '¡Me encanta esta tienda! Siempre encuentro todo lo que mi perro necesita y llega rapidísimo.',
  },
  {
    name: 'Carlos Gómez',
    role: 'Dueño de gato',
    avatar: 'https://i.pravatar.cc/150?img=12',
    testimonial:
      'La variedad de juguetes es excelente. Mi gato pasa horas jugando con el último set que compré.',
  },
  {
    name: 'Ana Pérez',
    role: 'Adiestradora canina',
    avatar: 'https://i.pravatar.cc/150?img=44',
    testimonial:
      'Recomiendo sus snacks naturales para entrenamiento: a mis clientes les encantan y mis perros responden mejor.',
  },
]

export default function Page() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Banner />
      </div>

      {/* Productos Destacados */}
      <section className="w-full bg-white py-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-black">
          Productos Destacados
        </h2>
        <div className="w-full overflow-x-auto px-4">
          <div className="flex space-x-8">
            {products.map((product, idx) => (
              <div key={idx} className="flex-none">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="w-full py-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-black">
          Lo que dicen nuestros clientes
        </h2>
        <div className="w-full overflow-x-auto px-4">
          <div className="flex space-x-8 justify-center">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-none">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}