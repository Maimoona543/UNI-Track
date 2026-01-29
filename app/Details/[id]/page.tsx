"use client";

import { Detailed_Data } from "@/app/Data/Detail"
import Link from "next/link";
import { useParams } from 'next/navigation'

const Details = () => {


const { id } = useParams();

const uni = Detailed_Data.find(
  (u) => u.id.toLowerCase() === (Array.isArray(id) ? id[0] : id)?.toLowerCase()
);


  if (!uni) {
    return <div>University not found</div>;
  }

  return (
    <div className="bg-linear-to-t from-[#0b0b24] to-[rgba(10,19,51,1)] w-full

">

  
    <div className="relative pt-10 gap-8 w-full min-h-screen flex justify-center items-center flex-col">

      {/* CARD */}
      <section className=" sm:rounded-3xl sm:w-[84%]  max-sm:full sm:h-[550px] max-sm:h-[350px] max-sm:rounded-xl relative">

        {/* IMAGE */}
        <img
className="w-full h-full sm:rounded-3xl  max-sm:rounded-xl object-cover shadow-2xl border-6 bg-linear-to-t from-[#060646] to-[rgba(0,54,201,1)]
"
          src={uni.image}
          alt={uni.id}
        />

<div className="absolute inset-0 max-sm:rounded-xl  bg-linear-to-t from-[rgba(6,6,71,1)] to-[rgba(0,54,201,1)]
 sm:rounded-3xl opacity-50  "></div>


        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
          <p className="text-4xl sm:text-6xl mb-1 font-bold w-[90%] tracking-tight bg-linear-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]pb-2 text-center ">{uni.title}</p>
          <p className="opacity-80 text-cyan-300 text-md">({uni.id})</p>
          <Link href={`/Details/${uni.id.toLowerCase()}/Test`}>
          <button className="mt-3   font-bold px-15 py-3 rounded-4xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:bg-linear-to-r hover:from-cyan-300 hover:via-blue-400 hover:to-blue-400 hover:cursor-pointer">
            Take  the  {uni.id}  Test   🚀
          </button>
          </Link>
        </div>

      </section>



     {/* descriptive */}


<div className=" flex justify-center flex-col items-center lg:rounded-3xl lg:border-4 lg:w-[81%] w-[99%] h-full   lg:border-[#080840] pt-6">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch text-center w-full px-10 pt-6 pb-10">

  <div className="flex-1 rounded-2xl py-4 px-7 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border border-[#0f1fab]">
    <p className="text-xl  font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-3xl shadow-cyan-800">
      Founded
    </p>
    <p className="font-bold  text-slate-300">{uni.founded}</p>
  </div>

  <div className="flex-1 rounded-2xl py-4 px-10 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border border-[#0f1fab]">
    <p className=" text-xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-3xl shadow-cyan-800">
      Location
    </p>
    <p className="font-bold  text-slate-300">{uni.location}</p>
  </div>

  <div className="flex-1  rounded-2xl py-4 px-10 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border border-[#0f1fab]">
    <p className="text-xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-3xl shadow-cyan-800">
      Specialization
    </p>
    <p className="font-bold  text-slate-300"> {uni.specialized}
</p>
  </div>

</section>



    <section className={` flex h-full  border-3 rounded-3xl border-[#080840] bg-[#3636ab8b] lg:w-[94%] w-[90%] text-center items-center flex-col`}>
    <h2 className="text-4xl  lg:text-6xl mb-1 font-bold w-[90%] tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] pt-5 pb-7  text-center hover:shadow-3xl shadow-cyan-800 ">Why Choose {uni.id}?</h2>
    <p className="w-[89%] text-[#b1afaf] text-start text-xl">{uni.description}</p>

{/* boxes - MODIFIED PARENT CONTAINER HERE */}
<div className="grid lg:grid-cols-4 sm:grid-cols-2 max-sm:gid-cols-1 justify-between gap-5 px-4   py-10 w-full items-stretch"> 
    {/* 1. Added items-stretch to ensure all children take full height of the row */}

    {/* box1 */}
    <div className="flex flex-col border-3 rounded-2xl p-5 border-[#110840] flex-1 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)]"> 
        {/* 2. Unified padding to 'p-5' across all boxes for visual consistency */}
        <p className="font-bold text-xl  tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            {uni.box1}
        </p>
        <p className="py-2 text-sm  text-slate-300">{uni.desc1}</p>
    </div>

    {/* box2 */}
    <div className="flex flex-col border-3 rounded-2xl p-5 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border-[#080840] flex-1">
        <p className="font-bold text-xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            {uni.box2}
        </p>
        <p className="py-2 text-sm text-slate-300">{uni.desc2}</p>
    </div>

    {/* box3 */}
    <div className="flex flex-col border-3 rounded-2xl p-5 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border-[#080840] flex-1">
        <p className="font-bold text-xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            {uni.box3}
        </p>
        <p className="py-2 text-sm text-slate-300">{uni.desc3}</p>
    </div>

    {/* box4 */}
    <div className="flex flex-col border-3 rounded-2xl p-5 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border-[#080840] flex-1">
        <p className="font-bold text-xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            {uni.box4}
        </p>
        <p className="py-2 text-sm text-slate-300">{uni.desc4}</p>
    </div>
</div>
    </section>




<div className="h-0.5 w-[98%] mt-12 bg-linear-to-r from-cyan-300 via-blue-600 to-cyan-200 "></div>

     
    

  {/* info section */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-[90%] mx-auto">
    
    {/* Box 1: Employment Rate */}
    <div className="flex flex-col text-center justify-center items-center rounded-xl border py-7 px-10 border-[#0f1fab] bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] h-full">
         <p className="text-5xl font-extrabold pb-2 tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
             {uni.employment}
         </p>
         <p className="text-slate-300">Employment rate</p>
    </div>

    {/* Box 2: Alumni Worldwide */}
    <div className="flex flex-col text-center justify-center items-center rounded-xl border py-7 px-10 border-[#0f1fab] bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] h-full">
        <p className="text-5xl font-extrabold pb-2 tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            {uni.alumni}
        </p>
        <p className="text-slate-300">Alumni worldwide</p>
    </div>

    {/* Box 3: Corporate Partners */}
    <div className="flex flex-col text-center justify-center items-center rounded-xl border py-7 px-10  border-[#0f1fab]  bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] h-full">
        <p className="text-5xl font-extrabold pb-2 tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            {uni.partners}
        </p>
        <p className="text-slate-300">Corporate Partners</p>
    </div>
</section>

        {/* test info  */}


        <section className="bg-[#151531] hover:shadow-mxl shadow-blue-500 border-2 py-3 rounded-2xl border-[#080840] w-[94%] my-15">
          <div className="text-center">
          <h2 className="text-4xl font-bold  tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] text-center  py-8">Test Information</h2>
          </div>

          <div className={`grid grid-cols-2 grid-rows-2  gap-6 ml-9 text-blue-400 font-bold text-xl max-sm:text-lg`}>
<p>

    Total Duration: <span className="text-slate-300 max-sm:text-md">{uni.duration}</span>
  
</p>
            <p>Questions: <span className="text-slate-300 max-sm:text-md max-sm:font-light">{uni.Questions}</span></p>
            <p>Calculator: <span className="text-slate-300 max-sm:text-md max-sm:font-light">{uni.Calculator}</span></p>
            <p>Negative: <span className="text-slate-300 max-sm:text-md max-sm:font-light">{uni.Negative}</span></p>
          </div>
          <div className="ml-9 mt-6 text-blue-400 font-bold text-xl">
            <p>Sections: <span className="text-slate-300 max-sm:text-md max-sm:font-light">{uni.Sections}</span></p>
            <p className="my-6">Note: <span className="text-slate-300 underline max-sm:text-md max-sm:font-light">{uni.Note}</span></p>
          </div>
        </section>

        {/* section wise breakdown :) */}

        <section className="bg-[#151531] border-2 pt-3 max-sm:section-scroll  max-sm:overflow-x-auto rounded-2xl border-[#080840]  w-[94%] my-15 text-center">
          <h2 className="py-6 text-3xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] text-center hover:shadow-3xl shadow-cyan-800">Section-Wise Breakdown </h2>
          <table className="text-center w-full gap-x-2 ">
          <thead className="">
              <tr className="text-blue-300  font-extrabold bg-blue-800/40 text-md">             
              <th className="py-3">Sections</th>
              <th>Questions</th>
              <th>Time</th>
              <th>Weigthage</th>
              <th>Negative</th>
            </tr>
          </thead>
     <tbody className="border-t border-blue-700/50">
  {uni.sub.map((subject, index) => {
// check krrhe ka last elemet ha ya nahi ....so nicha ka border hata sakain
const isLast = index === uni.sub.length - 1;

    return (
      <tr 
        key={index} 
        className="text-slate-300 text-md hover:bg-blue-800/10 "
      >
     
        <td className={`py-4 px-4  ${isLast ? 'border-b-0' : 'border-b border-blue-700/50'}`}>
          {subject}
        </td>
        <td className={`py-4 px-4  text-center ${isLast ? 'border-b-0' : 'border-b  border-[#0f1fab] '}`}>
          {uni.Ques[index]}
        </td>
        <td className={`py-4 px-4  text-center ${isLast ? 'border-b-0' : 'border-b  border-[#0f1fab] '}`}>
          {uni.time[index]} mins
        </td>
        <td className={`py-4 px-4  text-center ${isLast ? 'border-b-0' : 'border-b  border-[#0f1fab] '}`}>
          {uni.weightage[index]}
        </td>
        <td className={`pt-4 px-4  text-center ${isLast ? 'border-b-0' : 'border-b  border-[#0f1fab] '}`}>
          {uni.neg[index]}
        </td>
      </tr>
    );
  })}
</tbody>
          </table>
        </section>


      </div>
      





    </div>
   
      </div>
  );
}

export default Details;
