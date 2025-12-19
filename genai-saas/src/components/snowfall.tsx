"use client";

import Snowfall from "react-snowfall";

export function SnowfallEffect() {
  return (
    <Snowfall
      snowflakeCount={80}
      radius={[0.5, 2.5]}
      speed={[0.3, 1]}
      wind={[-0.2, 0.2]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        pointerEvents: "none",
      }}
    />
  );
}
