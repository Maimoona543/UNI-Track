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
    <div className="group relative h-full rounded-2xl flex flex-col w-full sm:w-96 md:w-90 lg:w-80 xl:w-[400px] border-4 border-b-cyan-700 border-slate-300 hover:bg-linear-to-r hover:from-[#5558FF]/60 hover:to-[#00C0FF]/60 transition-colors">
      <div className="overflow-hidden rounded-t-xl">
        <img
          className="h-48 sm:h-52 w-full object-cover transition-transform duration-500 rounded-t-xl ease-out group-hover:scale-110"
          src={uni.image}
          alt={uni.title}
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h1 className="w-full text-lg lg:text-xl font-extrabold pb-2 bg-linear-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent group-hover:animate-textPulse">
          {uni.title}
        </h1>
        <h2 className="font-bold text-slate-200">{uni.sub}</h2>
        <h2 className="w-full text-sm lg:text-base mb-16 text-slate-300">
          {uni.description}
        </h2>
        <Link href={`/Details/${uni.id.toLocaleLowerCase()}`}>
          <button className="absolute right-4 lg:right-8 bottom-4 py-2 px-4 rounded-xl bg-linear-to-r from-cyan-800 via-cyan-600 to-cyan-700 hover:from-blue-800 hover:via-blue-500 hover:to-indigo-500 shadow-lg transition-all duration-300 overflow-hidden group/btn text-white font-semibold">
            <span className="relative z-10">More details →</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}

export default Card;