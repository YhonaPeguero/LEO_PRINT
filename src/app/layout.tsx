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