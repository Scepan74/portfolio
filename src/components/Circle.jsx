import React, { useEffect, useState } from "react";

const RingAnimation = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 0 : 1));
    }, 5000);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div
      style={{
        height: "25vh", // Example container height
        width: "25vh", // Example container width
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid green",
        borderRadius: "50%",
      }}
    >
      <div
        className="circle"
        style={{
          width: "25vh",
          height: "25vh",
          borderRadius: "50%",
          border: "2px solid green",
          backgroundColor: "transparent",
          transform: `scaleY(${scale})`,
          transition: "transform 5s ease-in-out",
        }}
      ></div>
      <div
        className="circle"
        style={{
          position: "absolute",
          width: "25vh",
          height: "25vh",
          borderRadius: "50%",
          border: "2px solid green",
          backgroundColor: "transparent",
          transform: `scaleX(${scale})`,
          transition: "transform 5s ease-in-out",
        }}
      ></div>
      <div
        className="circle"
        style={{
          position: "absolute",
          width: "25vh",
          height: "25vh",
          borderRadius: "50%",
          border: "2px solid green",
          backgroundColor: "transparent",
          transform: `scale(${scale})`,
          transition: "transform 5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default RingAnimation;
