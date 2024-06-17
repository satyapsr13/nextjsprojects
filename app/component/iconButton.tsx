'use client'
// components/IconButton.js
import React from "react";
import { IconType } from "react-icons";
interface IconButtonProps {
  icon: IconType;
  hoverColor?: string;
  size?: string;
  iconSize?: string;
  borderColor?: string;
  link?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  hoverColor = "text-blue-500",
  size = "w-16 h-16",
  iconSize = "w-8 h-8",
  borderColor = "border-gray-300",
  link,
}) => {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`flex items-center p-2 justify-center ${size} rounded-full border-2 ${borderColor} transition-colors duration-300 hover:${hoverColor}`}
    >
      <Icon className={`${iconSize}  text-white hover:${hoverColor}`} />
    </div>
  );
};

export default IconButton;
