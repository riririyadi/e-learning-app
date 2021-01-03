import React, { useContext } from "react";
import useOnClickOutside from "use-onclickoutside";

import "../styles/Dropdown.css";

function Dropdown({ isDarkMode, open, setOpen, icon, myRef, children }) {
  const ref = React.useRef();
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div ref={ref} className="dd" style={{ position: "relative" }}>
      <div onClick={() => setOpen(!open)}>{icon}</div>
      {open && (
        <ul
          className={`dd-list ${
            isDarkMode ? "dd-menu-dark" : "bg-white"
          } mt-2 shadow-sm`}
          style={{
            position: "absolute",
            top: "40px",
            transform: "translateX(-90%)",
            zIndex: 99,
            width: "180px",
            listStyle: "none",
            borderRadius: "5px",
            padding: "10px 10px",
          }}
        >
          {children}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
