"use client";
import { useState,useEffect } from "react";
import { CircleCheckBig } from "lucide-react";



import {
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
} from "lucide-react";




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




export default function AmountProgressCircle({ label, goal, icon,progress,onUpdate }) {
  const IconComponent = IconMap[icon];
  const [done, setDone] = useState(progress);

  const [run, setrun] = useState(false); 

  const percent = (done / goal) * 100;
  const result = (done / goal * 100).toFixed(0);

  // useEffect(() => {
  //   if (run && done >= 0) {
  //     onUpdate(goal - done); 
  //   }
  // }, [run]); 

  useEffect(()=>{
    setDone(progress)
  },[progress])

//   useEffect(() => {
//   setrun(goal - progress);
// }, [progress, goal]);


  function increment(){
    const newVal=Math.min(goal,done+1);
    setDone(newVal);
    onUpdate(newVal);
  }
  return (
    <div className="text-center">
      <svg width="120" height="120" onClick={increment}>
        <circle cx="60" cy="60" r="50" stroke="gray" strokeWidth="8" fill="none" />

        <circle
          cx="60" cy="60" r="50"
          stroke="green"
          fill="none"
          strokeWidth="8"
          strokeDasharray={314}
          strokeDashoffset={314 - (314 * percent) / 100}
          transform="rotate(-90 60 60)"
          onClick={(e) => {
            e.stopPropagation();
            setrun(r => !r); 
          }}
        />
      </svg>

      <IconComponent onClick={increment} className="absolute h-13 w-13 -mt-22 ml-8" />

      <span
        className={`absolute -mt-30 -ml-4 p-0.5 text-white rounded-lg ${
          done === goal ? "bg-green-600" : "bg-yellow-600"
        }`}
      >
        {done === goal ? (
          <CircleCheckBig className="w-7 h-7 p-1 text-white" />
        ) : (
          done
        )}
      </span>

      <p className="absolute -mt-6 bg-black p-0.5 z-10 text-white rounded-lg text-sm ml-15">
        {`${result}%`}
      </p>

      <p>{label}</p>
      <p>{done}/{goal}</p>
    </div>
  );
}
