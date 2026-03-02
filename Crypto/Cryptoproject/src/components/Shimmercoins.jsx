import React from "react"
export default function Shimmercoins(){

    return(
      
        <>
        <div className="bg-gray-800  mx-[0] my-2 px-5 py-4 gap-3px rounded-lg 
        shadow-md border border-gray-700 flex justify-between items-center animate-pulse">
      <div>
        <div className=" my-2 h-5 w-32 bg-gray-700 rounded-lg" />
        <div className="h-4 w-20 bg-gray-700 rounded-lg" />

      </div>
      
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-950 opacity-35"></span>
  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
       <h1 className=" text-white text-center text-[20px] animate-">Coins are loading...</h1>
      <div className="text-right">
       <div className=" my-2 h-5 w-24 bg-gray-700 rounded-lg" />
       <div className="h-4 w-16 bg-gray-700 rounded-lg" />
      </div>

    </div>
        
        
        </>
    )
}