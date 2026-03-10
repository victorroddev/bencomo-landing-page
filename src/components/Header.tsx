import { Phone } from "lucide-react";
import logoPng from '../assets/img/bencomo-logo.png'


export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <a href="/" className="logo-link" title="home">
              <img 
              src={logoPng} 
              alt="Bencomo Dental Clinic Logo" 
              className= "main-logo"
              />
              
            </a>
          </div>
          <nav className="header-nav">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:+1234567890" className="header-contact">
              <Phone style={{ width: '1rem', height: '1rem' }} />
              <span>+1 (915) 920-3235</span>
            </a>
            <button className="btn btn-primary">Book Consultation</button>
          </div>
        </div>
      </div>
    </header>
  );
}
