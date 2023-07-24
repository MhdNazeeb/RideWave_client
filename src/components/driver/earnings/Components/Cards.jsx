import React from "react";

function Cards({monthlyRport}) {

   
  return (
    <div className=" md:w-1/5">
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white p-4 !pt-50 sm:p-6">
         

         
         <h1 className="mt-0.5 text-lg text-center font-medium text-gray-900">
         monthly earnings
         </h1>
         <h1 className="mt-0.5 text-5xl text-center font-medium text-gray-800">
         ₹ {monthlyRport}
         </h1>
     </div>
      </article>
    </div>
  );
}

export default Cards;
