import React, { useEffect, useState } from "react";
import "../styles/app.css";
import Topbar from "../components/dashboard/topbar";
import Searchbar from "../components/dashboard/searchbar";
import RoomList from "../components/chatroom/roomList";
import Content from "../components/dashboard/content";
import Chatroom from "./chatroom";
import AddChatRoomPopUp from "../components/chatroom/addChatRoomPopUp";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState<string>("");
  const history = useHistory();
  const [addChatOpen, setAddChatOpen] = useState<boolean>(false);
  const [switchRoomPage, setSwitch] = useState<boolean>(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo: () => void = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/userInfo`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("auth") },
      })
      .then(({ data }) => {
        setUsername(data.username);
      })
      .catch((err) => {
        //console.log(err);
        history.push("/");
      });
  };

  return (
    <div className="flex flex-row h-screen">
      <div
        className={`flex-1 md:flex-none md:w-1/3  flex-col ${
          switchRoomPage ? "hidden" : "flex"
        } md:flex`}
      >
        <Topbar username={username} />
        <Searchbar handleOpen={() => setAddChatOpen(true)} />
        <RoomList switchToRoom={() => setSwitch(true)} />
        <AddChatRoomPopUp
          open={addChatOpen}
          handleClose={() => setAddChatOpen(false)}
        />
      </div>
      {switchRoomPage ? (
        <Chatroom
          switchRoomPage={switchRoomPage}
          switchToMenu={() => setSwitch(false)}
        />
      ) : (
        <Content />
      )}
    </div>
  );
};

export default Dashboard;
