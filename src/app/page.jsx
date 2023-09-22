import {AiTwotoneEdit,AiFillDelete} from "react-icons/ai";
import Link from 'next/link';


export default function Home() {
  return (
    <main className=''>
      <div className='flex justify-between items-center'>
            <div>
                  <h3 className='text-2xl text-gray-700 font-semibold'>Invoices</h3>
                  <p className='text-gray-500 text-lg font-normal'>Invoices</p>
            </div>
            <Link href='/invoices/add' className='primaryBg py-3 px-2 text-center text-lg font-semibold rounded-lg cursor-pointer'>
                  Add Invoice
            </Link>
      </div>

      <div className='headBg rounded-md mt-6 py-4 px-2'>

            <table className='border border-gray-300 rounded-md w-full text-center'>
                  <thead className='text-lg font-bold text-gray-800 rounded-t-lg'>
                        <tr className='border-b-2 border-hray-400'>
                              <td className='py-4'>Invoice No</td>
                              <td className='py-4'>Trip</td>
                              <td className='py-4'>Inv. Date</td>
                              <td className='py-4'>Inv.Amount</td>
                              <td className='py-4'>Bal. Date</td>
                              <td className='py-4'>Pay. Method</td>
                              <td className='py-4'>Due Date</td>
                              <td className='py-4'>Status</td>
                              <td className='py-4'>Action</td>
                        </tr>
                  </thead>
                  <tbody className='text-gray-500 text-md'>

                        <tr className='border-b-2 border-hray-400'>
                              <td className='py-4'>190213</td>
                              <td className='py-4'>191043</td>
                              <td className='py-4'>23/08/2022</td>
                              <td className='py-4'>13.500.00</td>
                              <td className='py-4'>4.50.00</td>
                              <td className='py-4'>ACH</td>
                              <td className='py-4'>01/31/2023</td>
                              <td className='py-4 '>
                                    <span className='bg-red-200 py-1 px-2 rounded-md'>unpaid</span>
                              </td>
                              <td className='py-4 flex gap-2  items-center'>
                                    <div className='bg-green-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiTwotoneEdit className='text-green-400 text-xl'/>
                                    </div>
                                    <div className='bg-red-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiFillDelete className="text-red-400 text-xl"/>
                                    </div>
                              </td>
                        </tr>
                        


                        <tr className='border-b-2 border-hray-400'>
                              <td className='py-4'>190213</td>
                              <td className='py-4'>191043</td>
                              <td className='py-4'>23/08/2022</td>
                              <td className='py-4'>13.500.00</td>
                              <td className='py-4'>4.50.00</td>
                              <td className='py-4'>ACH</td>
                              <td className='py-4'>01/31/2023</td>
                              <td className='py-4 '>
                                    <span className='bg-red-200 py-1 px-2 rounded-md'>unpaid</span>
                              </td>
                              <td className='py-4 flex gap-2  items-center'>
                                    <div className='bg-green-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiTwotoneEdit className='text-green-400 text-xl'/>
                                    </div>
                                    <div className='bg-red-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiFillDelete className="text-red-400 text-xl"/>
                                    </div>
                              </td>
                        </tr>



                        <tr className='border-b-2 border-hray-400'>
                              <td className='py-4'>190213</td>
                              <td className='py-4'>191043</td>
                              <td className='py-4'>23/08/2022</td>
                              <td className='py-4'>13.500.00</td>
                              <td className='py-4'>4.50.00</td>
                              <td className='py-4'>ACH</td>
                              <td className='py-4'>01/31/2023</td>
                              <td className='py-4 '>
                                    <span className='bg-red-200 py-1 px-2 rounded-md'>unpaid</span>
                              </td>
                              <td className='py-4 flex gap-2  items-center'>
                                    <div className='bg-green-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiTwotoneEdit className='text-green-400 text-xl'/>
                                    </div>
                                    <div className='bg-red-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiFillDelete className="text-red-400 text-xl"/>
                                    </div>
                              </td>
                        </tr>



                        <tr className='border-b-2 border-hray-400'>
                              <td className='py-4'>190213</td>
                              <td className='py-4'>191043</td>
                              <td className='py-4'>23/08/2022</td>
                              <td className='py-4'>13.500.00</td>
                              <td className='py-4'>4.50.00</td>
                              <td className='py-4'>ACH</td>
                              <td className='py-4'>01/31/2023</td>
                              <td className='py-4 '>
                                    <span className='bg-red-200 py-1 px-2 rounded-md'>unpaid</span>
                              </td>
                              <td className='py-4 flex gap-2  items-center'>
                                    <div className='bg-green-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiTwotoneEdit className='text-green-400 text-xl'/>
                                    </div>
                                    <div className='bg-red-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiFillDelete className="text-red-400 text-xl"/>
                                    </div>
                              </td>
                        </tr>



                        <tr className='border-b-2 border-hray-400'>
                              <td className='py-4'>190213</td>
                              <td className='py-4'>191043</td>
                              <td className='py-4'>23/08/2022</td>
                              <td className='py-4'>13.500.00</td>
                              <td className='py-4'>4.50.00</td>
                              <td className='py-4'>ACH</td>
                              <td className='py-4'>01/31/2023</td>
                              <td className='py-4 '>
                                    <span className='bg-red-200 py-1 px-2 rounded-md'>unpaid</span>
                              </td>
                              <td className='py-4 flex gap-2  items-center'>
                                    <div className='bg-green-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiTwotoneEdit className='text-green-400 text-xl'/>
                                    </div>
                                    <div className='bg-red-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiFillDelete className="text-red-400 text-xl"/>
                                    </div>
                              </td>
                        </tr>


                        <tr className='border-b-2 border-hray-400'>
                              <td className='py-4'>190213</td>
                              <td className='py-4'>191043</td>
                              <td className='py-4'>23/08/2022</td>
                              <td className='py-4'>13.500.00</td>
                              <td className='py-4'>4.50.00</td>
                              <td className='py-4'>ACH</td>
                              <td className='py-4'>01/31/2023</td>
                              <td className='py-4 '>
                                    <span className='bg-red-200 py-1 px-2 rounded-md'>unpaid</span>
                              </td>
                              <td className='py-4 flex gap-2  items-center'>
                                    <div className='bg-green-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiTwotoneEdit className='text-green-400 text-xl'/>
                                    </div>
                                    <div className='bg-red-200 h-8 w-8 rounded-md flex items-center justify-center cursor-pointer'>
                                          <AiFillDelete className="text-red-400 text-xl"/>
                                    </div>
                              </td>
                        </tr>



                  </tbody>
            </table>


      </div>



    </main>
  )
}
