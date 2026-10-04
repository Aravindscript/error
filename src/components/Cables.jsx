import React from "react";

const Cables = React.forwardRef(({ className = "" }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 1000 390"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* LEFT CABLE */}

      <path
        className="left-cable"
        d="M135 265 C245 265 330 285 433 270"
        fill="none"
        stroke="#11152c"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* RIGHT CABLE */}

      <path
        className="right-cable"
        d="M865 265 C755 265 670 285 542 270"
        fill="none"
        stroke="#11152c"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* LEFT LOOSE END */}

      <circle
        className="left-end"
        cx="433"
        cy="270"
        r="7"
        fill="#f4b947"
        stroke="#11152c"
        strokeWidth="4"
      />

      {/* RIGHT LOOSE END */}

      <circle
        className="right-end"
        cx="542"
        cy="270"
        r="7"
        fill="#f4b947"
        stroke="#11152c"
        strokeWidth="4"
      />
    </svg>
  );
});

export default Cables;