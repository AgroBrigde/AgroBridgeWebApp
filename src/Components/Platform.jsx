import { MdCheckCircle } from "react-icons/md";
import platformImage from "../assets/famers.png";

const Platform = ({ solutionsRef }) => {
  return (
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
                <strong>USSD & SMS —</strong> list produce and check prices on
                any basic phone.
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
                <strong>Secure Payments —</strong> farmers get paid only after
                delivery is confirmed.
              </p>
            </div>
          </div>
          <div className="solutions-visual">
            <img src={platformImage} alt="Platform in use" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
