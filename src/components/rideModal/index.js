// src/components/RideModal.js
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import CompanyRankingModal from "../companyRankingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Image1, Image2 } from "./image";
import useDistanceMatrix from "../../hooks/useDistanceMatrix";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    border: "none",
    padding: "20px",
    width: "80%", // Adjust the width as needed
    height: "80%", // Adjust the height as needed
    maxWidth: "320px", // Maximum width
    maxHeight: "1000px", // Maximum height
    backgroundColor: "#000",
    color: "#ffff",
    overflow: "hidden",
  },
  button: {
    backgroundColor: "white",
    color: "#000",
    width: "100%",
    padding: "10px 20px",
    borderRadius: "5px", // Optionally add border radius for a nicer look
    border: "none", // Optionally remove border
    cursor: "pointer",
  },
  paragraph: {
    color: "white",
    // font-family: Poppins;
    marginTop: "8px",
    fontSize: "40px",
    fontWeight: 300,
  },
  heading: {
    color: "#05CAAD",
    // font-family: Poppins;
    fontSize: "18px",
    fontWeight: 400,
    marginTop: "20px",
  },
  carbonValue: {
    color: "#05CAAD",
    // font-family: Poppins;
    fontSize: "150px",
    fontWeight: 300,
    letterSpacing: "-6px",
  },
  kg: {
    color: "#05CAAD",
    fontSize: "42px",
    fontWeight: 400,
  },
  other: {
    color: "#ffffff4d",
    // font-family: Poppins;
    fontSize: "14px",
    fontWeight: 400,
    marginBottom: "8px",
  },
  card: {
    padding: "10px 5px 10px 5px",
    borderRadius: "16px",
    backgroundColor: "#ffffff1a",
    marginBottom: "8px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
};
const RideModal = ({ isOpen, onRequestClose, pickup, dropoff, isReadyToGetRide }) => {
  const [companyRankingModalIsOpen, setCompanyRankingModalIsOpen] = useState(false);
  const { differenceCarGasolineBike, differenceCarGasolineEVScooter, carbonFootprint } = useDistanceMatrix(
    pickup,
    dropoff,
    isReadyToGetRide
  );

  const openCompanyRankingModal = () => {
    setCompanyRankingModalIsOpen(true);
  };

  const closeCompanyRankingModal = () => {
    setCompanyRankingModalIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Request Ride Modal" style={modalStyles}>
      <div onClick={onRequestClose}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <h2 style={modalStyles.heading}>Carbon Footprint</h2>
      <p style={modalStyles.paragraph}>With this trip you will save</p>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          paddingBottom: "10px",
          borderBottom: "1px solid #ffffff33",
          marginBottom: "20px",
        }}
      >
        {/* this will be dinamic */}
        <p style={modalStyles.carbonValue}>{Math.round(carbonFootprint * 10) / 10}</p>
        <p style={modalStyles.kg}>kg</p>
      </div>
      <div>
        <p style={modalStyles.other}>Other options</p>
      </div>
      <div style={modalStyles.card}>
        <Image1 />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "white", fontWeight: 400, fontSize: "14px" }}>Bike</p>
          <p style={{ color: "#ffffff80", fontWeight: 400, fontSize: "14px" }}>
            You will save {Math.round(differenceCarGasolineBike * 10) / 10 || "5"}kg
          </p>
        </div>
      </div>
      <div style={modalStyles.card}>
        <div style={{ backgroundColor: "#ffffff1a", padding: "10px", borderRadius: "16px" }}>
          <Image2 />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "white", fontWeight: 400, fontSize: "14px" }}>Scooter</p>
          <p style={{ color: "#ffffff80", fontWeight: 400, fontSize: "14px" }}>
            You will save {Math.round(differenceCarGasolineEVScooter * 10) / 10 || "2"}kg
          </p>
        </div>
      </div>
      <button onClick={openCompanyRankingModal} style={{ marginTop: "8px" }}>
        Continue
      </button>
      <CompanyRankingModal isOpen={companyRankingModalIsOpen} onRequestClose={closeCompanyRankingModal} />
    </Modal>
  );
};

export default RideModal;
