// import React, { useState } from "react";
// import data from "./Fpga_Temp.json";

// export default function Sidebar() {
//   const scaleNumbers = [100, 80, 60, 40, 20, 0, -20, -40, -60, -80];

//   const [temperature, setTemperature] = useState(0);
//   const [fillColor, setFillColor] = useState("orange");

//   const handleTemp = () => {
//     const temp = parseFloat(data[0].temprature);
//     setTemperature(temp);

//     if (temp <= -40) setFillColor("#002BFF");
//     else if (temp > -1 && temp <= -40) setFillColor("#7000A3");
//     else if (temp > 0 && temp <= 30) setFillColor("#008000");
//     else if (temp > 30 && temp <= 60) setFillColor("orange");
//     else if (temp > 60 && temp <= 100) setFillColor("#FFD000");
    
//   };

//   const minTemp = -80;
//   const maxTemp = 100;
//   const fillPercent = Math.min(
//     Math.max(((temperature - minTemp) / (maxTemp - minTemp)) * 100, 0),
//     100
//   );

//   return (
//     <div style={{ textAlign: "center", paddingTop: "20px", fontFamily: "Arial" }}>
//       <h2>FPGA Temperature Monitor</h2>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div
//           style={{
//             width: "75px",
//             height: "380px",
//             background: "#e8f7fa",
//             borderRadius: "50px",
//             position: "relative",
//             border: "3px solid #96b9c4",
//             boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
//           }}
//         >
//           {/* Tick + Number Scale */}
//           <div
//             style={{
//               position: "absolute",
//               left: "10px",
//               top: "45px",
//               width: "60px",
//             }}
//           >
//             {scaleNumbers.map((num, i) => (
//               <div
//                 key={i}
//                 style={{
//                   height: "28px",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "13px",
//                     fontWeight: "bold",
//                     width: "25px",
//                   }}
//                 >
//                   {num}
//                 </span>

//                 <div
//                   style={{
//                     width: "18px",
//                     height: "2px",
//                     background: "#333",
//                   }}
//                 ></div>
//               </div>
//             ))}
//           </div>

//           {/* Tube */}
//           <div
//             style={{
//               width: "10px",
//               height: "270px",
//               background: "#ffffff",
//               borderRadius: "12px",
//               position: "absolute",
//               top: "45px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
//             }}
//           >
//             {/* Fill Level */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 width: "100%",
//                 height: `${fillPercent}%`,
//                 background: fillColor,
//                 borderRadius: "12px",
//                 transition: "height 1s, background 0.6s",
//               }}
//             ></div>
//           </div>

//           {/* Bulb */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-50px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: "20px",
//               height: "110px",
//               background: fillColor,
//               borderRadius: "50px",
//               border: "4px solid #555",
//               boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
//               transition: "background 0.6s",
//             }}
//           ></div>
//         </div>
//       </div>

//       <button
//         onClick={handleTemp}
//         style={{
//           marginTop: "50px",
//           padding: "10px 25px",
//           background: "#0079FF",
//           border: "none",
//           borderRadius: "10px",
//           color: "#fff",
//           cursor: "pointer",
//           fontSize: "15px",
//           fontWeight: "bold",
//         }}
//       >
//         Get FPGA Temp
//       </button>
       
//       <p style={{ fontSize: "18px", marginTop: "10px" }}>
//         Current Temperature: <b>{temperature}°C</b>
//       </p>

//       <button>Refresh</button>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import data from "./Fpga_Temp.json";

// export default function Sidebar() {
//   const scaleNumbers = [100, 80, 60, 40, 20, 0, -20, -40, -60, -80];

//   const [temperature, setTemperature] = useState(0);
//   const [fillColor, setFillColor] = useState("orange");

//   const handleTemp = () => {
//     const temp = parseFloat(data[0].temprature);
//     setTemperature(temp);

//     if (temp <= -40) setFillColor("#002BFF");         // Very Cold - Blue
//     else if (temp > -40 && temp <= 0) setFillColor("#7000A3"); // Cold - Purple
//     else if (temp > 0 && temp <= 30) setFillColor("#008000");  // Normal - Green
//     else if (temp > 30 && temp <= 60) setFillColor("orange");  // Warm - Orange
//     else if (temp > 60 && temp <= 100) setFillColor("#FFD000"); // Hot - Yellow
//   };

//   const handleRefresh = () => {
//     setTemperature(0);
//     setFillColor("orange");
//   };

//   const minTemp = -80;
//   const maxTemp = 100;
//   const fillPercent = Math.min(
//     Math.max(((temperature - minTemp) / (maxTemp - minTemp)) * 100, 0),
//     100
//   );

//   return (
//     <div style={{ textAlign: "center", paddingTop: "20px", fontFamily: "Arial" }}>
//       <h2>FPGA Temperature Monitor</h2>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div
//           style={{
//             width: "75px",
//             height: "380px",
//             background: "#e8f7fa",
//             borderRadius: "50px",
//             position: "relative",
//             border: "3px solid #96b9c4",
//             boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
//           }}
//         >
//           {/* Tick + Number Scale */}
//           <div
//             style={{
//               position: "absolute",
//               left: "10px",
//               top: "45px",
//               width: "60px",
//             }}
//           >
//             {scaleNumbers.map((num, i) => (
//               <div
//                 key={i}
//                 style={{
//                   height: "28px",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "13px",
//                     fontWeight: "bold",
//                     width: "25px",
//                   }}
//                 >
//                   {num}
//                 </span>

//                 <div
//                   style={{
//                     width: "18px",
//                     height: "2px",
//                     background: "#333",
//                   }}
//                 ></div>
//               </div>
//             ))}
//           </div>

//           {/* Tube */}
//           <div
//             style={{
//               width: "10px",
//               height: "270px",
//               background: "#ffffff",
//               borderRadius: "12px",
//               position: "absolute",
//               top: "45px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
//             }}
//           >
//             {/* Fill Level */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 width: "100%",
//                 height: `${fillPercent}%`,
//                 background: fillColor,
//                 borderRadius: "12px",
//                 transition: "height 1s, background 0.6s",
//               }}
//             ></div>
//           </div>

//           {/* Bulb */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-50px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: "20px",
//               height: "110px",
//               background: fillColor,
//               borderRadius: "50px",
//               border: "4px solid #555",
//               boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
//               transition: "background 0.6s",
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Get Temp Button */}
//       <button
//         onClick={handleTemp}
//         style={{
//           marginTop: "50px",
//           padding: "10px 25px",
//           background: "#0079FF",
//           border: "none",
//           borderRadius: "10px",
//           color: "#fff",
//           cursor: "pointer",
//           fontSize: "15px",
//           fontWeight: "bold",
//         }}
//       >
//         Get FPGA Temp
//       </button>

//       <p style={{ fontSize: "18px", marginTop: "10px" }}>
//         Current Temperature: <b>{temperature}°C</b>
//       </p>

//       {/* Refresh Button */}
//       <button
//         onClick={handleRefresh}
//         style={{
//           marginTop: "15px",
//           padding: "8px 20px",
//           background: "#FF4500",
//           border: "none",
//           borderRadius: "10px",
//           color: "#fff",
//           cursor: "pointer",
//           fontSize: "14px",
//           fontWeight: "bold",
//         }}
//       >
//         Refresh
//       </button>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import linkData from "./linkstatus.json";

// function App() {
//   const [ports, setPorts] = useState([]);

//   const loadPortsFromJson = () => {
//     const totalPorts = 16;

//     const formattedPorts = Array.from({ length: totalPorts }, (_, index) => {
//       const portInfo = linkData[index]; 
//       return {
//         id: index + 1,
//         linkstatus: portInfo ? portInfo.linkstatus : null,
//       };
//     });

//     setPorts(formattedPorts);
//   };

//   useEffect(() => {
//     loadPortsFromJson(); // Load when page opens
//   }, []);

//   // Reset Ports → all turn black
//   const resetPorts = () => {
//     setPorts((prev) =>
//       prev.map((p) => ({
//         ...p,
//         linkstatus: null,
//       }))
//     );
//   };

//   const getPortColor = (status) => {
//     if (status === 1) return "#16a34a";
//     if (status === 0) return "#dc2626";
//     return "#000000";
//   };

//   const getPortShadow = (status) => {
//     if (status === 1) return "0 0 15px #22c55e";
//     if (status === 0) return "0 0 15px #ef4444";
//     return "none";
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#1e293b",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//       }}
//     >
//       <h2 style={{ marginBottom: "20px" }}>Gigabit Switch - Port Status</h2>

//       <button
//         onClick={resetPorts}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#3b82f6",
//           color: "#fff",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//           marginBottom: "20px",
//           fontSize: "16px",
//         }}
//       >
//         Refresh (Reset)
//       </button>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(8, 1fr)",
//           gap: "20px",
//           background: "#0f172a",
//           padding: "30px",
//           borderRadius: "12px",
//           boxShadow: "0 0 25px rgba(0,0,0,0.5)",
//         }}
//       >
//         {ports.map((port) => (
//           <div
//             key={port.id}
//             style={{
//               width: "80px",
//               height: "80px",
//               borderRadius: "8px",
//               backgroundColor: getPortColor(port.linkstatus),
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               boxShadow: getPortShadow(port.linkstatus),
//               cursor: "not-allowed",
//             }}
//           >
//             <div
//               style={{
//                 width: "40px",
//                 height: "45px",
//                 backgroundColor: "#0f172a",
//                 border: "2px solid #fff",
//                 borderBottom: "none",
//                 position: "relative",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 padding: "2px",
//                 borderRadius: "2px 2px 0 0",
//               }}
//             >
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     width: "4px",
//                     height: "10px",
//                     backgroundColor: "#f8fafc",
//                     marginTop: "2px",
//                   }}
//                 ></div>
//               ))}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "-8px",
//                   left: "10px",
//                   width: "20px",
//                   height: "8px",
//                   backgroundColor: "#0f172a",
//                   border: "2px solid #fff",
//                   borderTop: "none",
//                   borderRadius: "0 0 4px 4px",
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <p style={{ marginTop: "20px", color: "#cbd5e1" }}>
//         Green = Link Up | Red = Link Down | Black = No Data
//       </p>
//     </div>
//   );
// }

// export default App;

