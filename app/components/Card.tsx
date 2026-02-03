"use client";
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
  index?: number;
}

const Card = ({ uni, index = 0 }: UniversityProps) => {
  const delays = ["delay-0", "delay-100", "delay-200"];

  return (
    <div
      className={`animate-fade-up ${delays[index % 3]}`}
      style={{ animationDelay: `${Math.floor(index / 3) * 200}ms` }}
    >
      <div className="group relative h-full flex flex-col lg:w-83 xl:w-100 sm:w-92 max-sm:80 border-4 border-b-cyan-700 border-slate-300 rounded-xl hover:bg-linear-to-r from-[#5558FF]/60 to-[#00C0FF]/60">
        <div className="overflow-hidden">
          <img
            className="h-50 w-full object-cover transition-transform duration-400 rounded-t-xl ease-out group-hover:scale-105"
            src={uni.image}
            alt={uni.title}
          />
        </div>
        <div className="p-2">
          <h1 className="w-full lg:text-xl text-lg font-extrabold pb-2 bg-linear-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent group-hover:animate-textPulse">
            {uni.title}
          </h1>
          <h2 className="font-bold">{uni.sub}</h2>
          <h2 className="w-full lg:text-sm text-[15px] lg:mb-10 mm:mb-11 mb-13">
            {uni.description}
          </h2>
          <Link href={`/Details/${uni.id.toLocaleLowerCase()}`}>
            <button className="absolute lg:right-10 right-6 mt-2 py-2 px-4 rounded-xl bottom-3 bg-linear-to-r from-cyan-800 via-cyan-600 to-cyan-700 hover:from-blue-800 hover:via-blue-500 hover:to-indigo-500 shadow-lg transition-all duration-300 overflow-hidden group/btn text-white">
              <span className="relative z-10">More details →</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;