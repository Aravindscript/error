import React from "react";

const Monitor = React.forwardRef(({ className = "" }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 180 190"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20"
        y="15"
        width="140"
        height="105"
        rx="12"
        fill="#55b9e3"
        stroke="#11152c"
        strokeWidth="7"
      />

      <rect
        x="31"
        y="26"
        width="118"
        height="83"
        rx="5"
        fill="#f8f6f0"
        stroke="#11152c"
        strokeWidth="4"
      />

      <path
        d="M43 84 L65 53 L86 77 L109 43 L126 68 L143 46"
        fill="none"
        stroke="#11152c"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect
        x="84"
        y="120"
        width="12"
        height="42"
        fill="#20253e"
      />

      <ellipse
        cx="90"
        cy="167"
        rx="31"
        ry="8"
        fill="#20253e"
      />
    </svg>
  );
});

export default Monitor;