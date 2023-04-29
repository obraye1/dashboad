import Link from 'next/link';
import Image from 'next/image';
import React, { Children } from 'react';
import { SiHomeassistant } from 'react-icons/si';
import { MdOutlineDashboard, MdOutlinePerson, MdOutlineSettings, MdOutlineShoppingBag } from 'react-icons/md'

const SideBar = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen fixed p-4 justify-between border-r-[1px] w-20">
        <div className="flex flex-col items-center">
          <Link href="/" className="bg-blue-800 inline-block rounded-lg text-white p-3 ">
            <SiHomeassistant size={20} />
          </Link>
          <span className="border-b-[1px] w-full border-gray-200 p-2"></span>
          <Link href="/" className="bg-gray-100 hover:bg-gray-200 inline-block rounded-lg cursor-pointer p-3 my-4">
            <MdOutlineDashboard size={20} />
          </Link>
          <Link href="/customers" className="bg-gray-100 hover:bg-gray-200 inline-block rounded-lg cursor-pointer p-3 my-4">
            <MdOutlinePerson size={20} />
          </Link>
          <Link href="/orders" className="bg-gray-100 hover:bg-gray-200 inline-block rounded-lg cursor-pointer p-3 my-4">
            <MdOutlineShoppingBag size={20} />
          </Link>
          <Link href="/" className="bg-gray-100 hover:bg-gray-200 inline-block rounded-lg cursor-pointer p-3 my-4">
            <MdOutlineSettings size={20} />
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default SideBar;
