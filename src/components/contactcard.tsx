import React from "react";
import "../styles/app.css";

const ContactCard: React.FC<{ name: string; date: string; text: string }> = ({
  name = "",
  date = "",
  text = "",
}) => {
  return (
    <div className="flex-none h-32 border-solid border-t-2 border-gray-200 bg-white flex flex-row justify-between p-4 ">
      <div className="flex flex-row items-center">
        <img
          src={require("../images/userIcon.png")}
          className="h-16 w-16 rounded-full object-contain"
        />
        <div className="flex flex-col items-center mx-4">
          <span className="text-xl">{name}</span>
          <span className="text-base text-gray-400">{text}</span>
        </div>
      </div>
      <span className="text-base text-gray-400 mt-5">{date}</span>
    </div>
  );
};

export default ContactCard;
