import React from "react";
import styles from "./Header.module.css";
import Logo from "./download.png";
const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>
        C
        <span>
          <img src={Logo} alt="Covid Icon" />
        </span>
        VID19
      </h1>
    </header>
  );
};

export default Header;
