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
    <div className="bg-[#1A0326] ">

  
    <div className="relative pt-10 gap-8 w-full min-h-screen flex justify-center items-center flex-col">

      {/* CARD */}
      <section className=" rounded-2xl w-[83%] h-[550px] relative">

        {/* IMAGE */}
        <img
          className="w-full h-full object-cover rounded-2xl "
          src={uni.image}
          alt={uni.id}
        />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-[#3D0366]/70 rounded-2xl"></div>


        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
          <p className="text-4xl font-bold text-stroke">{uni.title}</p>
          <p className="opacity-80">({uni.id})</p>
          <button className="mt-2 bg-white text-black px-4 py-2 rounded-md">
            Take the {uni.id} Test 🚀
          </button>
        </div>

      </section>


     {/* descriptive */}

      <div className="w-[77%] border h-full ">
        <section className={` flex justify-center text-center items-center flex-col`}>
        <h2>Why Choose {uni.id}?</h2>
        <p>{uni.description}</p>




        {/* boxes */}
        <div className="flex justify-center items-center flex-row">
        {/* box1 */}
        <div >
          <p>{uni.box1}</p>
          <p>{uni.desc1}</p>
        </div>

          {/* box2 */}
        <div>
          <p>{uni.box2}</p>
          <p>{uni.desc2}</p>
        </div>


          {/* box2 */}
        <div>
          <p>{uni.box3}</p>
          <p>{uni.desc3}</p>
        </div>


          {/* box2 */}
        <div>
          <p>{uni.box4}</p>
          <p>{uni.desc4}</p>
        </div>
        </div>


        </section>

       {/* info */}
       <section className={`flex flex-row gap-16 justify-center items-center text-center`}>
    <div>
         <p>{uni.employment}</p>
         <p>Employment rate</p>
        </div>

        <div>
          <p>{uni.alumni}</p>
          <p>Alumni worldwide</p>
        </div>

        <div>
          <p>{uni.partners}</p>
          <p>Corparate Partners</p>
        </div>
       </section>
    

        
        {/* test info  */}


        <section>
          <div className="text-center">
          <h2>Test Information</h2>
          </div>

          <div className={`grid grid-cols-2 grid-rows-2 ml-9`}>
            <p>Total Duration: {uni.duration}</p>
            <p>Questions: {uni.Questions}</p>
            <p>Calculator: {uni.Calculator}</p>
            <p>Negative: {uni.Negative}</p>
          </div>
          <div className="ml-9">
            <p>Sections: {uni.Sections}</p>
            <p>Note: {uni.Note}</p>
          </div>
        </section>

        {/* section wise breakdown :) */}

        <section>
          <h2>Section-Wise Breakdown </h2>
          <table>
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
