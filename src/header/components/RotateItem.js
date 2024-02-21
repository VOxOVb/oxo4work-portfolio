import React, { useRef, useEffect } from "react";

export default function RotateItem({ children }) {
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    const itemRect = itemRef.current.getBoundingClientRect();
    const middleX = itemRect.width / 2;
    const middleY = itemRect.width / 2;
    let offsetX = (e.clientX - itemRect.x - middleX) / 15;
    let offsetY = (e.clientY - itemRect.y - middleY) / 15;
    requestAnimationFrame(() => {
      itemRef.current.style.setProperty("--rotateX", `${offsetX}deg`);
      itemRef.current.style.setProperty("--rotateY", `${offsetY}deg`);
    });
  };

  const handleMouseOut = () => {
    requestAnimationFrame(() => {
      itemRef.current.style.setProperty("--rotateX", "0deg");
      itemRef.current.style.setProperty("--rotateY", "0deg");
    });
  };

  useEffect(() => {
    const item = itemRef.current;
    item.addEventListener("mousemove", handleMouseMove);
    item.addEventListener("mouseout", handleMouseOut);

    return () => {
      item.removeEventListener("mousemove", handleMouseMove);
      item.removeEventListener("mouseout", handleMouseOut);
    };
  }, [itemRef]);

  return (
    <div ref={itemRef} className="rotate">
      {children}
    </div>
  );
}
