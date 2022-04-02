import { React } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import HeroImage from "../../assets/notova-hero-image.svg";
import Navbar from "../../Components/Navbar/Navbar";
import { useTheme } from "../../context/theme-context";

const Homepage = () => {
  const { lightTheme } = useTheme();

  return (
    <div className={lightTheme ? "app-light" : "app-dark"}>
      <Navbar />
      <div className="homepage-container">
        <section className="homepage-left">
          <section className="homepage-left-text">
            <h2 className="md-title homepage-subtitle">
              Meet your modern Note Taking App
            </h2>
            <p className="homepage-text">
              Manage your daily tasks and workflow in a modern way and boost
              your efficiency without any efforts.
            </p>
          </section>
          <section className=" homepage-left-action">
            <button className="btn btn-primary btn-homepage">
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
    </div>
  );
};

export default Homepage;
