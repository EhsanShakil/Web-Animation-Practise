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
      duration: 6000,
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
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => getAnimation().play()}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "white",
            outline: "none",
            width: "100px",
            height: "100px",
            border: "5px solid black",
            borderRadius: "100%",
          }}
        >
          Play
        </button>
        <button
          onClick={() => getAnimation().pause()}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "white",
            outline: "none",
            width: "100px",
            height: "100px",
            border: "5px solid black",
            borderRadius: "100%",
          }}
        >
          Pause
        </button>
        <button
          onClick={() =>
            getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.2)
          }
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "white",
            outline: "none",
            width: "100px",
            height: "100px",
            border: "5px solid black",
            borderRadius: "100%",
          }}
        >
          High
        </button>
        <button
          onClick={() =>
            getAnimation().updatePlaybackRate(getAnimation().playbackRate * 0.8)
          }
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "white",
            outline: "none",
            width: "100px",
            height: "100px",
            border: "5px solid black",
            borderRadius: "100%",
          }}
        >
          Low
        </button>
      </div>
    </div>
  );
}

export default App;
