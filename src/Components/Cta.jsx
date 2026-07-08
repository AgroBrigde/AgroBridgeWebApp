import "../CSS/Cta.css";
import ctaImage from "../assets/grASSICON 1.png   ";

const Cta = ({ ctaRef }) => {
  return (
    <section ref={ctaRef} id="cta" className="cta-section-wrapper">
      <div className="cta-section-card cta-card">
        <div>
          <img src={ctaImage} alt="Call to Action" />
        </div>
        <div className="cta-content-wrapper">
          <h2>Let's build the future of Agriculture together</h2>
          <p>
            Farmers, buyers, or investors — join us as we build a better
            agricultural supply chain for Nigeria.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn-primary">Partner with Us</button>
            <button className="cta-btn-secondary">Join Waitlist</button>
            <button className="cta-btn-secondary">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
