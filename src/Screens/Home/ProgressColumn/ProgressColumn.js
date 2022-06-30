import React from "react";
import { Card } from "../../../Component/Card/Card";

export const ProgressColumn = ({ title, description, reward, timeLeft }) => {
  return (
    <div
      className="border-l-2 border-r-2 border-r-white border-l-white mt-10 h-full px-5"
      style={{ width: "360px" }}
    >
      <Card
        description={description}
        title={title}
        reward={reward}
        timeLeft={timeLeft}
      />
    </div>
  );
};
