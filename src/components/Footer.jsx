import React from "react";

function Footer() {
  var curyear = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {curyear}</p>
    </footer>
  );
}

export default Footer;
