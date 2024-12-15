'use client'
import Image from 'next/image'
import { motion } from "framer-motion"

export function Gallery() {
  const images = [
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
  ]

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Nuestro Trabajo
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={src}
                alt={`Ejemplo de trabajo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">Proyecto {index + 1}</h3>
                  <p className="text-gray-200">Descripción breve del proyecto</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
