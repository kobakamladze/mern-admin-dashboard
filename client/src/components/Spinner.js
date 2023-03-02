import { Box } from '@mui/material';
import React from 'react';

const Spinner = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        color="#3f51b5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
        </defs>

        <g strokeWidth="8">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 4 100 A 96 96 0 0 1 196 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 196 100 A 96 96 0 0 1 4 100"
          />

          <path
            stroke="currentColor"
            strokeLinecap="round"
            d="M 4 100 A 96 96 0 0 1 4 98"
          />
        </g>

        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1300ms"
        />
      </svg>
    </Box>
  );
};

export default Spinner;
