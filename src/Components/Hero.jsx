import "../CSS/Hero.css";
// import "../CSS/Button.css";
import heroImage from "../assets/famers.png";

export default function Hero() {
  return (
    <section className="hero section-wrapper">
      <div className="hero-left">
        <h1>
          Connecting Farmers to Markets
          <span> Using Technology</span>
        </h1>

        <p>
          AgroBridge is a tech-driven platform that connects farmers to reliable
          buyers — with a full app experience, or simple USSD access for those
          without a smartphone.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Partner With Us</button>

          <button className="btn-secondary">Join Waitlist</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Farmers" />
      </div>
    </section>
  );
}
