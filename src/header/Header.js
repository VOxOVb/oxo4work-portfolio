import { useEffect, useState } from "react";
import RiveCat from "./components/RiveCat";
import RotateItem from "./components/RotateItem";
export default function Header({
  handleToggle,
  setHandleToggle,
  setScrollPosition,
  handleBtnClick,
  setHandleBtnClick,
}) {
  const [handleHover, setHandleHover] = useState("");
  const [handleBtnHover, setHandleBtnHover] = useState("");
  const [startTime, setStartTime] = useState(0);

  const handleMouseEnter = (elementID) => {
    setHandleHover(elementID);
    setStartTime( Date.now());

  };
  const handleMouseLeave = (elementID) => {
    const endTime =  Date.now();
    const hoverTime = Math.ceil( (endTime - startTime) / 1000);
    console.log(hoverTime);
    setHandleHover("");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "hoverTime",
      hoverTime: hoverTime,
      elementID: elementID,
    });

  };
  const handleBtnMouseEnter = (elementID) => {
    setHandleBtnHover(elementID);
  };
  const handleBtnMouseLeave = (elementID) => {
    const endTime =  Date.now();
    const hoverTime = Math.ceil( (endTime - startTime) / 1000);
    setHandleBtnHover("");
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "hoverTime",
      hoverTime: hoverTime,
      elementID: elementID,
    });
  };
  const handleOnClick = (elementID) => {
    setHandleHover("");
    setHandleBtnHover("");
    setHandleToggle(true);
    setHandleBtnClick(elementID);
  };
  useEffect(() => {
    if (handleBtnClick) {
      setTimeout(() => setScrollPosition(handleBtnClick), 950);
    }
  }, [handleBtnClick, setScrollPosition]);
  return (
    <>
      {(handleToggle === false || handleToggle === null) && (
        <header>
          <div className="container">
            <div className="nav">
              <button className="index">Index</button>

              <button
                className={handleHover === "catquiz" ? "div-hover" : ""}
                onMouseEnter={() => handleBtnMouseEnter("btn-catquiz")}
                onMouseLeave={() => handleBtnMouseLeave("btn-catquiz")}
                onClick={() => handleOnClick(0)}
              >
                MeowMastery
              </button>
              <button
                className={handleHover === "uiux" ? "div-hover" : ""}
                onMouseEnter={() => handleBtnMouseEnter("btn-uiux")}
                onMouseLeave={() => handleBtnMouseLeave("btn-uiux")}
                onClick={() => handleOnClick(1)}
              >
                UI/UX
              </button>
              <button
                className={handleHover === "programing" ? "div-hover" : ""}
                onMouseEnter={() => handleBtnMouseEnter("btn-programing")}
                onMouseLeave={() => handleBtnMouseLeave("btn-programing")}
                onClick={() => handleOnClick(9)}
              >
                Programing
              </button>
              <button
                className={handleHover === "about" ? "div-hover" : ""}
                onMouseEnter={() => handleBtnMouseEnter("btn-about")}
                onMouseLeave={() => handleBtnMouseLeave("btn-about")}
                onClick={() => handleOnClick(12)}
              >
                About Me
              </button>
            </div>
            <div
              className="catquiz"
              onMouseEnter={() => handleMouseEnter("catquiz")}
              onMouseLeave={() => handleMouseLeave("catquiz")}
              onClick={() => handleOnClick(0)}
            >
              <div
                className={
                  handleBtnHover === "btn-catquiz"
                    ? "div-content btn-hover-effect"
                    : "div-content"
                }
              ></div>
            </div>
            <div
              className={
                handleBtnHover === "btn-uiux"
                  ? "uiux btn-hover-effect-uiux"
                  : "uiux"
              }
              onMouseEnter={() => handleMouseEnter("uiux")}
              onMouseLeave={() => handleMouseLeave("uiux")}
              onClick={() => handleOnClick(1)}
            >
              <RotateItem />
            </div>
            <div
              className="programing"
              onMouseEnter={() => handleMouseEnter("programing")}
              onMouseLeave={() => handleMouseLeave("programing")}
              onClick={() => handleOnClick(9)}
            >
              <div
                className={
                  handleBtnHover === "btn-programing"
                    ? "line active-1"
                    : "line line-1"
                }
              >
                <p>
                  <span style={{ color: "#e9b584" }}>const</span>
                  <span style={{ color: "#ebeb9f" }}>randomPick</span>
                  <span style={{ color: "#ebebeb" }}>{`= (arr) => {`}</span>
                </p>
              </div>
              <div
                className={
                  handleBtnHover === "btn-programing"
                    ? "line active-2"
                    : "line line-2"
                }
              >
                <p>
                  <span style={{ color: "#e9b584" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;const
                  </span>
                  <span style={{ color: "#ebebeb" }}>{`random =`}</span>
                  <span style={{ color: "#ebeb9f" }}>Math</span>
                  <span style={{ color: "#ebebeb" }}>.</span>
                  <span style={{ color: "#ebeb9f" }}>round</span>
                  <span style={{ color: "#ebebeb" }}>{`(`}</span>
                  <span style={{ color: "#ebeb9f" }}>Math</span>
                  <span style={{ color: "#ebebeb" }}>.</span>
                  <span style={{ color: "#ebeb9f" }}>random</span>
                  <span style={{ color: "#ebebeb" }}>{`()*arr.length);)`}</span>
                </p>
              </div>
              <div
                className={
                  handleBtnHover === "btn-programing"
                    ? "line active-3"
                    : "line line-3"
                }
              >
                <p>
                  <span style={{ color: "#e9b584" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;const
                  </span>
                  <span
                    style={{ color: "#ebebeb" }}
                  >{`randomNickname = arr[random];`}</span>
                </p>
              </div>
              <div
                className={
                  handleBtnHover === "btn-programing"
                    ? "line active-4"
                    : "line line-4"
                }
              >
                <p>
                  <span style={{ color: "#ebebeb" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`};`}
                  </span>
                </p>
              </div>
            </div>
            <div
              className="about"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={() => handleMouseLeave("about")}
              onClick={() => handleOnClick(12)}
            >
              <div
                className={
                  handleBtnHover === "btn-about" ? "text btn-hover-effect" : "text"
                }
              >
                <h1>UI/UX</h1>
                <h1>Front-end</h1>
                <h3>UI/UX</h3>
                <h3>Front-end</h3>
              </div>
            </div>
            <div className="riveCat">
              <RiveCat />
            </div>
            <div className="blank"
              onMouseEnter={() => handleMouseEnter("blank")}
              onMouseLeave={() => handleMouseLeave("blank")}></div>
            <div className="emoji"
              onMouseEnter={() => handleMouseEnter("emoji")}
              onMouseLeave={() => handleMouseLeave("emoji")}></div>
          </div>
          <div className="device-alert"></div>
        </header>
      )}
    </>
  );
}
