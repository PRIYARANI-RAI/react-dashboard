import React from "react";
import "./RecentOrders.css";
import { recentOrders } from "../Data/data.js";

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <h1>Recent Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index}>
              {/* <td>{order.customer}</td> */}
              <td className="customer-cell">
                <img src={order.image} alt={order.customer} className="customer-image" />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <button
                  className={`status-button ${order.status.toLowerCase()}`}
                >
                  {order.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
