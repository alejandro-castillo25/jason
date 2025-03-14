import { GetIcon } from "./Icons";
import { SidebarContent } from "./SidebarContent";

import { useState, useEffect, useRef } from "react";

const FPSCounter = () => {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: DOMHighResTimeStamp) => {
    if (!previousTimeRef.current) previousTimeRef.current = time;

    const deltaTime = time - previousTimeRef.current;
    frameCount.current++;

    if (deltaTime >= 1000) {
      setFps(Math.round((frameCount.current * 1000) / deltaTime));
      frameCount.current = 0;
      previousTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div
      style={{
        pointerEvents: "none",
      }}
      className="fixed top-1 right-12 bg-black/70 text-white p-2 px-4 rounded 
                    font-mono text-sm z-[9999] backdrop-blur-sm shadow-lg 
                    border border-white/10"
    >
      <span className="text-blue-500">FPS:</span> {fps}
      <div
        className="absolute bottom-0 left-0 h-1 bg-blue-500/80 
                      transition-all duration-200"
        style={{ width: `${(Math.min(fps, 60) / 60) * 100}%` }}
      />
    </div>
  );
};

export function Header() {
  return (
    <>
      <FPSCounter />
      <header
        id="jasonHeader"
        className="overflow-hidden box-border h-[4.5rem] w-full items-center flex flex-row pl-6 bg-(--primary) border-b-4 border-b-(--border)"
        style={{ transition: "height 200ms linear, border 200ms linear" }}
      >
        <h1 className=" font-semibold text-4xl text-white">Jason</h1>
        <GetIcon
          name="Logo"
          className="aspect-square w-auto h-full scale-75 text-white"
        />

        <SidebarContent />
      </header>
    </>
  );
}
