import React, { useState } from "react";
import data from "./Fpga_Temp.json";

export default function Sidebar() {
  const scaleNumbers = [100, 80, 60, 40, 20, 0, -20, -40, -60, -80];

  const [temperature, setTemperature] = useState(0);
  const [fillColor, setFillColor] = useState("orange");

  const handleTemp = () => {
    const temp = parseFloat(data[0].temprature);
    setTemperature(temp);

    if (temp <= -80) setFillColor("#002BFF");
    else if (temp > -80 && temp <= -40) setFillColor("#7000A3");
    else if (temp > -40 && temp <= 0) setFillColor("#008000");
    else if (temp > 0 && temp <= 40) setFillColor("orange");
    else if (temp > 40 && temp <= 80) setFillColor("#FFD000");
    else if (temp > 80) setFillColor("red");
  };

  const minTemp = -80;
  const maxTemp = 100;
  const fillPercent = Math.min(
    Math.max(((temperature - minTemp) / (maxTemp - minTemp)) * 100, 0),
    100
  );

  return (
    <div style={{ textAlign: "center", paddingTop: "20px", fontFamily: "Arial" }}>
      <h2>FPGA Temperature Monitor</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100px",
            height: "380px",
            background: "#e8f7fa",
            borderRadius: "50px",
            position: "relative",
            border: "3px solid #96b9c4",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          {/* Tick + Number Scale */}
          <div
            style={{
              position: "absolute",
              left: "10px",
              top: "45px",
              width: "60px",
            }}
          >
            {scaleNumbers.map((num, i) => (
              <div
                key={i}
                style={{
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    width: "25px",
                  }}
                >
                  {num}
                </span>

                <div
                  style={{
                    width: "18px",
                    height: "2px",
                    background: "#333",
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Tube */}
          <div
            style={{
              width: "22px",
              height: "270px",
              background: "#ffffff",
              borderRadius: "12px",
              position: "absolute",
              top: "45px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            }}
          >
            {/* Fill Level */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: `${fillPercent}%`,
                background: fillColor,
                borderRadius: "12px",
                transition: "height 1s, background 0.6s",
              }}
            ></div>
          </div>

          {/* Bulb */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "50px",
              height: "70px",
              background: fillColor,
              borderRadius: "50px",
              border: "4px solid #555",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
              transition: "background 0.6s",
            }}
          ></div>
        </div>
      </div>

      <button
        onClick={handleTemp}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          background: "#0079FF",
          border: "none",
          borderRadius: "10px",
          color: "#fff",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Get FPGA Temp
      </button>

      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Current Temperature: <b>{temperature}°C</b>
      </p>
    </div>
  );
}
