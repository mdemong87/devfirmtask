'use client'

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddBottomInputer from "../componnent/AddBottomInputer";

export default function InvoiceAddTop() {

    const [indexer, setindexer] = useState(1);
    var item = [];


    //handle adding new invoice item list here
    function handleAdd() {
        setindexer((prev) => prev + 1)
    }

    //handle deleting the invoice item from the list
    function handleDelete(position) {
        const data = item.filter((item, index) => {
            return index != position;
        })
    }


    for (var i = 0; i < indexer; i++) {
        item.push(<AddBottomInputer index={i} deleteFunction={handleDelete} />)
    }

    return (
        <div className='headBg rounded-md mt-8 py-5 px-5'>

            <div className="grid grid-cols-12 gap-3 justify-between pb-5 pt-1">
                <div className="col-span-2 text-gray-600 text-md font-bold">Type</div>
                <div className="col-span-3 text-gray-600 text-md font-bold">Products</div>
                <div className="col-span-4 text-gray-600 text-md font-bold">Discription</div>
                <div className="col-span-3 text-gray-600 text-md font-bold">Total</div>
            </div>

            {item}

            <div>
                <div className="border-y-2 py-5 border-gray-100 flex justify-between items-start">
                    <div onClick={() => handleAdd()} className="flex items-center gap-1 text-teal-600 font-bold rounded-full cursor-pointer py-2 px-3 border border-teal-400 ">
                        <AiOutlinePlus className="text-lg" />
                        <span>Add Product</span>
                    </div>
                    <div className=" text-right">
                        <div className="mb-3">
                            <b className="text-lg text-gray-600">Subtotal :</b> <span className="text-gray-500 font-medium">34000.00</span>
                        </div>
                        <div>
                            <b className="text-lg text-gray-600">TVA :</b> <span className="text-gray-500 font-medium" >34000.00</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center gap-5">
                        <button className="primaryBg rounded-full py-2 px-4 text-gray-700">Save</button>
                        <button className=" border border-teal-400 rounded-full py-2 px-4 text-gray-700">Cancle</button>
                        <button className="primaryBg rounded-full py-2 px-4 text-gray-700">Download</button>
                    </div>
                    <div>
                        <b className="text-lg text-teal-500">Total :</b> <span className="text-gray-500 font-medium">34000.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
