import * as React from "react";

export const ChipIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={24} cy={24} r={24} fill="url(#b)" fillOpacity={0.5} />
      <circle
        cx={24}
        cy={24}
        r={23.3}
        stroke="url(#c)"
        strokeOpacity={0.5}
        strokeWidth={1.399}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={15.672}
        x2={40.764}
        y1={0}
        y2={33.498}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A0B1EC" />
        <stop offset={1} stopColor="#DAE0F9" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={36.5}
        x2={3.745}
        y1={43.5}
        y2={21.431}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C8D1EE" />
        <stop offset={1} stopColor="#E6EAFA" />
      </linearGradient>
      <filter
        id="a"
        width={126.358}
        height={126.358}
        x={-39.179}
        y={-39.179}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={19.59} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_136_62"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_136_62"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
