import { MdCheckCircle } from "react-icons/md";
import farm from "../assets/farm.png";
import "../CSS/Platform.css";

const Platform = ({ solutionsRef }) => {
  return (
    <section
      ref={solutionsRef}
      id="solutions"
      className="platform-section-wrapper"
    >
      <div className="platform-section-card">
        <div className="platform-solutions-header platform-mb-large">
          <MdCheckCircle className="platform-title-icon" />
          <h2 className="platform-section-title platform-mb-0">
            One Platform, Every Farmer
          </h2>
        </div>

        <p className="platform-section-description platform-text-left">
          AgroBridge connects farmers directly to buyers — built to work
          everywhere, not just where there is good internet.
        </p>

        <div className="platform-solutions-layout">
          <div className="platform-solutions-list">
            <div className="platform-solution-list-item">
              <MdCheckCircle className="platform-list-icon" />
              <p>
                <strong>Web & Mobile —</strong> listings, Profile, Orders,
                Secure Payments.
              </p>
            </div>
            <div className="platform-solution-list-item">
              <MdCheckCircle className="platform-list-icon" />
              <p>
                <strong>USSD & SMS —</strong> list produce and check prices on
                any basic phone.
              </p>
            </div>
            <div className="platform-solution-list-item">
              <MdCheckCircle className="platform-list-icon" />
              <p>
                <strong>Price Guidance —</strong> trend-based data shows the
                best time to sell.
              </p>
            </div>
            <div className="platform-solution-list-item">
              <MdCheckCircle className="platform-list-icon" />
              <p>
                <strong>Secure Payments —</strong> farmers get paid only after
                delivery is confirmed.
              </p>
            </div>
          </div>
          <div className="platform-solutions-visual">
            <img src={farm} alt="Platform in use" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
