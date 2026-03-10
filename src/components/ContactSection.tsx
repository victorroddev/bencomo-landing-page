import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-section-header">
          <h2>Contact Us</h2>
          <p className="contact-section-description">
            We are ready to help you get the smile you have always wanted
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <ContactForm />
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-info-list">
              <div className="contact-info-card">
                <div className="contact-info-icon blue">
                  <Phone style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>Call us Monday to Friday</p>
                  <a href="tel:+9159203235">+1 (915) 920-3235</a>
                  <br />
                  <a href="tel:+526566098566">+52 (656)-609-8566</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon green">
                  <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <div className="contact-info-content">
                  <h4>WhatsApp</h4>
                  <p>Immediate response 24/7</p>
                  <a href="https://wa.me/526566098566">Send message</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon purple">
                  <Mail style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>Response in 24 hours</p>
                  <a href="mailto:info@smilemexico.com">info@bencomodentalclinic.com</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon orange">
                  <MapPin style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <div className="contact-info-content">
                  <h4>Location</h4>
                  <p>
                    Epsilon 1823<br />
                    Magnaplex, 32419<br />
                    Juárez, Chih. México
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon red">
                  <Clock style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <div className="contact-info-content">
                  <h4>Hours</h4>
                  <p>
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-help-card">
              <h4>Need immediate help?</h4>
              <p>
                Our team is available to answer your questions about treatments, 
                prices, and coordinate your trip to Mexico.
              </p>
              <div className="contact-help-buttons">
                <a href="tel:+9159203235" className="contact-help-button blue">
                  <Phone style={{ width: '1rem', height: '1rem' }} />
                  Call Now
                </a>
                <a href="https://wa.me/+16566098566" className="contact-help-button green">
                  <MessageCircle style={{ width: '1rem', height: '1rem' }} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
