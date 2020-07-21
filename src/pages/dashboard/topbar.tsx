import React from "react";
import "../../styles/app.css";
import SettingsIcon from "@material-ui/icons/Settings";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Topbar: React.FC<{}> = () => {
  return (
    <div className="flex-none h-32  bg-blue-700 flex justify-between items-center">
      <div className="flex items-center justify-center">
        <SettingsIcon
          className="mx-3 text-white"
          style={{ height: 50, width: 50 }}
        />
        <AddCircleIcon
          className="mx-3 text-white"
          style={{ height: 50, width: 50 }}
        />
        <FavoriteIcon
          className="mx-3 text-white"
          style={{ height: 50, width: 50 }}
        />
      </div>
      <span
        className="text-5xl text-white"
        style={{ fontFamily: "Indie Flower" }}
      >
        FriendChat
      </span>
      <div className="flex flex-row items-center justify-center">
        <span className="text-3xl mx-3 text-white"> headshoot </span>
        <img
          src={require("../../images/userIcon.png")}
          className="h-16 w-16 object-contain rounded-full mx-3"
        />
      </div>
    </div>
  );
};

export default Topbar;
