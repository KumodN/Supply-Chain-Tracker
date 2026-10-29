import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MapSection from "./sections/MapSection.jsx";
import { fetchShipments, shipments } from "./constants/index.js";
import "./index.css";

function App() {
   const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetchShipments().then((data) => setShipments(data));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar shipments={shipments} />
      <MapSection shipments={shipments} />
    </div>
  );
}

export default App;
