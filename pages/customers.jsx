import React from 'react';
import { MdPerson3 } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { data } from '@/data/data';
const customers = () => {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4 ">
        <h2>Customers</h2>
        <h2>Welcome Back, Bryan</h2>
      </div>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto ">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between items-center cursor-pointer font-bold">
            <span>Name</span>
            <span className="sm:text-left text-right ">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((item, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3  p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer items-center "
              >
                <div className="flex items-center ">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <MdPerson3 className="text-indigo-900" />
                  </div>
                  <p className="ml-4">
                    {item.name.firstname + ' ' + item.name.lastname}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {item.name.firstname}@outlook.com
                </p>
                <p className="md:flex hidden">{item.date}</p>
                <div className="sm:flex hidden items-center justify-between ">
                  <p> {item.method}</p>
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

export default customers;
