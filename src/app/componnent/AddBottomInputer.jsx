import { AiFillDelete } from "react-icons/ai";


export default function AddBottomInputer({ deleteFunction, index }) {


    return (
        <div className="grid grid-cols-12 gap-3 justify-between pb-8">
            <div className="col-span-2">
                <select className='border border-gray-300 text-gray-400 rounded-lg w-full focus:outline-none' name="" id="">
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                </select>
            </div>
            <div className="col-span-3">
                <select className='border border-gray-300 text-gray-400 rounded-lg w-full focus:outline-none' name="" id="">
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                    <option className='text-gray-700' value="">Select Client</option>
                </select>
            </div>
            <div className="col-span-4">
                <input className='w-full border border-gray-300 rounded-lg text-gray-400' type="text" />
            </div>
            <div className="col-span-3">
                <div className="flex gap-3 items-center">
                    <input className='w-full border border-gray-300 rounded-lg text-gray-400' type="text" />
                    <button onClick={() => deleteFunction(index)} className='bg-red-200 h-10 w-10 rounded-md flex items-center justify-center cursor-pointer'>
                        <AiFillDelete className="text-red-400 text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}
