import React from "react";

export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <section
        className=" w-4/5 mt-16 h-36 border-t-2 rounded-t-lg"
        style={{ backgroundColor: "#100e2e" }}
      >
        <div className="w-full flex justify-center items-start border-b-2 border-yellow-400 mt-5 pb-5">
          <h1 className="text-6xl text-white">Bounties</h1>
        </div>
      </section>
    </div>
  );
};
