import React from "react";

export const Card = ({ title, description, reward, timeLeft }) => {
  return (
    <div
      className="w-full rounded-t-lg rounded-b-lg mb-4"
      style={{ backgroundColor: "#5A4860" }}
    >
      <div className="flex flex-col justify-center items-start px-10 pt-8">
        <h3 className="font-bold text-lg mb-5 text-white capitalize">
          {title}
        </h3>
        <p className="text-sm mb-4 text-white">{description}</p>
      </div>
      <div
        className="w-full flex justify-between items-center py-5  rounded-lg"
        style={{ backgroundColor: "#C4C4C4" }}
      >
        <div className="ml-10">
          <p className="text-sm">Reward: ${reward}</p>
        </div>
        <div className="mr-10">
          <p className="text-sm">Time Left:{timeLeft} days</p>
        </div>
      </div>
    </div>
  );
};
