'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from 'next/image'

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

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab] text-white">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <motion.div 
        className="absolute inset-0 opacity-30 hidden sm:block"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full filter blur-[60px] sm:blur-[120px] opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-500 rounded-full filter blur-[60px] sm:blur-[120px] opacity-25 animate-pulse"></div>
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 pb-20 sm:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
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
            >
              Solicitar Cotización
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-transparent text-white border-2 border-blue-300/50 hover:border-blue-300 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg backdrop-blur-sm"
            >
              Nuestros Servicios
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full fill-current text-gray-800">
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

