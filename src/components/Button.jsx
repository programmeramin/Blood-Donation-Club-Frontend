import React from "react";

const Button = ({type, label, onClick}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="w-full text-medium px-2 sm:text-2xl sm:px-2 py-2 bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 rounded-lg text-white cursor-pointer mb-3"
      >
        {label}
      </button>
    </>
  );   
};

export default Button;
