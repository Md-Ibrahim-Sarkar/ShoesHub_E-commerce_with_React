import React from 'react'
import Best_Seller_Products from './Best_Seller_Products'

function Best_Seller_Nav() {
    return (
        <div className='xl:mt-[420px] lg:mt-72'>
            <h1 class="text-3xl font-bold text-center mb-8">
                BEST SELLER
            </h1>
            <div class="flex justify-center space-x-8 mb-8">
                <a class="text-blue-500 border-b-2 border-blue-500" href="#">
                    All
                </a>
                <a class="" href="#">
                    Bags
                </a>
                <a class="" href="#">
                    Sneakers
                </a>
                <a class="" href="#">
                    Belt
                </a>
                <a class="" href="#">
                    Sunglasses
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto">
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            </div>
        </div>
    )
}

export default Best_Seller_Nav