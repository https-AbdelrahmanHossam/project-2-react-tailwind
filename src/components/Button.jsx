import React from "react";

const Button = ({ bgColor, color, size, text, hBgColor, hColor }) => {
  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: bgColor, color }}
        className={`hidden lg:block text-${size} rounded-full py-3 w-40 hover:${hBgColor} hover:${hColor} transition duration-300`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
