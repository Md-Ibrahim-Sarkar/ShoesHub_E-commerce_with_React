import React from 'react'
import Best_Seller_Products from './Best_Seller_Products'

function Best_Seller_Nav() {
    return (
        <div className='xl:mt-[200px] lg:mt-56 md:mt-48  max-[775px]:mt-0'>
            <h1 class="text-3xl font-bold text-center mb-8">
                BEST SELLER
            </h1>
            <div class="flex justify-center min-[400px]:space-x-8 max-[400px]:space-x-4  mb-8">
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
            <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[660px]:px-6">
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            <Best_Seller_Products />
            </div>
        </div>
    )
}

export default Best_Seller_Nav