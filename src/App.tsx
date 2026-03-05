import './App.css'
import {Header} from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { PriceComparison } from './components/PriceComparison'


function App() {
    return (
    <div className="min-h-screen">
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <PriceComparison />
        <Testimonials />
        <CTA />
        <ContactSection />
        <Footer />
    </div>
    )
}

export default App
