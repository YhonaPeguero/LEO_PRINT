import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services' 
import { Gallery } from '@/components/sections/gallery'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
    </main>
  )
}