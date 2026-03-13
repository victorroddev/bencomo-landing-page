import React, { useState, FormEvent, useEffect, useRef } from "react";
import { X, ShieldCheck, AlertCircle, CheckCircle2, ChevronDown, Camera, FolderOpen, Trash2 } from "lucide-react";

declare global {
  interface Window {
    turnstile: any;
  }
}

interface InsuranceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming"
];

export const InsuranceModal: React.FC<InsuranceModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState("");
  const [frontFile, setFrontFile] = useState<{ file: File; preview: string } | null>(null);
  const [backFile, setBackFile] = useState<{ file: File; preview: string } | null>(null);
  const [token, setToken] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  const isDeltaDental = provider.trim().toLowerCase().includes("delta");

  useEffect(() => {
    if (!isOpen) return;

    let widgetId: any;

    const renderWidget = () => {
      if (turnstileRef.current && window.turnstile) {
        widgetId = window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAACpk46o5TyzJHgcl',
          callback: (t: string) => setToken(t),
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
        setToken("");
      }
    };
  }, [isOpen]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<{ file: File; preview: string } | null>>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setter({ file, preview: URL.createObjectURL(file) });
    e.target.value = "";
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError("Please wait for security verification to complete.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      if (frontFile) formData.set("frontID", frontFile.file);
      if (backFile) formData.set("backID", backFile.file);
      formData.set("cf_turnstile_response", token);

      const response = await fetch("https://mail.api.growy.tech/api/validate-insurance", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Server error");
      setIsSubmitted(true);
    } catch (err) {
      setError("An error occurred while submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div style={styles.overlay} onClick={onClose}>
        <div style={{ ...styles.card, textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
          <div style={styles.successContent}>
            <div style={styles.successIconWrap}>
              <CheckCircle2 size={40} color="#fff" />
            </div>
            <h2 style={styles.successTitle}>Request Submitted</h2>
            <p style={styles.successText}>
              We've received your insurance information. Our team will verify your coverage and{" "}
              <strong>contact you within 24 hours.</strong>
            </p>
            <button onClick={onClose} style={styles.submitBtn}>
              Got it
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.card} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.iconBadge}>
              <ShieldCheck size={18} color="#fff" />
            </div>
            <div>
              <h2 style={styles.title}>Insurance Verification</h2>
              <p style={styles.subtitle}>Complete the form to verify your coverage</p>
            </div>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {error && (
          <div style={styles.errorBadge}>
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <SectionLabel label="Policyholder Information" />

          <div style={styles.row}>
            <Field label="Full Name" required>
              <input name="fullName" type="text" placeholder="John Doe" required style={styles.input} />
            </Field>
            <Field label="Date of Birth" required>
              <input name="dob" type="date" required style={styles.input} />
            </Field>
          </div>

          <Field label="Address" required>
            <input name="address" type="text" placeholder="123 Main St, City, State, ZIP" required style={styles.input} />
          </Field>

          <div style={styles.row}>
            <Field label="Email" required>
              <input name="email" type="email" placeholder="you@email.com" required style={styles.input} />
            </Field>
            <Field label="Phone Number" required>
              <input name="phone" type="tel" placeholder="+1 (555) 000-0000" required style={styles.input} />
            </Field>
          </div>

          <SectionLabel label="Insurance Information" />

          <div style={styles.row}>
            <Field label="Insurance Company" required>
              <input
                name="provider"
                type="text"
                placeholder="e.g. Aetna, BCBS, Delta Dental..."
                required
                style={styles.input}
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
              />
            </Field>
            <Field label="ID / SS Number" required>
              <input name="insuranceId" type="text" placeholder="Member ID or SSN" required style={styles.input} />
            </Field>
          </div>

          <div style={styles.row}>
            <Field label="Employer" required>
              <input name="employer" type="text" placeholder="Employer name" required style={styles.input} />
            </Field>
          </div>

          {isDeltaDental && (
            <div style={styles.deltaAlert}>
              <div style={styles.deltaAlertHeader}>
                <ShieldCheck size={15} color="#1d4ed8" />
                <strong style={{ color: "#1d4ed8", fontSize: 13 }}>Delta Dental detected</strong>
              </div>
              <p style={{ margin: "4px 0 8px", fontSize: 13, color: "#374151" }}>
                Please specify which state your Delta Dental plan belongs to:
              </p>
              <div style={styles.selectWrapper}>
                <select name="deltaState" required style={styles.select}>
                  <option value="">Select a state...</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown size={14} style={styles.selectChevron} />
              </div>
            </div>
          )}

          <SectionLabel label="Insurance Card Photos" />
          <p style={styles.uploadNote}>
            Upload or take a photo of both sides of your insurance card.
          </p>

          <div style={styles.row}>
            <ImageUploadField
              label="Card — Front"
              value={frontFile}
              onSelect={(e) => handleFileChange(e, setFrontFile)}
              onClear={() => setFrontFile(null)}
            />
            <ImageUploadField
              label="Card — Back"
              value={backFile}
              onSelect={(e) => handleFileChange(e, setBackFile)}
              onClear={() => setBackFile(null)}
            />
          </div>

          <div style={styles.privacyNote}>
            <ShieldCheck size={15} color="#3b82f6" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
              <strong style={{ color: "#374151" }}>Privacy Notice:</strong> Your data and documents
              are treated as strictly confidential under medical security standards.
            </p>
          </div>

          <div ref={turnstileRef} style={{ margin: "8px 0" }} />

          <button type="submit" style={getSubmitBtnStyle(loading, !!token)} disabled={loading || !token}>
            {loading ? "Sending..." : "Submit for Verification"}
          </button>
        </form>
      </div>
    </div>
  );
};

const SectionLabel = ({ label }: { label: string }) => (
  <div style={sectionLabelStyle}>
    <span>{label}</span>
  </div>
);

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
    <label style={fieldLabelStyle}>
      {label}
      {required && <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>}
    </label>
    {children}
  </div>
);

const ImageUploadField = ({
  label,
  value,
  onSelect,
  onClear,
}: {
  label: string;
  value: { file: File; preview: string } | null;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}) => {
  const uploadRef = React.useRef<HTMLInputElement>(null);
  const cameraRef = React.useRef<HTMLInputElement>(null);

  return (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }}>
      <label style={fieldLabelStyle}>
        {label}
        <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>
      </label>

      {value ? (
        <div style={imgPreviewStyles.wrapper}>
          <img src={value.preview} alt="preview" style={imgPreviewStyles.img} />
          <div style={imgPreviewStyles.overlay}>
            <span style={imgPreviewStyles.name} title={value.file.name}>
              {value.file.name}
            </span>
            <button type="button" onClick={onClear} style={imgPreviewStyles.clearBtn} title="Remove">
              <Trash2 size={13} />
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div style={imgPreviewStyles.emptyWrapper}>
          <label style={imgPreviewStyles.actionBtn} title="Upload from files">
            <FolderOpen size={15} />
            <span>Upload</span>
            <input
              ref={uploadRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onSelect}
            />
          </label>

          <div style={imgPreviewStyles.divider} />

          <label style={imgPreviewStyles.actionBtn} title="Take a photo">
            <Camera size={15} />
            <span>Camera</span>
            <input
              ref={cameraRef}
              type="file"
              accept="image/*"
              capture="environment"
              style={{ display: "none" }}
              onChange={onSelect}
            />
          </label>
        </div>
      )}
    </div>
  );
};

const getSubmitBtnStyle = (loading: boolean, hasToken: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "11px",
  borderRadius: 10,
  border: "none",
  background: "#0180AC",
  color: "#fff",
  fontWeight: 700,
  fontSize: 14,
  cursor: loading || !hasToken ? "not-allowed" : "pointer",
  marginTop: 4,
  letterSpacing: "0.01em",
  transition: "opacity 0.2s",
  opacity: loading || !hasToken ? 0.6 : 1,
});

const imgPreviewStyles: Record<string, React.CSSProperties> = {
  emptyWrapper: {
    display: "flex",
    borderRadius: 8,
    border: "1.5px dashed #cbd5e1",
    overflow: "hidden",
    background: "#f8fafc",
    height: 44,
  },
  actionBtn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    fontSize: 13,
    fontWeight: 500,
    color: "#475569",
    cursor: "pointer",
    transition: "background 0.15s",
    userSelect: "none",
  },
  divider: { width: 1, background: "#e2e8f0", alignSelf: "stretch" },
  wrapper: {
    borderRadius: 8,
    overflow: "hidden",
    border: "1.5px solid #bfdbfe",
    background: "#f0f9ff",
    position: "relative" as const,
  },
  img: { width: "100%", height: 90, objectFit: "cover" as const, display: "block" },
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 8px",
    background: "#f0f9ff",
    gap: 8,
  },
  name: {
    fontSize: 11,
    color: "#475569",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
    flex: 1,
  },
  clearBtn: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: 11,
    color: "#ef4444",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "2px 4px",
    borderRadius: 4,
    fontWeight: 600,
    flexShrink: 0,
  },
};

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    padding: "16px",
  },
  card: {
    background: "#fff",
    borderRadius: 16,
    width: "100%",
    maxWidth: 560,
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "20px 20px 0",
    marginBottom: 16,
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 12 },
  iconBadge: {
    background: "#0180AC",
    borderRadius: 10,
    width: 38,
    height: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  title: { margin: 0, fontSize: 17, fontWeight: 700, color: "#0f172a", lineHeight: 1.2 },
  subtitle: { margin: "2px 0 0", fontSize: 12, color: "#94a3b8" },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#94a3b8",
    padding: 4,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
  },
  errorBadge: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: 8,
    padding: "8px 12px",
    margin: "0 20px 12px",
    fontSize: 13,
    color: "#dc2626",
  },
  form: { display: "flex", flexDirection: "column", gap: 12, padding: "0 20px 20px" },
  row: { display: "flex", gap: 10, flexWrap: "wrap" as const },
  input: {
    width: "100%",
    padding: "9px 11px",
    borderRadius: 8,
    border: "1.5px solid #e2e8f0",
    fontSize: 13,
    color: "#1e293b",
    outline: "none",
    boxSizing: "border-box" as const,
    background: "#f8fafc",
    transition: "border-color 0.15s",
  },
  deltaAlert: {
    background: "#eff6ff",
    border: "1.5px solid #bfdbfe",
    borderRadius: 10,
    padding: "10px 12px",
  },
  deltaAlertHeader: { display: "flex", alignItems: "center", gap: 6, marginBottom: 2 },
  selectWrapper: { position: "relative" as const },
  select: {
    width: "100%",
    padding: "9px 32px 9px 11px",
    borderRadius: 8,
    border: "1.5px solid #bfdbfe",
    fontSize: 13,
    color: "#1e293b",
    background: "#fff",
    outline: "none",
    appearance: "none" as const,
    WebkitAppearance: "none" as const,
    boxSizing: "border-box" as const,
    cursor: "pointer",
  },
  selectChevron: {
    position: "absolute" as const,
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none" as const,
    color: "#64748b",
  },
  uploadNote: { margin: "-4px 0 0", fontSize: 12, color: "#94a3b8" },
  privacyNote: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    background: "#f0f9ff",
    border: "1px solid #bae6fd",
    borderRadius: 8,
    padding: "9px 11px",
  },
  submitBtn: {
    width: "100%",
    padding: "11px",
    borderRadius: 10,
    border: "none",
    background: "#0180AC",
    color: "#fff",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    marginTop: 4,
    letterSpacing: "0.01em",
  },
  successContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "36px 24px",
  },
  successIconWrap: {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    borderRadius: "50%",
    width: 72,
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  successTitle: { margin: "0 0 8px", fontSize: 20, fontWeight: 700, color: "#0f172a" },
  successText: {
    margin: "0 0 24px",
    fontSize: 14,
    color: "#64748b",
    textAlign: "center" as const,
    lineHeight: 1.6,
    maxWidth: 340,
  },
};

const sectionLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#2563eb",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  borderBottom: "1.5px solid #e2e8f0",
  paddingBottom: 6,
  marginTop: 4,
};

const fieldLabelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: "#475569",
};