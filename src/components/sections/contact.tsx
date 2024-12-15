'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from "framer-motion"

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: "+1 (809) 123-4567",
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
      details: "Santo Domingo Este, República Dominicana",
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
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
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

