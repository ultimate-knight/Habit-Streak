"use client";
import { useState, useEffect } from "react";
import { Trash2, Plus } from 'lucide-react';
import TimeProgressCircle from "@/Components/TimeProgressCircle";
import AmountProgressCircle from "@/Components/AmountProgressCircle";
import Link from "next/link";


export default function HomePage() {
  const [habits, setHabits] = useState([]);


  function updateprogress(id,newprogress){
    setHabits(prev=>{
      const updated=[...prev];
      const index=updated.findIndex(h=>h.id===id);
      if(index!==-1){
          updated[index].progress=newprogress;
      }
      localStorage.setItem("habits",JSON.stringify(updated));
      return updated;
    }
    )
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("habits") || "[]");
    setHabits(saved);
  }, []);

  function removeAll() {
    localStorage.removeItem("habits");
    setHabits([]);
  }

  return (
    <div className="min-h-screen min-w-screen space-y-5 bg-[#171727] p-10 flex flex-col justify-start items-center text-white">
      
      <span className="text-white font-extrabold text-4xl">
        <span className="text-green-400">Habit</span> Tracker
      </span>
      <span className="bg-gray-600 h-0.5 w-2/3"></span>

      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {habits.map((hab,i) =>{
          
          return (
        
          hab.amount === "Time" ? (
            <TimeProgressCircle
              key={hab.id}
              icon={hab.icon}
              label={hab.label}
              total={hab.total}
              progress={hab.progress}
              onUpdate={(newprogress)=>updateprogress(hab.id,newprogress)}
            />
          ) : (
            <AmountProgressCircle
              key={hab.id}
              icon={hab.icon}
              label={hab.label}
              goal={hab.total}
              progress={hab.progress}
              onUpdate={(newprogress)=>updateprogress(hab.id,newprogress)}
            />
          )
)})}
      </div>

      <div className="flex flex-row space-x-8 ">
        <div className="flex flex-col space-y-6">
          <button
            onClick={removeAll}
            className="border-8 border-gray-400 rounded-full p-9"
          >
            <Trash2 />
          </button>
          <span className="text-blue-500 font-bold text-center">
            Remove all
          </span>
        </div>

        <Link href="/Habits">
          <div className="flex flex-col space-y-6">
            <button className="border-8 border-gray-400 rounded-full p-9">
              <Plus />
            </button>
            <span className="text-blue-500 font-bold text-center">
              Add Task
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
