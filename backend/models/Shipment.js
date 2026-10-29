import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema({
  id: String,
  location: {
    lat: Number,
    lng: Number,
  },
  status: String,
  city: String,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Shipment", ShipmentSchema);
