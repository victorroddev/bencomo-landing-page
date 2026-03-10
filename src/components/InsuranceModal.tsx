import React, { useState, FormEvent } from "react";
import { X, ShieldCheck, AlertCircle, Upload, CheckCircle2 } from "lucide-react";

interface InsuranceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InsuranceModal: React.FC<InsuranceModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // State for success screen
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Simulation of sending to Flask
    try {
      console.log("Sending to Flask...", Object.fromEntries(formData));
      
      // Your fetch will go here:
      // await fetch('http://localhost:5000/validate', { method: 'POST', body: formData });

      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
      setIsSubmitted(true); // Switch to the success screen
    } catch (err) {
      setError("An error occurred while submitting the data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // --- SUCCESS SCREEN RENDER ---
  if (isSubmitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-card text-center" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center py-8">
            <CheckCircle2 size={64} className="text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Data Submitted Successfully!</h2>
            <p className="mt-4 text-gray-600 px-4">
              We have received your information correctly. Our team will review your coverage and 
              <strong> you will receive a response to your email within the next 24 hours.</strong>
            </p>
            <button 
              onClick={onClose} 
              className="mt-8 btn-submit w-full max-w-xs"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- FORM RENDER ---
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-icon" onClick={onClose}><X size={20} /></button>

        <div className="modal-header">
          <ShieldCheck className="text-blue-600" size={32} />
          <h2 className="text-xl font-bold">Insurance Validation</h2>
          <p className="text-sm text-gray-500">Complete the form to verify your coverage in Mexico.</p>
        </div>

        {error && (
          <div className="error-badge">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Full Name</label>
            <input name="fullName" type="text" placeholder="e.g. John Doe" required />
          </div>

          <div className="grid-inputs">
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="you@email.com" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" type="tel" placeholder="+1..." required />
            </div>
          </div>

          <div className="form-group">
            <label>Insurance Provider</label>
            <input name="provider" type="text" placeholder="e.g. Aetna, Delta Dental..." required />
          </div>

          <div className="grid-inputs">
            <div className="form-group">
              <label>Insurance ID (Front)</label>
              <div className="file-input-wrapper">
                <Upload size={14} />
                <input name="frontID" type="file" accept="image/*" required />
              </div>
            </div>
            <div className="form-group">
              <label>Insurance ID (Back)</label>
              <div className="file-input-wrapper">
                <Upload size={14} />
                <input name="backID" type="file" accept="image/*" required />
              </div>
            </div>
          </div>

          <div className="confidential-warning">
            <ShieldCheck size={20} className="text-blue-500 shrink-0" />
            <p>
              <strong>Privacy Notice:</strong> Your data and documents will be treated as strictly confidential under medical security standards.
            </p>
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Processing..." : "Send for Validation"}
          </button>
        </form>
      </div>
    </div>
  );
};