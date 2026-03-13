import { Check, ArrowRight } from "lucide-react";
import heroImg from '../assets/img/hero-img.webp'
import { InsuranceModal } from "./InsuranceModal.tsx";
import { useState } from "react";

export function Hero() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              Save up to 70% on dental procedures
            </div>
            <h1>
              World-Class Dental Care in <span className="highlight">Mexico</span>
            </h1>
            <p className="hero-description">
              Experience premium dental treatments at a fraction of US costs. Our certified dentists combine quality care with affordable pricing.
            </p>
            
            <div className="hero-benefits">
              {[
                "Trained and certified dentists",
                "State-of-the-art equipment and facilities",
                "Save 50-70% compared to US prices",
                "Shuttle Service"
              ].map((benefit, index) => (
                <div key={index} className="hero-benefit">
                  <div className="hero-benefit-icon">
                    <Check style={{ width: '1rem', height: '1rem', color: '#16a34a' }} />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a href='#contact' className="btn btn-primary btn-lg">
                Get Free Consultation
                <ArrowRight style={{ width: '1rem', height: '1rem' }} />
              </a>
              <button 
              className="btn btn-outline btn-lg"
              onClick={toggleModal}
              >
                Validate Your Insurance
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">5+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div>
                <div className="hero-stat-value">500+</div>
                <div className="hero-stat-label">Happy Patients</div>
              </div>
              <div>
                <div className="hero-stat-value">4.9★</div>
                <div className="hero-stat-label">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <img 
              src={heroImg}
              alt="Image of Bencomo Dental Clinic interior"
              className="hero-image"
            />
            <div className="hero-badge-floating">
              <div className="hero-badge-floating-content">
                <div className="hero-badge-icon">
                  <Check style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
                </div>
                <div>
                  <div className="hero-badge-text-small">Certified by</div>
                  <div className="hero-badge-text-large">Some Certification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InsuranceModal
        isOpen={showModal}
        onClose={toggleModal}
      />
      </div>
    </section>
  );
}
