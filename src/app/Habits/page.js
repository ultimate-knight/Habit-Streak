"use client";
import { useState } from "react";
import Link from "next/link";
import {Clock,List,Utensils,Droplet,Flower,PersonStanding,ShirtIcon,BrushCleaningIcon,Dumbbell,Book,TabletsIcon,AppleIcon,CarrotIcon} from "lucide-react"

const IconMap = {
  Clock,
  List,
  Utensils,
  Droplet,
  Flower,
  PersonStanding,
  ShirtIcon,
  BrushCleaningIcon,
  Dumbbell,
  Book,
  TabletsIcon,
  AppleIcon,
  CarrotIcon
};


export default function Habits(){
   const [selected,setselected]=useState("all");

   const Tasks=[
    {id:"all",label:"All",icon:<List className="w-5 h-5 mt-0.5"/>},
    {id:"time",label:"Time",icon:<Clock className="w-5 h-5 mt-0.5"/>},
    {id:"quantity",label:"Quantity",icon:<Utensils className="w-5 h-5 mt-0.5"/>}
   ]


const habitAll = [
  {id:"exercise",label:"Exercise",amount:"Time",icon:"Dumbbell"},
  {id:"medicine",label:"Take Medicine",amount:"Amount",icon:"TabletsIcon"},
  {id:"fruits",label:"Eat fruits",amount:"Amount",icon:"AppleIcon"},
  {id:"Books",label:"Read Books",amount:"Time",icon:"Book"},
  {id:"drink",label:"Drink water",amount:"Amount",icon:"Droplet"},
  {id:"meditation",label:"Meditation",amount:"Time",icon:"Flower"},
  {id:"stretching",label:"Stretching",amount:"Time",icon:"PersonStanding"},
  {id:"vegetables",label:"Eat vegetables",amount:"Amount",icon:"CarrotIcon"},
  {id:"room",label:"Clean room",amount:"Amount",icon:"BrushCleaningIcon"},
  {id:"laundary",label:"Do laundary",amount:"Amount",icon:"ShirtIcon"},
];

const habitTime = [
  {id:"exercise",label:"Exercise",amount:"Time",icon:"Dumbbell"},
  {id:"stretching",label:"Stretching",amount:"Time",icon:"PersonStanding"},
  {id:"Books",label:"Read Books",amount:"Time",icon:"Book"},
  {id:"meditation",label:"Meditation",amount:"Time",icon:"Flower"},
];

const habitAmount = [
  {id:"drink",label:"Drink water",amount:"Amount",icon:"Droplet"},
  {id:"medicine",label:"Take Medicine",amount:"Amount",icon:"TabletsIcon"},
  {id:"fruits",label:"Eat fruits",amount:"Amount",icon:"AppleIcon"},
  {id:"vegetables",label:"Eat vegetables",amount:"Amount",icon:"CarrotIcon"},
  {id:"room",label:"Clean room",amount:"Amount",icon:"BrushCleaningIcon"},
  {id:"laundary",label:"Do laundary",amount:"Amount",icon:"ShirtIcon"},
];

    return (
        <>
        <div className="min-h-screen max-sm:text-sm overflow-x-hidden min-w-screen p-10 max-[361px]:p-70 max-sm:p-20 space-y-5  bg-[#171727] flex flex-col justify-start items-center text-white">
            <div className="flex flex-row space-x-4 max-sm:text-sm">
                {

                    Tasks.map((Tak)=>{
                        return (
                            <button onClick={()=>setselected(Tak.id)} key={Tak.id} className={`px-5 py-2 flex flex-row  cursor-pointer space-x-2  rounded-full selected:bg-blue-500  border-2 border-white ${selected===Tak.id?"bg-blue-600":"bg-white/10"}`}>
                    <span>{Tak.icon}</span>
                    <span>{Tak.label}</span>
                    </button>
                        )
                    })
                    }

                    
                    
            </div>
            {
                selected==="all" &&
                <>
            <div id="reltor" className="grid reltor cursor-pointer grid-cols-[1fr_1fr] mb-10 gap-y-5 mt-10 gap-x-3">
 {habitAll.map((hab)=>{
    const IconComponent = IconMap[hab.icon]
    return (

<Link key={hab.id}  href={`/Add-Habit?label=${hab.label}&&amount=${hab.amount}&&icon=${hab.icon}`}><button  className="flex flex-col whitespace-nowrap bg-white/10 items-center justify-center space-y-3  rounded-full w-30 h-30  max-md:w-40 max-md:h-40 max-sm:w-37 max-sm:h-37 border-8 border-gray-500">
    {/* {hab.icon} */}
    
<IconComponent className="h-12 w-12 max-sm:h-13 max-sm:w-13 text-center" />
    <span className="text-center text-[11px]">{hab.label}</span>
 </button>
 </Link>
    )
 })
 }
            </div>
            </>
}


 {
                selected==="time" &&
                <>
            <div className="grid max-sm:text-sm cursor-pointer whitespace-nowrap grid-cols-[1fr_1fr] mb-10 gap-y-5 mt-10 flex flex-row space-x-3">
                
                {
                    habitTime.map((baber)=>{
                        const IconComponent = IconMap[baber.icon]
                        return (
                           
                            <Link key={baber.id} href={`/Add-Habit?label=${baber.label}&&amount=${baber.amount}&&icon=${baber.icon}`}><button   className="flex flex-col bg-white/10 items-center justify-center space-y-3 rounded-full w-30 h-30 max-md:w-40 max-md:h-40 max-sm:w-37 max-sm:h-37 border-8 border-gray-500">
                                <IconComponent className="h-12 w-12 max-sm:h-12 max-sm:w-12 text-center" />
                    {/* {baber.icon} */}
                    <span className="text-center text-[11px]">{baber.label}</span>
                </button>
                </Link>
                        )
                    })
                }

            </div>
            </>
}

 {
                selected==="quantity" &&
                <>
            <div className="grid cursor-pointer whitespace-nowrap  grid-cols-[1fr_1fr] mb-10 gap-y-5 mt-10 flex flex-row space-x-3">
                {
                    habitAmount.map((herbert)=>{
                        const IconComponent = IconMap[herbert.icon]
                        return (
                               
                                <Link  key={herbert.id} href={`/Add-Habit?label=${herbert.label}&&amount=${herbert.amount}&&icon=${herbert.icon}`}><button className="flex flex-col  bg-white/10  items-center justify-center space-y-3 rounded-full w-30 h-30 max-md:w-30 max-md:h-30 max-sm:w-37 max-sm:h-37 border-8 border-gray-500">
                                    <IconComponent className="h-12 w-12 max-sm:h-12 max-sm:w-12 text-center" />
                    
                    <span className="text-center text-[11px]">{herbert.label}</span>
                </button>
                </Link>
                        )
                    })
                
}

            </div>
            </>
}
        </div>
        </>
    )
}