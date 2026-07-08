import { LiaUserCogSolid } from "react-icons/lia";
import { MdHandshake, MdStorefront } from "react-icons/md";
import "../CSS/WhoIt.css";
import { PiHandshakeLight } from "react-icons/pi";
import { PiShoppingCartLight } from "react-icons/pi";

const WhoIt = ({ partnersRef }) => {
  return (
    <section ref={partnersRef} id="partners" className="whoit-section-wrapper">
      <div className="whoit-section-card">
        <h2 className="whoit-section-header-lined">Who It's For</h2>
        <p className="whoit-section-description">
          Built for everyone in the Agri-ecosystem
        </p>

        <div className="whoit-partners-layout">
          <div className="whoit-partner-card">
            <div className="whoit-partner-icon-wrapper">
              <LiaUserCogSolid />
            </div>
            <div>
              <h3 className="whoit-step-title">Farmers</h3>
              <p>
                Get better market prices, access to unlimited market, and
                insights to grow income sustainably.
              </p>
            </div>
          </div>
          <div className="whoit-partner-card">
            <div className="whoit-partner-icon-wrapper">
              <PiShoppingCartLight />
            </div>
            <div>
              <h3 className="whoit-step-title">Buyers</h3>
              <p>
                Source quality produce efficiently from reliable, verified and
                trusted farmers.
              </p>
            </div>
          </div>
          <div className="whoit-partner-card">
            <div className="whoit-partner-icon-wrapper">
              <PiHandshakeLight />
            </div>
            <div>
              <h3 className="whoit-step-title">Partners</h3>
              <p>
                Integrate, collaborate, and scale impact across the agricultural
                value chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIt;
