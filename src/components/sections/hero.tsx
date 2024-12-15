'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('servicios')
    if (servicesSection) {
      const headerOffset = 80
      const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab] text-white" id="inicio">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <motion.div 
          className="absolute inset-0 opacity-30 hidden sm:block"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full filter blur-[60px] sm:blur-[120px] opacity-25 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-500 rounded-full filter blur-[60px] sm:blur-[120px] opacity-25 animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-24 sm:py-24 pb-20 sm:pb-32 max-w-[1920px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mt-12 sm:mt-0"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              className="relative w-[280px] h-[105px] sm:w-[400px] sm:h-[150px] mb-8 sm:mb-16 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-xl filter blur-xl sm:blur-2xl transform -rotate-3 group-hover:rotate-2 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/40 to-indigo-600/40 rounded-xl filter blur-xl sm:blur-2xl transform rotate-3 group-hover:-rotate-2 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm"></div>
              <Image
                src="/leo-print-logo.jpg"
                alt="LEO PRINT Logo"
                fill
                priority
                className="object-contain relative z-10 p-2 sm:p-4 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full duration-1000 transition-transform"></div>
            </motion.div>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mb-8 sm:mb-12"
            />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight px-4"
            >
              <span className="relative inline-block">
                <span className="absolute -inset-1 blur-lg bg-gradient-to-r from-blue-400/30 to-indigo-400/30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-200 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  Impresión
                </span>
              </span>{" "}
              <span className="relative inline-block mt-2 sm:mt-0">
                <span className="absolute -inset-1 blur-lg bg-gradient-to-r from-indigo-400/30 to-blue-400/30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-white to-blue-100 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  y Publicidad
                </span>
              </span>{" "}
              <span className="relative inline-block mt-2 sm:mt-0">
                <span className="absolute -inset-1 blur-lg bg-gradient-to-r from-blue-400/30 to-white/30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  de Calidad
                </span>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 sm:mt-8 max-w-[90%] sm:max-w-2xl text-base sm:text-xl text-blue-100/90 drop-shadow-lg px-4"
            >
              Soluciones personalizadas en impresión y publicidad para empresarios y profesionales de la salud.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                onClick={() => scrollToSection('contacto')}
              >
                Solicitar Cotización
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-transparent text-white border-2 border-blue-300/50 hover:border-blue-300 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg backdrop-blur-sm"
                onClick={() => scrollToSection('servicios')}
              >
                Nuestros Servicios
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          onClick={scrollToNextSection}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white cursor-pointer transition-colors z-20"
        >
          <ChevronDown size={32} />
        </motion.button>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full fill-current text-gray-800">
            <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Botón flotante de WhatsApp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-24 right-8 z-50"
      >
        <Link 
          href="https://wa.link/0gxgck"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative">
            {/* Pulso animado */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
            <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-3 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              <div className="font-medium">¡Escríbenos por WhatsApp!</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform rotate-45 w-2 h-2 bg-white"></div>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  )
}

