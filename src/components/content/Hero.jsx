import heroImg from "../../assets/Hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__layout">
        <div className="hero__container">
          <h1 className="hero__title">Little Lemon</h1>
          <h2 className="hero__subtitle">Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies dictum lacus id condimentum.{" "}
          </p>
          <Link style={{ fontSize: "18px" }} to="/booking">
            Book a table
          </Link>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
