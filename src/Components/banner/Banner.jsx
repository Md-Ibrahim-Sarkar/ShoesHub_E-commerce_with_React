import img from '../../assets/Images/banner.png'
import Products from './Products'

function Banner() {
    return (
        <div >
            <div className="relative">
                <img src={img} alt="Close-up of red sports shoes" className="w-full max-h-[500px] object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white">
                    <h1 className="text-4xl font-bold">Super Flash Sale</h1>
                    <p className="text-2xl">50% Off</p>
                </div>
            </div>
            <div className="container relative mx-auto mt-8">
                <div className='flex justify-center'>
                <div className="absolute inset-x-0 grid grid-cols-1 px-4 md:grid-cols-3 sm:grid-cols-2 max-[771px]:hidden -top-32">
                    <Products />
                    <Products />
                    <Products />
                </div>
                </div>
            </div>
           
        </div>
    )
}

export default Banner