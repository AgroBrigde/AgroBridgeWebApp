import React from 'react'

const HeroPage = () => {
  return (
    <div>

         <section ref={heroRef} id="hero" className="section-wrapper">
          <div className="section-card hero-card">
            <div className="hero-content">
              <h1>
                Connecting Farmers to Markets Using{" "}
                <span className="highlight">Technology</span>
              </h1>
              <p className="hero-description">
                AgroBridge is a tech-driven platform that connects farmers to
                reliable buyers — with a full app experience, or simple USSD
                access for those without a smartphone.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Partner with Us</button>
                <button className="btn-secondary">Join Waitlist</button>
              </div>
            </div>
            <div className="hero-visual">
              {/* The gradient background in Figma is likely this unloaded image. Kept untouched! */}
              <img src={heroImage} alt="AgroBridge Farmers" />
            </div>
          </div>
        </section>

    </div>
  )
}

export default HeroPage