import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  openSuccessModal,
  closeSuccessModal,
} from "../store/userslice";
import { joinWaitlist } from "../api/waitlistService";
import "../CSS/WaitlistScreens.css";
import peopleImg from "../assets/people.png";

const ROLES = [
  { label: "Farmer", value: "FARMER" },
  { label: "Buyer", value: "BUYER" },
  { label: "Agent", value: "AGENT" },
];

const INITIAL_FORM_DATA = {
  fullName: "",
  phoneNumber: "",
  email: "",
  role: "Farmer",
  location: "",
};

const WaitlistScreen = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.user.isModalOpen);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [waitlistResult, setWaitlistResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const result = await joinWaitlist(formData);

      setWaitlistResult(result?.data ?? null);
      dispatch(setUserData(formData));
      dispatch(openSuccessModal());
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setErrorMessage(
        error.message ||
          "We couldn't complete your waitlist request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    dispatch(closeSuccessModal());
    setWaitlistResult(null);
  };

  return (
    <div className="waitlist-page waitlist-container">
      <section className="waitlist-hero" aria-labelledby="waitlist-heading">
        <div className="waitlist-hero-copy">
          <span className="waitlist-eyebrow">EARLY ACCESS</span>
          <h1 id="waitlist-heading">
            Be the First to Trade on <span>AgroBridge</span>
          </h1>
          <p>
            Join the waitlist and we&apos;ll notify you when AgroBridge launches
            in your area.
          </p>
          <p className="waitlist-supporting-copy">
            Early access. No commitment.
          </p>
        </div>

        <div className="waitlist-hero-image" aria-hidden="true">
          <img src={peopleImg} alt="" />
        </div>
      </section>

      <section
        className="waitlist-form-section"
        aria-labelledby="waitlist-form-heading"
      >
        <div className="waitlist-form-intro">
          <span className="waitlist-form-kicker">JOIN AGROBRIDGE</span>
          <h2 id="waitlist-form-heading">Reserve your early access</h2>
          <p>
            Tell us a little about yourself so we can keep you informed as we
            launch.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="waitlist-form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ade Bello"
              autoComplete="name"
              required
            />
          </div>

          <div className="waitlist-form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="e.g. +234 801 234 5678"
              autoComplete="tel"
              required
            />
          </div>

          <div className="waitlist-form-group">
            <label htmlFor="email">
              Email Address <span>(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="waitlist-role-selector">
            <label id="waitlist-role-label">I am a:</label>
            <div
              className="waitlist-role-pills"
              role="group"
              aria-labelledby="waitlist-role-label"
            >
              {ROLES.map((role) => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => handleRoleChange(role.label)}
                  className={`waitlist-role-btn ${
                    formData.role === role.label ? "is-active" : ""
                  }`}
                  aria-pressed={formData.role === role.label}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          <div className="waitlist-form-group">
            <label htmlFor="location">
              Location <span>(State)</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Lagos"
              autoComplete="address-level1"
            />
          </div>

          {errorMessage && (
            <div className="waitlist-error" role="alert">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="waitlist-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      </section>

      {isModalOpen && (
        <div
          className="waitlist-modal-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) handleCloseModal();
          }}
        >
          <div
            className="waitlist-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-success-title"
          >
            <div className="waitlist-checkmark-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <span className="waitlist-modal-kicker">WELCOME TO AGROBRIDGE</span>
            <h2 id="waitlist-success-title">
              You&apos;re officially on the list.
            </h2>
            <p>We&apos;ll reach out when AgroBridge is ready in your area.</p>

            {waitlistResult?.position != null && (
              <div className="waitlist-position-card">
                <span>Your waitlist position</span>
                <strong>#{waitlistResult.position}</strong>
                {waitlistResult.status && (
                  <small>Status: {waitlistResult.status}</small>
                )}
              </div>
            )}

            <button
              type="button"
              className="waitlist-modal-close-btn"
              onClick={handleCloseModal}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistScreen;
