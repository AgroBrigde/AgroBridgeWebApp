import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  openSuccessModal,
  closeSuccessModal,
} from "../store/userslice";
import "../CSS/WaitlistScreen.css";
import peopleImg from "../assets/people.png";

const WaitlistScreen = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.user.isModalOpen);
  // ADDED: Get the saved user data from Redux to verify later
  const savedUserData = useSelector((state) => state.user.userData);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    role: "Farmer",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ADDED: See exactly what data is being sent in your browser's Console (F12)
    console.log("🚀 Submitted Form Data:", formData);

    // 1. Save the user data to Redux (including the role!)
    dispatch(setUserData(formData));

    // 2. Open the success popup
    dispatch(openSuccessModal());

    // Optional: Reset form fields
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      role: "Farmer",
      location: "",
    });
  };

  // Optional: Log what Redux currently holds (checks persistence)
  console.log("💾 Data currently stored in Redux:", savedUserData);

  return (
    <div className="waitlist-container">
      {/* ... (Your existing Hero and Form sections are unchanged and correct) ... */}

      {/* ---------------- HERO SECTION ---------------- */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Be the First to Trade on</h1>
          <h2>AgroBridge</h2>
          <p>
            Join the waitlist and we will notify you when AgroBridge launches in
            your area.
          </p>
          <p>Early access. No commitment.</p>
        </div>
        <div className="hero-image-wrapper">
          <img src={peopleImg} alt="Farmers using AgroBridge app" />
        </div>
      </div>

      {/* ---------------- FORM SECTION ---------------- */}
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>

          <div className="role-selector-wrapper">
            <label>I am a:</label>
            <div className="role-pills-container">
              {["Farmer", "Buyer", "Agent"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData({ ...formData, role })}
                  className={`role-btn ${formData.role === role ? "role-btn-active" : ""}`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location (State)</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location (State)"
            />
          </div>

          <button type="submit" className="submit-btn">
            Join Waitlist
          </button>
        </form>
      </div>

      {/* ---------------- SUCCESS MODAL POPUP ---------------- */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="checkmark-circle">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2>You are on the list! 🎉</h2>
            <p>We will reach out soon.</p>
            <button
              className="modal-close-btn"
              onClick={() => dispatch(closeSuccessModal())}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistScreen;
