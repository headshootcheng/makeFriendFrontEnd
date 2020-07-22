import React, { useEffect, useState } from "react";
import "../styles/app.css";
import Topbar from "./dashboard/topbar";
import Searchbar from "./dashboard/searchbar";
import Contactlist from "./dashboard/contactlist";
import Content from "./dashboard/content";
import Cookies from "js-cookie";
import axios from "axios";
const Dashboard = () => {
  const [username, setUsername] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    reload();
  }, []);
  const reload: () => void = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/user`,
      {},
      {
        headers: { Authorization: Cookies.get("token") },
      }
    );
    console.log(data);
    setUsername(data.username);
    setLogin(data.login);
  };
  return (
    <div className="flex flex-col h-screen">
      <Topbar username={username} />
      <div className="flex-1 grid grid-rows-5  grid-cols-3 grid-flow-col h-64">
        <Searchbar />
        <Contactlist />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
// Bearer
