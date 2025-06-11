import { NavBar,Banner,ProductCard, TestimonialCard,Footer} from "../Components";

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

export const HomePage = () => {
  return (
    <>
  
      <div className="w-full flex flex-col">
        <NavBar />
        <Banner />
      </div>


      <section className="w-full bg-white py-8">
      
        <h2 className="max-w-7xl mx-auto px-4 text-2xl font-bold mb-4 text-center text-black text-3xl">
          Productos Destacados
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-8 px-4">
            {products.map((product, idx) => (
              <div key={idx} className="flex-none">
                <ProductCard
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* — Testimonios de Clientes — */}
      <section className="w-full py-8 m-8">
        {/* Título centrado */}
        <h2 className="max-w-7xl mx-auto px-4 text-2xl font-bold mb-4 text-center text-black text-3xl">
          Lo que dicen nuestros clientes
        </h2>
        <div className="w-full overflow-x-auto">
          {/* Carrusel centrado */}
          <div className="flex justify-center space-x-8 px-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-none">
                <TestimonialCard
                  name={t.name}
                  role={t.role}
                  avatar={t.avatar}
                  testimonial={t.testimonial}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}