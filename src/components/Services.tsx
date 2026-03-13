import { Description } from "@radix-ui/react-dialog";


export function Services() {
  const services = [
    {
      name: "Dr Melissa Bencomo",
      description: "General Dentistry & Oral Rehab ",
      image: "https://res.cloudinary.com/duzjv9n6g/image/upload/v1773436029/melissa-bencomo_r8w40e.webp",
      popular: false
    },
    {
      name: "Dr Oscar Chaparro",
      description: "General dentistry",
      image: "https://res.cloudinary.com/duzjv9n6g/image/upload/v1773431529/oscar-chaparro_yrjzup.webp"
    },
    {
      name: "Dr Emmanuel Ferniza ",
      description: "Endodontist",
      image: "https://res.cloudinary.com/duzjv9n6g/image/upload/v1773436029/emmanuel-ferniza_vp5zec.webp"
    },
    {
      name: "Dr Selma Pérez ",
      description: "Pediatric Dentist",
      image: "https://res.cloudinary.com/duzjv9n6g/image/upload/v1773436029/selma-perez_grnmmh.webp"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Team</h2>
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
                
              </div>
              <div className="service-content">
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
