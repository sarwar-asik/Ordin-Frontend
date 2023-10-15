import React from "react";
type actionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBarUI = ({ title, children }: actionBarProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 5px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBarUI;
