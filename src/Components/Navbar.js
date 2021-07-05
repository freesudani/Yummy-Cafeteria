import React, { useState } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return <nav className={nav ? "nav active" : "nav"}></nav>;
}

export default Navbar;
