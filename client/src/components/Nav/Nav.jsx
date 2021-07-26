import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add">
      Add Albums
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink className="link" to="/albums">
      Albums
    </NavLink>
  </>
);
const Nav = ({ user }) => {
  const [visible, setVisible] = useState(true);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setVisible(true);
        setHamburger(false);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <NavLink className="logo" to="/">
          B-Side Collective
        </NavLink>
        <button
          className="hamburger"
          // style={{ display: visible ? "none" : "flex" }}
          onClick={() => setHamburger(!hamburger)}
        >
          MENU
        </button>
        <div className="nav">
          <div className="links">
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </nav>
      <div
        style={{
          display:
            (visible && window.innerWidth < 768) ||
            (hamburger && window.innerWidth < 768)
              ? "flex"
              : "none",
        }}
        className="hamburger-links"
      >
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </>
  );
};
export default Nav;
