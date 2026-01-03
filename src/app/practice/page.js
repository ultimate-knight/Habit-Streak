// "use client";
// import { useState,useEffect } from "react";
// import { Trash2,Plus } from 'lucide-react';
// import Link from "next/link";

// export default function practice(){
//     return (
//         <>
//         <div className="min-h-screen min-w-screen space-y-5  bg-[#171727] flex flex-col justify-start items-center text-white">
//             <span className="text-white font-extrabold text-4xl mt-10"><span className="text-green-400">Habit</span> Tracker</span>
//             <span className="bg-gray-600 h-0.5 w-2/3"></span>
//             <div className="flex flex-row space-x-8 mt-10">
//                 <div className="flex flex-col space-y-6">
//                 <button className="border-8 border-gray-400 rounded-full max-md:p-5 cursor-pointer max-sm:p-3 p-10"><Trash2 className="w-25 h-25 max-md:w-15 max-md:h-15" /></button>
//                 <span className="text-blue-500 font-bold text-center">Remove all</span>
//                 </div>
//                 <Link href={'/Habits'}>
//                 <div className="flex flex-col space-y-6">
//                 <button className="border-8 border-gray-400 max-md:p-5 max-sm:p-3 cursor-pointer rounded-full p-10"><Plus className="w-25 h-25 max-md:w-15 max-md:h-15" /></button> 
//                 <span className="text-blue-500 font-bold left-12 text-center">Add Task</span>         
//                 </div>
//                 </Link>
//             </div>
//         </div>
//         </>
//     )
// }



// useState checked variable
// "use client";
// import { useState } from "react";

// export default function practice(){
//     const [state,setstate]=useState(true)
//     return (
//     <>
//     <div className="flex flex-col items-center justify-start text-black bg-white min-h-screen min-w-screen">
//         <label className="font-extrabold">Hey</label>
//         <input type="checkbox" checked={state} onChange={(e)=>setstate(e.target.checked)} required/>

//         <span>{state?"i liked it":"i didn't like it"}</span>
//     </div>
//     </>
//     )
// }


//useState form variable
"use client";
import { useState } from "react";

export default function Miscellaneous(){
    const [name,setname]=useState("maaz");
    const [age,setage]=useState(0);

    function updaterfunction(){
        setage(prev=>prev+1)
        setage(prev=>prev+1)
        setage(prev=>prev+1)
        setage(prev=>prev+1)
    }
    return (
        <>
        <div className="bg-white text-black flex flex-col justify-center items-center min-h-screen min-w-screen">
            <input value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter ur name" className="border-1 border-black h-fit w-fit p-2" required/>
            <span>My name is {name}</span>
            <span>My age is {age}</span>
            <button onClick={updaterfunction} className="border-1 border-black p-2">increment</button>
        </div>
        </>
    )
}