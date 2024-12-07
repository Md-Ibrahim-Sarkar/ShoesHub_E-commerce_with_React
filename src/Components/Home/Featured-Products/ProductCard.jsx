import React from 'react'
import { IoIosStar } from "react-icons/io";
import img from '../../../assets/Images/shoes for featured product.png'

function ProductCard({ product }) {
    return (
        <div className="flex items-center justify-center gap-3 p-4">
            <img src={img} alt={product.altText} className="object-cover w-24 h-24 mb-2" />
            <div>
                <h2 className="text-lg font-semibold max-w-40">{product.name}</h2>
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                            <IoIosStar key={i} className={`fas fa-star ${i < product.rating ? '' : 'text-gray-300'}`} />
                        ))}
                    </div>
                </div>
                <div className='flex gap-2'>
                <div className="text-xl font-bold text-red-500">{product.price}</div>
                <div className="text-gray-500 line-through">{product.originalPrice}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard