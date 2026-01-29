"use client";
import { useState } from "react";
import Card from "./components/Card";
import Data from "./Data/Data";
import Bot from "./components/Bot"

const page = () => {
  const [uni, setUni] = useState<string>("");
  const [active, setActive] = useState(false);

  const filtered = Data.filter((university) => {
    return (
      university.title
        .toLocaleLowerCase()
        .includes(uni.toLocaleLowerCase()) ||
      university.id.toLocaleLowerCase().includes(uni.toLocaleLowerCase())
    );
  });

  return (
    <>
      <div className="w-full flex justify-center h-100vh items-center flex-col relative jsx-e7a7e7348b03c68a  bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-gray-100 overflow-hidden">
        {/* navbar */}
        <div className="absolute top-0 flex w-full h-8vh px-5 bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 flex-row justify-between  pt-4 items-center">
          {/* icon image */}
          <div className="flex flex-row gap-2 justify-center items-center">
            <img className="md:w-13 md:h-13 mm:w-8 mm:h-8 w-7 h-7 mb-2 object-cover" src="./logo.png" alt="" />
            <p className="font-extrabold lg:text-4xl text-lg mm:text-2xl bg-linear-to-r from-[#5558FF] to-[#00C0FF] bg-clip-text text-transparent">
              UNI-TRACK
            </p>
          </div>

        

          <div className="max-sm:hidden">
            <p className="md:text-sm text-[11px]">Your Education, Your Future</p>
          </div>
          
        </div>
        <div className="h-0.5 w-full md:mt-18 mt-13 z-10 bg-linear-to-r from-cyan-300 via-blue-600 to-cyan-200 "></div>


        <div className="my-5">
            {/* Search Bar - Single animated container */}
          <div
            className={`absolute  lg:mb-5 mb-4 md:top-22 max-sm:top-17 right-5 flex items-center lg:rounded-full rounded-3xl  shadow-xl border border-blue-900 transition-all duration-500 ease-out overflow-hidden ${
              active ? "sm:w-80 max-sm:70" : "w-12"
            } h-12`}
          >
            {/* Search Icon */}
            <div
              onClick={() => setActive(!active)}
              className="shrink-0 lg:w-12 lg:h-12 md:w-10 md:h-10 w-10 h-10  flex items-center justify-center cursor-pointer"
            >
              <img
                className="w-6 h-6   object-cover"
                src="search-icon.png"
                alt="search"
              />
            </div>

            {/* Input Field */}
            <input
              value={uni}
              onChange={(e) => setUni(e.target.value)}
              placeholder="Search for uni..."
              type="text"
              className={`flex-1 px-2 py-2 text-sm outline-none text-slate-300 placeholder:text-slate-200 bg-transparent transition-opacity duration-300 delay-100 ${
                active ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onFocus={() => setActive(true)}
            />
          </div>
        </div>
{/* chat-bot */}
       
        <div className="bottom-10 right-4 fixed z-50">
          <Bot/>
        </div>
        <div className="md:mt-19 mt-10 text-center flex flex-col justify-center items-center">

          <h2 className="bg-linear-to-r from-[#5558FF] to-[#00C0FF] bg-clip-text text-transparent md:text-md lg:text-xl w-[96%] mm:w-[91%] md:w-[77%] text-md lg:w-[66%] max-sm:mt-3">
            Explore Pakistan's leading universities, complete admission details,
            scholarships, and entry test preparation — all in one reliable
            platform built to support your academic journey.
          </h2>
          <h3 className="text-slate-400 lg:text-lg md:w-[80%] md:text-md w-[90%] sm:text-sm mt-10 max-sm:[11px]">
            Our mission is to empower students to make informed admission
            decisions by comparing{" "}
            <span className="bg-linear-to-r from-[#5558FF] to-[#00C0FF] bg-clip-text text-transparent max-sm:[12px] font-bold">universities, programs, and entry tests —</span>
            aligned with your goals and future career path.
          </h3>
        </div>
       <h4 className="font-extrabold md:text-3xl text-2xl mt-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] text-white max-sm:text-center max-sm:w-[50%]">
        Your Gateway to Excellence
       </h4>
               <div className="h-0.5 sm:w-30 max-sm:w-10 mt-2 z-10 bg-linear-to-r from-cyan-300 via-blue-600 to-cyan-200 "></div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 lg:gap-4  gap-4 md:gap-3 md:grid-cols-2 max-sm:mx-2  my-10">
          {filtered.length > 0 ? (
            filtered.map((university, index) => (
              <Card key={university.id || index} uni={university} />
            ))
          ) : (
            <p className="col-span-full text-center min-h-screen">
              This uni is not available in our system...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default page;