import './FloatingButtons.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/19159203235"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:+19159203235"
        className="phone-button"
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default FloatingButtons;
