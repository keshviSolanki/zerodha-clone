import React from "react";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import "./BuyActionWindow.css";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
