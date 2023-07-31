import Facebook from "../assets/facebook.webp";
import Instagram from "../assets/instagram.webp";
import Twitter from "../assets/twitter.webp";
import logo from "../assets/Logo.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} className="logo" alt="Little Lemon Restaurant Logo" />
        <div className="footer__info">
          <div className="footer__social">
            <div className="footer__social__container">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Facebook Social" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram Social" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="Twitter Social" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
