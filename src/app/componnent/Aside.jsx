import Link from 'next/link';
import { AiOutlineFileDone, AiOutlineHome, AiOutlineLogout, AiOutlineMessage, AiOutlineSetting, AiOutlineTeam } from 'react-icons/ai';
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { PiPottedPlant, PiUsersThreeBold } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TbFileInvoice } from "react-icons/tb";

export default function Aside({ isshow }) {
    return (
        <aside className={`primaryBg h-full top-0 ${isshow && "block w-2/4 absolute"}`}>
            <div className='flex justify-center items-center'>
                <h3 className='text-2xl font-bold text-gray-800 my-4 lg:text-3xl'>Logo</h3>
            </div>

            <nav className='my-4 overflow-y-scroll h-screen pl-4'>
                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <AiOutlineHome className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className={`text-lg font-semibold text-emerald-600  sm:hidden lg:block`}>Deshboard</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <BiPhoneCall className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Reservations</span>
                </Link>



                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <MdOutlineTipsAndUpdates className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Trips</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <TbFileInvoice className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Invoices</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <PiPottedPlant className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Planes</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <RiContactsLine className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Contacts</span>
                </Link>



                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <AiOutlineTeam className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Team</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0    my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <PiUsersThreeBold className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Crew Members</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <AiOutlineFileDone className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Files</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <AiOutlineMessage className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Messages</span>
                </Link>

                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <SlCalender className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Calender</span>
                </Link>

                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <AiOutlineSetting className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Setting</span>
                </Link>


                <Link className='flex gap-2 items-center ml-0 my-2 py-2 pl-3 rounded-l-3xl lg:ml-6 hover:bg-teal-200' href='/'>
                    <AiOutlineLogout className='text-3xl lg:text-2xl text-emerald-600' />
                    <span className='text-lg font-semibold text-emerald-600 sm:hidden lg:block'>Logout</span>
                </Link>

            </nav>
        </aside>
    )
}
