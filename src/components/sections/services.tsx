'use client'
import { Card } from "@/components/ui/card"
import { Printer, FileText, Package, PenTool, Image as ImageIcon, Megaphone } from 'lucide-react'
import { motion } from "framer-motion"

const services = [
  {
    icon: Printer,
    title: "Impresión Digital",
    description: "Impresión de alta calidad para todos tus proyectos, desde pequeños formatos hasta grandes dimensiones.",
    features: ["Alta resolución.", "Rápida entrega.", "Diversos materiales. "],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FileText,
    title: "Papelería Corporativa",
    description: "Diseño e impresión de papelería profesional que refleja la identidad de tu empresa.",
    features: ["Tarjetas de presentación.", "Hojas membretadas.", "Carpetas corporativas."],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: PenTool,
    title: "Diseño Gráfico",
    description: "Creación de diseños únicos y profesionales que destacan tu marca.",
    features: ["Logos.", "Branding.", "Material publicitario."],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Package,
    title: "Material Promocional",
    description: "Artículos personalizados para promocionar tu marca y eventos especiales.",
    features: ["Merchandising.", "Regalos corporativos.", "Productos personalizados."],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: ImageIcon,
    title: "Gran Formato",
    description: "Impresión de alta calidad en formatos grandes para máximo impacto visual.",
    features: ["Banners.", "Vinilos.", "Displays."],
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Megaphone,
    title: "Publicidad Exterior",
    description: "Soluciones de publicidad exterior para dar visibilidad a tu negocio.",
    features: ["Rótulos.", "Señalética.", "Displays publicitarios."],
    color: "from-sky-500 to-sky-600"
  }
]

export function Services() {
  return (
    <section className="py-24 bg-gray-800" id="servicios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-200 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de impresión y publicidad para ayudarte a destacar en el mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="relative h-full overflow-hidden group bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
                {/* Fondo decorativo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}