import React from "react";
import "../styles/app.css";
import Topbar from "./dashboard/topbar";
import Searchbar from "./dashboard/searchbar";
import Contactlist from "./dashboard/contactlist";
import Content from "./dashboard/content";
const Dashboard = () => {
  return (
    <div className="flex-none h-screen flex flex-col">
      <Topbar />
      <div className="flex-1 grid grid-rows-5  grid-cols-3 grid-flow-col">
        <Searchbar />
        <Contactlist />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
