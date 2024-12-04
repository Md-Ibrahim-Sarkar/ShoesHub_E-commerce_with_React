import img from '../../assets/Images/banner.png'
import Products from './Products'

function Banner() {
    return (
        <div >
            <div className="relative">
                <img src={img} alt="Close-up of red sports shoes" className="w-full max-h-[500px] object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center flex-col items-center text-white">
                    <h1 className="text-4xl font-bold">Super Flash Sale</h1>
                    <p className="text-2xl">50% Off</p>
                </div>
            </div>
            <div className="container mx-auto mt-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 place-content-center absolute -top-20 inset-x-0">
                    <Products />
                    <Products />
                    <Products />
                </div>
            </div>
           
        </div>
    )
}

export default Banner