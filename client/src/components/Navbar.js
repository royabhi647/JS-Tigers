import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"}>VendorList</Link>
        </li>
        <li>
          <Link to={"/form"}>VendorForm</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
