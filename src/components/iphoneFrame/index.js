// src/components/IphoneFrame.js
import React from "react";
import "./index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import FakeAppIcon from "../fakeAppIcon/index";
import RequestRideForm from "../requestRideForm/index";

const IphoneFrame = ({ children }) => {
  const [openApp, setOpenApp] = useState(null);

  const handleAppClick = (app) => {
    setOpenApp(app);
  };

  const handleBackClick = () => {
    setOpenApp(null);
  };

  return (
    <div className="iphone-frame">
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="screen">
        {openApp ? (
          <div className="app-content">
            <div className="back-button" onClick={void 0}></div>
            {openApp}
          </div>
        ) : (
          <div className="app-grid">
            <FakeAppIcon
              icon={<FontAwesomeIcon icon={faCar} />}
              label="Watch Your Ride"
              onClick={() => handleAppClick(<RequestRideForm />)}
            />
            {/* Add more FakeAppIcon components as needed */}
          </div>
        )}
        {children}
      </div>
      <div className="home-button"></div>
    </div>
  );
};

export default IphoneFrame;
