//src/components/ui/button.jsx

import React from "react";

const Button = ({ children, onClick, type }) => {
  return (
    <button 
      type={type || "button"} 
      onClick={onClick} 
      className="bg-blue-500 text-white p-2 rounded">
      {children}
    </button>
  );
};

export default Button;
