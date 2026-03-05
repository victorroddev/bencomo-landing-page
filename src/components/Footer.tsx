import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logoFooter from '../assets/img/logo-white.webp'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <div className="footer-logo-container">
                  <img 
                    src={logoFooter} 
                    alt="Bencomo Dental Clinic Logo" 
                    className="footer-logo"
                    />
                </div>
              </div>
              <p className="footer-description">
                World-class dental care at affordable prices.
              </p>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Dental Implants</a></li>
                <li><a href="#services">Veneers</a></li>
                <li><a href="#services">Crowns & Bridges</a></li>
                <li><a href="#services">Root Canal</a></li>
                <li><a href="#services">Teeth Whitening</a></li>
              </ul>
            </div>


            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="footer-contact-item">
                <Phone style={{ width: '1rem', height: '1rem' }} />
                <span>+1 (888) 123-4567</span>
              </div>
              <div className="footer-contact-item">
                <Mail style={{ width: '1rem', height: '1rem' }} />
                <span>info@bencomodentalclinic.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin style={{ width: '1rem', height: '1rem' }} />
                <span>Juárez, México</span>
              </div>
              <div className="footer-social">
                <a href="#facebook" className="footer-social-link">
                  <Facebook style={{ width: '1rem', height: '1rem' }} />
                </a>
                <a href="#instagram" className="footer-social-link">
                  <Instagram style={{ width: '1rem', height: '1rem' }} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Bencomo Dental Clinic. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
