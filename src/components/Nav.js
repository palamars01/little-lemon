import logo from "../icons_assets/Logo.svg";
import "./Nav.css";

export function Nav() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <img width="120px" src={logo} alt="logo" />
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
            width: "50%",
          }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
