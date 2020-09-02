import React, { useEffect, useState } from "react";
import "../styles/app.css";
import Topbar from "../components/dashboard/topbar";
import Searchbar from "../components/dashboard/searchbar";
import RoomList from "../components/chatroom/roomList";
import Welcome from "../components/dashboard/welcome";
import Chatroom from "./chatroom";
import AddChatRoomPopUp from "../components/chatroom/addChatRoomPopUp";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/slice/userSlice";
import { closeChatMode } from "../redux/slice/dashboardSlice";
import { RootState } from "../redux";
const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [addChatOpen, setAddChatOpen] = useState<boolean>(false);

  const { chatMode, refreshDashboard } = useSelector(
    (state: RootState) => state.dashBoard
  );
  const { ws } = useSelector((state: RootState) => state.roomInfo);
  const { userId } = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    ws.emit("refreshDashboard", { userId });
    getUserInfo();
    dispatch(closeChatMode());
  }, [refreshDashboard]);

  const getUserInfo: () => void = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/userInfo`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("auth") },
      })
      .then(({ data }) => {
        //setUsername(data.username);
        dispatch(setUserInfo(data));
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
          chatMode ? "hidden" : "flex"
        } md:flex`}
      >
        <Topbar />
        <Searchbar handleOpen={() => setAddChatOpen(true)} />
        <RoomList />
        <AddChatRoomPopUp
          open={addChatOpen}
          handleClose={() => setAddChatOpen(false)}
        />
      </div>
      {chatMode ? <Chatroom /> : <Welcome />}
    </div>
  );
};

export default Dashboard;
