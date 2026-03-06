import { Star, Quote } from "lucide-react";
import lenny from '../assets/img/lenny.png'
import linda from '../assets/img/linda.png'
import becky from '../assets/img/becky.png'
import jennifer from '../assets/img/jennifer.png'
import david from '../assets/img/david.png'
import greg from '../assets/img/greg.png'


export function Testimonials() {
  const testimonials = [
    {
      name: "Lenny Diaz",
      rating: 5,
      text: "The best dental experience I've had in years. Everyone from the driver that picked us up from the bridge, to Doctor Bencomo made us feel very welcome. I truly recommend Bencomo Dental clinic..",
      image: lenny
    },
    {
      name: "Linda Malaise",
      location: "Phoenix, Arizona",
      rating: 5,
      text: "Awesome experience! Everyone was so nice. David was so helpful planning everything. The Dentist are amazing. Every step was explained perfectly. No pain at all. I'm extremely happy I chose Bencomo for my dental work. I will never go anywhere else. Thank you Bencomo!",
      image: linda
    },
    {
      name: "Becky Perez",
      location: "Los Angeles, California",
      treatment: "Porcelain Veneers",
      rating: 5,
      text: "Dr. Melissa Bencomo and Dr. Oscar Chaparro and all the entire staff to include David and Hector are all knowledgeable, reliable, sincere and trustworthy! We highly recommend Bencomo Dentistry in Juarez! The office is well cleaned and very comfortable! Looking forward to continued assistance.",
      image: becky
    },
    {
      name: "Jennifer Fielder",
      location: "Seattle, Washington",
      treatment: "All-on-4 Implants",
      rating: 5,
      text: "Great service. So patient with me in explanations in treatment plans for best outcomes instead of simply agreeing to surgery which might not be necessary.",
      image: jennifer
    },
    {
      name: "Greg Ramos",
      location: "Houston, Texas",
      treatment: "Dental Crowns",
      rating: 5,
      text: "Fast and friendly service the shuttle service is awesome as well. Will definitely return back",
      image: greg
    },
    {
      name: "David Hamilton",
      location: "San Diego, California",
      treatment: "Root Canal & Crown",
      rating: 5,
      text: "Great experience, Great people. For something this major I would recommend anyone needing dental, go here. Everyone else told me I needed dental implants on the top and bottom they fixed my teeth. Kudos thanks for a great experience. And thank you Dave for coordinating everything.",
      image: david
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Patients Say</h2>
          <p className="testimonials-description">
            Join hundreds of satisfied patients from across the United States
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card video-card">
            <video className="video" controls>
              <source src="/testimony-video-en.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="testimonial-quote-icon" />
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} style={{ width: '1rem', height: '1rem', fill: '#facc15', color: '#facc15' }} />
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <div className="testimonial-author-name">{testimonial.name}</div>
                  <div className="testimonial-author-location">{testimonial.location}</div>
                  <div className="testimonial-author-treatment">{testimonial.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
