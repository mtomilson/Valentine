import React from "react";
import { useState, useEffect } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

export default function Reasons({onLimit}) {
    
     const reasons: Record<number, string> = {
        1: "I love you because of how smart, kind, and strong you are",
        2: "I love how weird and childish we can be with each other",
        3: "I love how much you support me and believe in me even when I don't believe in myself",
        4: "I love how much you make me smile and laugh",
        5: "I love how much you care about me and always make sure that I'm okay",
        6: "I love how understanding and forgiving you are even when it's hard",
        7: "I love eating as much food as we can when we're together",
        8: "I love how you never judge me no matter what I do",
        9: "I love you because you make me feel like I can be myself around you and never have to pretend when I'm with you",
        10: "I love you because you make simple things feel magical when it's with you",
      };

     
      const images = import.meta.glob("../assets/*.{jpg,jpeg,png}", {
        eager: true,
        import: "default",
      })
    
      const imageList = Object.values(images);
      console.log(images)
      const [current, setCurrent] = useState(1);
       useEffect(() => {
        if(current > 10) {
            onLimit();
        }
      }, [current])
    


      
  return (
    <div>
       <div className="flex justify-center mt-20 ">
        <h1 className="text-4xl font-['Pacifico']">
          10 Reasons Why I love You
        </h1>
      </div>
      <div className="flex justify-center mt-5 ">
        <img 
            src={imageList[current - 1]}
            className="w-80 h-80 object-cover"
        />
      </div>
      <div className="flex justify-center mt-5 ">
        <h1 className="text-xl font-semibold">
          {current}: {reasons[current]}
        </h1>
      </div>
      <div className="flex justify-center mt-3">
        <div className="">
          <button disabled={current === 1} className="hover:cursor-pointer" onClick={() => setCurrent(current - 1)}>
            <HiArrowSmLeft className="size-12"/>
          </button>
          <button className="hover:cursor-pointer" onClick={() => {setCurrent(current + 1)}}>
            <HiArrowSmRight className="size-12" />
          </button>
        </div>
      </div>
    </div>
  )
}
