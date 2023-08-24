import React from "react";

const Cards = ({ imgSrc }) => {
  return (
    <div className="p-10 flex flex-col bg-white border border-[#0000001a] hover:border-[#081158] transition duration-200 rounded-md">
      <blockquote>
        <p className="mb-9 text-lg f text-[#00000080]">
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
      </blockquote>
      <div className="flex gap-3">
        <img
          src={imgSrc}
          alt="person_1"
          className="rounded-full w-[40px] h-[40px]"
        />
        <div className="flex flex-col">
          <h1 className="text-base text-black font-light">Michelle Alisson</h1>
          <p className="text-sm text-[#00000080]">Director at Google</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
