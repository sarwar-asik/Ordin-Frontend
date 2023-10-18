import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        fontWeight:"700",
        color:"black",
        fontSize:"1.5rem",
        fontFamily:"sans-serif"
      }}
    >
      <span style={{ fontSize: "2.3rem" }}>O</span>
      rdain
    </Link>
  );
};

export default Logo;
