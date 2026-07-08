import React from "react";

const Works = ({ howItWorksRef }) => {
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
    <section ref={howItWorksRef} id="how-it-works" className="section-wrapper">
      <div className="section-card">
        <h2 className="section-header-lined">How It Works</h2>
        <p className="section-description">Simple steps. Powerful impact.</p>

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
  );
};

export default Works;
