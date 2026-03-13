import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { PriceComparison } from './components/PriceComparison'
import { PrivacyPolicy } from './components/PrivacyPolicy'

function MainContent() {
    return (
        <>
            <Hero />
            <Benefits />
            <Services />
            <PriceComparison />
            <Testimonials />
            <CTA />
            <ContactSection />
        </>
    )
}

function App() {
    return (
    <div className="min-h-screen">
        <Header />
        <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
    </div>
    )
}

export default App
