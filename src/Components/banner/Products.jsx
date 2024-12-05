
import Product_img from '../../assets/Images/first-img-1.png'
function Products() {
    return (
        <div >
            <div className="relative max-w-full bg-white cursor-pointer hover:scale-105 hover:-translate-y-3 hover:duration-300">
                <img alt="Black quilted maxi cross bag" className="object-cover w-full h-72" height="354" src={Product_img} />
                <h2 className="text-[20px] absolute text-black top-6 left-5 font-semibold">
                    FS - QUILTED MAXI CROSS BAG
                </h2>
                <div className="flex absolute bottom-7 left-7 justify-between items-center text-[18px]">
                    <span className="text-gray-500 line-through">
                        $534.33
                    </span>
                    <span className="mt-2 ml-1 text-sm text-red-500">
                        24% Off
                    </span>
                </div>
                <div className="absolute bottom-3 right-3 text-[30px] text-main-color font-bold mt-2">
                    $299.43
                </div>
                <div className="absolute top-0 left-0 w-full h-full duration-300 hover:bg-black hover:opacity-50">
                </div>
            </div>
            
        </div>

    )
}

export default Products