

// import React, { useEffect, useState } from "react";
// import linkData from "./mid1g.json";
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

//   const applyMid1G = () => {
//     setActiveMode("MID");
//     setShowTable(false);
//     setPorts((prevPorts) =>
//       prevPorts.map((port) => {
//         const data = linkData.find((item) => item.PORTNO === port.id);
//         return {
//           ...port,
//           status: data ? data.status : null,
//           MID: data ? data.MID : null,
//           temperature: null,
//         };
//       })
//     );
//   };

//   const getTempColor = (temperature) => {
//     if (!temperature && temperature !== 0) return "#000000";
//     const t = parseFloat(temperature);
//     if (t < -35) return "purple";
//     if (t <= 0) return "blue";
//     if (t <= 40) return "green";
//     if (t <= 80) return "orange";
//     return "red";
//   };

//   const applyTemp1G = () => {
//     setActiveMode("TEMP");
//     setShowTable(false);
//     setPorts((prev) =>
//       prev.map((port) => {
//         const phy = Math.ceil(port.id / 4);
//         const phyData = temp1g.find((p) => Number(p.Phy_number) === phy);
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
//       return "#000000";
//     }
//     return "#000000";
//   };

//   const getPortShadow = (port) => {
//     if (activeMode === "TEMP") {
//       if (port.temperature !== null && port.temperature !== undefined)
//         return "0 0 10px rgba(255,255,255,0.3)";
//       return "none";
//     }
//     if (activeMode === "MID") {
//       if (port.status === "GOOD") return "0 0 15px #22c55e";
//       if (port.status === "BAD") return "0 0 15px #ef4444";
//       return "none";
//     }
//     return "none";
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100%",
//         backgroundColor: "#E8EEF5",
//         padding: "40px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "30px",
//       }}
//     >
//       {/* ================= LEFT BUTTONS + PORTS + TABLE ================= */}
//       <div
//         style={{
//           display: "flex",
//           gap: "30px",
//           alignItems: "flex-start",
//           position: "relative",
//         }}
//       >
//         {/* ================= LEFT MODE BUTTONS ================= */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//           <button style={btnStyle} onClick={applyTemp1G}>
//             Temp 1G
//           </button>
//           <button style={btnStyle}>Temp 10G</button>
//           <button style={btnStyle} onClick={applyMid1G}>
//             Mid 1G
//           </button>
//           <button style={btnStyle}>Mid 10G</button>
//         </div>

//         {/* ================= PORT GRID ================== */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(4, 1fr)",
//             gap: "15px",
//             background: "#1e293b",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
//             width: "max-content",
//             minHeight: "400px",
//             justifyContent: "center",
//           }}
//         >
//           {ports.map((port) => (
//             <div
//               key={port.id}
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 borderRadius: "8px",
//                 backgroundColor: getPortColor(port),
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxShadow: getPortShadow(port),
//                 flexDirection: "column",
//               }}
//             >
//               {/* LED-style rectangular top port */}
//               <div
//                 style={{
//                   width: "40px",
//                   height: "45px",
//                   backgroundColor: "#0f172a",
//                   border: "2px solid #fff",
//                   borderBottom: "none",
//                   position: "relative",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   padding: "2px",
//                   borderRadius: "2px 2px 0 0",
//                 }}
//               >
//                 {Array.from({ length: 6 }).map((_, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       width: "4px",
//                       height: "10px",
//                       backgroundColor: "#f8fafc",
//                       marginTop: "2px",
//                     }}
//                   ></div>
//                 ))}

//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "-8px",
//                     left: "10px",
//                     width: "20px",
//                     height: "8px",
//                     backgroundColor: "#0f172a",
//                     border: "2px solid #fff",
//                     borderTop: "none",
//                     borderRadius: "0 0 4px 4px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                     fontWeight: "bold",
//                     fontSize: "10px",
//                   }}
//                 >
//                   {activeMode === "MID" ? port.MID ?? "" : ""}
//                   {activeMode === "TEMP" ? port.temperature ?? "" : ""}
//                 </div>
//               </div>

//               {/* Port Number */}
//               <span style={{ marginTop: "5px", fontWeight: "bold", color: "white" }}>
//                 {port.id}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* ================= PRINT TABLE ================= */}
//         <div
//           style={{
//             position: "absolute",
//             right: "-400px",
//             top: "0",
//             display: showTable ? "block" : "none",
//             background: "#ffffff",
//             padding: "20px",
//             borderRadius: "10px",
//             width: "350px",
//             boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
//           }}
//         >
//           <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
//             {activeMode === "TEMP" ? "Temperature Table" : "MID Table"}
//           </h3>

//           <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 {activeMode === "TEMP" ? (
//                   <>
//                     <th>PHY No</th>
//                     <th>Temp</th>
//                     <th>Status</th>
//                   </>
//                 ) : (
//                   <>
//                     <th>Port</th>
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
//                       <td>{p.status || "-"}</td>
//                       <td>{p.MID ?? "-"}</td>
//                     </tr>
//                   ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ================= BOTTOM ACTION BUTTONS ================= */}
//       <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
//         <button
//           style={{ ...btnStyle, backgroundColor: "#059669" }}
//           onClick={() => setShowTable(!showTable)}
//         >
//           Print
//         </button>

//         <button style={{ ...btnStyle, backgroundColor: "#dc2626" }} onClick={resetPorts}>
//           Refresh
//         </button>

//         <button
//           style={{ ...btnStyle, backgroundColor: "#475569" }}
//           onClick={() => alert("Home Navigation Pending")}
//         >
//           Home
//         </button>
//       </div>
//     </div>
//   );
// }

// const btnStyle = {
//   width: "130px",
//   padding: "10px",
//   backgroundColor: "#2563eb",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   fontSize: "14px",
//   fontWeight: "bold",
// };

// export default App;




import React, { useEffect, useState } from "react";
import mid1g from "./mid1g.json";
import temp1g from "./temp1g.json";
import mid10g from "./mid10g.json";
import temp10g from "./temp10g.json";

function App() {
  const [ports, setPorts] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [activeMode, setActiveMode] = useState(null); // TEMP1, TEMP10, MID1, MID10

  const loadPorts = () => {
    const totalPorts = 16;
    const formattedPorts = Array.from({ length: totalPorts }, (_, index) => ({
      id: index + 1,
      status: null,
      MID: null,
      fiber_side: null,
      host_side: null,
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

  // ---------- MID 1G ----------
  const applyMid1G = () => {
    setActiveMode("MID1");
    setShowTable(false);
    setPorts((prevPorts) =>
      prevPorts.map((port) => {
        const data = mid1g.find((item) => item.PORTNO === port.id);
        return {
          ...port,
          status: data ? data.status : null,
          MID: data ? data.MID : null,
          temperature: null,
        };
      })
    );
  };

  // ---------- TEMP 1G ----------
  const applyTemp1G = () => {
    setActiveMode("TEMP1");
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

  // ---------- TEMP 10G ----------
  const applyTemp10G = () => {
    setActiveMode("TEMP10");
    setShowTable(false);
    setPorts((prev) =>
      prev.map((port) => {
        const phy = Math.ceil(port.id / 4);
        const row = temp10g.find((p) => Number(p.Phy_number) === phy);
        return {
          ...port,
          temperature: row ? row.tempreture : null,
          status: row ? row.status : null,
          MID: null,
        };
      })
    );
  };

  // ---------- MID 10G ----------
  const applyMid10G = () => {
    setActiveMode("MID10");
    setShowTable(false);
    setPorts((prevPorts) =>
      prevPorts.map((port) => {
        const row = mid10g.find((item) => item.port_number === port.id);
        return {
          ...port,
          status: row ? row.status : null,
          fiber_side: row ? row.fiber_side : null,
          host_side: row ? row.host_side : null,
        };
      })
    );
  };

  // Color Logic
  const getTempColor = (temperature) => {
    if (!temperature && temperature !== 0) return "#000000";
    const t = parseFloat(temperature);
    if (t < -35) return "purple";
    if (t <= 0) return "blue";
    if (t <= 40) return "green";
    if (t <= 80) return "orange";
    return "red";
  };

  const getPortColor = (port) => {
    if (activeMode === "TEMP1" || activeMode === "TEMP10")
      return getTempColor(port.temperature);

    if (activeMode === "MID1" || activeMode === "MID10") {
      if (port.status === "GOOD") return "#16a34a";
      if (port.status === "BAD") return "#dc2626";
      return "#000000";
    }
    return "#000000";
  };

  const getPortShadow = (port) => {
    if (activeMode === "TEMP1" || activeMode === "TEMP10") {
      if (port.temperature !== null) return "0 0 10px rgba(255,255,255,0.3)";
      return "none";
    }
    if (activeMode === "MID1" || activeMode === "MID10") {
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
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        {/* LEFT BUTTONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "72px",backgroundColor: "white",width: "120px",
    padding: "40px",
    textAlign: "center",    marginLeft: "-350px",
} }>
          <button style={btnStyle} onClick={applyTemp1G}>
            Temp 1G
          </button>
          <button style={btnStyle} onClick={applyTemp10G}>
            Temp 10G
          </button>

          <button style={btnStyle} onClick={applyMid1G}>
            Mid 1G
          </button>
          <button style={btnStyle} onClick={applyMid10G}>
            Mid 10G
          </button>
        </div>

        {/* PORT GRID (NO CHANGES DONE!) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
            background: "rgb(0 188 212 / 9%)",
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
              {/* LED top box */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
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
                      marginTop: "25px",
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
                  {/* {activeMode === "TEMP1" || activeMode === "TEMP10"
                    ? port.temperature
                    : ""}
                  {activeMode === "MID1" ? port.MID : ""}
                  {activeMode === "MID10" ? port.status : ""} */}
                </div>
              </div>

              <span style={{ marginTop: "5px", fontWeight: "bold", color: "white" }}>
                {port.id}
              </span>
            </div>
          ))}
        </div>

        {/* PRINT TABLE SECTION */}
        <div
          style={{
            position: "absolute",
            right: "-420px",
            top: "0",
            display: showTable ? "block" : "none",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            width: "360px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            height: "550px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
            {activeMode === "TEMP1" || activeMode === "TEMP10"
              ? "Temperature Table"
              : "MID Table"}
          </h3>

          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {activeMode === "TEMP1" || activeMode === "TEMP10" ? (
                  <>
                    <th>PHY</th>
                    <th>Temp</th>
                    <th>Status</th>
                  </>
                ) : activeMode === "MID10" ? (
                  <>
                    <th>Port</th>
                    <th>Fiber</th>
                    <th>Host</th>
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
  {activeMode === "TEMP1"
    ? temp1g
        .filter((row) => Number(row.Phy_number) >= 2) // Show only ports 5–16
        .map((row, index) => (
          <tr key={index}>
            <td>{row.Phy_number}</td>
            <td>{row.tempreture}</td>
            <td>{row.status}</td>
          </tr>
        ))
    : activeMode === "TEMP10"
    ? temp10g.map((row, index) => (
        <tr key={index}>
          <td>{row.Phy_number}</td>
          <td>{row.tempreture}</td>
          <td>{row.status}</td>
        </tr>
      ))
    : activeMode === "MID10"
    ? mid10g.map((row, index) => (
        <tr key={index}>
          <td>{row.port_number}</td>
          <td>{row.fiber_side}</td>
          <td>{row.host_side}</td>
          <td>{row.status}</td>
        </tr>
      ))
    : ports
        .filter((p) => p.id >= 5) // MID 1G print → Only 5–16
        .map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.status || "-"}</td>
            <td>{p.MID || "-"}</td>
          </tr>
        ))}
</tbody>

          </table>
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div style={{ display: "flex", gap: "50px", marginTop: "-10px",border: "1px solid #b1d6e5",  width: "520px",padding: "50px",    marginLeft: "-350px" }}>
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
