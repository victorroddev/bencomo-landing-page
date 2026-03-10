import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import contactBackground from '../assets/img/exterior.jpg'

export function CTA() {
  return (
    <section className="cta">
      <div className="cta-background">
        <img 
          src={contactBackground}
          alt="Mexico beach"
        />
      </div>
      
      <div className="container cta-content">
        <div className="cta-header">
          <h2>Ready to Save on Your Dental Care?</h2>
          <p className="cta-description">
            Get a free consultation and personalized treatment plan. We'll help you understand your options, 
            savings, and coordinate everything from scheduling to accommodation.
          </p>
        </div>

        <div className="cta-cards">
          <div className="cta-card">
            <Phone style={{ width: '2rem', height: '2rem' }} />
            <h3>Call Us</h3>
            <p>Speak with our team</p>
            <a href="tel:+19159203235">+1 (915) 920-3235</a>
          </div>

          <div className="cta-card">
            <Mail style={{ width: '2rem', height: '2rem' }} />
            <h3>Email Us</h3>
            <p>Get a quote in 24hrs</p>
            <a href="mailto:info@bencomodentalclinic.com">info@bencomodentalclinic.com</a>
          </div>

          <div className="cta-card">
            <MessageCircle style={{ width: '2rem', height: '2rem' }} />
            <h3>WhatsApp</h3>
            <p>Chat instantly</p>
            <a href="https://wa.me/5216566098566">Message Now</a>
          </div>
        </div>

        <div className="cta-action">
          <a href="#contact" className="cta-button">
            Get Free Consultation
            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
          </a>
          <p className="cta-note">
            No obligation • Response within 24 hours • We speak English
          </p>
        </div>
      </div>
    </section>
  );
}
