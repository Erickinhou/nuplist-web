import React from 'react';

interface SelectArrowIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const SelectArrowIcon = ({ className = '', width = 16, height = 16, color = 'currentColor' }: SelectArrowIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={color}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z"
      clipRule="evenodd"
    />
  </svg>
);

export default SelectArrowIcon; 