"use client";

import { Detailed_Data } from "@/app/Data/Detail"
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
    <div className="bg-linear-to-t from-[#0b0b24] to-[rgba(10,19,51,1)]

">

  
    <div className="relative pt-10 gap-8 w-full min-h-screen flex justify-center items-center flex-col">

      {/* CARD */}
      <section className=" rounded-3xl w-[84%] h-[550px] relative">

        {/* IMAGE */}
        <img
className="w-full h-full rounded-3xl object-cover shadow-2xl border-6 bg-linear-to-t from-[#060646] to-[rgba(0,54,201,1)]
"
          src={uni.image}
          alt={uni.id}
        />

<div className="absolute inset-0 bg-linear-to-t from-[rgba(6,6,71,1)] to-[rgba(0,54,201,1)]
 rounded-3xl opacity-50  "></div>


        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
          <p className="text-4xl sm:text-6xl mb-1 font-bold w-[90%] tracking-tight bg-linear-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]pb-2 text-center ">{uni.title}</p>
          <p className="opacity-80 text-cyan-300 text-md">({uni.id})</p>
          <button className="mt-3   font-bold px-15 py-3 rounded-4xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:bg-linear-to-r hover:from-cyan-300 hover:via-blue-400 hover:to-blue-400 hover:cursor-pointer">
            Take  the  {uni.id}  Test   🚀
          </button>
        </div>

      </section>



     {/* descriptive */}


<div className=" flex justify-center flex-col items-center rounded-3xl border-4 w-[81%] h-full   border-[#080840] pt-6">

<section className="flex flex-row gap-6 items-center  text-center w-full px-10 pt-6 pb-10">

  <div className="flex-1 rounded-2xl py-4 px-7 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border border-[#080840]">
    <p className="text-xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-3xl shadow-cyan-800">
      Founded
    </p>
    <p className="font-bold  text-slate-300">{uni.founded}</p>
  </div>

  <div className="flex-1 rounded-2xl py-4 px-10 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border border-[#080840]">
    <p className=" text-xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-3xl shadow-cyan-800">
      Location
    </p>
    <p className="font-bold  text-slate-300">{uni.location}</p>
  </div>

  <div className="flex-1  rounded-2xl py-4 px-10 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border border-[#080840]">
    <p className="text-xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-3xl shadow-cyan-800">
      Specialization
    </p>
    <p className="font-bold  text-slate-300"> {uni.specialized}
</p>
  </div>

</section>



    <section className={` flex h-120  border-3 rounded-3xl border-[#080840] bg-[#3636ab8b] w-[94%] text-center items-center flex-col`}>
    <h2 className="text-4xl sm:text-6xl mb-1 font-bold w-[90%] tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] pt-5 pb-7  text-center hover:shadow-3xl shadow-cyan-800 ">Why Choose {uni.id}?</h2>
    <p className="w-[89%] text-[#b1afaf] text-xl">{uni.description}</p>


    {/* boxes - MODIFIED PARENT CONTAINER HERE */}
    {/* Using flex utilities to make sure all children stretch to the height of the tallest item */}
    <div className="flex justify-between gap-7 px-4 py-7 w-full"> 
    
   
    
        {/* box1  */}
        <div className="flex flex-col border-3 rounded-2xl px-3 py-2 border-[#080840] flex-1 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)]"> 
        {/* flex-1 ensures equal width distribution */}
          <p className="font-bold  text-xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">{uni.box1}</p>
          <p className=" py-2  text-sm text-slate-300">{uni.desc1}</p>
        </div>

        {/* box2 */}
        <div className="flex flex-col border-3 rounded-2xl px-3 py-2 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border-[#080840] flex-1">
          <p className="font-bold  text-xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">{uni.box2}</p>
          <p className=" py-2  text-sm text-slate-300">{uni.desc2}</p>
        </div>

        {/* box3 */}
         <div className="flex flex-col border-3 rounded-2xl px-3 py-2 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border-[#080840] flex-1">
          <p className="font-bold  text-xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">{uni.box3}</p>
          <p className=" py-2  text-sm text-slate-300">{uni.desc3}</p>
        </div>

        {/* box4 */}
        <div className="flex flex-col border-3 rounded-2xl px-5 py-2 bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] border-[#080840] flex-1">
          <p className="font-bold  text-xl tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">{uni.box4}</p>
          <p className=" py-2   text-sm text-slate-300">{uni.desc4}</p>
        </div>

    </div>
    </section>




<div className="h-0.5 w-[98%] mt-12 bg-linear-to-r from-cyan-300 via-blue-600 to-cyan-200 "></div>

     
    

          {/* info */}
     <section className={`flex flex-row justify-center items-center mt-10  gap-10 text-center w-[90%]`}>
    
    {/* Box 1: Employment Rate */}
    <div className="rounded-xl border-2 py-7 px-10 border-[#080840] bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] flex-1">
         <p className="text-5xl font-extrabold pb-2 tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] text-center hover:shadow-3xl shadow-cyan-800">
             {uni.employment}
         </p>
         <p className="text-slate-300">Employment rate</p>
    </div>

    {/* Box 2: Alumni Worldwide */}
    <div className="rounded-xl border-2 py-7 px-10 border-[#080840] bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] flex-1">
        <p className="text-5xl font-extrabold pb-2 tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] text-center hover:shadow-3xl shadow-cyan-800">
            {uni.alumni}
        </p>
        <p className="text-slate-300">Alumni worldwide</p>
    </div>

    {/* Box 3: Corporate Partners */}
    <div className="rounded-xl border-2 py-7 px-10 border-[#080840] bg-linear-to-bl from-[rgba(41,41,71,1)] to-[rgba(19,19,72,1)] flex-1">
        <p className="text-5xl font-extrabold pb-2 tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] text-center hover:shadow-3xl shadow-cyan-800">
            {uni.partners}
        </p>
        <p className="text-slate-300">Corporate Partners</p>
    </div>
</section>

        {/* test info  */}


        <section className="bg-[#151531] border-4 py-3 rounded-2xl border-[#080840] w-[94%] my-15">
          <div className="text-center">
          <h2 className="text-4xl font-bold  tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] text-center hover:shadow-3xl shadow-cyan-800 py-6">Test Information</h2>
          </div>

          <div className={`grid grid-cols-2 grid-rows-2  gap-4 ml-9 text-blue-400 font-bold text-xl`}>
            <p >Total Duration: <span className="text-slate-300">{uni.duration}</span></p>
            <p>Questions: <span className="text-slate-300">{uni.Questions}</span></p>
            <p>Calculator: <span className="text-slate-300">{uni.Calculator}</span></p>
            <p>Negative: <span className="text-slate-300">{uni.Negative}</span></p>
          </div>
          <div className="ml-9 mt-4 text-blue-400 font-bold text-xl">
            <p>Sections: <span className="text-slate-300">{uni.Sections}</span></p>
            <p className="my-4">Note: <span className="text-slate-300 underline">{uni.Note}</span></p>
          </div>
        </section>

        {/* section wise breakdown :) */}

        <section className="bg-[#151531] border-4 py-3 rounded-2xl border-[#080840]  w-[94%] my-15 text-center">
          <h2 className="py-6 text-3xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] text-center hover:shadow-3xl shadow-cyan-800">Section-Wise Breakdown </h2>
          <table className="text-center gap-x-1.5">
          <thead>
            <tr>
              <th>Sections</th>
              <th>Questions</th>
              <th>Time</th>
              <th>Weigthage</th>
              <th>Negative</th>
            </tr>
          </thead>
            <tbody>
      {uni.sub.map((subject, index) => (
        <tr key={index}>
          <td className="">{subject}</td>
          <td className="">{uni.Ques[index]}</td>
          <td className="">{uni.time[index]} mins</td>
          <td className="">{uni.weightage[index]}</td>
          <td className="">{uni.neg[index]}</td>
        </tr>
      ))}
    </tbody>
          </table>
        </section>


      </div>
      





    </div>
   
      </div>
  );
}

export default Details;
