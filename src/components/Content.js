import React, { useEffect, useRef } from "react";
import "./Content.css";

const Content = ({ timeline, ease }) => {
  let h1 = useRef(null);
  let pText = useRef(null);
  let btn = useRef(null);

  useEffect(() => {
    timeline.from(
      [h1.children, pText, btn],
      1,
      {
        opacity: 0,
        y: 100,
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
      },
      "-=1"
    );
  }, []);

  return (
    <div className="content">
      <h1 className="content-inner-bold" ref={(el) => (h1 = el)}>
        <div>Hard work beats talent</div>

        <div>when talent doesn't work hard</div>
      </h1>

      <p ref={(el) => (pText = el)}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries fo previewing layouts and visual mockups.
      </p>

      <button ref={(el) => (btn = el)}>Explore</button>
    </div>
  );
};
export default Content;
