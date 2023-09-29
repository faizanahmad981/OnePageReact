/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const OutlineTimeClockCircle = ({ className }) => {
  return (
    <svg
      className={`outline-time-clock-circle ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M16 3.66675C9.18845 3.66675 3.66663 9.18857 3.66663 16.0001C3.66663 22.8116 9.18845 28.3334 16 28.3334C22.8115 28.3334 28.3333 22.8116 28.3333 16.0001C28.3333 9.18857 22.8115 3.66675 16 3.66675ZM1.66663 16.0001C1.66663 8.084 8.08388 1.66675 16 1.66675C23.916 1.66675 30.3333 8.084 30.3333 16.0001C30.3333 23.9162 23.916 30.3334 16 30.3334C8.08388 30.3334 1.66663 23.9162 1.66663 16.0001ZM16 9.66675C16.5522 9.66675 17 10.1145 17 10.6667V15.5859L20.0404 18.6263C20.4309 19.0168 20.4309 19.65 20.0404 20.0405C19.6499 20.431 19.0167 20.431 18.6262 20.0405L15.2929 16.7072C15.1053 16.5197 15 16.2653 15 16.0001V10.6667C15 10.1145 15.4477 9.66675 16 9.66675Z"
        fill="#2271E9"
        fillRule="evenodd"
      />
    </svg>
  );
};
