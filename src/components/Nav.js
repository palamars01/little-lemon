import logo from "./logo.svg";

export function Nav() {
  return (
    <>
      <nav>
        <img width="120px" src={logo} alt="logo" />
        <ul>
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
