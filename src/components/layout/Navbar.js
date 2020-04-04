import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLinks from "./SignedOut";

const Navbar = () => {
  return (
    <nav className="nav-wrapper NavClass">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLink />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
