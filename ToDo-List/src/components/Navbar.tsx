import Logo from "../assets/todologo.svg";
function Navbar() {
  return (
    <>
      <div className="navbar">
        {/**This is the Logo */}
        <img src={Logo} alt="Logo" className="logo" />

        {/**Here are the Links */}
        <ul>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">For Teams</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>

        {/** Authentication Buttons */}

        <button className="login-btn">Log in</button>
        <button className="signup-btn">Start for Free</button>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
