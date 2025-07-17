import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-orange-500 border-b"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white hover:cursor-pointer ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;