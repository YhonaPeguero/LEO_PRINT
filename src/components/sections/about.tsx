'use client'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { motion } from "framer-motion"

export function About() {
  const features = [
    "Servicio personalizado",
    "Entregas a domicilio",
    "Amplia experiencia en el sector",
    "Atención a empresarios y profesionales de la salud",
  ]

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Sobre LEO PRINT
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              En LEO PRINT, nos especializamos en brindar soluciones de impresión y publicidad de alta calidad. 
              Con años de experiencia en el sector, nos enfocamos en ofrecer un servicio excepcional a empresarios 
              y profesionales de la salud en la zona este del país.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-white">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="LEO PRINT en acción"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}