'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Contáctenos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg mb-8 text-gray-300"
          >
            ¿Listo para llevar su marca al siguiente nivel? Póngase en contacto con nosotros para discutir sus necesidades de impresión y publicidad.
          </motion.p>
          <motion.form 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Input type="text" placeholder="Nombre" className="bg-white/10 text-white placeholder-gray-400 border-gray-600 focus:border-blue-400" />
            <Input type="email" placeholder="Correo electrónico" className="bg-white/10 text-white placeholder-gray-400 border-gray-600 focus:border-blue-400" />
            <Textarea placeholder="Mensaje" className="bg-white/10 text-white placeholder-gray-400 border-gray-600 focus:border-blue-400" />
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 transform hover:scale-105">
              Enviar Mensaje
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

