import React from "react";
import { FaCog, FaEnvelope, FaBell, FaSearch } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ActivityChart from "../ActivityChart/ActivityChart";
import RecentOrders from "../RecentOrders/RecentOrders";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import "./Dashboard.css";
import Profile from "../assests/profile.jpg";
import Orders from "../assests/orders.png";
import Delivered from "../assests/delivered.png";
import Cancelled from "../assests/cancelOrder.png";
import Revenue from "../assests/revenue.png";
import Goals from "../assests/target.png";
import Dish from "../assests/burger.png";
import Menu from "../assests/menu.png";

const Dashboard = () => {
  const percentage = 70;
  return (
    <div className="dashboard">
      <div className="header">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-icons">
          <FaEnvelope className="icon" />
          <FaCog className="icon" />
          <FaBell className="icon" />
          <img src={Profile} alt="profile" class="imageCover" />
        </div>
      </div>
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-item">
          {/* <FaShoppingBasket /> */}
          <img src={Orders} alt="orders" class="imgClass" />
          <div>
            <p>Total Orders</p>
            <h1>75</h1>
          </div>
        </div>
        <div className="stat-item">
          {/* <FaCheck /> */}
          <img src={Delivered} alt="delivered" class="imgClass" />
          <div>
            <p>Total Delivered</p>
            <h1>70</h1>
          </div>
        </div>
        <div className="stat-item">
          {/* <FaTimes /> */}
          <img src={Cancelled} alt="cancelled" class="imgClass" />
          <div>
            <p>Total Cancelled</p>
            <h1>05</h1>
          </div>
        </div>
        <div className="stat-item">
          {/* <FaTimes /> */}
          <img src={Revenue} alt="revenue" class="imgClass" />
          <div>
            <p>Total Revenue</p>
            <h1>$12k</h1>
          </div>
        </div>
        <div className="stat-item net-profit">
          <div className="net-profit-text">
            <p>Net Profit</p>
            <h1>$6759.25</h1>
          </div>
          <div className="progress-container">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#1e90ff",
                trailColor: "#d3d3d3",
              })}
            />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="left-panel">
          <ActivityChart />
          <div className="spacer"></div>
          <RecentOrders />
        </div>
        {/* <ActivityChart /> */}
        <div className="right-panel">
          <div className="info-card">
            <h3>
              <img src={Goals} alt="goal" className="info-img"/>
              <span className="info-name"> Goals</span>
            </h3>
            <h3>
              <img src={Dish} alt="dishes"  className="info-img"/>
              <span className="info-name"> Popular Dishes</span>
            </h3>
            <h3>
              <img src={Menu} alt="orders" className="info-img"/>
              <span className="info-name"> Menus</span>
            </h3>
          </div>
          <div className="spacer"></div>
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
