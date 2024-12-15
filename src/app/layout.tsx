import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LEO PRINT - Soluciones de Impresión y Publicidad',
  description: 'Ofrecemos servicios de impresión y publicidad personalizados para empresarios y profesionales de la salud.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">LEO PRINT</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Inicio</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Servicios</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Galería</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contacto</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} LEO PRINT. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}