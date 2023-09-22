import { AiOutlineCloudUpload } from "react-icons/ai";

export default function InvoiceAddTop() {
    return (
        <div className='headBg rounded-md mt-6 py-5 px-5'>
            <div className='grid grid-cols-6 gap-5'>
                <div className='col-span-5'>
                    <div className='flex gap-5'>
                        <div className="w-full">
                            <h3 className="text-gray-600 text-md font-bold">Select</h3>
                            <select className='border border-gray-300 text-gray-400 rounded-lg w-full mt-2 focus:outline-none' name="" id="">
                                <option className='text-gray-700' value="">Select Client</option>
                                <option className='text-gray-700' value="">Select Client</option>
                                <option className='text-gray-700' value="">Select Client</option>
                                <option className='text-gray-700' value="">Select Client</option>
                                <option className='text-gray-700' value="">Select Client</option>
                                <option className='text-gray-700' value="">Select Client</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <h3 className="text-gray-600 text-md font-bold">Invoice Date</h3>
                            <input className='w-full mt-2 border border-gray-300 rounded-lg text-gray-400' type="date" />
                        </div>
                    </div>
                    <div className="w-1/4 mt-5">
                        <h3 className="text-gray-600 text-md font-bold">Trip</h3>
                        <select className='border border-gray-300 text-gray-400 rounded-lg w-full mt-2' name="" id="">
                            <option className='text-gray-700' value="">selete one</option>
                            <option className='text-gray-700' value="">selete one</option>
                            <option className='text-gray-700' value="">selete one</option>
                            <option className='text-gray-700' value="">selete one</option>
                            <option className='text-gray-700' value="">selete one</option>
                        </select>
                    </div>
                </div>

                <input type="file" id='input' className='hidden' />
                <div for="input" className='col-span-1 rounded-md border border-green-200 text-green-200 items-center flex justify-center gap-2 p-2 cursor-pointer'>
                    <AiOutlineCloudUpload className='text-4xl' />
                    <span>Upload Plane Photo</span>
                </div>
            </div>
        </div>
    )
}
