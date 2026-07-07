import React, { useRef } from "react";
import "../CSS/Landing.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import heroImage from "../assets/famers.png"; // Replace with your image
import farmerImage from "../assets/famers.png"; // Replace with your image
import buyerImage from "../assets/famers.png"; // Replace with your image
import partnerImage from "../assets/famers.png"; // Replace with your image
import { useOutletContext } from "react-router-dom";

const Landing = () => {
  const { refs } = useOutletContext();

  const {
    heroRef,
    gapRef,
    solutionsRef,
    howItWorksRef,
    partnersRef,
    tractionRef,
    ctaRef,
  } = refs;

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Connecting Farmers to Markets Using Technology</h1>
              <p className="hero-description">
                AgroBridge is a tech-driven platform that connects farmers to
                reliable buyers – with a full app experience, or simple USSD
                access for those without a smartphone.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Partner with Us</button>
                <button className="btn-secondary">Join Waitlist</button>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="AgroBridge Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* The Gap We Are Closing */}
      <section ref={gapRef} id="the-gap" className="gap-section">
        <div className="container">
          <h2 className="section-title">The Gap We Are Closing</h2>
          <p className="section-description">
            Nigerian smallholder farmers lose income to middlemen, unreliable
            pricing, and produce that spoils before reaching a buyer. Buyers
            struggle to find trustworthy suppliers and consistent pricing. Most
            existing agritech platforms are too infrastructure for rural and
            low-literacy users to actually use.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">10/12</span>
              <p>Farmers rely on middlemen to sell</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">9/12</span>
              <p>Lack access to reliable price information</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">8/12</span>
              <p>Experience post-harvest losses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} id="solutions" className="solutions-section">
        <div className="container">
          <h2 className="section-title">One Platform, Every Farmer</h2>
          <p className="section-description">
            AgroBridge connects farmers directly to buyers – built to work
            everywhere, not just where there is good internet.
          </p>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">📱</div>
              <h3>USSD & SMS</h3>
              <p>List produce and check prices on any basic phone.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">📊</div>
              <h3>Price Guidance</h3>
              <p>Trend-based data shows the best time to sell.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🔒</div>
              <h3>Secure Payments</h3>
              <p>Farmers get paid only after delivery is confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={howItWorksRef}
        id="how-it-works"
        className="how-it-works-section"
      >
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">Simple steps. Powerful impact.</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Sign up / Onboard</h3>
              <p>Farmers and buyers create an account in minutes.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>List & Discover</h3>
              <p>Farmers list produce. Buyers discover quality produce.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Negotiate & Connect</h3>
              <p>Buyers & farmers connect and agree on terms.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Complete & Deliver</h3>
              <p>Orders are confirmed and produce is delivered.</p>
            </div>
            <div className="step-card">
              <div className="step-number">5</div>
              <h3>Secure Payments</h3>
              <p>Payments are released securely after confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} id="partners" className="partners-section">
        <div className="container">
          <h2 className="section-title">Who It's For</h2>
          <p className="section-description">
            Built for everyone in the Agri-ecosystem
          </p>
          <div className="partners-grid">
            <div className="partner-card">
              <img src={farmerImage} alt="Farmers" className="partner-image" />
              <h3>Farmers</h3>
              <p>
                Get better market prices, access to unlimited market, and
                insights to grow income sustainably.
              </p>
            </div>
            <div className="partner-card">
              <img src={buyerImage} alt="Buyers" className="partner-image" />
              <h3>Buyers</h3>
              <p>
                Source quality produce efficiently from reliable, verified and
                trusted farmers.
              </p>
            </div>
            <div className="partner-card">
              <img
                src={partnerImage}
                alt="Partners"
                className="partner-image"
              />
              <h3>Partners</h3>
              <p>
                Integrate, collaborate, and scale impact across the agricultural
                value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section ref={tractionRef} id="traction" className="traction-section">
        <div className="container">
          <h2 className="section-title">Traction</h2>
          <div className="traction-grid">
            <div className="traction-card">
              <h3>Live API</h3>
              <p>
                Our backend infrastructure is live and functional, powering
                real-time listings, pricing, and transactions between farmers
                and buyers.
              </p>
            </div>
            <div className="traction-card">
              <h3>Working ML Model</h3>
              <p>
                Our machine learning model analyzes market data to generate
                price trend guidance, helping farmers know the best time to
                sell.
              </p>
            </div>
            <div className="traction-card">
              <h3>USSD Demo Available</h3>
              <p>
                A working USSD demo lets farmers without smartphones list
                produce and check prices using any basic phone, ready to show
                live.
              </p>
            </div>
          </div>
          <div className="traction-tags">
            <span className="traction-tag">Live API</span>
            <span className="traction-tag">USSD Demo Available</span>
            <span className="traction-tag">
              Working Machine Learning (ML) Model
            </span>
          </div>
          <div className="traction-extra">
            <p>
              Validated through direct research with 12 farmers and 5 buyers
              across Nigeria's agricultural value chain.
            </p>
            <p>Design system and product requirements complete.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="cta" className="cta-section">
        <div className="container">
          <h2 className="section-title">
            Let's build the future of Agriculture together
          </h2>
          <p className="section-description">
            Farmers, buyers, or investors – join us as we build a better
            agricultural supply chain for Nigeria.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Partner with Us</button>
            <button className="btn-secondary">Join Waitlist</button>
            <button className="btn-tertiary">Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
