'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: '/assets/img1.jpg', title: 'Impresión Digital', description: 'Alta calidad en impresión digital' },
    { src: '/assets/img2.jpg', title: 'Papelería Corporativa', description: 'Diseños personalizados' },
    { src: '/assets/img3.jpg', title: 'Material Publicitario', description: 'Soluciones creativas' },
    { src: '/assets/img4.jpg', title: 'Tarjetas de Presentación', description: 'Diseños profesionales' },
    { src: '/assets/img5.jpg', title: 'Banners y Carteles', description: 'Gran formato' },
    { src: '/assets/img6.jpg', title: 'Papelería Médica', description: 'Especializada para el sector salud' },
  ]

  const nextImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') previousImage()
    if (e.key === 'Escape') setSelectedImage(null)
  }

  // Agregar event listener para las teclas
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <section className="py-24 bg-gray-900" id="galeria">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-200 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Nuestra Galería
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
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
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group bg-gray-800 cursor-pointer"
              onClick={() => setSelectedImage(index)}
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

      {/* Modal de imagen */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[16/9] bg-gray-900 rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                fill
                className="object-contain"
                quality={100}
                priority
              />
              
              {/* Botones de navegación */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Botón de cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Información de la imagen */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">{images[selectedImage].title}</h3>
                <p className="text-gray-200 text-sm">{images[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
