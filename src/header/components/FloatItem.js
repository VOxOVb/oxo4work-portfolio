import React, { useRef, useEffect } from "react";

export default function FloatItem({ children }) {
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    const itemRect = itemRef.current.getBoundingClientRect();
    console.log(itemRect);
    const elX = e.clientX - itemRect.left - itemRect.width / 2 - 20;
    const elY = e.clientY - itemRect.top - itemRect.height / 2 + 20;
    requestAnimationFrame(() => {
      itemRef.current.style.setProperty("--x", `${elX}px`);
      itemRef.current.style.setProperty("--y", `${elY}px`);
    });
  };

  const handleMouseOut = () => {
    requestAnimationFrame(() => {
      itemRef.current.style.setProperty("--x", "0px");
      itemRef.current.style.setProperty("--y", "0px");
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
    <div ref={itemRef} className="float">
      {children}
    </div>
  );
}
