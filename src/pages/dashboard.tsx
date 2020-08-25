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
    <div className="flex flex-row h-screen">
      <div className="flex-none w-1/3 flex-1 flex flex-col ">
        <Topbar username="admin" />
        <Searchbar />
        <Contactlist />
      </div>
      <Content />
    </div>
  );
};

export default Dashboard;
// Bearer
