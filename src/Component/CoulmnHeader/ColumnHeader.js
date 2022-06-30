import React from "react";

export const ColumnHeader = ({ title, color }) => {
  return (
    <div
      className="border-t-2 rounded-t-lg py-3 px-5  border-b-4"
      style={{
        borderBottomColor: `${color}`,
        backgroundColor: "#5A4860",
        width: "360px",
      }}
    >
      <h4 className="text-2xl text-white capitalize">{title}</h4>
    </div>
  );
};
