import React, { useState, FormEvent } from "react";
import { X, ShieldCheck, AlertCircle, Upload, CheckCircle2, Mail, Phone } from "lucide-react";

interface InsuranceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InsuranceModal: React.FC<InsuranceModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Estado para la pantalla de éxito
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Simulación de envío a Flask
    try {
      console.log("Enviando a Flask...", Object.fromEntries(formData));
      
      // Aquí irá tu fetch:
      // await fetch('http://localhost:5000/validate', { method: 'POST', body: formData });

      await new Promise(resolve => setTimeout(resolve, 2000)); // Simular delay de red
      setIsSubmitted(true); // Cambiamos a la pantalla de éxito
    } catch (err) {
      setError("Ocurrió un error al enviar los datos. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  // --- RENDERIZADO DE PANTALLA DE ÉXITO ---
  if (isSubmitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-card text-center" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center py-8">
            <CheckCircle2 size={64} className="text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">¡Datos enviados con éxito!</h2>
            <p className="mt-4 text-gray-600 px-4">
              Hemos recibido tu información correctamente. Nuestro equipo revisará tu cobertura y 
              <strong> recibirás una respuesta en tu email en las próximas 24 horas.</strong>
            </p>
            <button 
              onClick={onClose} 
              className="mt-8 btn-submit w-full max-w-xs"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDERIZADO DEL FORMULARIO ---
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-icon" onClick={onClose}><X size={20} /></button>

        <div className="modal-header">
          <ShieldCheck className="text-blue-600" size={32} />
          <h2 className="text-xl font-bold">Validación de Aseguranza</h2>
          <p className="text-sm text-gray-500">Completa el formulario para verificar tu cobertura en México.</p>
        </div>

        {error && (
          <div className="error-badge">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Nombre Completo</label>
            <input name="fullName" type="text" placeholder="Ej. Juan Pérez" required />
          </div>

          <div className="grid-inputs">
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input name="phone" type="tel" placeholder="+52..." required />
            </div>
          </div>

          <div className="form-group">
            <label>Proveedor de Aseguranza</label>
            <input name="provider" type="text" placeholder="Ej. Aetna, Delta Dental..." required />
          </div>

          <div className="grid-inputs">
            <div className="form-group">
              <label>ID Aseguranza (Frente)</label>
              <div className="file-input-wrapper">
                <Upload size={14} />
                <input name="frontID" type="file" accept="image/*" required />
              </div>
            </div>
            <div className="form-group">
              <label>ID Aseguranza (Vuelta)</label>
              <div className="file-input-wrapper">
                <Upload size={14} />
                <input name="backID" type="file" accept="image/*" required />
              </div>
            </div>
          </div>

          <div className="confidential-warning">
            <ShieldCheck size={20} className="text-blue-500 shrink-0" />
            <p>
              <strong>Aviso de privacidad:</strong> Tus datos y documentos serán tratados de forma estrictamente confidencial bajo estándares de seguridad médica.
            </p>
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Procesando envío..." : "Enviar para Validación"}
          </button>
        </form>
      </div>
    </div>
  );
};