// import React, { useState } from "react";
// import "./Sidebar.css";
// import data from "./linkstatus.json"; // 📌 Import JSON

// export default function Sidebar() {
//   const [temperature, setTemperature] = useState(0);
//   const [color, setColor] = useState("red"); // Default color

//   const fetchTemp = () => {
//     setTemperature(data.temperature);
//     setColor(data.color);
//   };

//   const height = (temperature / 100) * 200; // Scale height to fit UI max 200px

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       <div className="thermometer">
//         <div
//           className="mercury"
//           style={{
//             height: `${height}px`,
//             backgroundColor: color,
//           }}
//         ></div>
//       </div>

//       <h3>Temperature: {temperature}°C</h3>

//       <button onClick={fetchTemp} className="btn">
//         Fetch Temp
//       </button>
//     </div>
//   );
// }


import React from "react";
import stpData from "./stpStatus.json";

const getStatusText = (value) => {
  return value === 1 ? "enabled" : "disabled";
};

export default function Sidebar() {
  return (
    <table
      style={{
        width: "40%",
        marginTop: "20px",
        borderCollapse: "collapse",
        textAlign: "center",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#e5e5e5" }}>
          <th style={{ border: "1px solid black", padding: "8px" }}>stp</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>rstp</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>mstp</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>vlanid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            {getStatusText(stpData.stp)}
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            {getStatusText(stpData.rstp)}
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            {getStatusText(stpData.mstp)}
          </td>
          <td style={{ border: "1px solid black", padding: "8px" }}>
            {stpData.vlanid}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
