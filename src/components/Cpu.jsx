import React from "react";

const CPU = React.forwardRef(({ className = "" }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 110 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="8"
        width="94"
        height="224"
        rx="13"
        fill="#090b19"
        stroke="#11152c"
        strokeWidth="6"
      />

      <rect
        x="18"
        y="20"
        width="74"
        height="57"
        rx="7"
        fill="#17194b"
        stroke="#11152c"
        strokeWidth="4"
      />

      <circle cx="42" cy="49" r="4" fill="#e8edf3" />
      <circle cx="68" cy="49" r="4" fill="#e8edf3" />

      <rect
        x="18"
        y="83"
        width="74"
        height="57"
        rx="7"
        fill="#17194b"
        stroke="#11152c"
        strokeWidth="4"
      />

      <circle cx="42" cy="112" r="4" fill="#e8edf3" />
      <circle cx="68" cy="112" r="4" fill="#e8edf3" />

      <rect
        x="18"
        y="146"
        width="74"
        height="70"
        rx="7"
        fill="#17194b"
        stroke="#11152c"
        strokeWidth="4"
      />

      <circle cx="42" cy="181" r="4" fill="#e8edf3" />
      <circle cx="68" cy="181" r="4" fill="#e8edf3" />
    </svg>
  );
});

export default CPU;