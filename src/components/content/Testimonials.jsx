import portraitPlaceholder from "../../assets/portrait_placeholder.png";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__layout">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__container">
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 5.0</h3>
              <img src={portraitPlaceholder} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Mike</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultricies dictum lacus id condimentum.
              </p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.8</h3>
              <img src={portraitPlaceholder} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">John</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultricies dictum lacus id condimentum.
              </p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.9</h3>
              <img src={portraitPlaceholder} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Alice</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultricies dictum lacus id condimentum.
              </p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.7</h3>
              <img src={portraitPlaceholder} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Jane</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultricies dictum lacus id condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
