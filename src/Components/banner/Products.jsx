
import Product_img from '../../assets/Images/first-img-1.png'
function Products() {
    return (
        <div className="bg-white relative  hover:scale-105 hover:-translate-y-3 hover:duration-300 cursor-pointer">
            <img src={Product_img} alt="Black quilted maxi cross bag" className=" w-full object-cover" />
            <h2 className="text-[20px] absolute text-black top-10 hover:z-10 left-10 font-semibold">FS - QUILTED MAXI CROSS BAG</h2>
            <div className="flex absolute bottom-14 left-10 hover:z-10  justify-between items-center text-[18px] mt-4">
                <span className="text-gray-500   line-through">$534.33</span>
                <span className="text-red-500">24% Off</span>
            </div>
            <div className=" absolute bottom-7 right-3 text-[30px] text-main-color hover:z-10  font-bold mt-2">$299.43</div>
            <div className="absolute top-0 hover:z-0 left-0 w-full h-full hover:bg-black hover:opacity-50 duration-300"></div>
        </div>
    )
}

export default Products