import React, { useState } from "react";
import RideModal from "../rideModal";
import "./index.css";

const RequestRideForm = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [isReadyToGetRide, setIsReadyToGetRide] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (event) => {
    setIsReadyToGetRide(true);
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="request-ride-form">
      <h2>Request a Ride</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="pickup">Pickup Location:</label>
          <input
            type="text"
            id="pickup"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter your pickup location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropoff">Dropoff Location:</label>
          <input
            type="text"
            id="dropoff"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Enter your dropoff location"
          />
        </div>
        <button type="submit">Request Ride</button>
      </form>
      <RideModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        pickup={pickup}
        dropoff={dropoff}
        isReadyToGetRide={isReadyToGetRide}
      />
    </div>
  );
};

export default RequestRideForm;

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   heading: {
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '10px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
//   input: {
//     padding: '10px',
//     marginTop: '5px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     width: '200px',
//   },
//   button: {
//     padding: '10px 20px',
//     borderRadius: '4px',
//     border: 'none',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     cursor: 'pointer',
//   },
// };
