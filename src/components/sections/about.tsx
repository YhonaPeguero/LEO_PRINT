'use client'
import { CheckCircle } from 'lucide-react'
import { motion } from "framer-motion"

export function About() {
  const features = [
    "Servicio personalizado y atención dedicada",
    "Entregas puntuales a domicilio",
    "Más de 10 años de experiencia en el sector",
    "Especialistas en empresarios y profesionales de la salud",
    "Tecnología de última generación",
    "Garantía de calidad en cada proyecto"
  ]

  return (
    <section className="py-24 bg-gray-800" id="nosotros">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-200 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Sobre LEO PRINT
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:pt-12"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              En LEO PRINT, nos especializamos en brindar soluciones de impresión y publicidad de alta calidad. 
              Con años de experiencia en el sector, nos enfocamos en ofrecer un servicio excepcional a empresarios 
              y profesionales de la salud en la zona este del país.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Overlay decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
            
            {/* Bordes brillantes */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl z-0 animate-pulse"></div>
            
            {/* Video con autoplay */}
            <div className="relative z-[1] w-full h-full rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/video-accion.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>

            {/* Efecto de viñeta */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}