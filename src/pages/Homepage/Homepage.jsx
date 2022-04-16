import { React } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import HeroImage from "../../assets/notova-hero-image.svg";
import { useTheme } from "../../context/theme-context";
import { useAuth } from "../../context/auth-context";

const Homepage = () => {
  const { lightTheme } = useTheme();
  const { getUser } = useAuth();

  return (
    <div className={lightTheme ? "app-light" : "app-dark"}>
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
            {!getUser() ? (
              <>
                <Link to="/login" className="btn btn-primary btn-homepage">
                  Get Started
                </Link>

                <Link to="/register" className="cta-text">
                  Register
                </Link>
              </>
            ) : (
              <Link to="/mynotes" className="btn btn-primary btn-homepage">
                Your Notes
              </Link>
            )}
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
