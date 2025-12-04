import React from 'react'
import Data from '../Data/Data'
import Link from 'next/link'
const Card = () => {
  return (
    <div className='grid grid-cols-3 gap-3 mt-10'>
        {Data.map((uni,index)=> (
          <div key={index} className='relative flex flex-col w-100 border  border-black rounded-xl'>

            <div>
             <img className='h-50 w-full object-cover rounded-t-xl mb-3' src={uni.image} alt="" />
            </div>
            <div className='p-2'>

          <h1 className= ' w-full text-xl font-extrabold pb-2 '>{uni.title}</h1>
          <h2 className="font-bold">{uni.sub}</h2>
          <h2 className='w-full text-sm pb-9'>{uni.description}</h2>
          <Link href = {`/Details/${uni.id.toLocaleLowerCase()}`}> <button className='absolute right-10 bottom-3 '  >More details→</button></Link>
         
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card