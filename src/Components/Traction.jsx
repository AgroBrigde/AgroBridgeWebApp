import "../CSS/Traction.css";
import mobile from "../assets/mobile2.png";
import phone from "../assets/phone.png";
import code from "../assets/code.png";

const Traction = ({ tractionRef }) => {
  return (
    <section
      ref={tractionRef}
      id="traction"
      className="traction-section-wrapper"
    >
      <div className="traction-section-card">
        <h2 className="traction-section-title traction-mb-large">Traction</h2>

        <ul className="traction-list">
          <li>
            <strong>Live API —</strong> Our backend infrastructure is live and
            functional, powering real-time listings, pricing, and transactions
            between farmers and buyers.
          </li>
          <li>
            <strong>Working ML Model —</strong> Our machine learning model
            analyzes market data to generate price trend guidance, helping
            farmers know the best time to sell.
          </li>
          <li>
            <strong>USSD Demo Available —</strong> A working USSD demo lets
            farmers without smartphones list produce and check prices using any
            basic phone, ready to show live.
          </li>
          <li>
            Validated through direct research with 12 farmers and 5 buyers
            across Nigeria's agricultural value chain.
          </li>
          <li>Design system and product requirements complete.</li>
        </ul>

        <div className="traction-images">
          <div className="traction-placeholder-text">
            <img src={code} alt="Live API" />
            <h3>Live API</h3>
          </div>
          <div className="traction-placeholder-text">
            <img src={phone} alt="USSD Demo" />
            <h4>USSD Demo Available</h4>
          </div>
          <div className="traction-placeholder-text">
            <img src={mobile} alt="ML Model" />
            <h4>Working Machine Learning (ML) Model</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
