import React from 'react';
import { MdShoppingBag } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { data } from '@/data/data';

const orders = () => {
  return (
    <div className="bg-gray-100 max-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Orders</h2>
        <h2>Welcome Back, Bryan</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 rounded-lg border bg-white overflow-y-auto ">
          <div className="my-2 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between font-bold ">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid ">Last orders</span>
            <span className="hidden sm:grid "> Method </span>
          </div>
          <ul>
            {data.map((item, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between"
              >
                <div className="flex">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <MdShoppingBag className="text-indigo-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      £{item.total.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-800">
                      {item.name.firstname}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      item.status == 'Shipped'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : item.status == 'Delivered'
                        ? 'bg-blue-200 p-2 rounded-lg'
                        : item.status == 'On Hold'
                        ? 'bg-yellow-100 p-2 rounded-lg'
                        : 'bg-red-200 p-2 rounded-lg'
                    }
                  >
                    {item.status}
                  </span>
                </p>
                <p className="hidden md:flex">{item.date}</p>
                <div className="sm:flex hidden items-center justify-between">
                  <p>{item.method}</p>
                  <HiDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
