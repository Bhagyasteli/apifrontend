// import React, { useEffect, useState } from "react";
// import linkData from "./linkstatus.json";

// function App() {
//   const [ports, setPorts] = useState([]);
//   const [showTable, setShowTable] = useState(false);

//   const loadPorts = () => {
//     const totalPorts = 16;
//     const formattedPorts = Array.from({ length: totalPorts }, (_, index) => ({
//       id: index + 1,
//       status: null,
//       MID: null,
//     }));
//     setPorts(formattedPorts);
//   };

//   useEffect(() => {
//     loadPorts();
//   }, []);

//   const resetPorts = () => {
//     setPorts((prev) =>
//       prev.map((p) => ({
//         ...p,
//         status: null,
//         MID: null,
//       }))
//     );
//     setShowTable(false);
//   };

//   const applyMid1G = () => {
//     setPorts((prevPorts) =>
//       prevPorts.map((port) => {
//         const data = linkData.find((item) => item.PORTNO === port.id);
//         return {
//           ...port,
//           status: data ? data.status : null,
//           MID: data ? data.MID : null,
//         };
//       })
//     );
//   };

//   const getPortColor = (status) => {
//     if (status === "GOOD") return "#16a34a";
//     if (status === "BAD") return "#dc2626";
//     return "brown";
//   };

//   const getPortShadow = (status) => {
//     if (status === "GOOD") return "0 0 15px #22c55e";
//     if (status === "BAD") return "0 0 15px #ef4444";
//     return "none";
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "aliceblue",
//         padding: "40px",
//         gap: "20px",
//       }}
//     >
//       {/* LEFT BUTTONS */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         <button style={btnStyle}>Temp 1G</button>
//         <button style={btnStyle}>Temp 10G</button>
//         <button style={btnStyle} onClick={applyMid1G}>
//           Mid 1G
//         </button>
//         <button style={btnStyle}>Mid 10G</button>

//         <hr style={{ width: "100%", border: "1px solid #000" }} />

//         <button
//           style={{ ...btnStyle, backgroundColor: "#059669" }}
//           onClick={() => setShowTable(true)}
//         >
//           Print
//         </button>

//         <button
//           style={{ ...btnStyle, backgroundColor: "#dc2626" }}
//           onClick={resetPorts}
//         >
//           Refresh
//         </button>

//         <button
//           style={{ ...btnStyle, backgroundColor: "#475569" }}
//           onClick={() => alert("Home Navigation Pending")}
//         >
//           Home
//         </button>
//       </div>

//       {/* PORT GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
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
//               height: "110px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <div
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 borderRadius: "8px",
//                 backgroundColor: getPortColor(port.status),
//                 boxShadow: getPortShadow(port.status),
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "space-evenly",
//                 padding: "8px",
//               }}
//             >
//               {/* Top Line */}
//               <div
//                 style={{
//                   width: "60px",
//                   height: "6px",
//                   backgroundColor: "black",
//                   borderRadius: "2px",
//                 }}
//               ></div>

//               {/* MID number */}
//               <div
//                 style={{
//                   color: "#fff",
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                 }}
//               >
//                 {port.MID ?? ""}
//               </div>

//               {/* Bottom Line */}
//               <div
//                 style={{
//                   width: "60px",
//                   height: "6px",
//                   backgroundColor: "black",
//                   borderRadius: "2px",
//                 }}
//               ></div>
//             </div>

//             <p style={{ color: "white", marginTop: "6px", fontWeight: "bold" }}>
//               {port.id}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* DATA TABLE */}
//       {showTable && (
//         <div
//           style={{
//             background: "#ffffff",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 0 10px rgba(0,0,0,0.3)",
//           }}
//         >
//           <h3 style={{ textAlign: "center" }}>Port Status Table</h3>
//           <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 <th>Port ID</th>
//                 <th>Status</th>
//                 <th>MID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ports.map((p) => (
//                 <tr key={p.id}>
//                   <td>{p.id}</td>
//                   <td>{p.status || "BROWN"}</td>
//                   <td>{p.MID ?? "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// const btnStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#3b82f6",
//   color: "#fff",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
//   fontSize: "16px",
// };

// export default App;


// import React, { useEffect, useState } from "react";
// import linkData from "./linkstatus.json";
// import temp1g from "./temp1g.json"; // 🔹 Import Temp 1G JSON

// function App() {
//   const [ports, setPorts] = useState([]);
//   const [showTable, setShowTable] = useState(false);

//   const loadPorts = () => {
//     const totalPorts = 16;
//     const formattedPorts = Array.from({ length: totalPorts }, (_, index) => ({
//       id: index + 1,
//       status: null,
//       MID: null,
//       temperature: null,
//     }));
//     setPorts(formattedPorts);
//   };

//   useEffect(() => {
//     loadPorts();
//   }, []);

//   const resetPorts = () => {
//     loadPorts();
//     setShowTable(false);
//   };

//   const applyMid1G = () => {
//     setPorts((prevPorts) =>
//       prevPorts.map((port) => {
//         const data = linkData.find((item) => item.PORTNO === port.id);
//         return {
//           ...port,
//           status: data ? data.status : null,
//           MID: data ? data.MID : null,
//         };
//       })
//     );
//   };

//   // 🔹 Temperature color rule
//   const getTempColor = (temperature) => {
//     if (temperature === null) return "brown";
//     const t = parseFloat(temperature);

//     if (t < -35) return "purple";
//     if (t <= 0) return "blue";
//     if (t <= 40) return "green";
//     if (t <= 80) return "orange";
//     return "red";
//   };

//   // 🔹 Temp1G Logic
//   const applyTemp1G = () => {
//     setPorts((prev) =>
//       prev.map((port) => {
//         const phy = Math.ceil(port.id / 4); // Assign phy for each set of 4 ports
//         const phyData = temp1g.find((p) => Number(p.Phy_number) === phy);
//         return {
//           ...port,
//           temperature: phyData ? phyData.tempreture : null,
//         };
//       })
//     );
//   };

//   // 🔹 Final port color (priority: temperature → MID → default brown)
//   const getPortColor = (port) => {
//     if (port.temperature) return getTempColor(port.temperature);
//     if (port.status === "GOOD") return "#16a34a";
//     if (port.status === "BAD") return "#dc2626";
//     return "brown";
//   };

//   const getPortShadow = (port) => {
//     if (port.temperature) return "0 0 15px #ffffff";
//     if (port.status === "GOOD") return "0 0 15px #22c55e";
//     if (port.status === "BAD") return "0 0 15px #ef4444";
//     return "none";
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "aliceblue",
//         padding: "40px",
//         gap: "20px",
//       }}
//     >
//       {/* LEFT BUTTONS */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         <button style={btnStyle} onClick={applyTemp1G}>
//           Temp 1G
//         </button>

//         <button style={btnStyle}>Temp 10G</button>

//         <button style={btnStyle} onClick={applyMid1G}>
//           Mid 1G
//         </button>

//         <button style={btnStyle}>Mid 10G</button>

//         <hr style={{ width: "100%", border: "1px solid #000" }} />

//         <button
//           style={{ ...btnStyle, backgroundColor: "#059669" }}
//           onClick={() => setShowTable(true)}
//         >
//           Print
//         </button>

//         <button
//           style={{ ...btnStyle, backgroundColor: "#dc2626" }}
//           onClick={resetPorts}
//         >
//           Refresh
//         </button>

//         <button
//           style={{ ...btnStyle, backgroundColor: "#475569" }}
//           onClick={() => alert("Home Navigation Pending")}
//         >
//           Home
//         </button>
//       </div>

//       {/* PORT GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
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
//               height: "110px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <div
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 borderRadius: "8px",
//                 backgroundColor: getPortColor(port),
//                 boxShadow: getPortShadow(port),
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#fff",
//                 fontWeight: "bold",
//               }}
//             >
//               {port.MID ?? ""}
//             </div>
//             <p style={{ color: "white", marginTop: "6px", fontWeight: "bold" }}>
//               {port.id}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* DATA TABLE */}
//       {showTable && (
//         <div
//           style={{
//             background: "#ffffff",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 0 10px rgba(0,0,0,0.3)",
//           }}
//         >
//           <h3 style={{ textAlign: "center" }}>Port Status Table</h3>

//           <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 <th>Port ID</th>
//                 <th>Status</th>
//                 <th>MID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ports.map((p) => (
//                 <tr key={p.id}>
//                   <td>{p.id}</td>
//                   <td>{p.status || "BROWN"}</td>
//                   <td>{p.MID ?? "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// const btnStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#3b82f6",
//   color: "#fff",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
//   fontSize: "16px",
// };

// export default App;


// import React, { useEffect, useState } from "react";
// import linkData from "./linkstatus.json";
// import temp1g from "./temp1g.json";

// function App() {
//   const [ports, setPorts] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [activeMode, setActiveMode] = useState(null); // TEMP or MID

//   const loadPorts = () => {
//     const totalPorts = 16;
//     const formattedPorts = Array.from({ length: totalPorts }, (_, index) => ({
//       id: index + 1,
//       status: null,
//       MID: null,
//       temperature: null,
//     }));
//     setPorts(formattedPorts);
//   };

//   useEffect(() => {
//     loadPorts();
//   }, []);

//   const resetPorts = () => {
//     loadPorts();
//     setShowTable(false);
//     setActiveMode(null);
//   };

//   // ================= MID 1G =====================
//   const applyMid1G = () => {
//     setActiveMode("MID");

//     setPorts((prevPorts) =>
//       prevPorts.map((port) => {
//         const data = linkData.find((item) => item.PORTNO === port.id);
//         return {
//           ...port,
//           status: data ? data.status : null,
//           MID: data ? data.MID : null,
//         };
//       })
//     );
//   };

//   // ================= TEMP 1G ====================
//   const getTempColor = (temperature) => {
//     if (temperature === null) return "brown";
//     const t = parseFloat(temperature);

//     if (t < -35) return "purple";
//     if (t <= 0) return "blue";
//     if (t <= 40) return "green";
//     if (t <= 80) return "orange";
//     return "red";
//   };

//   const applyTemp1G = () => {
//     setActiveMode("TEMP");

//     setPorts((prev) =>
//       prev.map((port) => {
//         const phy = Math.ceil(port.id / 4);
//         const phyData = temp1g.find(
//           (p) => Number(p.Phy_number) === phy
//         );

//         return {
//           ...port,
//           temperature: phyData ? phyData.tempreture : null,
//           status: null,
//           MID: null,
//         };
//       })
//     );
//   };

//   const getPortColor = (port) => {
//     if (activeMode === "TEMP") return getTempColor(port.temperature);
//     if (activeMode === "MID") {
//       if (port.status === "GOOD") return "#16a34a";
//       if (port.status === "BAD") return "#dc2626";
//       return "brown";
//     }
//     return "brown";
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "aliceblue",
//         padding: "40px",
//         gap: "20px",
//       }}
//     >
//       {/* ================= LEFT BUTTONS ================ */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         <button style={btnStyle} onClick={applyTemp1G}>Temp 1G</button>
//         <button style={btnStyle}>Temp 10G</button>

//         <button style={btnStyle} onClick={applyMid1G}>Mid 1G</button>
//         <button style={btnStyle}>Mid 10G</button>

//         <hr style={{ width: "100%", border: "1px solid #000" }} />

//         <button
//           style={{ ...btnStyle, backgroundColor: "#059669" }}
//           onClick={() => setShowTable(true)}
//         >
//           Print
//         </button>

//         <button
//           style={{ ...btnStyle, backgroundColor: "#dc2626" }}
//           onClick={resetPorts}
//         >
//           Refresh
//         </button>

//         <button
//           style={{ ...btnStyle, backgroundColor: "#475569" }}
//           onClick={() => alert("Home Navigation Pending")}
//         >
//           Home
//         </button>
//       </div>

//       {/* ================= PORT GRID ================== */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
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
//               height: "110px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <div
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 borderRadius: "8px",
//                 backgroundColor: getPortColor(port),
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#fff",
//                 fontWeight: "bold",
//               }}
//             >
//               {activeMode === "MID" ? port.MID ?? "" : ""}
//             </div>

//             <p style={{ color: "white", marginTop: "6px", fontWeight: "bold" }}>
//               {port.id}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* ================= PRINT TABLE ================= */}
//       {showTable && (
//         <div
//           style={{
//             background: "#ffffff",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 0 10px rgba(0,0,0,0.3)",
//           }}
//         >
//           <h3 style={{ textAlign: "center" }}>
//             {activeMode === "TEMP" ? "Temperature Table" : "MID Table"}
//           </h3>

//           <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 {activeMode === "TEMP" ? (
//                   <>
//                     <th>PHY Number</th>
//                     <th>Temperature</th>
//                     <th>Status</th>
//                   </>
//                 ) : (
//                   <>
//                     <th>Port ID</th>
//                     <th>Status</th>
//                     <th>MID</th>
//                   </>
//                 )}
//               </tr>
//             </thead>

//             <tbody>
//               {activeMode === "TEMP"
//                 ? temp1g.map((row, index) => (
//                     <tr key={index}>
//                       <td>{row.Phy_number}</td>
//                       <td>{row.tempreture}</td>
//                       <td>{row.status}</td>
//                     </tr>
//                   ))
//                 : ports.map((p) => (
//                     <tr key={p.id}>
//                       <td>{p.id}</td>
//                       <td>{p.status || "BROWN"}</td>
//                       <td>{p.MID ?? "-"}</td>
//                     </tr>
//                   ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// const btnStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#3b82f6",
//   color: "#fff",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
//   fontSize: "16px",
// };

// export default App;
///////////////////////////////////////////ports

import React, { useEffect, useState } from "react";
import linkData from "./linkstatus.json";
import temp1g from "./temp1g.json";

function App() {
  const [ports, setPorts] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [activeMode, setActiveMode] = useState(null); // TEMP or MID

  const loadPorts = () => {
    const totalPorts = 16;
    const formattedPorts = Array.from({ length: totalPorts }, (_, index) => ({
      id: index + 1,
      status: null,
      MID: null,
      temperature: null,
    }));
    setPorts(formattedPorts);
  };

  useEffect(() => {
    loadPorts();
  }, []);

  const resetPorts = () => {
    loadPorts();
    setShowTable(false);
    setActiveMode(null);
  };

  const applyMid1G = () => {
    setActiveMode("MID");
    setShowTable(false);
    setPorts((prevPorts) =>
      prevPorts.map((port) => {
        const data = linkData.find((item) => item.PORTNO === port.id);
        return {
          ...port,
          status: data ? data.status : null,
          MID: data ? data.MID : null,
          temperature: null,
        };
      })
    );
  };

  const getTempColor = (temperature) => {
    if (!temperature && temperature !== 0) return "#000000";
    const t = parseFloat(temperature);
    if (t < -35) return "purple";
    if (t <= 0) return "blue";
    if (t <= 40) return "green";
    if (t <= 80) return "orange";
    return "red";
  };

  const applyTemp1G = () => {
    setActiveMode("TEMP");
    setShowTable(false);
    setPorts((prev) =>
      prev.map((port) => {
        const phy = Math.ceil(port.id / 4);
        const phyData = temp1g.find((p) => Number(p.Phy_number) === phy);
        return {
          ...port,
          temperature: phyData ? phyData.tempreture : null,
          status: null,
          MID: null,
        };
      })
    );
  };

  const getPortColor = (port) => {
    if (activeMode === "TEMP") return getTempColor(port.temperature);
    if (activeMode === "MID") {
      if (port.status === "GOOD") return "#16a34a";
      if (port.status === "BAD") return "#dc2626";
      return "#000000";
    }
    return "#000000";
  };

  const getPortShadow = (port) => {
    if (activeMode === "TEMP") {
      if (port.temperature !== null && port.temperature !== undefined)
        return "0 0 10px rgba(255,255,255,0.3)";
      return "none";
    }
    if (activeMode === "MID") {
      if (port.status === "GOOD") return "0 0 15px #22c55e";
      if (port.status === "BAD") return "0 0 15px #ef4444";
      return "none";
    }
    return "none";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#E8EEF5",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      {/* ================= LEFT BUTTONS + PORTS + TABLE ================= */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        {/* ================= LEFT MODE BUTTONS ================= */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button style={btnStyle} onClick={applyTemp1G}>
            Temp 1G
          </button>
          <button style={btnStyle}>Temp 10G</button>
          <button style={btnStyle} onClick={applyMid1G}>
            Mid 1G
          </button>
          <button style={btnStyle}>Mid 10G</button>
        </div>

        {/* ================= PORT GRID ================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
            width: "max-content",
            minHeight: "400px",
            justifyContent: "center",
          }}
        >
          {ports.map((port) => (
            <div
              key={port.id}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "8px",
                backgroundColor: getPortColor(port),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: getPortShadow(port),
                flexDirection: "column",
              }}
            >
              {/* LED-style rectangular top port */}
              <div
                style={{
                  width: "40px",
                  height: "45px",
                  backgroundColor: "#0f172a",
                  border: "2px solid #fff",
                  borderBottom: "none",
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "2px",
                  borderRadius: "2px 2px 0 0",
                }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "4px",
                      height: "10px",
                      backgroundColor: "#f8fafc",
                      marginTop: "2px",
                    }}
                  ></div>
                ))}

                <div
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: "10px",
                    width: "20px",
                    height: "8px",
                    backgroundColor: "#0f172a",
                    border: "2px solid #fff",
                    borderTop: "none",
                    borderRadius: "0 0 4px 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "10px",
                  }}
                >
                  {activeMode === "MID" ? port.MID ?? "" : ""}
                  {activeMode === "TEMP" ? port.temperature ?? "" : ""}
                </div>
              </div>

              {/* Port Number */}
              <span style={{ marginTop: "5px", fontWeight: "bold", color: "white" }}>
                {port.id}
              </span>
            </div>
          ))}
        </div>

        {/* ================= PRINT TABLE ================= */}
        <div
          style={{
            position: "absolute",
            right: "-400px",
            top: "0",
            display: showTable ? "block" : "none",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            width: "350px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
            {activeMode === "TEMP" ? "Temperature Table" : "MID Table"}
          </h3>

          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {activeMode === "TEMP" ? (
                  <>
                    <th>PHY No</th>
                    <th>Temp</th>
                    <th>Status</th>
                  </>
                ) : (
                  <>
                    <th>Port</th>
                    <th>Status</th>
                    <th>MID</th>
                  </>
                )}
              </tr>
            </thead>

            <tbody>
              {activeMode === "TEMP"
                ? temp1g.map((row, index) => (
                    <tr key={index}>
                      <td>{row.Phy_number}</td>
                      <td>{row.tempreture}</td>
                      <td>{row.status}</td>
                    </tr>
                  ))
                : ports.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.status || "-"}</td>
                      <td>{p.MID ?? "-"}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= BOTTOM ACTION BUTTONS ================= */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <button
          style={{ ...btnStyle, backgroundColor: "#059669" }}
          onClick={() => setShowTable(!showTable)}
        >
          Print
        </button>

        <button style={{ ...btnStyle, backgroundColor: "#dc2626" }} onClick={resetPorts}>
          Refresh
        </button>

        <button
          style={{ ...btnStyle, backgroundColor: "#475569" }}
          onClick={() => alert("Home Navigation Pending")}
        >
          Home
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  width: "130px",
  padding: "10px",
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
};

export default App;


