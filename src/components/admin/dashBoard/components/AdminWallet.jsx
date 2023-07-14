import React from "react";

function AdminWallet({ adminwallet }) {
  return (
    <div className="md:w-56 h-40 w-1/2">
      <article className="    hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 !pt-50 sm:p-6">
          <h1 className="mt-0.5 text-lg text-center font-medium text-gray-900">
            WALLET
          </h1>
          <h1 className="mt-0.5 text-5xl text-center font-medium text-gray-800">
            ₹ {adminwallet}
          </h1>

          <div className="mt-4 flex flex-wrap gap-1"></div>
        </div>
      </article>
    </div>
  );
}

export default AdminWallet;
