import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css";

function App() {
  const robotPosition = useRef(null);
  const robotShake = useRef(null);

  const leftCable = useRef(null);
  const rightCable = useRef(null);

  const leftEnd = useRef(null);
  const rightEnd = useRef(null);

  const normalEyes = useRef(null);
  const redEyes = useRef(null);

  const checkingText = useRef(null);
  const errorBox = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* =========================
         POSITIONS
      ========================= */

      // Monitor cable connection
      const monitor = {
        x: 210,
        y: 330
      };

      // CPU cable connection
      const cpu = {
        x: 1053,
        y: 290
      };

      // Robot hands while on floor
      const groundLeft = {
        x: 558,
        y: 388
      };

      const groundRight = {
        x: 642,
        y: 388
      };

      // Robot hands while robot is up
      const topLeft = {
        x: 558,
        y: 215
      };

      const topRight = {
        x: 642,
        y: 215
      };

      // Cable ends after disconnect
      const floorLeft = {
        x: 480,
        y: 450
      };

      const floorRight = {
        x: 720,
        y: 450
      };


      /* =========================
         CABLE PATH
      ========================= */

      function leftPath(end) {
        return `
          M ${monitor.x} ${monitor.y}
          C 300 330,
            410 ${end.y - 15},
            ${end.x} ${end.y}
        `;
      }

      function rightPath(end) {
        return `
          M ${cpu.x} ${cpu.y}
          C 950 305,
            790 ${end.y - 15},
            ${end.x} ${end.y}
        `;
      }


      /* =========================
         INITIAL STATE
      ========================= */

      // Robot on floor
      gsap.set(robotPosition.current, {
        attr: {
          transform: "translate(525 278)"
        }
      });

      // Robot not shaking
      gsap.set(robotShake.current, {
        x: 0,
        y: 0,
        rotation: 0,
        transformOrigin: "50% 88%"
      });

      // Cables initially lying down
      gsap.set(leftCable.current, {
        attr: {
          d: leftPath(floorLeft)
        }
      });

      gsap.set(rightCable.current, {
        attr: {
          d: rightPath(floorRight)
        }
      });

      gsap.set(leftEnd.current, {
        attr: {
          cx: floorLeft.x,
          cy: floorLeft.y
        }
      });

      gsap.set(rightEnd.current, {
        attr: {
          cx: floorRight.x,
          cy: floorRight.y
        }
      });

      // Normal eyes
      gsap.set(normalEyes.current, {
        opacity: 1
      });

      // Red eyes hidden
      gsap.set(redEyes.current, {
        opacity: 0
      });

      // Checking visible
      gsap.set(checkingText.current, {
        opacity: 1
      });

      // 404 hidden initially
      gsap.set(errorBox.current, {
        opacity: 0
      });


      /* =========================
         MAIN LOOP
      ========================= */

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.6
      });


      /* =========================
         1. START
         CHECKING THE NETWORK
      ========================= */

      tl.to({}, {
        duration: 1
      });


      /* =========================
         2. CONNECT LEFT CABLE
      ========================= */

      tl.to(
        leftCable.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            d: leftPath(groundLeft)
          }
        },
        "connect"
      );

      tl.to(
        leftEnd.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            cx: groundLeft.x,
            cy: groundLeft.y
          }
        },
        "connect"
      );


      /* =========================
         3. CONNECT RIGHT CABLE
      ========================= */

      tl.to(
        rightCable.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            d: rightPath(groundRight)
          }
        },
        "connect"
      );

      tl.to(
        rightEnd.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            cx: groundRight.x,
            cy: groundRight.y
          }
        },
        "connect"
      );


      /* Small pause after cables connect */

      tl.to({}, {
        duration: 0.25
      });


      /* =========================
         4. ROBOT GOES UP
         
         IMPORTANT:
         CHECKING STAYS VISIBLE
      ========================= */

      tl.to(
        robotPosition.current,
        {
          duration: 1.4,
          ease: "power2.inOut",
          attr: {
            transform: "translate(525 105)"
          }
        },
        "lift"
      );

      // LEFT CABLE FOLLOWS ROBOT
      tl.to(
        leftCable.current,
        {
          duration: 1.4,
          ease: "power2.inOut",
          attr: {
            d: leftPath(topLeft)
          }
        },
        "lift"
      );

      // RIGHT CABLE FOLLOWS ROBOT
      tl.to(
        rightCable.current,
        {
          duration: 1.4,
          ease: "power2.inOut",
          attr: {
            d: rightPath(topRight)
          }
        },
        "lift"
      );

      // LEFT END FOLLOWS HAND
      tl.to(
        leftEnd.current,
        {
          duration: 1.4,
          ease: "power2.inOut",
          attr: {
            cx: topLeft.x,
            cy: topLeft.y
          }
        },
        "lift"
      );

      // RIGHT END FOLLOWS HAND
      tl.to(
        rightEnd.current,
        {
          duration: 1.4,
          ease: "power2.inOut",
          attr: {
            cx: topRight.x,
            cy: topRight.y
          }
        },
        "lift"
      );


      /* =========================
         5. ROBOT REACHES TOP
         
         CHECKING STILL SHOWS
      ========================= */

      tl.to({}, {
        duration: 0.35
      });


      /* =========================
         6. SHAKE STARTS
         
         EXACT MOMENT:
         CHECKING -> 404 ERROR
      ========================= */

      tl.to(
        checkingText.current,
        {
          duration: 0.12,
          opacity: 0
        }
      );

      tl.to(
        errorBox.current,
        {
          duration: 0.12,
          opacity: 1
        },
        "<"
      );


      /* =========================
         7. RED EYES
      ========================= */

      tl.to(
        normalEyes.current,
        {
          duration: 0.08,
          opacity: 0
        }
      );

      tl.to(
        redEyes.current,
        {
          duration: 0.08,
          opacity: 1
        },
        "<"
      );


      /* =========================
         8. ROBOT SHAKING
      ========================= */

      tl.to(robotShake.current, {
        keyframes: [
          {
            x: -6,
            rotation: -4,
            duration: 0.08
          },
          {
            x: 6,
            rotation: 4,
            duration: 0.08
          },
          {
            x: -5,
            rotation: -3,
            duration: 0.08
          },
          {
            x: 5,
            rotation: 3,
            duration: 0.08
          },
          {
            x: -4,
            rotation: -3,
            duration: 0.08
          },
          {
            x: 4,
            rotation: 3,
            duration: 0.08
          },
          {
            x: 0,
            rotation: 0,
            duration: 0.08
          }
        ],
        ease: "none"
      });


      /* =========================
         9. HOLD AFTER SHOCK
      ========================= */

      tl.to({}, {
        duration: 0.35
      });


      /* =========================
         10. DISCONNECT CABLES
      ========================= */

      tl.to(
        leftCable.current,
        {
          duration: 0.35,
          ease: "power2.in",
          attr: {
            d: leftPath(floorLeft)
          }
        },
        "disconnect"
      );

      tl.to(
        rightCable.current,
        {
          duration: 0.35,
          ease: "power2.in",
          attr: {
            d: rightPath(floorRight)
          }
        },
        "disconnect"
      );

      tl.to(
        leftEnd.current,
        {
          duration: 0.35,
          ease: "power2.in",
          attr: {
            cx: floorLeft.x,
            cy: floorLeft.y
          }
        },
        "disconnect"
      );

      tl.to(
        rightEnd.current,
        {
          duration: 0.35,
          ease: "power2.in",
          attr: {
            cx: floorRight.x,
            cy: floorRight.y
          }
        },
        "disconnect"
      );


      /* =========================
         11. ROBOT FALLS DOWN
      ========================= */

      tl.to(
        robotPosition.current,
        {
          duration: 0.8,
          ease: "power2.in",
          attr: {
            transform: "translate(525 278)"
          }
        }
      );

      tl.to(
        robotShake.current,
        {
          duration: 0.8,
          rotation: 82,
          ease: "power2.in"
        },
        "<"
      );


      /* =========================
         12. LANDING
      ========================= */

      tl.to(robotShake.current, {
        duration: 0.12,
        x: -5,
        y: 3
      });

      tl.to(robotShake.current, {
        duration: 0.12,
        x: 4,
        y: 0
      });

      tl.to(robotShake.current, {
        duration: 0.4,
        rotation: 0,
        x: 0,
        y: 0,
        ease: "power2.out"
      });


      /* =========================
         13. NORMAL EYES
      ========================= */

      tl.to(
        redEyes.current,
        {
          duration: 0.15,
          opacity: 0
        }
      );

      tl.to(
        normalEyes.current,
        {
          duration: 0.15,
          opacity: 1
        },
        "<"
      );


      /* =========================
         14. HIDE 404
         
         NEXT LOOP WILL SHOW
         CHECKING AGAIN
      ========================= */

      tl.to(errorBox.current, {
        duration: 0.15,
        opacity: 0
      });


      /* =========================
         15. CABLES CONNECT AGAIN
      ========================= */

      tl.to(
        leftCable.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            d: leftPath(groundLeft)
          }
        },
        "reconnect"
      );

      tl.to(
        rightCable.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            d: rightPath(groundRight)
          }
        },
        "reconnect"
      );

      tl.to(
        leftEnd.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            cx: groundLeft.x,
            cy: groundLeft.y
          }
        },
        "reconnect"
      );

      tl.to(
        rightEnd.current,
        {
          duration: 0.7,
          ease: "power2.out",
          attr: {
            cx: groundRight.x,
            cy: groundRight.y
          }
        },
        "reconnect"
      );


      /* =========================
         16. CHECKING AGAIN
      ========================= */

      tl.to(checkingText.current, {
        duration: 0.2,
        opacity: 1
      });

      tl.to({}, {
        duration: 0.7
      });

    });

    return () => ctx.revert();
  }, []);


  return (
    <main className="page">

      {/* ================= HEADER ================= */}

      <div className="header">

        {/* CHECKING TEXT */}
        <div
          ref={checkingText}
          className="checking"
        >
          CHECKING THE NETWORK...
        </div>

        {/* 404 ERROR */}
        <div
          ref={errorBox}
          className="error-box"
        >
          <h1>404</h1>
          <h2>ERROR</h2>
        </div>

      </div>


      {/* ================= SCENE ================= */}

      <div className="scene">

        <svg
          viewBox="0 0 1200 500"
          className="svg-scene"
        >

          {/* GREEN FLOOR */}

          <rect
            x="0"
            y="450"
            width="1200"
            height="50"
            className="floor"
          />

          <line
            x1="0"
            y1="450"
            x2="1200"
            y2="450"
            className="floor-line"
          />


          {/* ================= MONITOR ================= */}

          <g transform="translate(30 260)">

            <rect
              x="10"
              y="10"
              width="170"
              height="125"
              rx="8"
              className="monitor-frame"
            />

            <rect
              x="22"
              y="22"
              width="146"
              height="101"
              rx="4"
              className="screen"
            />

            <path
              d="M38 38 H75"
              className="screen-line"
            />

            <rect
              x="78"
              y="135"
              width="35"
              height="45"
              className="monitor-stand"
            />

            <rect
              x="52"
              y="176"
              width="88"
              height="9"
              rx="4"
              className="monitor-base"
            />

            {/* Monitor cable connector */}
            <circle
              cx="180"
              cy="70"
              r="9"
              className="connector"
            />

          </g>


          {/* ================= CPU ================= */}

          <g transform="translate(1045 210)">

            <rect
              x="8"
              y="8"
              width="105"
              height="232"
              rx="7"
              className="cpu-body"
            />

            <rect
              x="20"
              y="25"
              width="81"
              height="190"
              rx="4"
              className="cpu-front"
            />

            <rect
              x="31"
              y="40"
              width="58"
              height="24"
              rx="3"
              className="cpu-slot"
            />

            <rect
              x="31"
              y="75"
              width="58"
              height="24"
              rx="3"
              className="cpu-slot"
            />

            <circle
              cx="60"
              cy="125"
              r="6"
              className="power"
            />

            <circle
              cx="60"
              cy="150"
              r="4"
              className="cpu-light"
            />

            <rect
              x="28"
              y="182"
              width="65"
              height="18"
              rx="3"
              className="cpu-bottom"
            />

            {/* CPU cable connector */}
            <circle
              cx="8"
              cy="80"
              r="9"
              className="connector"
            />

          </g>


          {/* ================= CABLES ================= */}

          <g>

            <path
              ref={leftCable}
              className="cable"
              d="M210 330 C300 330 410 435 480 450"
            />

            <path
              ref={rightCable}
              className="cable"
              d="M1053 290 C950 305 790 435 720 450"
            />

            {/* cable ends */}

            <circle
              ref={leftEnd}
              cx="480"
              cy="450"
              r="8"
              className="cable-end"
            />

            <circle
              ref={rightEnd}
              cx="720"
              cy="450"
              r="8"
              className="cable-end"
            />

          </g>


          {/* ================= ROBOT ================= */}

          <g
            ref={robotPosition}
            transform="translate(525 278)"
          >

            <g
              ref={robotShake}
              className="robot"
            >

              {/* HEAD */}

              <rect
                x="30"
                y="0"
                width="90"
                height="58"
                rx="14"
                className="robot-head"
              />

              {/* antenna */}

              <line
                x1="75"
                y1="0"
                x2="75"
                y2="-18"
                className="antenna"
              />

              <circle
                cx="75"
                cy="-23"
                r="6"
                className="antenna-light"
              />


              {/* NORMAL EYES */}

              <g ref={normalEyes}>

                <circle
                  cx="55"
                  cy="27"
                  r="6"
                  className="normal-eye"
                />

                <circle
                  cx="95"
                  cy="27"
                  r="6"
                  className="normal-eye"
                />

              </g>


              {/* RED EYES */}

              <g
                ref={redEyes}
                opacity="0"
              >

                <circle
                  cx="55"
                  cy="27"
                  r="7"
                  className="red-eye"
                />

                <circle
                  cx="95"
                  cy="27"
                  r="7"
                  className="red-eye"
                />

              </g>


              {/* mouth */}

              <rect
                x="58"
                y="42"
                width="34"
                height="5"
                rx="2"
                className="mouth"
              />


              {/* BODY */}

              <rect
                x="25"
                y="38"
                width="100"
                height="115"
                rx="16"
                className="robot-body"
              />

              <rect
                x="35"
                y="50"
                width="80"
                height="85"
                rx="10"
                className="robot-inner"
              />


              {/* LEFT ARM */}

              <line
                x1="25"
                y1="78"
                x2="-3"
                y2="110"
                className="arm"
              />

              <circle
                cx="33"
                cy="110"
                r="8"
                className="hand"
              />


              {/* RIGHT ARM */}

              <line
                x1="125"
                y1="78"
                x2="153"
                y2="110"
                className="arm"
              />

              <circle
                cx="117"
                cy="110"
                r="8"
                className="hand"
              />


              {/* LEGS */}

              <line
                x1="55"
                y1="153"
                x2="48"
                y2="176"
                className="leg"
              />

              <line
                x1="95"
                y1="153"
                x2="102"
                y2="176"
                className="leg"
              />

              <rect
                x="38"
                y="174"
                width="25"
                height="7"
                rx="3"
                className="foot"
              />

              <rect
                x="87"
                y="174"
                width="25"
                height="7"
                rx="3"
                className="foot"
              />

            </g>

          </g>

        </svg>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="bottom-text">
        <h3>Oops! Page Not Found</h3>

        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button >
          Go Home
        </button>
      </div>

    </main>
  );
}

export default App;