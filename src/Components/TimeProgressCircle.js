"use client";
import { useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "lucide-react";
import {
  Clock, List, Utensils, Droplet, Flower,
  PersonStanding, ShirtIcon, BrushCleaningIcon,
  Dumbbell, Book, TabletsIcon, AppleIcon, CarrotIcon
} from "lucide-react";

const IconMap = {
  Clock, List, Utensils, Droplet, Flower,
  PersonStanding, ShirtIcon, BrushCleaningIcon,
  Dumbbell, Book, TabletsIcon, AppleIcon, CarrotIcon
};

export default function TimeProgressCircle({ label, total, icon, progress, onUpdate }) {
  const IconComponent = IconMap[icon];

  const totalSeconds=total*60;

  const [remaining, setRemaining] = useState(totalSeconds-progress);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running && remaining >= 0) {
      onUpdate(totalSeconds - remaining); 
    }
  }, [remaining]); 

  useEffect(() => {
  setRemaining(totalSeconds - progress);
}, [progress, totalSeconds]);

  
  useEffect(() => {
    if (!running || remaining <= 0) return;

    const tick = setInterval(() => {
      setRemaining(r =>{
        const next=r-1;

        

        return next;
      });
    }, 1000);

    return () => clearInterval(tick);
  }, [running]);

  const percent = ((totalSeconds - remaining) / totalSeconds) * 100;

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return (
    <div className="text-center">
      <svg width="120" height="120" onClick={() => setRunning(!running)}>
        <circle cx="60" cy="60" r="50" stroke="gray" strokeWidth="8" fill="none" />
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="green"
          strokeWidth="8"
          fill="none"
          strokeDasharray={314}
          strokeDashoffset={314 - (314 * percent) / 100}
          transform="rotate(-90 60 60)"
        />
      </svg>

      <IconComponent className="absolute h-13 w-13 -mt-22 ml-8" />
      <p>{label}</p>
      <p>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</p>

      <div>
        {running ? (
          <PauseIcon
            onClick={() => setRunning(false)}
            className="absolute -mt-17 w-5 h-5 text-white bg-black rounded-lg p-1 ml-12"
          />
        ) : (
          <PlayIcon
            onClick={() => setRunning(true)}
            className="absolute bg-black rounded-lg p-1 -mt-17 ml-12 w-5 h-5 text-white"
          />
        )}
      </div>
    </div>
  );
}
