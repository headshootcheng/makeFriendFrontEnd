import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../styles/app.css";
import GroupRounded from "@material-ui/icons/GroupRounded";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { closeChatMode } from "../../redux/slice/dashboardSlice";
import io from "socket.io-client";
const Header: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { name, owner } = useSelector((state: RootState) => state.roomInfo);
  const { userId } = useSelector((state: RootState) => state.userInfo);
  const [ws, setWs] = useState<any>(io(`${process.env.REACT_APP_API_URL}`));

  const quitRoom = () => {
    ws.emit("quitRoom", { userId }, (msg: string) => {
      if (msg === "success") {
        console.log("close socket");
        ws.close();
      }
    });
    dispatch(closeChatMode());
  };

  return (
    <AppBar position="static" color="default" className="h-24 py-4">
      <Toolbar className=" flex item-center">
        <IconButton
          onClick={quitRoom}
          className="flex md:hidden"
          style={{ outline: "none" }}
        >
          <ArrowBackIosIcon style={{ height: 30, width: 30 }} />
        </IconButton>
        <GroupRounded
          style={{ height: 50, width: 50 }}
          className="bg-black text-white rounded-full p-2"
        />
        <div className=" flex flex-col">
          <span className="text-2xl mx-2">{name}</span>
          <span className="mx-2 text-gray-500">Host By: {owner}</span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
