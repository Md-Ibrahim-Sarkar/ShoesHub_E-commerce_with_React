import React from 'react'
import { FaStar } from "react-icons/fa";

function Best_Seller_Products() {
    return (
        <div>
            <div className='bg-slate-400 rounded'>
                <div className='relative '>
                    <img alt="Nike Air Max 270 React" className="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/ie96cWMK9Ty3NKBBtPxudiQnKUkIVPiVDgtipz6c80t4Uy7JA.jpg" width="300" />
                    <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 ">
                        HOT
                    </span>
                </div>
                <div className=' bg-white py-5 m-1 '>
                    <h2 className="text-lg text-center text-black font-bold ">
                        Nike Air Max 270 React
                    </h2>
                    <div className="relative bg-white  ">

                        <div className="flex items-center justify-center mb-2">
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-gray-600' />

                        </div>
                        <div className="flex items-center justify-center ">
                            <span className="text-blue-500 text-lg font-bold mr-2">
                                $299,43
                            </span>
                            <span className="text-gray-500 line-through mr-2">
                                $534,33
                            </span>
                            <span className="text-red-500 text-sm">
                                24% Off
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Best_Seller_Products