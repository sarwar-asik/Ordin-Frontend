import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        fontWeight: "700",
        color: "#16697a",
        fontSize: "1.3rem",
        fontFamily: "sans-serif",
        // background:"white",
        // paddingBlock:"0.2rem",
        // borderRadius:"5px"
      }}
    >
      <span style={{ fontSize: "2.5rem" }}>O</span>
      rdain
    </Link>
  );
};

export default Logo;
