import React from "react";

export const ActionIcon = ({ icon, onClick }) => {
  const IconComponent = icon;
  return (
    <div
      className={`w-6 h-6 bg-[#0000004D] rounded-sm flex items-center justify-center`}
      onClick={onClick}
    >
      <IconComponent color="white" size={18} />
    </div>
  );
};
