"use client"
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function Header({ isshow, setisshow }) {

  return (
    <header className=" w-full headBg h-16 sticky top-0 flex justify-between items-center px-4">
      <div className="w-full sm:hidden">
        {
          isshow ? <RxCross2 onClick={() => setisshow(!isshow)} className="text-4xl text-gray-700 cursor-pointer" /> : <FaBars onClick={() => setisshow(!isshow)} className="text-2xl text-gray-700 cursor-pointer" />
        }
      </div>
      <div className='w-full relative'>
        <input className='w-4/4 p-1 pl-8 rounded-2xl border border-gray-200 bg-gray-50 relative placeholder:text-gray-400' type='search' placeholder='Search' />
        <AiOutlineSearch className='absolute font-semibold text-2xl text-gray-400 top-2 left-2' />
      </div>
      <div className='w-full flex gap-3 items-center justify-end'>
        <BiMessageRoundedDetail className=' cursor-pointer text-3xl text-gray-500' />
        <IoIosNotificationsOutline className='cursor-pointer text-3xl text-gray-500' />
        <AiOutlineUser className='text-3xl text-gray-500 primaryBg rounded-full p-1 h-10 w-10 cursor-pointer' />
      </div>
    </header>
  )
}
