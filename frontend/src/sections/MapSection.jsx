import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapSection = ({ shipments }) => {
  return (
    <MapContainer center={[6.9271, 79.8612]} zoom={7} className="map-container">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {shipments.map((s) => (
        <Marker key={s.id} position={[s.location.lat, s.location.lng]}>
          <Popup>
            Shipment {s.id}: {s.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapSection;
