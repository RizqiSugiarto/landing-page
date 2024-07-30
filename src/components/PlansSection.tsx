import React from "react";

export const PlansSection = () => {
  return (
    <div className="container mx-auto mt-40 px-4">
      <h2 className="text-center text-3xl font-bold">
        Affordable plans for our customers
      </h2>
      <p className="text-center text-gray-500 mt-2">Try free for 30 Days</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="border-2 p-6 rounded-lg text-center w-full max-w-xs lg:w-80">
          <p className="text-lg font-medium text-gray-500">1 Week</p>
          <p className="text-center font-bold text-6xl mt-3">$4</p>
          <p className="text-center font-semibold text-lg mt-8">
            Less than $1 a day
          </p>
          <p className="text-center text-lg text-gray-500 mt-4">
            Billed every week
            <br />
            Cancel anytime
          </p>
          <button className="w-full bg-black text-white text-center font-semibold text-base h-12 rounded-md mt-7">
            Get started now
          </button>
        </div>
        <div className="border-2 p-6 rounded-lg text-center w-full max-w-xs lg:w-80">
          <p className="text-lg font-medium text-gray-500">1 Month</p>
          <p className="text-center font-bold text-6xl mt-3">$19</p>
          <p className="text-center font-semibold text-lg mt-8">
            Less than $5 a week
          </p>
          <p className="text-center text-lg text-gray-500 mt-4">
            Billed every month
            <br />
            Cancel anytime
          </p>
          <button className="w-full bg-red-500 text-white text-center font-semibold text-base h-12 rounded-md mt-7">
            Get started now
          </button>
        </div>
        <div className="border-2 p-6 rounded-lg text-center w-full max-w-xs lg:w-80">
          <p className="text-lg font-medium text-gray-500">1 Year</p>
          <p className="text-center font-bold text-6xl mt-3">$99</p>
          <p className="text-center font-semibold text-lg mt-8">
            Less than $2 a week
          </p>
          <p className="text-center text-lg text-gray-500 mt-4">
            Billed every year
            <br />
            Cancel anytime
          </p>
          <button className="w-full bg-black text-white text-center font-semibold text-base h-12 rounded-md mt-7">
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
};
