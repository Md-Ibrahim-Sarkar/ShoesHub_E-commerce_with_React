import adidos from '../../../assets/Images/adidos.png'

function Adidos_Banner() {
    return (
        <div className="flex items-center justify-center mt-10 bg-main-color">
            <div className="container relative flex flex-col items-center justify-between w-full px-4 mx-auto rounded-lg md:flex-row">
                <div className="pt-5 text-white">
                    <h1 className="mb-4 text-4xl font-bold max-lg:text-3xl">Adidas Men Running Sneakers</h1>
                    <p className="mb-4 text-lg">Performance and design. Taken right to the edge.</p>
                    <a href="#" className="inline-block px-4 py-2 font-semibold text-blue-500 bg-white rounded hover:bg-gray-200">SHOP NOW</a>
                </div>
                <div>
                    <img src={adidos} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Adidos_Banner