import { useState } from "react";
import Header from "./header/Header";
import Section from "./section/Section";
export default function App() {
  const [handleToggle, setHandleToggle] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [handleBtnClick, setHandleBtnClick] = useState(null);
  return (
    <div className="App">
      {handleToggle === true ? (
        <div key={handleToggle} className="circle-pink"></div>
      ) : handleToggle === false ? (
        <div key={handleToggle} className="circle-blue"></div>
      ) : (
        ""
      )}
      <Header
        handleToggle={handleToggle}
        setHandleToggle={setHandleToggle}
        setScrollPosition={setScrollPosition}
        handleBtnClick={handleBtnClick}
        setHandleBtnClick={setHandleBtnClick}
      />
      <Section
        handleToggle={handleToggle}
        setHandleToggle={setHandleToggle}
        scrollPosition={scrollPosition}
        setScrollPosition={setScrollPosition}
        setHandleBtnClick={setHandleBtnClick}
      />
    </div>
  );
}
