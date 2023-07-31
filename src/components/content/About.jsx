import Chefb from "../../assets/chefb.webp";
import Restaurant from "../../assets/restaurant.webp";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Little Lemon</h2>
        <h3 className="about__subtitle">Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet lorem a ipsum euismod aliquet id vel risus. Praesent quis sodales magna. Nullam eget nisi in nisl sodales sollicitudin. Aliquam ornare laoreet diam, laoreet cursus tortor efficitur vel. Quisque sit amet maximus urna. In maximus pharetra ex a maximus</p>
      </div>
      <div className="about__imgs">
        <img src={Restaurant} alt="Chef DamianLittle Lemon Restaurant" className="about__imgs__bottom" />
        <img src={Chefb} alt="Chef's Damian and Jordan Little Lemon Restaurant" className="about__imgs__top" />
      </div>
    </section>
  )
}

export default About;