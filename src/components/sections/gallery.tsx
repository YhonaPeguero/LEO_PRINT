'use client'
import Image from 'next/image'
import { motion } from "framer-motion"

export function Gallery() {
  const images = [
    { src: '/assets/img1.jpg', title: 'Impresión Digital', description: 'Alta calidad en impresión digital' },
    { src: '/assets/img2.jpg', title: 'Papelería Corporativa', description: 'Diseños personalizados' },
    { src: '/assets/img3.jpg', title: 'Material Publicitario', description: 'Soluciones creativas' },
    { src: '/assets/img4.jpg', title: 'Tarjetas de Presentación', description: 'Diseños profesionales' },
    { src: '/assets/img5.jpg', title: 'Banners y Carteles', description: 'Gran formato' },
    { src: '/assets/img6.jpg', title: 'Papelería Médica', description: 'Especializada para el sector salud' },
  ]

  return (
    <section className="py-24 bg-gray-900" id="galeria">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Nuestro Trabajo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre nuestra selección de trabajos realizados con la más alta calidad y atención al detalle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group bg-gray-800"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                quality={90}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
