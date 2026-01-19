"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = [

      // Vertical Lines
      "M-64 -150L-63.9 450",
      "M-40 -150L-39.9 450",
      "M-16 -150L-15.9 450",
      "M8 -150L8.1 450",
      "M32 -150L32.1 450",
      "M56 -150L56.1 450",
      "M80 -150L80.1 450",
      "M104 -150L104.1 450",
      "M128 -150L128.1 450",
      "M152 -150L152.1 450",
      "M176 -150L176.1 450",
      "M200 -150L200.1 450",
      "M224 -150L224.1 450",
      "M248 -150L248.1 450",
      "M272 -150L272.1 450",
      "M296 -150L296.1 450",
      "M320 -150L320.1 450",
      "M344 -150L344.1 450",
      "M368 -150L368.1 450",
      "M392 -150L392.1 450",
      "M416 -150L416.1 450",
      "M440 -150L440.1 450",
      "M464 -150L464.1 450",
      "M488 -150L488.1 450",
      "M512 -150L512.1 450",
      "M536 -150L536.1 450",
      "M560 -150L560.1 450",
      "M584 -150L584.1 450",
      "M608 -150L608.1 450",
      "M632 -150L632.1 450",
      "M656 -150L656.1 450",
      "M680 -150L680.1 450",
      "M704 -150L704.1 450",
      "M728 -150L728.1 450",
      "M752 -150L752.1 450",
      "M776 -150L776.1 450",
      "M800 -150L800.1 450",
      "M824 -150L824.1 450",
      "M848 -150L848.1 450",
      "M872 -150L872.1 450",
      "M896 -150L896.1 450",
      "M920 -150L920.1 450",
      "M944 -150L944.1 450",
      "M968 -150L968.1 450",
      "M992 -150L992.1 450",
      "M1016 -150L1016.1 450",
      "M1040 -150L1040.1 450",
      "M1064 -150L1064.1 450",
      "M1088 -150L1088.1 450",
      "M1112 -150L1112.1 450",
      "M1136 -150L1136.1 450",

      // Horizontal Lines
      "M-100 -147L1150 -147.1",
      "M-100 -123L1150 -123.1",
      "M-100 -99L1150 -99.1",
      "M-100 -75L1150 -75.1",
      "M-100 -51L1150 -51.1",
      "M-100 -27L1150 -27.1",
      "M-100 -3L1150 -3.1",
      "M-100 21L1150 21.1",
      "M-100 45L1150 45.1",
      "M-100 69L1150 69.1",
      "M-100 93L1150 93.1",
      "M-100 117L1150 117.1",
      "M-100 141L1150 141.1",
      "M-100 165L1150 165.1",
      "M-100 189L1150 189.1",
      "M-100 213L1150 213.1",
      "M-100 237L1150 237.1",
      "M-100 261L1150 261.1",
      "M-100 285L1150 285.1",
      "M-100 309L1150 309.1",
      "M-100 333L1150 333.1",
      "M-100 357L1150 357.1",
      "M-100 381L1150 381.1",
      "M-100 405L1150 405.1",
      "M-100 429L1150 429.1",
      "M-100 450L1150 450.1",

    ];
    return (
      <div
        className={cn(
          "absolute inset-0 flex h-full w-full items-center justify-center -z-10 [mask-repeat:no-repeat] [mask-size:40px]",
          className,
        )}
      >
        <svg
          className="pointer-events-none absolute fixed z-0 h-full w-full "
          width="100%"
          height="100%"
          viewBox="480 -150 100 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-64 -150L-63.9 450 M-40 -150L-39.9 450 M-16 -150L-15.9 450 M8 -150L8.1 450 M32 -150L32.1 450 M56 -150L56.1 450 M80 -150L80.1 450 M104 -150L104.1 450 M128 -150L128.1 450 M152 -150L152.1 450 M176 -150L176.1 450 M200 -150L200.1 450 M224 -150L224.1 450 M248 -150L248.1 450 M272 -150L272.1 450 M296 -150L296.1 450 M320 -150L320.1 450 M344 -150L344.1 450 M368 -150L368.1 450 M392 -150L392.1 450 M416 -150L416.1 450 M440 -150L440.1 450 M464 -150L464.1 450 M488 -150L488.1 450 M512 -150L512.1 450 M536 -150L536.1 450 M560 -150L560.1 450 M584 -150L584.1 450 M608 -150L608.1 450 M632 -150L632.1 450 M656 -150L656.1 450 M680 -150L680.1 450 M704 -150L704.1 450 M728 -150L728.1 450 M752 -150L752.1 450 M776 -150L776.1 450 M800 -150L800.1 450 M824 -150L824.1 450 M848 -150L848.1 450 M872 -150L872.1 450 M896 -150L896.1 450 M920 -150L920.1 450 M944 -150L944.1 450 M968 -150L968.1 450 M992 -150L992.1 450 M1016 -150L1016.1 450 M1040 -150L1040.1 450 M1064 -150L1064.1 450 M1088 -150L1088.1 450 M1112 -150L1112.1 450 M1136 -150L1136.1 450 M-100 -147L1150 -147.1 M-100 -123L1150 -123.1 M-100 -99L1150 -99.1 M-100 -75L1150 -75.1 M-100 -51L1150 -51.1 M-100 -27L1150 -27.1 M-100 -3L1150 -3.1 M-100 21L1150 21.1 M-100 45L1150 45.1 M-100 69L1150 69.1 M-100 93L1150 93.1 M-100 117L1150 117.1 M-100 141L1150 141.1 M-100 165L1150 165.1 M-100 189L1150 189.1 M-100 213L1150 213.1 M-100 237L1150 237.1 M-100 261L1150 261.1 M-100 285L1150 285.1 M-100 309L1150 309.1 M-100 333L1150 333.1 M-100 357L1150 357.1 M-100 381L1150 381.1 M-100 405L1150 405.1 M-100 429L1150 429.1 M-100 450L1150 450.1"
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.05"
            strokeWidth="0.5"
            className=""
          ></path>

          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            ></motion.path>
          ))}
          <defs>
            {paths.map((path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              >
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                <stop stopColor="#18CCFC"></stop>
                <stop offset="32.5%" stopColor="#6344F5"></stop>
                <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>
            ))}

            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="#272727" className="dark:[stop-color:#d4d4d4]"></stop>
              <stop offset="0.243243" stopColor="#272727" className="dark:[stop-color:#d4d4d4]"></stop>

            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";
