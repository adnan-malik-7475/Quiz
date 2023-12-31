import React from "react";
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "   ml-16 text-white mt-4 mr-4  h-10 w-[200px] hover:bg-blue-500  rounded-2xl  outline-none focus:outline-none bg-[#091d31] border-[3px] border-cyan-600 text-xl font-light"
      }
    >
      {text}
    </button>
  );
};
export default Button