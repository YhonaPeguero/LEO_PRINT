'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Printer, FileText, Package } from 'lucide-react'
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      title: "Papelería Corporativa",
      description: "Diseño e impresión de papelería profesional para su empresa.",
      icon: FileText,
    },
    {
      title: "Artículos Promocionales",
      description: "Creación de artículos personalizados para promocionar su marca.",
      icon: Package,
    },
    {
      title: "Papelería Médica",
      description: "Soluciones de impresión especializadas para profesionales de la salud.",
      icon: Printer,
    },
  ]

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-700 text-white border-none hover:bg-gray-600 transition-colors duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}