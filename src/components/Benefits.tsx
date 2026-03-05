import { DollarSign, Award, Plane, Shield } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Save 50-70% on dental procedures compared to US prices without compromising quality. Implants, veneers, and crowns at affordable rates.",
      color: "green"
    },
    {
      icon: Award,
      title: "Certified Dentists",
      description: "Our dental team is trained and certified, with years of experience and ongoing education in the latest techniques.",
      color: "blue"
    },
    {
      icon: Plane,
      title: "Strategic Location",
      description: "Visit us easily with our prime border location. Enjoy a seamless trip from the US and receive world-class care just minutes away from the crossing.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We use the same high-quality materials and equipment as top US clinics. All procedures come with comprehensive warranties.",
      color: "orange"
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-header">
          <h2>Why Choose Dental Care in Mexico?</h2>
          <p className="benefits-description">
            Thousands of Americans trust us for affordable, high-quality dental care
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className={`benefit-icon ${benefit.color}`}>
                  <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
