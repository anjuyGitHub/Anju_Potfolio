import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/#about",
  },
  {
    label: "Skills",
    path: "/#skills",
  },
  {
    label: "Experience",
    path: "/#experience",
  },
  {
    label: "Education",
    path: "/#education",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/#contact",
  },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenu(false);
  };

  const isProjectsPage = location.pathname === "/projects";

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">A</span>

          <span className="logo-name">
            Anju<span>.</span>
          </span>
        </Link>

        {/* DESKTOP / MOBILE NAV */}
        <nav className={`site-nav ${menu ? "open" : ""}`}>
          {navigation.map((item) => {
            const active =
              item.path === "/projects"
                ? isProjectsPage
                : item.path === "/" && location.pathname === "/";

            return (
              <Link
                key={item.label}
                to={item.path}
                className={active ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU */}
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenu((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menu}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
