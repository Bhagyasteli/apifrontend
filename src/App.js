import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard() {
  const [memory, setMemory] = useState(0);
  const [flash, setFlash] = useState(0);
  const [cpu, setCpu] = useState(0);

  useEffect(() => {
    const animateValue = (setter, end, duration = 1200) => {
      let start = 0;
      const increment = end / (duration / 20);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(interval);
        } else {
          setter(parseFloat(start.toFixed(1)));
        }
      }, 20);
    };

    animateValue(setMemory, 72);
    animateValue(setFlash, 90);
    animateValue(setCpu, 58.4);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>System Health Status</h2>

      <div style={styles.cards}>
        {/* Memory Utilization */}
        <div style={styles.card}>
          <CircularProgressbar
            value={memory}
            text={`${memory}%`}
            styles={buildStyles({
              pathColor: "#16a34a", // green
              textColor: "#0f172a",
              trailColor: "#e2e8f0",
              textSize: "14px",
            })}
          />
          <p style={styles.label}>Memory Utilization</p>
        </div>

        {/* Flash */}
        <div style={styles.card}>
          <CircularProgressbar
            value={flash}
            text={`${flash}%`}
            styles={buildStyles({
              pathColor: "#2563eb", // blue
              textColor: "#0f172a",
              trailColor: "#e2e8f0",
              textSize: "14px",
            })}
          />
          <p style={styles.label}>Flash Usage</p>
        </div>

        {/* CPU Average Load */}
        <div style={styles.card}>
          <CircularProgressbar
            value={cpu}
            text={`${cpu}`}
            styles={buildStyles({
              pathColor: "#f59e0b", // amber
              textColor: "#0f172a",
              trailColor: "#e2e8f0",
              textSize: "14px",
            })}
          />
          <p style={styles.label}>CPU Average Load</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "60%",              // reduced width for standard layout
    margin: "40px auto",
    background: "#f8fafc",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    color: "#1e293b",
    marginBottom: "25px",
    fontWeight: "600",
    borderBottom: "2px solid #e2e8f0",
    paddingBottom: "8px",
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  card: {
    background: "#ffffff",
    padding: "18px",
    width: "110px",           // smaller width
    height: "130px",          // smaller height
    borderRadius: "10px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  label: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#475569",
    fontWeight: "500",
    textAlign: "center",
  },
};

export default Dashboard;
