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
  const handleMouseMove = (e) => {
    setHandleHover(e);
  };
  const handleMouseOut = () => {
    setHandleHover("");
  };
  const handleBtnMouseMove = (e) => {
    setHandleBtnHover(e);
  };
  const handleBtnMouseOut = () => {
    setHandleBtnHover("");
  };
  const handleOnClick = (e) => {
    setHandleHover("");
    setHandleBtnHover("");
    setHandleToggle(true);
    setHandleBtnClick(e);
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
                onMouseMove={() => handleBtnMouseMove("catquiz")}
                onMouseOut={handleBtnMouseOut}
                onClick={() => handleOnClick(0)}
              >
                MeowMastery
              </button>
              <button
                className={handleHover === "uiux" ? "div-hover" : ""}
                onMouseMove={() => handleBtnMouseMove("uiux")}
                onMouseOut={handleBtnMouseOut}
                onClick={() => handleOnClick(1)}
              >
                UI/UX
              </button>
              <button
                className={handleHover === "programing" ? "div-hover" : ""}
                onMouseMove={() => handleBtnMouseMove("programing")}
                onMouseOut={handleBtnMouseOut}
                onClick={() => handleOnClick(9)}
              >
                Programing
              </button>
              <button
                className={handleHover === "about" ? "div-hover" : ""}
                onMouseMove={() => handleBtnMouseMove("about")}
                onMouseOut={handleBtnMouseOut}
                onClick={() => handleOnClick(12)}
              >
                About Me
              </button>
            </div>
            <div
              className="catquiz"
              onMouseMove={() => handleMouseMove("catquiz")}
              onMouseOut={handleMouseOut}
              onClick={() => handleOnClick(0)}
            >
              <div
                className={
                  handleBtnHover === "catquiz"
                    ? "div-content btn-hover-effect"
                    : "div-content"
                }
              ></div>
            </div>
            <div
              className={
                handleBtnHover === "uiux"
                  ? "uiux btn-hover-effect-uiux"
                  : "uiux"
              }
              onMouseMove={() => handleMouseMove("uiux")}
              onMouseOut={handleMouseOut}
              onClick={() => handleOnClick(1)}
            >
              <RotateItem />
            </div>
            <div
              className="programing"
              onMouseMove={() => handleMouseMove("programing")}
              onMouseOut={handleMouseOut}
              onClick={() => handleOnClick(9)}
            >
              <div
                className={
                  handleBtnHover === "programing"
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
                  handleBtnHover === "programing"
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
                  handleBtnHover === "programing"
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
                  handleBtnHover === "programing"
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
              onMouseMove={() => handleMouseMove("about")}
              onMouseOut={handleMouseOut}
              onClick={() => handleOnClick(12)}
            >
              <div
                className={
                  handleBtnHover === "about" ? "text btn-hover-effect" : "text"
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
            <div className="blank"></div>
            <div className="emoji"></div>
          </div>
          <div className="device-alert"></div>
        </header>
      )}
    </>
  );
}
