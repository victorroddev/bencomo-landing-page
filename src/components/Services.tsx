export function Services() {
  const services = [
    {
      name: "Dental Implants",
      description: "Permanent solution for missing teeth with titanium implants and ceramic crowns",
      usPrice: "$3,500 - $6,000",
      mexicoPrice: "$1,900",
      savings: "70%",
      image: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcyNzE4OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true
    },
    {
      name: "Porcelain Veneers",
      description: "Transform your smile with custom-made porcelain veneers for a perfect Hollywood smile",
      usPrice: "$1,000 - $2,500",
      mexicoPrice: "$350 - $700",
      savings: "65%",
      image: "https://images.unsplash.com/photo-1655807946138-811bb2340d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBzbWlsZSUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc3MjcyNjcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Full Mouth Reconstruction",
      description: "Complete dental restoration using implants, crowns, and bridges",
      usPrice: "$30,000 - $60,000",
      mexicoPrice: "$8,000 - $15,000",
      savings: "70%",
      image: "https://images.unsplash.com/photo-1758205307804-097f5437189f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwcm9mZXNzaW9uYWwlMjBjYXJlfGVufDF8fHx8MTc3MjcyNjcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Root Canal Treatment",
      description: "Pain-free root canal therapy with modern techniques and sedation options",
      usPrice: "$800 - $1,500",
      mexicoPrice: "$200 - $400",
      savings: "70%",
      image: "https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzcyNjM3MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Dental Crowns & Bridges",
      description: "High-quality ceramic crowns and bridges for natural-looking restorations",
      usPrice: "$1,000 - $3,000",
      mexicoPrice: "$300 - $800",
      savings: "65%",
      image: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI2MzIzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter, more confident smile",
      usPrice: "$500 - $1,000",
      mexicoPrice: "$150 - $300",
      savings: "65%",
      image: "https://images.unsplash.com/photo-1655807946138-811bb2340d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBzbWlsZSUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc3MjcyNjcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services & Pricing</h2>
          <p className="services-description">
            Compare our affordable prices to typical US costs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="service-image"
                />
                {service.popular && (
                  <div className="service-badge-popular">
                    Most Popular
                  </div>
                )}
                <div className="service-badge-savings">
                  Save {service.savings}
                </div>
              </div>
              <div className="service-content">
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-pricing">
                  <div className="service-price-row">
                    <span className="service-price-label">US Price:</span>
                    <span className="service-price-us">{service.usPrice}</span>
                  </div>
                  <div className="service-price-row">
                    <span className="service-price-label-bold">Our Price:</span>
                    <span className="service-price-mexico">{service.mexicoPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
