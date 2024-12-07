import React from 'react'
import ProductCard from './ProductCard';

function FeaturedItemList() {
    const products = [
        {
            name: "Blue Swade Nike Sneakers",
            price: "$499",
            originalPrice: "$599",
            rating: 4.5,
            altText: "Blue Swade Nike Sneakers"
        },
        {
            name: "Blue Swade Nike Sneakers",
            price: "$499",
            originalPrice: "$599",
            rating: 4.5,
            altText: "Blue Swade Nike Sneakers"
        },
        {
            name: "Blue Swade Nike Sneakers",
            price: "$499",
            originalPrice: "$599",
            rating: 4.5,
            altText: "Blue Swade Nike Sneakers"
        }
    ];

    return (
        <section className="container p-4 mx-auto">
            <h1 className="mb-8 text-2xl font-bold text-center">FEATURED PRODUCTS</h1>
            <div className="flex flex-col justify-between space-x-4 md:flex-row">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedItemList