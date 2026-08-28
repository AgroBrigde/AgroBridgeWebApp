import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPartnerData,
  openPartnerSuccessModal,
  closePartnerSuccessModal,
} from "../store/partnersSlice";
import { submitPartnershipRequest } from "../api/partnershipService";
import "../CSS/PartnershipScreen.css";
import partnersImg from "../assets/partners.png";

const PARTNERSHIP_TYPES = [
  { label: "Investor", value: "Investor" },
  { label: "Co-operative", value: "Co-operative" },
  { label: "Agent Network", value: "Agent Network" },
  { label: "Logistics", value: "Logistics" },
  { label: "Payment Provider", value: "Payment Provider" },
  { label: "Distributor", value: "Distributor" },
  { label: "Other", value: "Other" },
];

const INITIAL_FORM_DATA = {
  orgName: "",
  contactPerson: "",
  email: "",
  phone: "",
  partnerType: "Investor",
  message: "",
};

const PartnershipScreen = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.partners.isModalOpen);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [partnershipResult, setPartnershipResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleTypeChange = (partnerType) => {
    setFormData((prev) => ({ ...prev, partnerType }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const result = await submitPartnershipRequest(formData);

      setPartnershipResult(result?.data ?? null);
      dispatch(setPartnerData(formData));
      dispatch(openPartnerSuccessModal());
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setErrorMessage(
        error.message ||
          "We couldn't complete your partnership request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    dispatch(closePartnerSuccessModal());
    setPartnershipResult(null);
  };

  return (
    <div className="partnership-page partnership-container">
      <section
        className="partnership-hero"
        aria-labelledby="partnership-heading"
      >
        <div className="partnership-hero-copy">
          <span className="partnership-eyebrow">PARTNERSHIPS</span>
          <h1 id="partnership-heading">
            Let&apos;s Build a Stronger
            <br />
            Agricultural Ecosystem
            <br />
            Together
          </h1>
          <p>
            Partner with AgroBridge as a cooperative, agent network, logistics
            provider, payment provider, distributor, or investor.
          </p>
          <p className="partnership-supporting-copy">
            Let&apos;s grow this together.
          </p>
        </div>
        <div className="partnership-hero-image" aria-hidden="true">
          <img src={partnersImg} alt="" />
        </div>
      </section>

      <section
        className="partnership-form-section"
        aria-labelledby="partnership-form-heading"
      >
        <div className="partnership-form-intro">
          <span className="partnership-form-kicker">
            PARTNER WITH AGROBRIDGE
          </span>
          <h2 id="partnership-form-heading">Start a conversation</h2>
          <p>
            Tell us about your organization and how you would like to build with
            AgroBridge.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="partnership-form-group">
            <label htmlFor="orgName">Organization Name</label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="e.g. GreenFields Agro Ltd"
              autoComplete="organization"
              required
            />
          </div>

          <div className="partnership-form-group">
            <label htmlFor="contactPerson">Contact Person</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="e.g. Chidinma Okafor"
              autoComplete="name"
              required
            />
          </div>

          <div className="partnership-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="partnerships@company.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="partnership-form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +234 801 234 5678"
              autoComplete="tel"
              required
            />
          </div>

          <div className="partnership-type-selector">
            <label id="partnership-type-label">Partnership Type</label>
            <div
              className="partnership-type-pills"
              role="group"
              aria-labelledby="partnership-type-label"
            >
              {PARTNERSHIP_TYPES.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => handleTypeChange(type.value)}
                  className={`partnership-type-btn ${formData.partnerType === type.value ? "is-active" : ""}`}
                  aria-pressed={formData.partnerType === type.value}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="partnership-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you would like to explore with AgroBridge."
              required
            />
          </div>

          {errorMessage && (
            <div className="partnership-error" role="alert">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="partnership-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Partnership Request"}
          </button>
        </form>
      </section>

      {isModalOpen && (
        <div
          className="partnership-modal-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) handleCloseModal();
          }}
        >
          <div
            className="partnership-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="partnership-success-title"
          >
            <div className="partnership-checkmark-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <span className="partnership-modal-kicker">
              PARTNERSHIP RECEIVED
            </span>
            <h2 id="partnership-success-title">
              Request submitted successfully.
            </h2>
            <p>
              Thanks for reaching out. Our team will review your request and
              follow up with you.
            </p>

            {partnershipResult?.position != null && (
              <div className="partnership-position-card">
                <span>Your partnership waitlist position</span>
                <strong>#{partnershipResult.position}</strong>
                {partnershipResult.status && (
                  <small>Status: {partnershipResult.status}</small>
                )}
              </div>
            )}

            <button
              type="button"
              className="partnership-modal-close-btn"
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

export default PartnershipScreen;
