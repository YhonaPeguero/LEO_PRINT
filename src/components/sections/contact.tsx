'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from "framer-motion"
import Link from 'next/link'

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: "+1 (829) 288-8079",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@leoprint.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "La Romana, República Dominicana",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Clock,
      title: "Horario",
      details: "Lun - Vie: 8:00 AM - 6:00 PM",
      color: "from-cyan-500 to-cyan-600"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white" id="contacto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-200 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Contáctenos
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              ¿Listo para llevar tu marca al siguiente nivel? Ponte en contacto con nosotros para discutir tus necesidades de impresión y publicidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="bg-white/10 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 h-12"
                />
                <Input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="bg-white/10 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 h-12"
                />
                <Input 
                  type="tel" 
                  placeholder="Teléfono (opcional)" 
                  className="bg-white/10 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 h-12"
                />
                <Textarea 
                  placeholder="¿En qué podemos ayudarte? Cuéntanos sobre tu proyecto..." 
                  className="bg-white/10 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 min-h-[200px] resize-y"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-6 text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              >
                Enviar Mensaje
              </Button>
              <div className="text-center mt-4">
                <span className="text-gray-400">o</span>
                <Link 
                  href="https://wa.link/0gxgck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4"
                >
                  <Button 
                    type="button"
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-6 text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Contáctanos por WhatsApp
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    {/* Fondo decorativo */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${info.color} mb-4`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      <p className="text-gray-300 flex-grow">{info.details}</p>

                      {/* Efecto hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

