import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Products } from './components/Products'
import { Story } from './components/Story'
import { Beans } from './components/Beans'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Story />
        <Beans />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
