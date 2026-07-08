const Traction = ({ tractionRef }) => {
  return (
    <section ref={tractionRef} id="traction" className="section-wrapper">
      <div className="section-card">
        <h2 className="section-title mb-large">Traction</h2>

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
          <div className="traction-placeholder-text">Live API</div>
          <div className="traction-placeholder-text">USSD Demo Available</div>
          <div className="traction-placeholder-text">
            Working Machine Learning (ML) Model
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
