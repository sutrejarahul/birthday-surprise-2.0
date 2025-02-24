import * as React from "react";

interface HeartSVGProps extends React.SVGProps<SVGSVGElement> { }

const HeartSVG = (props: HeartSVGProps) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 1.5 1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.008 0.232A0.313 0.313 0 0 0 0.75 0.368a0.313 0.313 0 0 0 -0.258 -0.136 0.313 0.313 0 0 0 -0.313 0.313c0 0.382 0.571 0.725 0.571 0.725s0.571 -0.343 0.571 -0.725a0.313 0.313 0 0 0 -0.313 -0.313"
      fill="url(#paint0_radial)"
    />
    <path
      opacity={0.5}
      d="M1.138 0.26c0.171 0.273 0.014 0.632 -0.176 0.734 -0.209 0.113 -0.352 0.06 -0.649 -0.109C0.482 1.109 0.75 1.27 0.75 1.27s0.571 -0.343 0.571 -0.725a0.313 0.313 0 0 0 -0.184 -0.285"
      fill="url(#paint1_radial)"
    />
    <path
      opacity={0.5}
      d="M1.008 0.232A0.313 0.313 0 0 0 0.75 0.368a0.313 0.313 0 0 0 -0.258 -0.136 0.313 0.313 0 0 0 -0.313 0.313c0 0.382 0.571 0.725 0.571 0.725s0.571 -0.343 0.571 -0.725a0.313 0.313 0 0 0 -0.313 -0.313"
      fill="url(#paint2_radial)"
    />
    <path
      opacity={0.5}
      d="M1.008 0.232A0.313 0.313 0 0 0 0.75 0.368a0.313 0.313 0 0 0 -0.258 -0.136 0.313 0.313 0 0 0 -0.313 0.313c0 0.382 0.571 0.725 0.571 0.725s0.571 -0.343 0.571 -0.725a0.313 0.313 0 0 0 -0.313 -0.313"
      fill="url(#paint3_radial)"
    />
    <path
      opacity={0.24}
      d="M0.672 0.359c0.031 0.074 -0.038 0.174 -0.156 0.224 -0.117 0.05 -0.238 0.03 -0.269 -0.043 -0.031 -0.074 0.038 -0.174 0.156 -0.224 0.117 -0.05 0.238 -0.031 0.269 0.043"
      fill="url(#paint4_radial)"
    />
    <path
      opacity={0.24}
      d="M1.055 0.299c0.045 0.049 0.017 0.147 -0.061 0.217 -0.078 0.071 -0.178 0.088 -0.223 0.039 -0.045 -0.049 -0.017 -0.147 0.061 -0.217C0.91 0.268 1.01 0.25 1.055 0.299"
      fill="url(#paint5_radial)"
    />
    <path
      opacity={0.32}
      d="M1.014 0.315c0.157 0.054 0.307 0.286 0.054 0.575 -0.152 0.173 -0.318 0.261 -0.528 0.226a1.906 1.906 0 0 0 0.211 0.154s0.571 -0.343 0.571 -0.725a0.314 0.314 0 0 0 -0.314 -0.313 0.313 0.313 0 0 0 -0.258 0.136s0.149 -0.092 0.264 -0.053"
      fill="url(#paint6_linear)"
    />
    <defs>
      <radialGradient
        id="paint0_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-29.408 20.598 -13.707)scale(14.3064 11.3486)"
      >
        <stop offset={0.2479} stopColor="#FF0000" />
        <stop offset={0.8639} stopColor="#C20000" />
      </radialGradient>
      <radialGradient
        id="paint1_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(10.73016 -6.0481 4.7977 8.51177 9.739 7.47)"
      >
        <stop offset={0.2479} stopColor="#FF0000" />
        <stop offset={1} stopColor="#C20000" />
      </radialGradient>
      <radialGradient
        id="paint2_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-29.408 20.598 -13.707)scale(14.3064 11.3486)"
      >
        <stop stopColor="white" stopOpacity={0.25} />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint3_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-26.296 35.528 -24.494)scale(10.4431 5.16038)"
      >
        <stop stopColor="#BD2719" stopOpacity={0.25} />
        <stop offset={1} stopColor="#BD2719" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint4_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(3.44964 -1.37214 .85235 2.14287 7.347 7.195)"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint5_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(2.3281 -2.00697 1.24678 1.44628 14.6 6.846)"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <path
        id="paint6_linear"
        x1={13.8868}
        y1={26.8498}
        x2={15.6583}
        y2={2.96408}
        gradientUnits="userSpaceOnUse"
        d=""
      >
        <stop stopColor="#860805" />
        <stop offset={1} stopColor="#BD2719" stopOpacity={0} />
      </path>
    </defs>
  </svg>
);
export default HeartSVG;
