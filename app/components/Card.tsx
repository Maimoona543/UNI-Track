import React from "react";
import Link from "next/link";

interface UniversityProps {
  uni: {
    id: string;
    image: string;
    title: string;
    sub: string;
    description: string;
  };
}
const Card = ({ uni }: UniversityProps) => {
  return (
    <div className="group relative h-full flex flex-col lg:w-83 xl:w-100 sm:w-92 max-sm:80 border-4 border-b-cyan-700 border-slate-300 rounded-xl hover:bg-linear-to-r from-[#5558FF]/40 to-[#00C0FF]/40  ">
      <div className="overflow-hidden">
        <img
          className="h-50 w-full  object-cover transition-transform duration-400 rounded-t-xl ease-out group-hover:scale-105"
          src={uni.image}
          alt=""
        />
      </div>
      <div className="p-2 ">
        <h1 className=" w-full lg:text-xl text-lg font-extrabold pb-2 bg-linear-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent group-hover:animate-textPulse">
          {uni.title}
        </h1>
        <h2 className="font-bold">{uni.sub}</h2>
        <h2 className="w-full lg:text-sm text-[15px] lg:mb-10 mm:mb-11 mb-13 ">{uni.description}</h2>
        <Link href={`/Details/${uni.id.toLocaleLowerCase()}`}>
          <button className="  absolute lg:right-10 right-6 mt-2 py-2 px-4 rounded-xl bottom-3 bg-linear-to-r from-cyan-800 via-cyan-600 to-cyan-700 hover:from-blue-800 hover:via-blue-500 hover:to-indigo-500 shadow-lg transition-all duration-300 overflow-hidden group/btn text-white">
            {/* Wrap text in a span to guarantee it stays on top of the sheet */}
            <span className="relative z-10">More details →</span>
          </button>
        </Link>
      </div>
      <div className="bsolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
    </div>
  );
};

export default Card;
