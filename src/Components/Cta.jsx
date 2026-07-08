const Cta = ({ ctaRef }) => {
  return (
    <section ref={ctaRef} id="cta" className="section-wrapper">
      <div className="section-card cta-card">
        <div className="cta-content-wrapper">
          <h2>Let's build the future of Agriculture together</h2>
          <p>
            Farmers, buyers, or investors — join us as we build a better
            agricultural supply chain for Nigeria.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Partner with Us</button>
            <button className="btn-secondary">Join Waitlist</button>
            <button className="btn-secondary">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
