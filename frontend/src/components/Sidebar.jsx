import React from 'react'

const Sidebar = ({shipments}) => {
  return (
    <div className="sidebar">
      <h2>Shipments</h2>
      {shipments.map((s) => (
        <div key={s.id} style={{ marginBottom: "10px" }}>
          <strong>ID:</strong> {s.id}<br />
          <strong>Status:</strong> {s.status}<br />
          <strong>City:</strong> {s.city}
        </div>
      ))}
    </div>
  )
}

export default Sidebar