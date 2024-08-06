import React from 'react';
import './CustomerFeedback.css';
import { feedbacksData } from "../Data/data.js";

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      {feedbacksData.map((feedback, index) => (
        <div className="feedback-item" key={index}>
          {/* <h4>{feedback.customer}</h4> */}
          <div className="customer-info">
            <img src={feedback.image} alt={feedback.customer} className="customer-image" />
            <h4>{feedback.customer}</h4>
          </div>
          <div className="stars">{'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}</div>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
