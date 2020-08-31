import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../styles/app.css";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import InputBase from "@material-ui/core/InputBase";
const MessageBox: React.FC<{}> = () => {
  return (
    <AppBar position="static" color="primary" className="h-24 py-4">
      <Toolbar className=" flex item-center">
        <InputBase
          placeholder="Please enter your message"
          className=" w-4/5 bg-white h-16 rounded-full px-6"
        />
        <div className=" flex-1" />
        <IconButton style={{ outline: "none" }}>
          <SendIcon className=" text-white" style={{ height: 40, width: 40 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MessageBox;
