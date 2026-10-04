import React from "react";

const Robot = React.forwardRef(({ className = "" }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 150 190"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ANTENNA */}
      <g className="antenna">
        <line
          x1="75"
          y1="27"
          x2="75"
          y2="8"
          stroke="#11152c"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle
          cx="75"
          cy="6"
          r="7"
          fill="#f2bd55"
          stroke="#11152c"
          strokeWidth="4"
        />
      </g>

      {/* HEAD */}
      <g className="robot-head">
        <rect
          x="38"
          y="27"
          width="74"
          height="58"
          rx="17"
          fill="#e9edf2"
          stroke="#11152c"
          strokeWidth="5"
        />

        <rect
          x="29"
          y="43"
          width="14"
          height="27"
          rx="6"
          fill="#7da0bd"
          stroke="#11152c"
          strokeWidth="5"
        />

        <rect
          x="107"
          y="43"
          width="14"
          height="27"
          rx="6"
          fill="#7da0bd"
          stroke="#11152c"
          strokeWidth="5"
        />

        <rect
          x="48"
          y="40"
          width="54"
          height="31"
          rx="8"
          fill="#17203b"
          stroke="#11152c"
          strokeWidth="3"
        />

        {/* NORMAL EYES */}
        <g className="normal-eyes">
          <circle cx="65" cy="55" r="6" fill="#55e4dc" />
          <circle cx="85" cy="55" r="6" fill="#55e4dc" />
        </g>

        {/* ERROR EYES */}
        <g className="error-eyes">
          <path
            d="M59 49 L70 61 M70 49 L59 61"
            stroke="#ff3030"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M80 49 L91 61 M91 49 L80 61"
            stroke="#ff3030"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>

        <rect
          x="61"
          y="75"
          width="28"
          height="5"
          rx="2"
          fill="#11152c"
        />
      </g>

      {/* BODY */}
      <g className="robot-body">
        <rect
          x="36"
          y="88"
          width="78"
          height="72"
          rx="16"
          fill="#8ca4bd"
          stroke="#11152c"
          strokeWidth="5"
        />

        {/* LEFT ARM */}
        <g className="left-arm">
          <rect
            x="23"
            y="101"
            width="20"
            height="39"
            rx="9"
            fill="#6f91ad"
            stroke="#11152c"
            strokeWidth="5"
          />

          <circle
            cx="33"
            cy="110"
            r="7"
            fill="#f4b947"
            stroke="#11152c"
            strokeWidth="4"
          />
        </g>

        {/* RIGHT ARM */}
        <g className="right-arm">
          <rect
            x="107"
            y="101"
            width="20"
            height="39"
            rx="9"
            fill="#6f91ad"
            stroke="#11152c"
            strokeWidth="5"
          />

          <circle
            cx="117"
            cy="110"
            r="7"
            fill="#f4b947"
            stroke="#11152c"
            strokeWidth="4"
          />
        </g>

        {/* CHEST */}
        <rect
          x="54"
          y="101"
          width="42"
          height="31"
          rx="6"
          fill="#1c2442"
          stroke="#11152c"
          strokeWidth="3"
        />

        <circle cx="66" cy="116" r="4" fill="#f2b33d" />
        <circle cx="75" cy="116" r="4" fill="#f2b33d" />
        <circle cx="84" cy="116" r="4" fill="#f2b33d" />

        <rect
          x="60"
          y="139"
          width="30"
          height="7"
          rx="3"
          fill="#303b57"
          stroke="#11152c"
          strokeWidth="2"
        />
      </g>

      {/* FEET */}
      <g className="robot-feet">
        <rect
          x="49"
          y="156"
          width="23"
          height="15"
          rx="4"
          fill="#536e8b"
          stroke="#11152c"
          strokeWidth="4"
        />

        <rect
          x="78"
          y="156"
          width="23"
          height="15"
          rx="4"
          fill="#536e8b"
          stroke="#11152c"
          strokeWidth="4"
        />

        <rect
          x="43"
          y="168"
          width="35"
          height="9"
          rx="4"
          fill="#202941"
          stroke="#11152c"
          strokeWidth="3"
        />

        <rect
          x="72"
          y="168"
          width="35"
          height="9"
          rx="4"
          fill="#202941"
          stroke="#11152c"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
});

export default Robot;