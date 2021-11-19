import React from "react";
import "./navbar.scss";
import Logo from "../../assets/pokeball.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={Logo} alt="Pokeball Logo" />
        </div>
        <div className="navbar__text">React Pokedex</div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
