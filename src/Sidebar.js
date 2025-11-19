// import React from "react";
// import "./Sidebar.css";

// function Sidebar() {
//   return (
//     <div className="thermo-container">
//       <div className="thermo-body">

//         {/* Scale numbers + tick marks */}
//         <div className="thermo-scale">
//           {Array.from({ length: 11 }, (_, i) => 40 - i).map(num => (
//             <div key={num} className="scale-row">
//               <div className="scale-tick"></div>
//               <span>{num}</span>
//             </div>
//           ))}
//         </div>

//         {/* Tube + mercury */}
//         <div className="thermo-tube">
//           <div className="glass-reflection"></div>
//           <div className="mercury"></div>
//         </div>

//         {/* Professional bottom metal cap */}
//         <div className="thermo-cap"></div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;





import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="fpga-container">
      <div className="fpga-box">
        <div className="label">FPGA</div>

        {/* TOP - 3 vertical lines */}
        <div className="pins top-pins">
          {[0, 1, 2].map((i) => (
            <div key={i} className="pin pin-vert" aria-hidden="true" />
          ))}
        </div>

        {/* BOTTOM - 3 vertical lines */}
        <div className="pins bottom-pins">
          {[0, 1, 2].map((i) => (
            <div key={i} className="pin pin-vert" aria-hidden="true" />
          ))}
        </div>

        {/* LEFT - 3 horizontal lines */}
        <div className="pins left-pins">
          {[0, 1, 2].map((i) => (
            <div key={i} className="pin pin-horz" aria-hidden="true" />
          ))}
        </div>

        {/* RIGHT - 3 horizontal lines */}
        <div className="pins right-pins">
          {[0, 1, 2].map((i) => (
            <div key={i} className="pin pin-horz" aria-hidden="true" />
          ))}
        </div>
      </div>
    </div>
  );
}

