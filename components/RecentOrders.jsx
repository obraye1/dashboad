import React from 'react';
import { data } from '../data/data.js';
import { MdOutlineShoppingBag } from 'react-icons/md';
const RecentOrders = () => {
  return (
    <div className="overflow-scroll w-full m-auto p-4 lg-[70vh] h-[50vh] border relative bg-white col-span-1">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((item, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-indigo-100 rounded-lg p-3"><MdOutlineShoppingBag className="text-indigo-900 "/></div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${item.total}</p>
              <p className="text-gray-400 text-sm">{item.name.firstname}</p>
            </div>
            <p className="md:hidden lg:flex absolute right-6 text-sm">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
