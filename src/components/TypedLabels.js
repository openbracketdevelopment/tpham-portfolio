import React from "react";
import Typed from "typed.js";
import "./TypedLabels.css";

const TypedLabels = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Developer^1000",
        "<span style='color:var(--color-06);'>Designer</span>^1000",
        "<span style='color:var(--color-01);'>Problem Solver</span>^3000",
      ],
      typeSpeed: 70,
      backSpeed: 80,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <span className="typed__big-text" ref={el} />;
};

export default TypedLabels;
