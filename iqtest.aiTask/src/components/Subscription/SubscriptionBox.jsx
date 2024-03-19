import React from "react";
import "./SubscriptionBox.css";
const SubscriptionBox = () => {
  return (
    <div className="subscription-wrapper">
      <div className="subscription-container">
        <div className="subscription-detail">
          <h2 className="title">Keep up with the latest</h2>
          <p className="description">
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>
        <div className="input-group">
          <h3 className="input-title">Stay up to date</h3>
          <div className="input-box">
            <input
              className="input"
              type="email"
              placeholder="Enter Your email"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <p className="legal-text">
            By subscribing you agree with our Privacy Policy
          </p>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="subscription-footer">
        <div className="subscription-footer-info">
          <div className="footer-logo">IQTEST.ai</div>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="link-container">
          <div className="link-menu">
            <h3 className="link-title">IQTEST</h3>
            <a className="footer-link" href="#">
              Quiz
            </a>
            <a className="footer-link" href="#">
              Results
            </a>
            <a className="footer-link" href="#">
              Pricing
            </a>
          </div>
          <div className="link-menu">
            <h3 className="link-title">IQTEST</h3>
            <a className="footer-link" href="#">
              Support
            </a>
            <a className="footer-link" href="#">
              Help
            </a>
            <a className="footer-link" href="#">
              FAQ
            </a>
            <a className="footer-link" href="#">
              Contact
            </a>
          </div>
          <div className="link-menu">
            <h3 className="link-title">IQTEST</h3>
            <a className="footer-link" href="#">
              Privacy Policy
            </a>
            <a className="footer-link" href="#">
              Terms of Service
            </a>
            <a className="footer-link" href="#">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;