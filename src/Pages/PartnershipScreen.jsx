import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPartnerData,
  openPartnerSuccessModal,
  closePartnerSuccessModal,
} from "../store/partnersSlice";
import "../CSS/PartnershipScreen.css";
import partnersImg from "../assets/partners.png"; // Make sure you save your hero image here

const PartnershipScreen = () => {
  const dispatch = useDispatch();
  // Read modal state from Redux
  const isModalOpen = useSelector((state) => state.partners.isModalOpen);

  // Initial Form Data
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnerType: "Investor", // Default selection
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Save to Redux (and localStorage due to persist)
    dispatch(setPartnerData(formData));

    // 2. Open the modal
    dispatch(openPartnerSuccessModal());

    // 3. Reset form fields
    setFormData({
      orgName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnerType: "Investor",
      message: "",
    });
  };

  return (
    <div className="partnership-container">
      {/* ------------ HERO SECTION ------------ */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            Let's Build a Stronger
            <br />
            Agricultural Ecosystem
            <br />
            Together
          </h1>
          <p>
            Partner with AgroBridge as a cooperative, agent network, logistics
            provider, payment provider, or investor.
          </p>
          <p>Let's grow this together.</p>
        </div>
        <div className="hero-image-wrapper">
          <img src={partnersImg} alt="AgroBridge Partners" />
        </div>
      </div>

      {/* ------------ FORM SECTION ------------ */}
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="orgName">Organization Name</label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="Organization Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactPerson">Contact Person</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Contact Person"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Partnership Type Pills */}
          <div className="pills-selector-wrapper">
            <label>Partnership Type:</label>
            <div className="pills-container">
              {[
                "Investor",
                "Co-operative",
                "Agent Network",
                "Logistics",
                "Payment Provider",
                "Other",
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, partnerType: type })
                  }
                  className={`pill-btn ${formData.partnerType === type ? "pill-btn-active" : ""}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Partnership Request
          </button>
        </form>
      </div>

      {/* ------------ SUCCESS MODAL ------------ */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="checkmark-circle">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2>Request Sent!</h2>
            <p>Thanks — our team will reach out within a few days.</p>
            <button
              className="modal-close-btn"
              onClick={() => dispatch(closePartnerSuccessModal())}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnershipScreen;
