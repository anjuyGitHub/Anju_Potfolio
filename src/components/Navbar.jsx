import React, { useState } from "react";
import { navigation } from "../data/portfolioData";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const close = () => {
    setMenu(false);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        {/* Logo */}

        <a className="logo" href="#home" onClick={close}>
          <b>A</b>

          <span>
            Anju<span className="accent">.</span>
          </span>
        </a>

        {/* Mobile Menu Button */}

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
        >
          {menu ? "✕" : "☰"}
        </button>

        {/* Navigation */}

        <nav className={menu ? "site-nav open" : "site-nav"}>
          {navigation.map((item) => (
            <a key={item} href={`#${item}`} onClick={close}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
