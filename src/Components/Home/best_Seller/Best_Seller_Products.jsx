import React from 'react'
import { FaStar, FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

function Best_Seller_Products() {
    return (
        <div>
            <div className='rounded bg-slate-400'>
                <div className="relative group">
                    {/* Product Image */}
                    <img
                        alt="Nike Air Max 270 React"
                        className="object-cover w-full h-36"
                        height="200"
                        src="https://storage.googleapis.com/a1aa/image/ie96cWMK9Ty3NKBBtPxudiQnKUkIVPiVDgtipz6c80t4Uy7JA.jpg"
                        width="300"
                    />

                    {/* Hot Badge */}
                    <span className="absolute top-0 left-0 z-30 px-2 py-1 text-xs font-bold text-white bg-red-500">
                        HOT
                    </span>

                    {/* Hover Overlay and Icons */}
                    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full duration-300 bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50">
                        <div className="flex items-center justify-center w-11/12 h-5/6 gap-4 bg-[rgba(242,242,242,0.49)]" >
                            {/* Favorite Icon */}
                            <div className="p-2 transition bg-white rounded-full cursor-pointer hover:bg-gray-200">
                                <MdFavorite className="text-xl text-black" />
                            </div>
                            {/* Add to Cart Icon */}
                            <div className="p-2 transition bg-white rounded-full cursor-pointer hover:bg-gray-200">
                                <FaCartPlus className="text-xl text-black" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-5 m-1 bg-white '>
                    <h2 className="text-lg font-bold text-center text-black ">
                        Nike Air Max 270 React
                    </h2>
                    <div className="relative bg-white ">

                        <div className="flex items-center justify-center mb-2">
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-amber-500' />
                            <FaStar className='text-gray-600' />

                        </div>
                        <div className="flex items-center justify-center ">
                            <span className="mr-2 text-lg font-bold text-blue-500">
                                $299,43
                            </span>
                            <span className="mr-2 text-gray-500 line-through">
                                $534,33
                            </span>
                            <span className="text-sm text-red-500">
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