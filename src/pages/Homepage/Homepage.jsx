import { React } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import HeroImage from "../../assets/notova-hero-image.svg";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <section className="homepage-left">
        <h1 className="lg-title">notova</h1>
        <section className="homepage-left-text">
          <h2 className="md-title">Meet your modern Note Taking App</h2>
          <p>
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </section>
        <section className=" homepage-left-action">
          <button class="btn btn-primary">
            <Link to="/mynotes"> Get Started</Link>
          </button>

          <p className="cta-text">Register</p>
        </section>
      </section>
      <section className="homepage-right">
        <div className="hero-image-container">
          <img src={HeroImage} alt="hero" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
