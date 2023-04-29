import React from 'react';

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-3">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-lg font-bold ">£59,830 </p>
          <p className="text-gray-600 ">Daily Revenue</p>
        </div>
        <p className="bg-green-100 flex justify-center rounded-lg items-center p-2">
          <span className="text-green-800 ">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-lg font-bold ">£1,559,830 </p>
          <p className="text-gray-600 ">YTD Revenue</p>
        </div>
        <p className="bg-green-100 flex justify-center rounded-lg items-center p-2">
          <span className="text-green-800 ">+8%</span>
        </p>
      </div>
      {/* The last Div is different on a large screen so as to fit into one line  */}
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-lg font-bold ">20,830 </p>
          <p className="text-gray-600 ">Customers</p>
        </div>
        <p className="bg-green-100 flex justify-center rounded-lg items-center p-2">
          <span className="text-green-800 text-sm ">+14%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
