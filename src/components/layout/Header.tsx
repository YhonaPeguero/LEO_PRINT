'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const menuItems = [
    { to: "inicio", label: "Inicio" },
    { to: "servicios", label: "Servicios" },
    { to: "galeria", label: "Galería" },
    { to: "nosotros", label: "Nosotros" },
    { to: "contacto", label: "Contacto" }
  ]

  // Detectar la sección actual basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.to,
        element: document.getElementById(item.to)
      }))

      const headerOffset = 100 // Un poco más que el headerOffset original para mejor UX
      const currentPosition = window.scrollY + headerOffset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i].element
        if (section) {
          const sectionTop = section.offsetTop
          if (currentPosition >= sectionTop) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamada inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevenir el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Cerrar el menú móvil cuando la ventana se redimensiona
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  const handleClick = (to: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(to)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "instant"
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full transition-colors duration-200 ${isMenuOpen ? 'bg-gray-900' : 'bg-gray-900/80 backdrop-blur-md'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => handleClick('inicio')}
            className={`text-2xl font-bold transition-colors cursor-pointer relative group z-50 ${
              activeSection === 'inicio' ? 'text-blue-400' : 'text-white hover:text-blue-400'
            }`}
          >
            LEO PRINT
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-200 origin-left ${
              activeSection === 'inicio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}></span>
          </button>
          
          {/* Menú de escritorio */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClick(item.to)}
                    className={`text-gray-300 transition-all duration-300 px-3 py-2 rounded-lg relative group overflow-hidden ${
                      activeSection === item.to ? 'text-white' : 'hover:text-white'
                    }`}
                  >
                    {/* Efecto de gradiente en hover y activo */}
                    <span className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 transition-opacity duration-300 ${
                      activeSection === item.to ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                    
                    {/* Efecto de brillo */}
                    <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${
                      activeSection === item.to ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
                    }`}></span>
                    
                    {/* Texto del menú */}
                    <span className="relative z-10">
                      {item.label}
                    </span>
                    
                    {/* Línea inferior animada */}
                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 -translate-x-1/2 ${
                      activeSection === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón de menú móvil */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-50 relative"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Menú móvil fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-gray-900 flex flex-col"
          >
            {/* Espacio para el header */}
            <div className="h-[72px]" />
            
            {/* Contenido del menú */}
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex items-center justify-center"
            >
              <ul className="w-full max-w-md mx-auto px-4 space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleClick(item.to)}
                      className={`w-full text-center py-3 text-2xl font-medium transition-all duration-200 relative group ${
                        activeSection === item.to ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute -bottom-2 left-1/2 w-12 h-0.5 bg-blue-500 transform -translate-x-1/2 transition-transform duration-200 ${
                        activeSection === item.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 