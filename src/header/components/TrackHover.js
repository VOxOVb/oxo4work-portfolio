import { useState } from "react";

export default function TrackHover({ id, children }) {
    const [startTime, setStartTime] = useState(0);
    const [hoverTime, setHoverTime] = useState(0);
    const handleMouseEnter = () => {
        setStartTime(Date.now());
    }
    const handleMouseLeave = () => {
        const endTime = Date.now();
        const hoverDuration = endTime - startTime;
        setHoverTime(hoverDuration);
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "hoverTime",
        hoverTime: hoverDuration,
        elementID: id
    });
    return (
        <div id={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeaveF}>
            {children}
        </div>
    )
}


