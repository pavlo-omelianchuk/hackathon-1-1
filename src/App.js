import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequestRideForm from "./components/requestRideForm";
import IphoneFrame from "./components/iphoneFrame";

const App = () => {
  return (
    <Router>
      <IphoneFrame>
        <Routes>
          <Route path="/request-ride" component={RequestRideForm} />
        </Routes>
      </IphoneFrame>
    </Router>
  );
};

export default App;
