// constants/index.js
import axios from "axios";

export const fetchShipments = async () => {
  const res = await axios.get("http://localhost:5000/api/shipments");
  return res.data;
};
