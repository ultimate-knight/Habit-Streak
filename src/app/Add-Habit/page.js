"use client";
export const dynamic = 'force-dynamic'
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";


export default function AddHabit(){
    const params=useSearchParams();
    const router=useRouter();

    const label=params.get('label');
    const amount=params.get('amount');
    const icon=params.get("icon");

    const [value, setValue] = useState("");

    function saveHabit() {
    const newHabit = {
      id: Date.now(),
      label,      
      icon,   
      amount,        
      total: Number(value),     
      progress: 0,
    };

    // store in localStorage
    const existing = JSON.parse(localStorage.getItem("habits") || "[]");
    existing.push(newHabit);
    localStorage.setItem("habits", JSON.stringify(existing));

    router.push("/"); // go to home page
  }

    return (
        <>
         <div className="min-h-screen  min-w-screen text-white fixed inset-0 flex flex-col items-center justify-center bg-black">
        
        {/* <div  className="flex flex-col max-h-[376px]:h-2/10 max-w-[923px] min-2xl:w-2/12 max-2xl:h-2/12 max-sm:w-2/3 max-sm:h-2/6  justify-start items-center  space-y-3 bg-white border-1 border-black  w-2/8 h-2/7  rounded-lg"> */}
            <div
  className="
    flex flex-col
    w-2/3
    sm:w-2/5
    md:w-1/2
    lg:w-1/3
    max-w-[923px]

    min-h-[200px]
    p-10

    max-[375px]:h-2/10

    justify-center
    items-center
    space-y-3

    bg-white
    border
    border-black
    rounded-lg
  "
>   
                <span className="font-extrabold   text-black">Add {label}</span>
                <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} placeholder={`enter ${amount}`} className="text-black bg-white rounded-lg p-2 border-1 border-black  w-2/3"/>
                <div className="flex flex-row space-x-20 max-sm:space-x-5">
                    <a href="/Habits"><button  className="text-white bg-red-700 p-2 rounded-lg w-2/2 h-2/2">cancel</button></a>
                    <button onClick={saveHabit} className="text-white bg-green-700 p-2 rounded-lg w-2/2 h-2/2">save</button>
                
                
                </div>
        </div>
    </div>
        </>

    )
}
