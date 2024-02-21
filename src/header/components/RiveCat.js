import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function RiveCat() {
  const { rive, setCanvasRef, setContainerRef } = useRive({
    src: "./images/cat-tracking.riv",
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  const numX = useStateMachineInput(rive, "State Machine 1", "mouseX", 50);
  const numY = useStateMachineInput(rive, "State Machine 1", "mouseY", 50);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!numX || !numY) return;
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;
      numX.value = (e.clientX / maxWidth) * 100;
      numY.value = (e.clientY / maxHeight) * 100;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [numX, numY]);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={setContainerRef}>
      <canvas
        ref={setCanvasRef}
        style={{ width: "100%", height: "100%" }}
      ></canvas>
    </div>
  );
}
