'use client'
import { useState } from "react"
import Card from "./components/Card"
import Data from './Data/Data'


const page = () => {
const [uni , setUni] = useState<string>("")
const [active,setActive] = useState("")


const filtered = Data.filter((university) => {
  return(
  university.title.toLocaleLowerCase().includes(uni.toLocaleLowerCase()) ||
  university.id.toLocaleLowerCase().includes(uni.toLocaleLowerCase())
  )
})
 

  return (
    
       <div className="w-full flex justify-center items-center flex-col">
        {/* navbar */}
        <div>
          {/* icon image */}
          <div>

          </div>

          <input value={uni} onChange={(e)=> setUni(e.target.value)} placeholder="Search for uni..." type="text" />
          <button onClick={() => filtered()}></button>
        </div>

        {filtered.length  > 0 ? (
          filtered.map((university,index) => (
          <Card key={index} />
          ))
        
        ):(
          <p>this uni is not available in our system...</p>
        )}
   
  </div>

  )
}

export default page