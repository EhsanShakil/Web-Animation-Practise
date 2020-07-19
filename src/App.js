import React from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { background: "red", transform: "translateX(0vw)" },
      { background: "blue" },
      { background: "green", transform: "translateX(90vw)" },
    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: "alternate",
    },
  });
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>PlayState: {playState}</h1>
      <div
        ref={ref}
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          borderRadius: "100%",
        }}
      ></div>
    </div>
  );
}

export default App;
