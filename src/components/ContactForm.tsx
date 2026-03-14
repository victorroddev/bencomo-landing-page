import { useState, useRef, useEffect } from "react";
import { Check, Loader2 } from "lucide-react";

declare global {
  interface Window {
    turnstile: any;
    gtag: (...args: any[]) => void; // Agregado para evitar errores de TS
  }
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [token, setToken] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderWidget = () => {
      if (turnstileRef.current && window.turnstile) {
        const widgetId = window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAACpk46o5TyzJHgcl',
          callback: (t: string) => setToken(t),
        });
        return widgetId;
      }
    };

    if (window.turnstile) {
      const widgetId = renderWidget();
      return () => { if (widgetId) window.turnstile?.remove(widgetId); };
    }

    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval);
        renderWidget();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      alert("Security check has not completed. Please wait a moment and try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://mail.api.growy.tech/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\n\n${formData.message}`,
          cf_turnstile_response: token,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("API Error Response:", errorBody);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      // --- INTEGRACIÓN GOOGLE ADS ---
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-18006566966/qn5RCImrmogcELbQmYpD',
          'value': 1.0,
          'currency': 'MXN'
        });
      }
      // ------------------------------

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setIsSubmitted(false);
        if (turnstileRef.current) {
          try {
            window.turnstile?.reset(turnstileRef.current);
          } catch (error) {
            console.error("Failed to reset Turnstile widget:", error);
          }
        }
      }, 3000);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <Check style={{ width: '2rem', height: '2rem', color: '#16a34a' }} />
        </div>
        <h3>Message Sent!</h3>
        <p>
          Thank you for contacting us. We will get back to you within the next 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-header">
        <h3>Request Your Free Consultation</h3>
        <p>
          Fill out the form and we will contact you to provide more information about our services and prices.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name <span className="form-required">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone <span className="form-required">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span className="form-required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Reason for Contact / Message <span className="form-required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about the treatment you are interested in or any questions you may have..."
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          />
          <p className="form-hint">
            Example: "I'm interested in dental implants" or "I need information about veneers"
          </p>
        </div>

        <div className="form-info-box">
          <p><strong>📋 By submitting this form:</strong></p>
          <ul>
            <li>✓ You will receive a response in less than 24 hours</li>
            <li>✓ We will send you a personalized treatment plan</li>
            <li>✓ No commitment and completely free</li>
          </ul>
        </div>

        <div ref={turnstileRef} />

        <button
          type="submit"
          className="form-submit"
          disabled={isSubmitting || !token}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" style={{ width: '1rem', height: '1rem' }} />
              Sending...
            </>
          ) : (
            "Send Free Consultation"
          )}
        </button>

        <p className="form-privacy">
          Your data is protected. We do not share personal information with third parties.
        </p>
      </form>
    </div>
  );
}