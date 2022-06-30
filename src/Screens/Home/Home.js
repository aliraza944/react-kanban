import React from "react";
import ColumnHeader from "../../Component/CoulmnHeader";
import { columnsHeaders } from "../../assests/data";
export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <section
        className=" w-4/5 mt-16 h-full border-t-2 rounded-t-lg px-3"
        style={{ backgroundColor: "#100e2e" }}
      >
        <div className="w-full flex justify-center items-start border-b-2 border-yellow-400 mt-5 pb-5">
          <h1 className="text-6xl text-white">Bounties</h1>
        </div>
        <div className="w-full flex justify-between items-center mt-10">
          {columnsHeaders.map((column, index) => {
            return (
              <ColumnHeader
                key={index}
                title={column.title}
                color={column.color}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
