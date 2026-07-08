import React from "react";

const Gap = ({ gapRef }) => {
  return (
    <div>
      <section ref={gapRef} id="the-gap" className="section-wrapper">
        <div className="section-card">
          <h2 className="section-header-lined">The Gap We Are Closing</h2>
          <p className="section-description">
            Nigerian smallholder farmers lose income to middlemen, unreliable
            pricing, and produce that spoils before reaching a buyer. Buyers
            struggle to find trustworthy suppliers and consistent pricing. Most
            existing agritech platforms are too infrastructure for rural and
            low-literacy users to actually use.
          </p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">10/12</span>
              <p>Farmers rely on middlemen to sell</p>
            </div>
            <div className="stat-item divider">
              <span className="stat-number">9/12</span>
              <p>Lack access to reliable price information</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">8/12</span>
              <p>Experience post-harvest losses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gap;
