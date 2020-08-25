import React from "react";
import "../../styles/app.css";
const Content: React.FC<{}> = () => {
  return (
    <div
      className="flex-1  bg-white"
      style={{
        backgroundImage: `url(${require("../../images/wrapper.jpeg")})`,
        backgroundSize: "contain",
      }}
    ></div>
  );
};
export default Content;
