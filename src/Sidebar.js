// import React from "react";
// import "./Sidebar.css";

// export default function Sidebar() {
//   const connectors = [1, 2, 3, 4]; // 4 connectors

//   return (
//     <div className="connector-row">
//       {connectors.map((id) => (
//         <div key={id} className="outer-circle">
//           <div className="inner-circle">

//             {/* Top 2 small circles */}
//             <div className="top-holes">
//               <span className="hole small"></span>
//               <span className="hole small"></span>
//             </div>

//             {/* Bottom 2 oval ports */}
//             <div className="bottom-ports">
//               <div className="port">
//                 <div className="inner-port"></div>
//               </div>
//               <div className="port">
//                 <div className="inner-port"></div>
//               </div>
//             </div>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import linkData from "./linkstatus.json";  // Make sure path is correct

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);


  const handleRefresh = () => {
    window.location.reload();
  };



  useEffect(() => {
    console.log("Loaded JSON:", linkData);  // Debug check
    setTableData(linkData);
  }, []);

  return (
    <div className="container">
      <button className="print-btn" onClick={() => setOpen(!open)}>
        Print
      </button>
    <div>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
      {open && (
        <div className="side-panel">
          <h3>Print Preview</h3>

          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead>

            <tbody>
              {tableData.length > 0 ? (
                tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.col1}</td>
                    <td>{row.col2}</td>
                    <td>{row.col3}</td>
                    <td>{row.col4}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}




// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function PhyDiagnostic() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>PHY Diagnostic Page</h2>

//       <button
//         style={{
//           padding: "10px 20px",
//           background: "#2563eb",
//           color: "white",
//           border: "none",
//           borderRadius: "6px",
//           cursor: "pointer"
//         }}
//         onClick={() => navigate("/dashboard")}
//       >
//         Home
//       </button>
//     </div>
//   );
// }



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import PhyDiagnostic from "./Phydiagnostic";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/phydiag" element={<PhyDiagnostic />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

