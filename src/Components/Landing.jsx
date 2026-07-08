import React from "react";
import "../CSS/Landing.css";
import heroImage from "../assets/famers.png";
import platformImage from "../assets/famers.png";
import { useOutletContext } from "react-router-dom";
import { MdCheckCircle, MdStorefront, MdHandshake } from "react-icons/md";
import { FaTractor } from "react-icons/fa";

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

  const steps = [
    {
      num: 1,
      title: "Sign up / Onboard",
      desc: "Farmers and buyers create an account in minutes.",
    },
    {
      num: 2,
      title: "List & Discover",
      desc: "Farmers list produce. Buyers discover quality produce.",
    },
    {
      num: 3,
      title: "Negotiate & Connect",
      desc: "Buyers & farmers connect and agree on terms.",
    },
    {
      num: 4,
      title: "Complete & Deliver",
      desc: "Orders are confirmed and produce is delivered.",
    },
    {
      num: 5,
      title: "Secure Payments",
      desc: "Payments are released securely after confirmation.",
    },
  ];

  return (
    <div className="landing-page">
      <div className="container">
        {/* ========== HERO SECTION ========== */}

        {/* ========== THE GAP SECTION ========== */}
        <section ref={gapRef} id="the-gap" className="section-wrapper">
          <div className="section-card">
            <h2 className="section-header-lined">The Gap We Are Closing</h2>
            <p className="section-description">
              Nigerian smallholder farmers lose income to middlemen, unreliable
              pricing, and produce that spoils before reaching a buyer. Buyers
              struggle to find trustworthy suppliers and consistent pricing.
              Most existing agritech platforms are too infrastructure for rural
              and low-literacy users to actually use.
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">10/12</span>
                <p>Farmers rely on middlemen to sell</p>
              </div>
              <div className="stat-item divider">
                <span className="stat-number">9/12</span>
                <p>Lack access to reliable price information</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">8/12</span>
                <p>Experience post-harvest losses</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SOLUTIONS (ONE PLATFORM) ========== */}
        <section ref={solutionsRef} id="solutions" className="section-wrapper">
          <div className="section-card">
            <div className="solutions-header mb-large">
              <MdCheckCircle className="title-icon" />
              <h2 className="section-title mb-0">One Platform, Every Farmer</h2>
            </div>

            <p className="section-description text-left">
              AgroBridge connects farmers directly to buyers — built to work
              everywhere, not just where there is good internet.
            </p>

            <div className="solutions-layout">
              <div className="solutions-list">
                <div className="solution-list-item">
                  <MdCheckCircle className="list-icon" />
                  <p>
                    <strong>Web & Mobile —</strong> listings, Profile, Orders,
                    Secure Payments.
                  </p>
                </div>
                <div className="solution-list-item">
                  <MdCheckCircle className="list-icon" />
                  <p>
                    <strong>USSD & SMS —</strong> list produce and check prices
                    on any basic phone.
                  </p>
                </div>
                <div className="solution-list-item">
                  <MdCheckCircle className="list-icon" />
                  <p>
                    <strong>Price Guidance —</strong> trend-based data shows the
                    best time to sell.
                  </p>
                </div>
                <div className="solution-list-item">
                  <MdCheckCircle className="list-icon" />
                  <p>
                    <strong>Secure Payments —</strong> farmers get paid only
                    after delivery is confirmed.
                  </p>
                </div>
              </div>
              <div className="solutions-visual">
                <img src={platformImage} alt="Platform in use" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== HOW IT WORKS ========== */}
        <section
          ref={howItWorksRef}
          id="how-it-works"
          className="section-wrapper"
        >
          <div className="section-card">
            <h2 className="section-header-lined">How It Works</h2>
            <p className="section-description">
              Simple steps. Powerful impact.
            </p>

            <div className="stepper-flex-container">
              {steps.map((step, index) => (
                <React.Fragment key={step.num}>
                  <div className="step-item">
                    <div className="step-circle">{step.num}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                  {/* Dynamic arrows between steps - exactly like the Figma prototype */}
                  {index < steps.length - 1 && (
                    <div className="step-connector">
                      <div className="connector-line"></div>
                      <div className="connector-arrow"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WHO IT'S FOR (PARTNERS) ========== */}
        <section ref={partnersRef} id="partners" className="section-wrapper">
          <div className="section-card">
            <h2 className="section-header-lined">Who It's For</h2>
            <p className="section-description">
              Built for everyone in the Agri-ecosystem
            </p>

            <div className="partners-layout">
              <div className="partner-card">
                <div className="partner-icon-wrapper">
                  <FaTractor />
                </div>
                <h3 className="step-title">Farmers</h3>
                <p>
                  Get better market prices, access to unlimited market, and
                  insights to grow income sustainably.
                </p>
              </div>
              <div className="partner-card">
                <div className="partner-icon-wrapper">
                  <MdStorefront />
                </div>
                <h3 className="step-title">Buyers</h3>
                <p>
                  Source quality produce efficiently from reliable, verified and
                  trusted farmers.
                </p>
              </div>
              <div className="partner-card">
                <div className="partner-icon-wrapper">
                  <MdHandshake />
                </div>
                <h3 className="step-title">Partners</h3>
                <p>
                  Integrate, collaborate, and scale impact across the
                  agricultural value chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== TRACTION ========== */}
        <section ref={tractionRef} id="traction" className="section-wrapper">
          <div className="section-card">
            <h2 className="section-title mb-large">Traction</h2>

            <ul className="traction-list">
              <li>
                <strong>Live API —</strong> Our backend infrastructure is live
                and functional, powering real-time listings, pricing, and
                transactions between farmers and buyers.
              </li>
              <li>
                <strong>Working ML Model —</strong> Our machine learning model
                analyzes market data to generate price trend guidance, helping
                farmers know the best time to sell.
              </li>
              <li>
                <strong>USSD Demo Available —</strong> A working USSD demo lets
                farmers without smartphones list produce and check prices using
                any basic phone, ready to show live.
              </li>
              <li>
                Validated through direct research with 12 farmers and 5 buyers
                across Nigeria's agricultural value chain.
              </li>
              <li>Design system and product requirements complete.</li>
            </ul>

            <div className="traction-images">
              <div className="traction-placeholder-text">Live API</div>
              <div className="traction-placeholder-text">
                USSD Demo Available
              </div>
              <div className="traction-placeholder-text">
                Working Machine Learning (ML) Model
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
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
      </div>
    </div>
  );
};

export default Landing;
