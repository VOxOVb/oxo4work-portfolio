import Catquiz from "./components/Catquiz";
import Uiux from "./components/Uiux";
import Programing from "./components/Programing";
import About from "./components/About";
import { useEffect } from "react";
export default function Section({
  handleToggle,
  setHandleToggle,
  scrollPosition,
  setScrollPosition,
  setHandleBtnClick,
}) {
  useEffect(() => {
    const handleKeyboard = (e) => {
      if (e.code === "ArrowDown") {
        e.preventDefault();
        if (scrollPosition === 12) return;
        setScrollPosition((scrollPosition) => scrollPosition + 1);
      } else if (e.code === "ArrowUp") {
        e.preventDefault();
        if (scrollPosition === 0) return;
        setScrollPosition((scrollPosition) => scrollPosition - 1);
      }
    };
    const handleScrollbar = () => {
      const viweport = document.body.getBoundingClientRect().height / 13;
      const scrollbarValue = Math.round(window.scrollY / viweport);
      setScrollPosition(scrollbarValue);
    };
    window.addEventListener("keydown", handleKeyboard);
    window.addEventListener("scrollend", handleScrollbar);
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      window.removeEventListener("scrollend", handleScrollbar);
    };
  }, [scrollPosition, setScrollPosition]);
  useEffect(() => {
    window.scrollTo({
      top: scrollPosition * window.innerHeight,
      behavior: "smooth",
    });
  }, [scrollPosition]);

  const handleOnClick = () => {
    setHandleToggle(false);
    setScrollPosition(0);
    setHandleBtnClick(null);
  };
  return (
    <>
      {handleToggle === true && (
        <section>
          <ul className="nav-box">
            <li>
              <button onClick={handleOnClick}>Menu</button>
            </li>
            <li>
              <button
                className={scrollPosition === 0 ? "light" : ""}
                onClick={() => setScrollPosition(0)}
              >
                Meow Mastery
              </button>
            </li>
            <li>
              <button
                className={
                  scrollPosition >= 1 && scrollPosition < 8 ? "light" : ""
                }
                onClick={() => setScrollPosition(1)}
              >
                UI/UX
              </button>
            </li>
            <li>
              <button
                className={
                  scrollPosition >= 8 && scrollPosition <= 11 ? "light" : ""
                }
                onClick={() => setScrollPosition(9)}
              >
                Programing/程式小巧思
              </button>
            </li>
            <li>
              <button
                className={scrollPosition === 12 ? "light" : ""}
                onClick={() => setScrollPosition(12)}
              >
                About Me
              </button>
            </li>
          </ul>
          <div className="content">
            <Catquiz />
            <Uiux />
            <Catquiz />
            <Programing />
            <About />
          </div>
          <div className="guide-box">
            <div
              className={
                scrollPosition <= 3
                  ? "guide-down"
                  : scrollPosition >= 12
                  ? "guide-up"
                  : null
              }
            ></div>
          </div>
        </section>
      )}
    </>
  );
}
